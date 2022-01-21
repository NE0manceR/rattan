//=====search====///
function activeSearch() {
  $('.search').addClass('active-search');
  $('.search__input').attr('placeholder', '').focus();
}

$('.search__input').blur(() => {
  if ($('.search__input').val().length === 0) {
    $('.search__input').attr('placeholder', 'Що ти шукаш?');
  }

  $('.search').removeClass('active-search');
});
//=====search====///


// owl-slider
$(document).ready(function () {
  $(".item-slider").owlCarousel({
    margin: 28,
    autoWidth:
      true,
    nav: true,
    navText: [
      '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="#262121"/> <path d="M14.9393 29.9393C14.3536 30.5251 14.3536 31.4749 14.9393 32.0607L24.4853 41.6066C25.0711 42.1924 26.0208 42.1924 26.6066 41.6066C27.1924 41.0208 27.1924 40.0711 26.6066 39.4853L18.1213 31L26.6066 22.5147C27.1924 21.9289 27.1924 20.9792 26.6066 20.3934C26.0208 19.8076 25.0711 19.8076 24.4853 20.3934L14.9393 29.9393ZM43 29.5L16 29.5L16 32.5L43 32.5L43 29.5Z" fill="white"/></svg>',
      '<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="30" cy="30" r="30" fill="#262121"/> <path d="M45.0607 30.0607C45.6464 29.4749 45.6464 28.5251 45.0607 27.9393L35.5147 18.3934C34.9289 17.8076 33.9792 17.8076 33.3934 18.3934C32.8076 18.9792 32.8076 19.9289 33.3934 20.5147L41.8787 29L33.3934 37.4853C32.8076 38.0711 32.8076 39.0208 33.3934 39.6066C33.9792 40.1924 34.9289 40.1924 35.5147 39.6066L45.0607 30.0607ZM17 30.5H44V27.5H17V30.5Z" fill="white"/></svg>',
    ]
  });
});

$(document).ready(function () {
  $(".inspiration-carousel").owlCarousel({
    margin: 28,
    autoWidth: true,
  });
});

// owl-slider
function setSliderItems(count) {
  let photoIndex = 1;

  for (let i = 0; i < count; i++) {
    photoIndex++;

    if (photoIndex === 5) {
      photoIndex = 1;
    }

    let card = `
        <div class="slider-item item ${photoIndex % 2 === 0 ? 'top' : ''}">
        <img class="slider-img" src="images/test-slider-photo/${photoIndex}.png" alt="img">
        <span class="slider-text">Модульн  комплект комплект комплект комплект  Ментор CRUZO <span>штучний ротанг, сірий, dm0011</span></span>
        <div class="slider-price-wrap">
          <div class="slider-info">
            <button class="slider-btn">Замовити</button>
            <div class="slider-price">
              <span class="slider-sale">10 500 грн</span>
              <span class="slider-main-price">3 500 <span class="slider-main-value">грн</span></span>
            </div>
          </div>
        </div>
      </div>
        `

    let newCard = `
        <div class="slider-item item top new">
        <img class="slider-img" src="images/test-slider-photo/${photoIndex}.png" alt="img">
        <span class="slider-text">Модульн  комплект комплект комплект комплект  Ментор CRUZO <span>штучний ротанг, сірий, dm0011</span></span>
        <div class="slider-price-wrap">
          <div class="slider-info">
            <button class="slider-btn">Замовити</button>
            <div class="slider-price">
              <span class="slider-sale">10 500 грн</span>
              <span class="slider-main-price">3 500 <span class="slider-main-value">грн</span></span>
            </div>
          </div>
        </div>
      </div>
        `
    $('.home-slider').append(card);
    $('.item-wrap').append(card);
    $('.item-new').append(newCard);
  }
}
setSliderItems(20);

function filterAnimate() {
  $('.filter__btn-wrap').scrollLeft(343)

  setTimeout(() => {
    $('.filter__btn-wrap').scrollLeft(0)
  }, 1000)
}

$(window).on('resize', () => {
  setFormalitiesImg();
  setDetailImg();
  // filterStatus();
})


function setFormalitiesImg() {
  const height = $(window).width() - 32;

  if (height <= 1050) {
    $('.formalities__img').css('height', `${height}px`)
  } else {
    $('.formalities__img').css('height', 'auto')
  }
}

