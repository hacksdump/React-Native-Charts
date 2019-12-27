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
    <script src="Chart.min.js"></script>
  </head>
  <body>
    <canvas id="myChart"></canvas>
    <script type="text/javascript">
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255, 99, 132, 0.7)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
              }]
          },

          // Configuration options go here
          options: {
            elements: {
              line: {
                tension: 0
              }
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              intersect: false,
            },
            legend: {
					
            onClick: function(event, legendItem) {
              event.preventDefault();
              return;
            },

				},
				  }
      });

      document.addEventListener("message", function(data) {
        const points = JSON.parse(data.data);
        chart.data.datasets[0].data = points;        
        chart.update();
      });
      
    </script>
  </body>
</html>`;

export default html;
