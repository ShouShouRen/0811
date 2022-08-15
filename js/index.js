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

function alertSubmit() {
    alert('資料已送出感謝您的諮詢');
}


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            $("#navbarToggler a").click(function () {
                $("#navbarToggler").collapse('hide');
            });
            $(window).scroll(function () {
                $("#navbarToggler").collapse('hide');
            });
        }
    })
    $(".add").each(function (i) {
        $(this).click(function () {
            var total = $(".num").eq(i).val();
            total++;
            $(".num").eq(i).val(total);
        });
    });
    $(".min").each(function (index) {
        $(this).click(function () {
            var total = $(".num").eq(index).val();
            var n = parseInt(total) - 1;
            if (n >= 1) {
                $(".num").eq(index).val(n);
            } else {
                $(".num").eq(index).val(0);
            }
        });
    });

    const datan = [0, 0, 0, 0, 0, 0];
    var allnum = 0;
    $(".addToCart").click(function () {
        allnum = 0;
        for (n = 0; n < 6; n++) {
            var t = $(".num").eq(n).val();
            $(".disnum").eq(n).html(t);
            allnum += parseInt(t);
            datan[n] = parseInt(t);
        }
    })

    $(".submit").click(function () {
        $(".num").val(0);
        $(".disnum").val(0);
    })
});

$("#gotop").click(function () {
    $("html,body").animate({
        scrollTop: 0
    })
    return false;
})