function setDetailImg() {
  const detailHeight = $('.detail__img').width();
  const detailsliderHeight = $('.detail__slider').width();

  setTimeout(() => {
    $('.detail__img').css('height', `${detailHeight}px`);
    $('.detail__slider').css('height', `${detailsliderHeight}px`);
    $('.detail__slider-img').css('height', `${detailsliderHeight - 50}px`);

  }, 200)

}

setFormalitiesImg();
setDetailImg();

$('.navigation__items').on('click', () => {
  $('.menu').fadeIn();
})


$('.menu__close-ic').on('click', closeMenu)

function closeMenu() {
  $('.menu').fadeOut();
}

$('.detail__img').on('click', () => {
  $('.detail__big-slider-wrap').fadeIn();
})

$('.detail__close-ic').on('click', () => {
  $('.detail__big-slider-wrap').fadeOut();
})

let swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

let bigSlider = new Swiper(".detail__big-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  navigation: {
    nextEl: ".detail__button-next",
    prevEl: ".detail__button-prev"
  },
});


$(".color__img").on('click', (e) => {
  $(".color__img").removeClass('active');
  $(e.target).addClass('active');
  console.log(e.target);

})

// sumb menun 1==========================

$('.sub-menu-1').mouseenter(() => {
  $('.menu__sub-menu-1').stop().slideDown();
})

$('.sub-menu-1').mouseleave((e) => {

  if (e.relatedTarget.classList[0] !== 'menu__wrap' && e.relatedTarget.classList[0] !== 'menu__sub-menu-1') {
    $('.menu__sub-menu-1').stop().slideUp();
  }
})

$('.menu__sub-menu-1').mouseleave((e) => {
  if (e.relatedTarget.classList[0] !== 'menu__sub-menu-1') {
    $('.menu__sub-menu-1').stop().slideUp();
  }
})

// sumb menun 2==========================

$('.sub-menu-2').mouseenter(() => {
  $('.menu__sub-menu-2').stop().slideDown();
})

$('.sub-menu-2').mouseleave((e) => {

  if (e.relatedTarget.classList[0] !== 'menu__wrap' && e.relatedTarget.classList[0] !== 'menu__sub-menu-2') {
    $('.menu__sub-menu-2').stop().slideUp();
  }
})

$('.menu__sub-menu-2').mouseleave((e) => {
  if (e.relatedTarget.classList[0] !== 'menu__sub-menu-2') {
    $('.menu__sub-menu-2').stop().slideUp();
  }
})

$('.mobile__item-title').on('click', () => {
  $('.mobile-menu__items').slideToggle();
  $('.mobile-menu__drop-icon').toggleClass('mobile-menu_rotate-icon ');
})

$('.mobile-menu__close-ic, .mobile-menu-btn').on('click', closeMobileMenu);

function closeMobileMenu() {
  $('.mobile-menu').fadeToggle();
}


$('.mobile-menu-show-sub, .mobile-menu__sub-title-back').on('click', function () {
  $(this).find('.mobile-menu__sub-menu').fadeToggle();
})


//filter===============================================filter==========


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


  filterStatus($(this).attr('id'), this)
})

function filterStatus(filterName, targetBtn) {
  const elementArr = [...$('.filter__item-container')];

  elementArr.forEach((element, i) => {
    if (element.getAttribute('id') !== `${filterName}-item`) {
      $('.filter__item-container').eq(i).fadeOut();
    }

    if ($('.filter__item-container').eq(i).find('.active').length !== 0) {
      $('.filter__btn').eq(i).addClass('filter__btn-checket')
    } else {
      $('.filter__btn').eq(i).removeClass('filter__btn-checket');
    }
  });

  $('.filter__btn').not(targetBtn).removeClass('active-btn');
  $(`#${filterName}-item`).fadeToggle(100);

  filterPosition(`#${filterName}-item`, `${$(targetBtn).position().left}px`, `${$(targetBtn).position().top + 30}px`);
}

function filterPosition(name, left, top) {
  console.log($(window).width())
  if ($(window).width() > 900) {
    $(`${name}`).css('top', `${top}`).css('left', `${left}`);
    $(`${name}`).removeClass('filter__item-mobile-container')
  } else {
    $(`${name}`).addClass('filter__item-mobile-container')
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

