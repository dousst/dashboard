  const CHART = document.getElementById("barChart");

  Chart.defaults.global.animation.duration = 200;

  let barChart = new Chart(CHART, {
      type: 'bar',
      data: {
          labels: ["Asus", "Nickelodeon", "Caribé", "Jen & Berry's", "A-Lounge"],
          datasets: [
              {
                label: "budget du projet",
                
                fill: true,
                lineTension: 0.5,
                backgroundColor: "#E8DA5A",
                borderColor: "#fff",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointerBorderColor: "#fff",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#E8DA5A",
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [6500, 5900, 8000, 8100, 5600],

              }
          ]

      },
      options: { 
        legend: {
            labels: {
                fontColor: "white"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 10
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 11
                }
            }]
        }
    }
  });




  const DCHART = document.getElementById("doughnutChart");

  Chart.defaults.scale.ticks.beginAtZero = true;

  let doughnutChart = new Chart(DCHART, {
      type: 'doughnut',
      data: {
          labels: ["Asus", "Nickelodeon", "Caribé", "Jen & Berry's", "A-Lounge"],
          datasets: [
              {
                label: "revenu total",
                
                backgroundColor: ["#BF1736",'#E8DA5A','#FFEDE6','#C53AF0','#FA403C'],
                
                data: [4300, 5000, 65000, 3400, 2700],

                borderWidth: 0,

              }
            ]
      },
      options: { 
        cutoutPercentage: 25, 
        rotation: Math.PI * 1, 
        legend: {
            display: false
        },
        tooltips: {
            enabled: true
        },
        animation:{
            animateScale: true
        }
    }
  });