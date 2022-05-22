var arr = ["Switzerland","Japan","美国","俄罗斯","Canada","英国","澳大利亚","西班牙","德国","孟买加","阿拉伯","印度","印度尼西亚"];
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


function f() {
    var countryName = document.getElementById("first").value;
    let myChart3 = document.getElementById('myChart3').getContext('2d');
    let myChart4 = document.getElementById('myChart4').getContext('2d');
    let myChart5 = document.getElementById('myChart5').getContext('2d');
    Chart.defaults.font.family='Lato';
    Chart.defaults.font.size=10;
    if (countryName=='Switzerland') {
        let CountryChart3 = new Chart(myChart3,{
            type:'radar',
            data:{
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: [60, 45, 49],
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
        let CountryChart4 = new Chart(myChart4,{
            type:'radar',
            data:{
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Short Track Speed Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{

                    data: [1, 0, 12, 0, 5, 0, 6, 0, 14, 74, 0, 0, 2, 2, 3, 32],
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
                plugins:{
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font:{size:20},
                        padding: {
                            top:40
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
                        bottom:0,
                        top:0
                    }

                },

            }
        });
        let CountryChart5 = new Chart(myChart5,{
            type:'doughnut',
            data:{
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [51,95],
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
                        text: 'Olympic Games Golden Medal by country',
                        font:{size:20},
                        padding: {
                            top: 40
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
                        bottom:0,
                        top:0
                    }

                },

            }
        });
    }
    if (countryName=='Canada') {
        let CountryChart3 = new Chart(myChart3,{
            type:'radar',
            data:{
                labels: [
                    'gold', 'silver', 'bronze'
                ],
                datasets: [{
                    data: [90, 59, 86],
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
                plugins:{
                    title: {
                        display: false,
                        text: 'Medal by Discipline',
                        font:{size:20},
                        padding: {
                            top: 10
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
                        bottom:0,
                        top:0
                    }

                },

            }
        });
        let CountryChart4 = new Chart(myChart4,{
            type:'radar',
            data:{
                labels: [
                    'Biathlon', 'Cross Country Skiing', 'Freestyle Skiing', 'Short Track Speed Skating', 'Ski Jumping', 'Speed Skating', 'Luge', 'Snowboard', 'Alpine Skiing', 'Figure Skating', 'Short Track Speed Skating', 'Curling', 'Nordic Combined', 'Skeleton', 'Bobsleigh', 'Ice Hockey'],

                datasets: [{

                    data: [ 3, 0, 32, 24, 4, 34, 4, 1, 18, 12, 0, 24, 7, 0, 4, 19, 23],
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
                plugins:{
                    title: {
                        display: true,
                        text: 'All Kinds of Medal',
                        font:{size:20},
                        padding: {
                            top: 40
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
                        bottom:0,
                        top:0
                    }

                },

            }
        });
        let CountryChart5 = new Chart(myChart5,{
            type:'doughnut',
            data:{
                labels: [
                    'Women',
                    'Men'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [110,90],
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
                        text: 'Olympic Games Golden Medal by country',
                        font:{size:20},
                        padding: {
                            top: 60
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
                        bottom:0,
                        top:0
                    }

                },

            }
        });
    }
}

//if (country=='Canada'){
//    var countryShow = document.getElementsByClassName("sea-container");
  //  var img2 = document.createElement("img");
    //img2.src = "img/old.jpg";
    //countryShow.appendChild(img2);
//}
//正则匹配
/*function searchByRegExp(keyWord, list){
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
}*/
