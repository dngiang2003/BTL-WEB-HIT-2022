$(document).ready(function () {
    $(".content-7-slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: true,
      dots: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 2,
          },
        }
      ],
      autoplay: true,
      autoplaySpeed: 1500,
    });
  });