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

$("#submit").click(function () { 
    if(!$("#sub,#sub,#sub,#sub").val()==""){
        alert("感謝您的意見，我們會儘速回覆您!")
        $("#sub,#sub,#sub,#sub").val("");
    }else{
        alert("請輸入內容！")
    }
 })

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            $("#navbarNav a").click(function () {
                $("#navbarNav").collapse('hide');
            });
            $(window).scroll(function () {
                $("#navbarNav").collapse('hide');
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

