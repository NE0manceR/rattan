"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//=====search====///
function activeSearch() {
  $('.search').addClass('active-search');
  $('.search__input').attr('placeholder', '').focus();
}

$('.search__input').blur(function () {
  if ($('.search__input').val().length === 0) {
    $('.search__input').attr('placeholder', 'Що ти шукаш?');
  }

  $('.search').removeClass('active-search');
}); //=====search====///
// owl-slider

$(document).ready(function () {
  $(".item-slider").owlCarousel({
    margin: 28,
    autoWidth: true,
    nav: true,
    navText: ['<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#262121"/> <path d="M14.9393 29.9393C14.3536 30.5251 14.3536 31.4749 14.9393 32.0607L24.4853 41.6066C25.0711 42.1924 26.0208 42.1924 26.6066 41.6066C27.1924 41.0208 27.1924 40.0711 26.6066 39.4853L18.1213 31L26.6066 22.5147C27.1924 21.9289 27.1924 20.9792 26.6066 20.3934C26.0208 19.8076 25.0711 19.8076 24.4853 20.3934L14.9393 29.9393ZM43 29.5L16 29.5L16 32.5L43 32.5L43 29.5Z" fill="white"/></svg>', '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#262121"/> <path d="M45.0607 30.0607C45.6464 29.4749 45.6464 28.5251 45.0607 27.9393L35.5147 18.3934C34.9289 17.8076 33.9792 17.8076 33.3934 18.3934C32.8076 18.9792 32.8076 19.9289 33.3934 20.5147L41.8787 29L33.3934 37.4853C32.8076 38.0711 32.8076 39.0208 33.3934 39.6066C33.9792 40.1924 34.9289 40.1924 35.5147 39.6066L45.0607 30.0607ZM17 30.5H44V27.5H17V30.5Z" fill="white"/></svg>']
  });
});
$(document).ready(function () {
  $(".inspiration-carousel").owlCarousel({
    margin: 28,
    autoWidth: true
  });
}); // owl-slider

function setSliderItems(count) {
  var photoIndex = 1;

  for (var i = 0; i < count; i++) {
    photoIndex++;

    if (photoIndex === 5) {
      photoIndex = 1;
    }

    var card = "\n        <div class=\"slider-item item ".concat(photoIndex % 2 === 0 ? 'top' : '', "\">\n        <img class=\"slider-img\" src=\"images/test-slider-photo/").concat(photoIndex, ".png\" alt=\"img\">\n        <span class=\"slider-text\">\u041C\u043E\u0434\u0443\u043B\u044C\u043D  \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442  \u041C\u0435\u043D\u0442\u043E\u0440 CRUZO <span>\u0448\u0442\u0443\u0447\u043D\u0438\u0439 \u0440\u043E\u0442\u0430\u043D\u0433, \u0441\u0456\u0440\u0438\u0439, dm0011</span></span>\n        <div class=\"slider-price-wrap\">\n          <div class=\"slider-info\">\n            <button class=\"slider-btn\">\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438</button>\n            <div class=\"slider-price\">\n              <span class=\"slider-sale\">10 500 \u0433\u0440\u043D</span>\n              <span class=\"slider-main-price\">3 500 <span class=\"slider-main-value\">\u0433\u0440\u043D</span></span>\n            </div>\n          </div>\n        </div>\n      </div>\n        ");
    var newCard = "\n        <div class=\"slider-item item top new\">\n        <img class=\"slider-img\" src=\"images/test-slider-photo/".concat(photoIndex, ".png\" alt=\"img\">\n        <span class=\"slider-text\">\u041C\u043E\u0434\u0443\u043B\u044C\u043D  \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442  \u041C\u0435\u043D\u0442\u043E\u0440 CRUZO <span>\u0448\u0442\u0443\u0447\u043D\u0438\u0439 \u0440\u043E\u0442\u0430\u043D\u0433, \u0441\u0456\u0440\u0438\u0439, dm0011</span></span>\n        <div class=\"slider-price-wrap\">\n          <div class=\"slider-info\">\n            <button class=\"slider-btn\">\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438</button>\n            <div class=\"slider-price\">\n              <span class=\"slider-sale\">10 500 \u0433\u0440\u043D</span>\n              <span class=\"slider-main-price\">3 500 <span class=\"slider-main-value\">\u0433\u0440\u043D</span></span>\n            </div>\n          </div>\n        </div>\n      </div>\n        ");
    $('.home-slider').append(card);
    $('.item-wrap').append(card);
    $('.item-new').append(newCard);
  }
}

