$(function(){
	$('.header__slider').slick({
        arrows: true,
        dots: false,
        customPaging:function(){return ''},
        autoplay: false,
        prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="white"/></svg>',
        nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="white"/></svg>',
  })

  $('.placement__cardssss').slick({
    arrows: true,
    dots: false,
    infinite:  true,
    slidesToShow: 3,
    //fade: true,
    slidesToScroll: 3,
    autoplay: false,
    prevArrow: '<svg class="prev" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726989 17.5262C-0.115908 16.6833 -0.115908 15.3167 0.726989 14.4738L14.4628 0.738012C15.3057 -0.104884 16.6723 -0.104884 17.5152 0.738012C18.3581 1.58091 18.3581 2.94751 17.5152 3.79041L5.30558 16L17.5152 28.2096C18.3581 29.0525 18.3581 30.4191 17.5152 31.262C16.6723 32.1049 15.3057 32.1049 14.4628 31.262L0.726989 17.5262ZM4.41602 18.1584H2.25319L2.25319 13.8416H4.41602L4.41602 18.1584Z" fill="black"/></svg>',
    nextArrow: '<svg class="next" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.501 17.5262C18.3439 16.6833 18.3439 15.3167 17.501 14.4738L3.76525 0.738012C2.92235 -0.104884 1.55575 -0.104884 0.712852 0.738012C-0.130044 1.58091 -0.130044 2.94751 0.712852 3.79041L12.9224 16L0.712852 28.2096C-0.130044 29.0525 -0.130044 30.4191 0.712852 31.262C1.55575 32.1049 2.92235 32.1049 3.76525 31.262L17.501 17.5262ZM13.812 18.1584H15.9748V13.8416H13.812V18.1584Z" fill="black"/></svg>',
  })


  const swiper = new Swiper('.placement .swiper', {
    loop: false,
    breakpoints: {
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    pagination: {
          el: ".placement .swiper-pagination",
          type: "progressbar",
        },
    // Navigation arrows
    navigation: {
      nextEl: '.placement .swiper-button-next',
      prevEl: '.placement .swiper-button-prev',
    },

  })

  const swiper2 = new Swiper('.reviews .swiper', {
    loop: false,
    breakpoints: {
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    pagination: {
          el: ".reviews .swiper-pagination",
          type: "progressbar",
        },
    // Navigation arrows
    navigation: {
      nextEl: '.reviews .swiper-button-next',
      prevEl: '.reviews .swiper-button-prev',
    },

  })


  /* Yandex Map */
 // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [53.046075, 106.847381],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([53.046075, 106.847381], 
      {
        balloonContent:
          `
          <div class="balloon">
            <div class="balloon__address">База отдыха "Фрегат"</div>
            <div class="balloon__contacts">
              <a href="tel:89148952655">8 (914) 895-26-55</a>
            </div>
          </div>
          `
      }, 
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts/location-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
      }
    );

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(myPlacemark);
    //myPlacemark.balloon.open();
  }

});