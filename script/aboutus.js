$(document).ready(function () {
  $(".content-main-3").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function showMenuC() {
  var x = document.getElementsByClassName('page_scroll');
  for (let i = 0; i < x.length; i++)
    x[i].classList.toggle('show');
}