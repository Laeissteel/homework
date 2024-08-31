(function () {

  const examples = new Swiper('.examples__swiper', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    // allowTouchMove: false,

    navigation: {
      nextEl: ".examples__button-next",
      prevEl: ".examples__button-prev",
    },

    pagination: {
      el: '.examples__pagination',
      type: 'bullets',
    },

  });

  // ============================================
  // Сдайд 1

  let exampleGallery = new Swiper('.example-galery', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 10,
    freeMode:true,
    watchSlideProgress: true,
    
    
  });
  
  let examplePrev = new Swiper('.example-prev', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".example-prev__next",
      prevEl: ".example-prev__prev",
    },
    thumbs: {
      swiper: exampleGallery,
    },
  
  });

  // ================================
  // Слайд 2

  let exampleGallery2 = new Swiper('.example-galery-2', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 10,
    freeMode:true,
    watchSlideProgress: true,
    
    
  });
  
  let examplePrev2 = new Swiper('.example-prev-2', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".example-prev-2__next",
      prevEl: ".example-prev-2__prev",
    },
    thumbs: {
      swiper: exampleGallery2,
    },
  
  });

  // ================================
  // Слайд 3

  let exampleGallery3 = new Swiper('.example-galery-3', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 10,
    freeMode:true,
    watchSlideProgress: true,
    
    
  });
  
  let examplePrev3 = new Swiper('.example-prev-3', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".example-prev-3__next",
      prevEl: ".example-prev-3__prev",
    },
    thumbs: {
      swiper: exampleGallery3,
    },
  
  });






})()


