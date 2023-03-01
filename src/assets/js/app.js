//masked inputs

Inputmask({"mask": "+7 (999) 999 - 99 - 99"}).mask('.phone-mask');

$('[data-fancybox=""]').fancybox({
  // Options will go here
});


// hero slider
$(() => {
  let swiperHero = new Swiper(".js-hero-slider", {
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function addZero(num){
    return (num > 9) ? num : '0' + num;
  }
});


// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})
