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

const headerSign = document.querySelector(".header-signin");
const signUp = document.querySelector(".js-modal-signin");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-container");
const modalLogo = document.querySelector(".modal-logo");

const openSign = "modal-open";
signUp.addEventListener("click", function() {
  modal.classList.add(openSign);
});

headerSign.addEventListener("click", function() {
  modal.classList.add(openSign);
});


modal.addEventListener("click", function () {
  modal.classList.remove(openSign);  
});

modalLogo.addEventListener("click", function (){
  modal.classList.remove(openSign);  
});

modalClose.addEventListener("click", function (e) {
  e.stopPropagation();
});

const buyBtns = document.querySelectorAll(".js-payment-plan");
const payMent = document.querySelector(".payment");
const payMentContainer = document.querySelector(".payment-container");

function showPaymentBtn() {
  payMent.classList.add("payment-open");
}
function hidePaymentBtn() {
  payMent.classList.remove("payment-open");
}

for ( const buyBtn of buyBtns) {
  buyBtn.addEventListener("click" , showPaymentBtn);
}

payMent.addEventListener("click", hidePaymentBtn);

payMentContainer.addEventListener("click", function (e) {
  e.stopPropagation();
})