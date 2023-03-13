$(function () {
  //header subMenu
  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".rightside_menu_wrapper");
  let closed = document.querySelector(".rightside_menu_close");
  burger.addEventListener("click", function () {
    menu.classList.add("rightside_menu_wrapper_active");
    document.body.classList.add("overflow_hidden");
  });
  closed.addEventListener("click", function () {
    menu.classList.remove("rightside_menu_wrapper_active");
    document.body.classList.remove("overflow_hidden");
  });
  menu.addEventListener("click", function (e) {
    menu.classList.remove("rightside_menu_wrapper_active");
    document.body.classList.remove("overflow_hidden");
    e.stopPropagation();
  });
  menu
    .querySelector(".rightside_menu")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });

  // Slider
  // Hero
  $(".hero_slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
  });
  // Contacts
  $(".contacts_slider_inner").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 10,
  });
  $(".singlepage_slider").slick({
    prevArrow:
      '<button type="button" class="singlepage_slider_btn singlepage_slider_prev"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow:
      '<button type="button" class="singlepage_slider_btn singlepage_slider_next"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
  });
  let containerEl = document.querySelector(".gallery_inner");
  if (containerEl) {
    let mixer = mixitup(containerEl);
    mixer.filter(".living");
  }
});

// Video_text
let text = document.querySelector(".video_text");
function addClass() {
  text.classList.add("video_text_active");
}
setTimeout(addClass, 14000);

// Accordeon;
let trigger = document.querySelectorAll(".accordeon_item_trigger");
let item = document.querySelectorAll(".accordeon_item");

trigger.forEach((triggerItem) => {
  triggerItem.addEventListener("click", () => {
    const parent = triggerItem.parentNode;
    if (parent.classList.contains("accordeon_item_active")) {
      parent.classList.remove("accordeon_item_active");
    } else {
      item.forEach((element) =>
        element.classList.remove("accordeon_item_active")
      );
      parent.classList.toggle("accordeon_item_active");
    }
  });
});

// popup
let popupLink = document.querySelector(".popup_imgbtn");
let body = document.body;
let popup = document.querySelector(".popup_wrapper");
let popupClose = document.querySelector(".popup_close");

popupLink.addEventListener("click", () => {
  popup.classList.add("open");
  body.classList.add("overflow_hidden");
});
popupClose.addEventListener("click", () => {
  popup.classList.remove("open");
  body.classList.remove("overflow_hidden");
});

popup.addEventListener("click", () => {
  popup.classList.remove("open");
  body.classList.remove("overflow_hidden");
});
document
  .querySelector(".popup_content")
  .addEventListener("click", (e) => e.stopPropagation());
