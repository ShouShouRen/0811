new WOW().init();
var xValues = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [128, 240, 332, 489, 623],
            borderColor: "red",
            fill: false,
            label: 'close',
            borderColor: "#5DCDD7"
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});

function alertSubmit(){
    alert('資料已送出感謝您的諮詢');
}