var w = $(window).width();
var h = $(window).height();

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
	frame.populate(curr_value);
}

var markers = [];

function updateMarkers () {
	maxActive = 50;
	currActive = 0;
	markers.forEach(function (d, i) {
		var activate = true;

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

const data = d3.csv("./athleteInformation.csv");
data.then(function (data) {

	data.forEach(function (d, i) {
		var longitude = parseFloat(d.longitude) + Math.random()*2;
		var latitude = parseFloat(d.latitude) + Math.random()*2;
		var img = "<img src='../../img/Olympic_flag.svg' />";

		popup = document.createElement("iframe");
		popup.style.overflow = "hidden";
		popup.name = d.slug_game + d.event + d.medal_type;
		popup.src = "assets/html/popup.html";
		popup.width = w * 0.4;
		popup.height = h * 0.4;
		popup.id = d.slug_game + d.event + d.medal_type;

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
		}).bindPopup(popup, {
			maxWidth: "auto"
		});

		markers.push({
			'data': d,
			'marker': marker,
			'active': false
		});
	});
	updateMarkers();
});

var sidebar = L.control.sidebar('sidebar');
athleteMap.addControl(sidebar);
athleteMap.on("zoomstart", function () {
	updateMarkers();
});
athleteMap.on("moveend", function () {
	updateMarkers();
});

