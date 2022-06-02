var w = $(window).width();
var h = $(window).height();

var img_w = $(window).width() / 8.0;
var img_h = $(window).height() / 4.0;
var radius = 14;

var athleteMap = L.map('map-holder', {
	zoom: 2,
	maxZoom: 19,
	scrollWheelZoom: true,
	zoomControl: false,
	noWrap: true,
	zoomAnimation: true,
	markerZoomAnimation: true,
	maxBoundsViscosity: 0.8,
	maxBounds: [
		[89.9, 220.9],
		[-89.9, -220.9]
	]
}).setView([0, 0]);


L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19,
	bounds: [
		[89.9, 220.9],
		[-89.9, -220.9]
	]

}).addTo(athleteMap);

athleteMap.setMinZoom(athleteMap.getBoundsZoom([[50.9, 160.9], [-50.9, -160.9]]));

var curr_value = null;
var curr_marker = null;

$(window).resize(function () {
	if (curr_value) {
		var frame = document.getElementById(curr_value.id);
		var wn = $(window).width();
		var hn = $(window).height();
		frame.width = wn * 0.6;
		frame.height = hn * 0.6;
	}
});

athleteMap.on('popupopen', function (e) {
	sidebar.close();
	curr_marker = e.target._popup._source;
	var px = athleteMap.project(e.target._popup._latlng);
	px.y -= e.target._popup._container.clientHeight / 3;
	athleteMap.panTo(athleteMap.unproject(px), { animate: true });
	athleteMap.setView(athleteMap.unproject(px), athleteMap.getZoom() + 1);

	curr_value = e.target._popup._source.options.data_object;
});

function setUpFrame () {
	var frame = window.frames['frame-' + curr_value.id];
	console.log(curr_value.id)
	frame.populate(curr_value);
}

var myStyle = {
	"weight": 1,
	"opacity": 0.65
};

var markers = [];

function updateMarkers (disciplineConstrain, gameyearFrom, gameyearTo) {
	maxActive = 50;
	currActive = 0;
	markers.forEach(function (d, i) {
		var activate = true;
		// Discipline filter
		if (disciplineConstrain.length > 0) {
			if (!disciplineConstrain.includes(d.data.discipline)) {
				activate = false;
			}
		}

		//gameyear fromto filter
		if (gameyearFrom != null) {
			if (parseInt(d.data.gameyear) < gameyearFrom) {
				activate = false;
			}
		}

		if (gameyearTo != null) {
			if (parseInt(d.data.gameyear) > gameyearTo) {
				activate = false;
			}
		}

		//Deactivate if not on the visible part of map
		if (!athleteMap.getBounds().contains(d.marker.getLatLng())) {
			activate = false;
		}

		if (activate) {
			currActive = currActive + 1;
			if (currActive > maxActive) {
				activate = false;
			}
		}

		if (!d.active && activate) {
			athleteMap.addLayer(d.marker);
			d.active = true;
		} else if (d.active && !activate && (curr_marker == null || curr_marker.options.data_object.id != d.marker.options.data_object.id)) {
			athleteMap.removeLayer(d.marker);
			d.active = false;
		}
	});
}

var minimumYear = 1890;
var maximumYear = new Date().getFullYear() //Use the current year, but check in dataset anyway in case of browser issues
var slider = null;

