$('.customer-list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,

  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./assets/img/customer-arrow.svg" alt="">
  </button>`,
  nextArrow:`<button type='button' class='slick-next pull-right'><img src="./assets/img/customer-right-arrow.svg" alt="">
  </button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
  ]
});
const menuLogo = document.querySelector(".menu-logo");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);  
});

window.addEventListener('click', function(e){   
  if (!menu.contains(e.target) && !toggle.contains(e.target) ){
    menu.classList.remove(activeClass);
  }
});


