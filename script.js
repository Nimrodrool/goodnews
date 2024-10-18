const swiper = new Swiper('.card-wrapper', {
    // loop: true,
    // observer: true,
    // observeParents: true,
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  
  });