const data = d3.csv("./athleteFullInformation.csv");
data.then(function (data) {

	var discipline = [];

	data.forEach(function (d, i) {
		var longitude = parseFloat(d.longitude) + Math.random()*2;
		var latitude = parseFloat(d.latitude) + Math.random()*2;
		if (d.pic.search("wiki") != -1) {
			var imgurl = d.pic;

		} else {
			var imgurl = 'https://flyclipart.com/thumb2/logo-olympics-icon-97336.png';
		}
		var img = "<img src=" + imgurl + " loading='lazy' />";

		popupContent = document.createElement("iframe");
		popupContent.style.overflow = "hidden";
		popupContent.name = 'frame-' + d.id;
		popupContent.src = "assets/html/popup.html";
		popupContent.width = w * 0.4;
		popupContent.height = h * 0.4;
		popupContent.id = d.id;
		console.log(popupContent.name)
		console.log(popupContent.id)

		class_img = 'image-icon_d';

		var marker = L.marker(L.latLng(latitude, longitude), {
			icon: L.divIcon({
				html: img,
				className: class_img,
				iconSize: [5, 5],
				iconAnchor: [30, 30],
			}),
			title: d.athlete_name,
			data_object: d,
		}).bindPopup(popupContent, {
			maxWidth: "auto"
		});

		markers.push({
			'data': d,
			'marker': marker,
			'active': false
		});
		minimumYear = Math.min(minimumYear, parseInt(d.gameyear));
		maximumYear = Math.max(maximumYear, parseInt(d.gameyear));
		discipline.push(d.discipline);
	});

	var disciplineUnique = discipline.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});
	var disciplineReady = disciplineUnique.map(function (value, index, self) {
		return { id: index, text: value };
	});

	$('#discipline-selector').select2({
		placeholder: 'Select an option',
		width: 'resolve',
		data: disciplineReady,
		dropdownParent: $(".sidebar-content")
	});

	updateMarkers([], minimumYear, maximumYear);

	slider = document.getElementById('Timespan-slider');
	noUiSlider.create(slider, {
		start: [minimumYear, maximumYear],
		connect: true,
		range: {
			'min': minimumYear,
			'max': maximumYear
		},
		format: wNumb({
			decimals: 0
		})
	});

	slider.noUiSlider.on('update', function (values, handle) {
		if (handle) {
			toValue.value = values[handle];
		} else {
			fromValue.value = values[handle];
		}

		var selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
		updateMarkers(selected, fromValue.value, toValue.value);
	});
});

var sidebar = L.control.sidebar('sidebar');
athleteMap.addControl(sidebar);
var zoomControl = L.control.zoom({ position: 'topright' }).addTo(athleteMap);

var fromValue = document.getElementById('from');
var toValue = document.getElementById('to');

athleteMap.on("zoomstart", function () {
	let selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
	updateMarkers(selected, fromValue.value, toValue.value);
});
athleteMap.on("moveend", function () {
	let selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
	updateMarkers(selected, fromValue.value, toValue.value);
});

var fastForwarder = null;
var fastForwarderDiff = 0;
var velocity = 1;
document.getElementById("Timespan-play").addEventListener("click", function () {
	if (fastForwarder == null) {
		fastForwarderDiff = parseInt(toValue.value) - parseInt(fromValue.value);
		$("#play-icon").removeClass("fa-play").addClass("fa-pause")
		fastForwarder = setInterval(function () {
			toValue.value = Math.min(maximumYear, parseInt(toValue.value) + velocity);
			fromValue.value = toValue.value - fastForwarderDiff;
			var selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
			slider.noUiSlider.setHandle(0, fromValue.value);
			slider.noUiSlider.setHandle(1, toValue.value);
			updateMarkers(selected, fromValue.value, toValue.value);
			if(toValue.value == maximumYear) {
				clearInterval(fastForwarder);
				$("#play-icon").removeClass("fa-pause").addClass("fa-play")
				fastForwarder = null;
			}
		}, 100);
	} else {
		clearInterval(fastForwarder);
		$("#play-icon").removeClass("fa-pause").addClass("fa-play")
		fastForwarder = null;
	}
});

document.getElementById("Timespan-backward").addEventListener("click", function () {
	velocity = Math.max(1, velocity/2)
	document.getElementById("vel").innerHTML = "x " + velocity
})

document.getElementById("Timespan-forward").addEventListener("click", function () {
	velocity = Math.min(8192, velocity*2)
	document.getElementById("vel").innerHTML = "x " + velocity
})


fromValue.addEventListener('change', function (event) {
	slider.noUiSlider.setHandle(0, event.target.value);

	var selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
	updateMarkers(selected, fromValue.value, toValue.value);
});

toValue.addEventListener('change', function (event) {
	slider.noUiSlider.setHandle(1, event.target.value);
	var selected = $('#discipline-selector').find(':selected').toArray().map(option => option.text);
	updateMarkers(selected, fromValue.value, toValue.value);
});

