google.charts.load('current', {
  'packages':['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Popularity'],
    ['United States', 300],
    ['China', 400],
    ['United Kingdom', 500],
  ]);

  var options = {
    backgroundColor : "transparent",
    height : "250",
    legend: 'none',
    datalessRegionColor : "#878585",
    colorAxis: {minValue: 0,  colors: ['#FFFFFF', '#FFA500']}
   
  };

  var chart = new google.visualization.GeoChart(document.getElementById('geographic-data-content'));  

  chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours peray'],
          ['Total Clicks', 35],
          ['Signups',      20],
          ['Total Views',  50],
        
        ]);
        var options = {
          pieHole: 0.6, 
          pieSliceTextStyle: {
            color: 'white',
          },
          backgroundColor : "transparent",
          pieSliceText: 'none',
          colors: ["#01aaaa", '#1f7bb6', '#fbcf71'],
          pieSliceTextStyle: {
            color: 'white',
          },
          legend : "none", 
          height: 300,
        };

        var chart = new google.visualization.PieChart(document.getElementById('active-medias-content'));
        chart.draw(data, options);
      }

var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [4000,5000,4000,1500,750,300,1500,2000,4000,5000],
      borderColor: "#1f7bb6",
      fill: true
    }, { 
      data: [6000,7000,6000,3000,2000,600,2000,4000,6000,7000],
      borderColor: "#00abab",
      fill: true
    }, { 
      data: [5000,6000,5000,2000,1000,500,1000,3000,5000,6000],
      borderColor: "#f7cc70",
      fill: true
    }]
  },
  options: {
    legend: {display: false}
  }
});