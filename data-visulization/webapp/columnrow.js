fetch('./data.json').then(function(res) {
    return res.json();
}).then(function(data) {
    chartFormation(data);
});

function chartFormation(jdata) {
    var finaldata = [];
    finaldata = Object.entries(jdata["densityofschool"]);
    Highcharts.chart('container-1', {
        chart: {
            type: 'column',
            width: 800
        },

        title: {
            text: 'density'
        },
        subtitle: {
            text: 'Source: <a href="https://klp.org.in/media/school-data/primaryschool.csv">Kaggle</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
        },

        series: [{
            name: 'Population',
            data: finaldata,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}