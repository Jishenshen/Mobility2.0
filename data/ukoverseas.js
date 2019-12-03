var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
            }
        }
    },

    legend: {
        top:35,
        data: [ "EUUNION",
        "'Other EEA countries'",
        "Other Europe",
        "Africa",
        "Asia",
        "Australia",
        "Middle East",
        "North America",
        "South America"]
    },

    //title:{
    //    text:["UK graduation overseas"],
    //    //textAlign:'center',
    //    //textVerticalAlign:'center',
//
    //},

    singleAxis: {
        top:10,
        bottom: 40,
        axisTick: {},
        axisLabel: {},
        type: 'time',
        nameLocation:'start',
        xaixs:{
         //   interval:auto,
         //alignWithLabe:true,
        },
        axisPointer: {
            animation: true,
            label: {
                show: true,
                
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        }
    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            },
            data: [['2007',325,'EUUNION'],
            ['2008',305,'EUUNION'],
            ['2009',425,'EUUNION'],
            ['2010',515,'EUUNION'],
            ['2011',480,'EUUNION'],
            ['2012',540,'EUUNION'],
            ['2013',545,'EUUNION'],
            ['2014',525,'EUUNION'],
            ["2015",535,'EUUNION'],
            ["2016",655,'EUUNION'],

            ['2007',5,'Other EEA countries'],
            ['2008',10,'Other EEA countries'],
            ['2009',25,'Other EEA countries'],
            ['2010',0,'Other EEA countries'],
            ['2011',30,'Other EEA countries'],
            ['2012',30,'Other EEA countries'],
            ['2013',20,'Other EEA countries'],
            ['2014',35,'Other EEA countries'],
            ["2015",20,'Other EEA countries'],
            ["2016",20,'Other EEA countries'],

            ['2007',35,'Other Europe'],
            ['2008',50,'Other Europe'],
            ['2009',60,'Other Europe'],
            ['2010',85,'Other Europe'],
            ['2011',55,'Other Europe'],
            ['2012',70,'Other Europe'],
            ['2013',60,'Other Europe'],
            ['2014',55,'Other Europe'],
            ["2015",55,'Other Europe'],
            ["2016",60,'Other Europe'],

            ['2007',30,'Africa'],
            ['2008',40,'Africa'],
            ['2009',85,'Africa'],
            ['2010',100,'Africa'],
            ['2011',85,'Africa'],
            ['2012',125,'Africa'],
            ['2013',55,'Africa'],
            ['2014',65,'Africa'],
            ["2015",50,'Africa'],
            ["2016",55,'Africa'],

            ['2007',165,'Asia'],
            ['2008',135,'Asia'],
            ['2009',165,'Asia'],
            ['2010',235,'Asia'],
            ['2011',210,'Asia'],
            ['2012',250,'Asia'],
            ['2013',195,'Asia'],
            ['2014',190,'Asia'],
            ["2015",175,'Asia'],         
            ["2016",195,'Asia'],

            ['2007',115,'Australia'],
            ['2008',130,'Australia'],
            ['2009',139,'Australia'],
            ['2010',220,'Australia'],
            ['2011',190,'Australia'],
            ['2012',125,'Australia'],
            ['2013',100,'Australia'],
            ['2014',120,'Australia'],
            ["2015",80,'Australia'],         
            ["2016",120,'Australia'],

            ['2007',45,'Middle East'],
            ['2008',45,'Middle East'],
            ['2009',45,'Middle East'],
            ['2010',60,'Middle East'],
            ['2011',65,'Middle East'],
            ['2012',80,'Middle East'],
            ['2013',100,'Middle East'],
            ['2014',75,'Middle East'],
            ["2015",70,'Middle East'],         
            ["2016",75,'Middle East'],

            ['2007',150,'North America'],
            ['2008',1555,'North America'],
            ['2009',225,'North America'],
            ['2010',220,'North America'],
            ['2011',240,'North America'],
            ['2012',275,'North America'],
            ['2013',225,'North America'],
            ['2014',260,'North America'],
            ["2015",205,'North America'],         
            ["2016",260,'North America'],

            ['2007',5,'South America'],
            ['2008',5,'South America'],
            ['2009',15,'South America'],
            ['2010',25,'South America'],
            ['2011',20,'South America'],
            ['2012',20,'South America'],
            ['2013',15,'South America'],
            ['2014',20,'South America'],
            ["2015",10,'South America'],         
            ["2016",20,'South America']]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
