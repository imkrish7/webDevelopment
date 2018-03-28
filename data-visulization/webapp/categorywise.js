fetch('./data.json').then(function(res) {
    return res.json()
}).then(function(data) {
    chartFormation2(data);
});

function chartFormation2(jdata) {
    var seriesData = genericFormat(jdata["category"], jdata["categoryname"]);
    Highcharts.chart('container-2', {
        chart: {
            type: 'column',
            width: 800

        },
        title: {
            text: 'Category'
        },
        subtitle: {
            text: 'Source: Kaggle'
        },
        xAxis: {
            categories: jdata["district"],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Category'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: seriesData
    });
}