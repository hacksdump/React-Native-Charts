const html = `<html>
  <head>
    <style>
        * {
            position: relative;
            width: 100%
            height: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  </head>
  <body>
    <div id="chart_div"></div>
    <script type="text/javascript">
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable
            ([['X', 'Y'],
              [0, 7],
              [1, 3],
              [2, 2.5],
              [3, 3],
              [4, 4],
              [5, 4],
              [6, 3],
              [7, 2.5],
              [8, 3],
              [9, 7],
              [10, 3],
        ]);

        var options = {
          legend: 'none',
          hAxis: { minValue: 0, maxValue: 9 },
          curveType: 'line',
          pointSize: 3,
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
    </script>
  </body>
</html>`;

export default html;
