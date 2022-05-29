var arr = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Buruni","Cote d'lvoire","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rita","Croatia","Cubas","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","EI Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Moroco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine State","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
var search = document.getElementsByClassName("blue-input")[0];
var selectedId = document.getElementById("selectedId")

function showList(){
    var res = searchByIndexOf(search.value,arr);
    for(var i=0;i<res.length;i++){
        var li = document.createElement("li");
        li.innerHTML = res[i];
        document.getElementById("drop").appendChild(li);
    }
}

search.oninput = function getMoreContents() {

    //删除ul
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
    //把ul添加回来
    var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);

    showList();
}

// 添加获取焦点事件
search.onfocus = function(){
    // 初始下拉列表
    var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);
    showList();
}

//添加失去焦点事件
search.onblur = function(){
//	console.log("soutsout")
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
}



//模糊查询:利用字符串的indexOf方法
function searchByIndexOf(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    if(keyWord == ""){
        return [];
    }else{
        var len = list.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].indexOf(keyWord)>=0){
                arr.push(list[i]);
            }
        }
        return arr;
    }

}
/*
const goldData=[];
const uploadconfirm = document.getElementById('uploadconfirm').addEventListener('click',()=>{
    Papa.parse(document.getElementById('uploadfile').files[0],{
        download:true,
        header:true,
        skipEmptyLines:true,
        complete:function (results){
            //console.log(results);
            for (i=0; i < results.data.length;i++){
                goldData.push(results.data[i].Gold);
            }
            console.log(goldData);
        }
    });
});
*/
const button = document.querySelector(".btn");
if (button) {
    button.addEventListener('click', f);
}
function f() {
    var countryName = document.getElementById("first").value;

    let myChart3 = document.getElementById('myChart3').getContext('2d');

    let myChart4 = document.getElementById('myChart4').getContext('2d');

    let myChart5 = document.getElementById('myChart5').getContext('2d');

    Chart.defaults.font.family = 'Lato';
    Chart.defaults.font.size = 15;
    let CountryChart5 = null;
    let CountryChart4 = null;
    let CountryChart3 = null;

    if (countryName == 'Australia') {
        medal = [6, 7, 5]
        discipline = [0, 0, 9, 1, 0, 1, 0, 6, 1, 0, 0, 0, 1, 0, 0]
        sex = [10, 8]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }

        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }

        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });

    }
    if (countryName == 'Austria') {
        medal = [79, 91, 86]
        discipline = [4, 6, 1, 0, 24, 6, 37, 11, 132, 25, 0, 9, 1, 0, 0]
        sex = [78, 136]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }

        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }

        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }

        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }

    if (countryName == 'Belgium') {
        medal = [3, 1, 3]
        discipline = [0, 0, 0, 1, 0, 4, 0, 0, 0, 3, 0, 0, 0, 0, 0]
        sex = [1, 4]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Belarus') {
        medal = [7, 7, 5]
        discipline = [10, 0, 8, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        sex = [10, 9]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Bulgaria') {
        medal = [1, 2, 3]
        discipline = [2, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        sex = [5, 1]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Cameroon') {
        medal = [90, 59, 86]
        discipline = [3, 4, 32, 24, 4, 65, 1, 18, 12, 39, 7, 0, 4, 19, 23]
        sex = [110, 90]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Canada') {
        medal = [90, 59, 86]
        discipline = [3, 4, 32, 24, 4, 65, 1, 18, 12, 39, 7, 0, 4, 19, 23]
        sex = [110, 90]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Czech Republic') {
        medal = [9, 10, 10]
        discipline = [6, 8, 1, 0, 0, 8, 0, 4, 2, 0, 0, 0, 0, 0, 0]
        sex = [22, 7]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'China') {
        medal = [54, 68, 50]
        discipline = [0, 0, 38, 72, 0, 90, 0, 6, 0, 32, 0, 0, 2, 0, 0]
        sex = [90, 38]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Short Track Speed Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Croatia') {
        medal = [4, 6, 1]
        discipline = [1, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0]
        sex = [6, 5]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Denmark') {
        medal = [0, 1, 0]
        discipline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
        sex = [1, 0]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Estonia') {
        medal = [4, 2, 2]
        discipline = [0, 7, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
        sex = [4, 4]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Finland') {
        medal = [62, 53, 69]
        discipline = [4, 68, 4, 0, 18, 24, 0, 4, 1, 2, 0, 11, 0, 0, 48]
        sex = [62, 113]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'France') {
        medal = [43, 49, 49]
        discipline = [29, 7, 15, 0, 1, 0, 0, 13, 51, 22, 0, 3, 0, 0, 0]
        sex = [42, 79]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Germany') {
        medal = [225, 222, 175]
        discipline = [64, 21, 2, 0, 29, 102, 163, 7, 54, 52, 0, 34, 6, 88, 0]
        sex = [256, 234]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Hungary') {
        medal = [1, 4, 14]
        discipline = [0, 0, 0, 7, 0, 7, 0, 0, 0, 12, 0, 0, 0, 0, 0]
        sex = [0, 2]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Italy') {
        medal = [43, 46, 56]
        discipline = [4, 27, 0, 16, 0, 22, 25, 6, 36, 3, 2, 1, 1, 16, 0]
        sex = [48, 67]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Japan') {
        medal = [13, 32, 38]
        discipline = [0, 0, 5, 2, 11, 28, 0, 7, 1, 18, 5, 8, 0, 0, 0]
        sex = [30, 39]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Kazakhstan') {
        medal = [1, 3, 4]
        discipline = [1, 4, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
        sex = [3, 5]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Latvia') {
        medal = [0, 4, 11]
        discipline = [0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 2, 4, 0]
        sex = [0, 7]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Liechtenstein') {
        medal = [2, 2, 6]
        discipline = [0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0]
        sex = [6, 4]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Luxembourg') {
        medal = [0, 2, 0]
        discipline = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0]
        sex = [0, 2]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Netherlands') {
        medal = [54, 48, 44]
        discipline = [0, 0, 0, 8, 0, 138, 0, 1, 0, 3, 0, 0, 1, 0, 0]
        sex = [67, 79]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'New Zealand') {
        medal = [2, 2, 2]
        discipline = [0, 0, 2, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0]
        sex = [4, 2]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Norway') {
        medal = [146, 115, 121]
        discipline = [50, 113, 10, 0, 32, 88, 0, 5, 44, 3, 4, 33, 0, 0, 0]
        sex = [67, 286]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Short Track Speed Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Poland') {
        medal = [7, 6, 6]
        discipline = [1, 5, 0, 0, 9, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0]
        sex = [7, 12]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Romania') {
        medal = [0, 0, 2]
        discipline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
        sex = [0, 2]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Russia') {
        medal = [94, 86, 86]
        discipline = [24, 80, 12, 8, 0, 32, 4, 10, 2, 86, 0, 2, 8, 4, 0]
        sex = [84, 118]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'ROC') {
        medal = [17, 46, 23]
        discipline = [13, 19, 3, 2, 4, 6, 1, 1, 0, 14, 0, 0, 0, 0, 25]
        sex = [16, 50]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Soviet Union') {
        medal = [69, 59, 57]
        discipline = [13, 52, 0, 0, 1, 60, 7, 0, 1, 44, 0, 3, 0, 4, 0]
        sex = [62, 81]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Czechoslovakia') {
        medal = [2, 3, 10]
        discipline = [0, 3, 0, 0, 6, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0]
        sex = [5, 10]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Slovakia') {
        medal = [4, 4, 26]
        discipline = [7, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 25]
        sex = [7, 27]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'South Korea') {
        medal = [25, 33, 18]
        discipline = [0, 0, 0, 47, 0, 67, 0, 1, 0, 2, 0, 0, 1, 0, 0]
        sex = [35, 41]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Spain') {
        medal = [1, 1, 3]
        discipline = [0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0]
        sex = [2, 3]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Sweden') {
        medal = [60, 42, 56]
        discipline = [17, 77, 6, 0, 2, 18, 0, 1, 19, 4, 12, 2, 0, 0, 0]
        sex = [59, 91]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Switzerland') {
        medal = [60, 45, 49]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{

                    data: [1, 6, 12, 0, 5, 0, 0, 14, 74, 3, 0, 2, 2, 3, 32, 0],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -500

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: [51, 95],
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Ukraine') {
        medal = [2, 2, 5]
        discipline = [4, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0]
        sex = [5, 2]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'United Kingdom') {
        medal = [15, 7, 13]
        discipline = [0, 0, 1, 1, 0, 1, 0, 2, 0, 10, 10, 0, 9, 2, 0]
        sex = [17, 14]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'United States of America') {
        medal = [112, 144, 99]
        discipline = [0, 5, 35, 12, 1, 84, 10, 36, 48, 71, 0, 3, 8, 30, 23]
        sex = [161, 146]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Uzbekistan') {
        medal = [1, 0, 0]
        discipline = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        sex = [1, 0]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
    if (countryName == 'Czechoslovakia') {
        medal = [2, 3, 10]
        discipline = [0, 3, 0, 0, 6, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0]
        sex = [5, 10]
        if (Chart.getChart("myChart3")) {
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3, {
            type: 'radar',
            data: {
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font: {size: 20},
                        padding: {
                            top: 40
                        }
                    },
                    legend: {
                        display: false,
                        position: 'right',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")) {
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4, {
            type: 'radar',
            data: {
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data: discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options: {
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: -300

                        }
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 70,
                        top: 0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")) {
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5, {
            type: 'doughnut',
            data: {
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {

                plugins: {
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font: {size: 20},
                        padding: {
                            top: 40,
                            bottom: 30
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                },
                layout: {
                    padding: {
                        right: 0,
                        left: 50,
                        bottom: 0,
                        top: 0
                    }

                },

            }
        });
    }
/*
    else {
        medal=[0,0,0]
        discipline=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        sex=[0, 0]
        if (Chart.getChart("myChart3")){
            Chart.getChart("myChart3").destroy();
        }
        CountryChart3 = new Chart(myChart3,{
            type:'radar',
            data:{
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: medal,
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }],

            },
            options:{
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 20
                            }
                        }

                    }
                },
                plugins:{
                    title: {
                        display: true,
                        text: 'Medal by Discipline',
                        font:{size:20},
                        padding: {
                            top: 40
                        }
                    },
                    legend:{
                        display: false,
                        position:'right',
                        labels:{
                            font:{
                                size:14
                            }
                        }
                    }
                },
                layout:{
                    padding:{
                        right:0,
                        left:50,
                        bottom:0,
                        top:0
                    }

                },

            }
        });
        if (Chart.getChart("myChart4")){
            Chart.getChart("myChart4").destroy();
        }
        CountryChart4 = new Chart(myChart4,{
            type:'radar',
            data:{
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating',  'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{
                    data:discipline,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'

                }],

            },
            options:{
                scales: {
                    r: {
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        }

                    }
                },
                plugins:{
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font:{size:20},
                        padding: {
                            top:40,
                            bottom: -300

                        }
                    },
                    legend:{
                        display: false,
                        position:'right'
                    }
                },
                layout:{
                    padding:{
                        right:0,
                        left:50,
                        bottom:70,
                        top:0
                    }

                },

            }
        });
        if (Chart.getChart("myChart5")){
            Chart.getChart("myChart5").destroy();
        }
        CountryChart5 = new Chart(myChart5,{
            type:'doughnut',
            data:{
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'Ratio of Men and Women Athletes',
                    data: sex,
                    fill: true,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                }],
            },
            options:{

                plugins:{
                    title: {
                        display: true,
                        text: 'Ratio of Men Athletes and Women Athletes',
                        font:{size:20},
                        padding: {
                            top: 40,
                            bottom:30
                        }
                    },
                    legend:{
                        display: true,
                        position:'right'
                    }
                },
                layout:{
                    padding:{
                        right:0,
                        left:50,
                        bottom:0,
                        top:0
                    }

                },

            }
        });
    }

*/
}
/*
window.onload=function (){
    var btn=document.getElementById('button');
    btn.addEventListener('click',function (){
        f();
    });
};
*/



/*
function searchByRegExp(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    var len = list.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for(var i=0;i<len;i++){
        //如果字符串中不包含目标字符会返回-1
        if(list[i].match(reg)){
            arr.push(list[i]);
        }
    }
    return arr;
}
*/