setSliderItems(20);

function filterAnimate() {
  $('.filter__btn-wrap').scrollLeft(343);
  setTimeout(function () {
    $('.filter__btn-wrap').scrollLeft(0);
  }, 1000);
}

$(window).on('resize', function () {
  setFormalitiesImg();
  setDetailImg(); // filterStatus();
});

function setFormalitiesImg() {
  var height = $(window).width() - 32;

  if (height <= 1050) {
    $('.formalities__img').css('height', "".concat(height, "px"));
  } else {
    $('.formalities__img').css('height', 'auto');
  }
}

function setDetailImg() {
  var detailHeight = $('.detail__img').width();
  var detailsliderHeight = $('.detail__slider').width();
  setTimeout(function () {
    $('.detail__img').css('height', "".concat(detailHeight, "px"));
    $('.detail__slider').css('height', "".concat(detailsliderHeight, "px"));
    $('.detail__slider-img').css('height', "".concat(detailsliderHeight - 50, "px"));
  }, 200);
}

setFormalitiesImg();
setDetailImg();
$('.navigation__items').on('click', function () {
  $('.menu').fadeIn();
});
$('.menu__close-ic').on('click', closeMenu);

function closeMenu() {
  $('.menu').fadeOut();
}

$('.detail__img').on('click', function () {
  $('.detail__big-slider-wrap').fadeIn();
});
$('.detail__close-ic').on('click', function () {
  $('.detail__big-slider-wrap').fadeOut();
});
var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  }
});
var bigSlider = new Swiper(".detail__big-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  },
  navigation: {
    nextEl: ".detail__button-next",
    prevEl: ".detail__button-prev"
  }
});
$(".color__img").on('click', function (e) {
  $(".color__img").removeClass('active');
  $(e.target).addClass('active');
  console.log(e.target);
}); // sumb menun 1==========================

$('.sub-menu-1').mouseenter(function () {
  $('.menu__sub-menu-1').stop().slideDown();
});
$('.sub-menu-1').mouseleave(function (e) {
  if (e.relatedTarget.classList[0] !== 'menu__wrap' && e.relatedTarget.classList[0] !== 'menu__sub-menu-1') {
    $('.menu__sub-menu-1').stop().slideUp();
  }
});
$('.menu__sub-menu-1').mouseleave(function (e) {
  if (e.relatedTarget.classList[0] !== 'menu__sub-menu-1') {
    $('.menu__sub-menu-1').stop().slideUp();
  }
}); // sumb menun 2==========================

$('.sub-menu-2').mouseenter(function () {
  $('.menu__sub-menu-2').stop().slideDown();
});
$('.sub-menu-2').mouseleave(function (e) {
  if (e.relatedTarget.classList[0] !== 'menu__wrap' && e.relatedTarget.classList[0] !== 'menu__sub-menu-2') {
    $('.menu__sub-menu-2').stop().slideUp();
  }
});
$('.menu__sub-menu-2').mouseleave(function (e) {
  if (e.relatedTarget.classList[0] !== 'menu__sub-menu-2') {
    $('.menu__sub-menu-2').stop().slideUp();
  }
});
$('.mobile__item-title').on('click', function () {
  $('.mobile-menu__items').slideToggle();
  $('.mobile-menu__drop-icon').toggleClass('mobile-menu_rotate-icon ');
});
$('.mobile-menu__close-ic, .mobile-menu-btn').on('click', closeMobileMenu);

