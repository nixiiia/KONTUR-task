$(function () {
  $('.slider__list').slick({
    swipe: true,
    touchThreshold: 15,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});

const openModalBtn = document.getElementById('open-modal-btn');

const modal = document.getElementById('modal-window');

const modalInner = document.querySelector('.modal__inner');

const modalBox = (modal, modalInner);

openModalBtn.addEventListener('click', function () {
  modal.classList.add('open');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('open');
  }
});

modalBox.addEventListener('click', (event) => {
  event._isClickWithInModal = true;
});

modal.addEventListener('click', (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

const openMenuBtn = document.getElementById('open-menu-btn');

const menu = document.getElementById('menu');

openMenuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
});

openMenuBtn.addEventListener('click', function () {
  openMenuBtn.classList.toggle('active');
});

Fancybox.bind('[data-fancybox="gallery"]', {
  zoom: true,
  loop: false,
  arrows: true,
  infobar: false,
});

function init() {
  let map = new ymaps.Map('map', {
    center: [55.0289172, 82.9265426],
    zoom: 15,
  });

  let placemark = new ymaps.Placemark(
    [55.02907, 82.92604],
    {
      hintContent: 'Депутатская улица, 46',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './img/map-mark.png',
      iconImageSize: [50, 55],
      iconImageOffset: [-20, -45],
    },
  );

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
