/* 
折线图*/
$(function(){
        var dom = document.getElementById("jian1");
        var myChart = echarts.init(dom);
        var convertData = function (data) {
            return data;
        };
            var o=eval(cors1);
            var year=o.columns;
            var data1=o.data;
            var data=data1[0];
        option = {
            title: {
                text: '历年申请量变化趋势'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['申请量']
            },
            toolbox: {
                show:false,
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },


            
         xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : year
                }
            ],
         
            yAxis : [
                {
                    type : 'value'
                }
            ],

         series : [
                {
                    name:'申请量',
                    type:'line',
                    itemStyle: {normal: {color:'#D42E3D'}},

                    data:data
                }
            ]
        };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        var img = new Image();
        var imagesrc = myChart.getDataURL({
            pixelRatio: 2,
            backgroundColor: '#fff'
        });
        var storage = window.localStorage;
        storage.setItem('cvs1',imagesrc);
});



/* 
申请人分布*/
$(function(){
    option=null;
    var dom = document.getElementById("jian2");
    var myChart = echarts.init(dom);
/*        var o1=eval(cors2);
        var o2=o1.index;
        var o3=o1.data;*/
    option = {
        color: ['#3398DB'],
        title: {
            text: '申请人分布柱状图',
            left: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : o2,
                 "axisLabel":{  
               interval:0,  //类目全显
                  rotate:-45   //顺时针旋转45度

            }  
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'数量',
                type:'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {color: '#D42E3D'}
                },
                data:o3


            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var img = new Image();
    var imagesrc = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    var storage = window.localStorage;
    storage.setItem('cvs2',imagesrc);
});


 
/* 
发明人分布*/
$(function(){
    option=null;
    var dom = document.getElementById("jian3");
    var myChart = echarts.init(dom);
        var o1=eval(cors3);
        var o2=o1.index;
        var o3=o1.data;
    option = {
        color: ['#3398DB'],
        title: {
            text: '发明人分布柱状图',
            left: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : o2,
                 "axisLabel":{  
               interval:0,  //类目全显
                  rotate:-45   //顺时针旋转45度 
            }  
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'数量',
                type:'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {color: '#D42E3D'}
                },
                data:o3
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var img = new Image();
    var imagesrc = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    var storage = window.localStorage;
    storage.setItem('cvs3',imagesrc);
});




/* 
饼图*/
    $(function(){
option=null;
var dom = document.getElementById("jian4");
var myChart = echarts.init(dom);
    var obj1=eval(cors4);
    var obj2=obj1.index;
    var obj3=obj1.data;
    var obj4=new Array();
    var obj5=new Array();
    var total=0;
    var arr=[];
    for(var j=0;j<obj3.length;j++){
    total=total+parseInt(obj3[j]);
    }
    for(var k=0;k<obj3.length;k++){
    obj4[k]=100.0*(parseInt(obj3[k])/total);
    obj5[k]=obj4[k].toFixed(1);
    }
    for(var i=0;i<obj2.length;i++){
    arr[i]={};
    arr[i].name=obj2[i];
    arr[i].value=parseFloat(obj5[i]);
    arr.push(arr[i]);
    }
option = {
    title : {
        text: 'IPC分布图',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: obj2
    },
    series : [
        {
            name: '申请量百分比',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:arr,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}



    // 使用刚指定的配置项和数据显示图表。

/*    var img = new Image();
    var imagesrc = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });*/
    
    var img = new Image();
        var imagesrc = myChart.getDataURL({
            pixelRatio: 2,
            backgroundColor: '#fff'
        });



    var storage = window.localStorage;
    storage.setItem('cvs4',imagesrc);

   
});


/* 
中国地图*/

$(function(){
    var dom = document.getElementById("jian5");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var obj1=eval(cors5);
        var obj2=obj1.index;
        var obj3=obj1.data;
        var data=[];
        for(var i=0;i<obj2.length;i++){
        var json={};
        json.name=obj2[i];
        json.value=parseInt(obj3[i]);
        data.push(json);
        }
    /*var data = [
        {name: "北京", value: 112},
                    {name: "上海", value: 86},
                    {name: "深圳", value: 83},
                    {name: "江苏", value: 36},
                    {name: "成都", value: 29},
                    {name: "南京", value: 28},
                    {name: "广州", value: 25},
                    {name: "杭州", value: 19},
                    {name: "武汉", value: 18},
                    {name: "济南", value: 17},
                    {name: "广东", value: 15},
                    {name: "西安", value: 13},
                    {name: "重庆", value: 13},
                    {name: "天津", value: 11},
                    {name: "安徽", value: 10},
                    {name: "大连", value: 6},
                    {name: "沈阳", value: 5},
                    {name: "湖南", value: 5},
                    {name: "长春", value: 4},
                    {name: "福建", value: 4},
                    {name: "青岛", value: 4},
                    {name: "哈尔滨", value: 3},
                    {name: "河北", value: 3},
                    {name: "贵州", value: 3},
                    {name: "浙江", value: 2},
                    {name: "台湾", value: 2},
                    {name: "山东", value: 2},
                    {name: "湖北", value: 2},   
                    {name: "厦门", value: 1},
                    {name: "山西", value: 1},
                    {name: "河南", value: 1},
                    {name: "江西", value: 1},
                    {name: "宁波", value: 1},
                    {name: "辽宁", value: 1},
                    {name: "甘肃", value: 1},
                    {name: "黑龙江", value: 1}
    ];*/
    var geoCoordMap = {
        "北京":[116.46,39.92],
        "上海":[121.48,31.22],
        "深圳":[114.07,22.62],
        "江苏":[118.15,32.89],
        "成都":[104.06,30.67],
        "南京":[118.78,32.04],
        "广州":[113.23,23.16],
        "杭州":[120.19,30.26],
        "武汉":[114.31,30.52],
        "济南":[117.03,36.65],
        "广东":[113.23,23.16],
        "西安":[108.95,34.27],
        "重庆":[106.54,29.59],
        "天津":[117.19,39.12],
        "安徽":[117.15,31.89],
        "大连":[121.62,38.92],
        "沈阳":[123.38,41.8],
        "湖南":[112.98,28.98],
        "长春":[125.35,43.88],
        "福建":[118.18,26.17],
        "青岛":[120.33,36.07],
        "哈尔滨":[126.63,45.75],
        "河北":[115.50,38.85],
        "贵州":[106.71,26.57],
        "浙江":[119.64,29.12],
        "台湾":[120.85,24.08],
        "山东":[118.33,36.07],
        "湖北":[112.19,31.03],
        "厦门":[118.1,24.46],
        "山西":[112.53,37.87],
        "河南":[113.29,33.75],
        "江西":[115.55,28.68],
        "宁波":[121.56,29.86],
        "沈阳":[123.38,41.8],
        "甘肃":[103.73,36.03],
        "黑龙江":[128.56,47.42]  
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {
        
        title: {
            text: '中国区域申请量分布图',
            subtext: '',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#282828'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['申请量'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                name: '申请量',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2]/2;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 6',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2]/2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var img = new Image();
    var imagesrc = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    var storage = window.localStorage;
    storage.setItem('cvs5',imagesrc);
});





/* 
世界地图*/
$(function(){
    var dom = document.getElementById("jian6");
    var myChart = echarts.init(dom);
    var app = {};
    var data=[];

        var obj1=eval(cors6);
        
        var obj3=obj1.data;
        var obj2=new Array()
        obj2=["United States of America","South Korea","Japan","France","Finland","United Kingdom","Germany","Netherlands","Sweden","Swaziland","Israel","Canada","Turkey","Spain","Saudi Arabia","Denmark","Portugal"];
        
        for(var i=0;i<obj3.length;i++){
        var json={};
        json.name=obj2[i];
        json.value=parseInt(obj3[i]);
        data.push(json);
        } 
    var convertData = function (data) {
        return data;
    };
    option = null;
    option = {
        title : {
            text: '世界区域申请量分布图',
            subtext: '',
            sublink : 'http://esa.un.org/wpp/Excel-Data/population.htm',
            left: 'center',
            top: 'top'
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                     
                return params.seriesName + '<br/>' + params.name + ' : ' + value;
            }
        },
        toolbox: {
            show : true,
            orient : 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 150,
            text:['High','Low'],
            realtime: false,
            calculable : true,
            color: ['orangered','yellow','lightskyblue']
        },
        

        
       series : [
            {
                name: '申请量',
                type: 'map',
                mapType: 'world',
                roam: true,
                data: convertData(data)
            }
        ] 
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    var img = new Image();
    var imagesrc = myChart.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    var storage = window.localStorage;
    storage.setItem('cvs6',imagesrc);
});






