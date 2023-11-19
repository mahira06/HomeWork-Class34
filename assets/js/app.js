// Nav-Search Button JS
function myFunction() {
    let element = document.getElementById("search");
    element.classList.toggle("show");
  }

// Banner Slider JS - slick
$(".hero_slider").slick({
  autoplay:true,
  arrows: false,
  fade: true,
  speed: 300,
  dots: true,
  dotsClass: "hero_slider_dots",
});

// Deals JS - Timer_Clock
$("#deals_timer").countdown("2023/12/10", function (event) {
  var $this = $(this).html(
      event.strftime(
          "" +
              "<div><h4>%D</h4> <p>Days</p></div> " +
              "<span>:</span>"+
              "<div><h4>%H</h4> <p>Hours</p></div> " +
              "<span>:</span>"+
              "<div><h4>%M</h4> <p>Minutes</p></div> " +
              "<span>:</span>"+
              "<div><h4>%S</h4> <p>Seconds</p></div>"
      )
  );
});
// Deals JS - Slick Slider
$('.deals').slick({
  slidesToShow:2,
  arrows: false,
  autoplay:true,
});
// Product JS - Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// New Arrival Product Slider JS -slick
$('.new_product').slick({
  slidesToShow:4,
  arrows: false,
  autoplay:true,
});
// Latest News JS - Slick Slider
$('.news_slider').slick({
  slidesToShow:4,
  arrows: false,
  autoplay:true,
});