function closeMobileMenu() {
  $('.mobile-menu').fadeToggle();
}

$('.mobile-menu-show-sub, .mobile-menu__sub-title-back').on('click', function () {
  $(this).find('.mobile-menu__sub-menu').fadeToggle();
}); //filter===============================================filter==========
// $('.filter__btn').on('click', function (e) {
//   const sreenWidth = $(window).width();
//   console.log($(this).find('.active').length)
//   if ($(this).find('.active').length !== 0) {
//     $(this).addClass('filter__btn-checket');
//   } else {
//     $(this).removeClass('filter__btn-checket');
//   }
//   if (e.target.classList.contains('active-btn')) {
//     $('.filter__btn').removeClass('active-btn');
//     $('.filter__item-container').fadeOut(100);
//     $('.filter__item-container').removeClass('filter__item-mobile-container');
//     $('html').removeClass('fix-body');
//   } else if (!e.currentTarget.classList.contains('active-btn')) {
//     $('.filter__item-container').stop().fadeOut(0);
//     $(this).find('.filter__item-container').stop().fadeIn();
//     $('.filter__btn').removeClass('active-btn');
//     $(this).addClass('active-btn');
//     if (sreenWidth <= 900) {
//       // $('.filter__item-container').css('height', `${containerPosition - 10}px`);
//       $('html').addClass('fix-body');
//       $(this).find('.filter__item-container').addClass('filter__item-mobile-container');
//     }
//   }
//   // if (e.target.classList[0] === 'filter__btn' && sreenWidth > 900 || e.target.classList[0] === 'filter__btn-icon' && sreenWidth > 900) {
//   //   $(this).find('.filter__item-container').fadeToggle();
//   // } else {
//   //   $('.filter__item-container').css('height', `${containerPosition}px`);
//   //   $('html').toggleClass('fix-body');
//   //   $(this).find('.filter__item-container').toggleClass('filter__item-mobile-container');
//   // }
// })
// ========= new filter

$('.filter__btn, .filter__close-menu-ic').on('click', function () {
  $(this).toggleClass('active-btn');
  $('body').toggleClass('fix-body');
  filterStatus($(this).attr('id'), this);
});

function filterStatus(filterName, targetBtn) {
  var elementArr = _toConsumableArray($('.filter__item-container'));

  elementArr.forEach(function (element, i) {
    if (element.getAttribute('id') !== "".concat(filterName, "-item")) {
      $('.filter__item-container').eq(i).fadeOut();
    }

    if ($('.filter__item-container').eq(i).find('.active').length !== 0) {
      $('.filter__btn').eq(i).addClass('filter__btn-checket');
    } else {
      $('.filter__btn').eq(i).removeClass('filter__btn-checket');
    }
  });
  $('.filter__btn').not(targetBtn).removeClass('active-btn');
  $("#".concat(filterName, "-item")).fadeToggle(100);
  filterPosition("#".concat(filterName, "-item"), "".concat($(targetBtn).position().left, "px"), "".concat($(targetBtn).position().top + 30, "px"));
}

function filterPosition(name, left, top) {
  console.log($(window).width());

  if ($(window).width() > 900) {
    $("".concat(name)).css('top', "".concat(top)).css('left', "".concat(left));
    $("".concat(name)).removeClass('filter__item-mobile-container');
  } else {
    $("".concat(name)).addClass('filter__item-mobile-container');
  }
}

$('.filter__check-box-wrap').on('click', function () {
  $(this).find('.filter__check-box').toggleClass('active');

  if ($(this).find('.filter__input-checkbox').attr('checked') === 'checked') {
    $(this).find('.filter__input-checkbox').attr('checked', false);
  } else {
    $(this).find('.filter__input-checkbox').attr('checked', true);
  }
});