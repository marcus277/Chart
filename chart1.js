var ctx = document.getElementById('barchart').getContext('2d');
var barchart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['BTS', 'BlackPink', 'Twice', 'ITZY', 'Stray Kids'],
        datasets: [{
            label: 'Favorite Kpop',
            data: [100, 90, 85, 80, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        indexAxis: 'y' ,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

