(function () {         

  // Бургер

  document.addEventListener('click', burgerInit) 

  function burgerInit(e) {  


    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    const headerButton = e.target.closest('.header__button')

    if (!burgerIcon && !burgerNavLink && !headerButton) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }


  // ----------------------------------------------
  // Модалка звонок

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.header__button')
  const mobilPhone = document.querySelector('.mobil__phone')

  modalButton.addEventListener('click', openModal)
  mobilPhone.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)
  

  function openModal(e) {
    e.preventDefault()           
    document.body.classList.toggle('body--opened-coll')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cansel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-coll')
    }

  }

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && document.body.classList.contains('body--opened-coll')) {
      document.body.classList.remove('body--opened-coll')
    }
  })

  // модалка монтаж

  const modalMontage = document.querySelector('.modal-montage')
  const montageButton = document.querySelector('.montage__button')

  montageButton.addEventListener('click', openModalMontage)
  modalMontage.addEventListener('click', closeModalMontage)

  function openModalMontage(e) {
    e.preventDefault()            
    document.body.classList.toggle('body--opened-modal-montage')
  }

  function closeModalMontage(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cansel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal-montage')
    }

  }

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal-montage')) {
      document.body.classList.remove('body--opened-modal-montage')
    }
  })

  // =================================================

  const tabControls = document.querySelector('.tabs__controls') 

  tabControls.addEventListener('click', toggleTab) 

  function toggleTab(e) {
    
    const tabControl = e.target.closest('.tabs__link')  

    if (!tabControl) return     
    
    e.preventDefault()      

    if (tabControl.classList.contains('tabs__item--active')) return 

    const tabContentID = tabControl.getAttribute('href')

    if (document.querySelector('.tabs__item--active')) {
      document.querySelector('.tabs__item--active').classList.remove('tabs__item--active') 
    }
    if (document.querySelector('.program__tab-content--show')) {
      document.querySelector('.program__tab-content--show').classList.remove('program__tab-content--show') 
    }

    document.querySelector(tabContentID).classList.add('program__tab-content--show') 

    tabControl.classList.add('tabs__item--active') 


    const tabActionField = document.querySelector(tabContentID);
    const tabAction = tabActionField.parentElement;
    const tabActionVisible = document.querySelector('.tab-action--visible')

    tabAction.classList.add('tab-action--visible')

    if (tabAction != tabActionVisible) {
      tabAction.style.maxHeight = null;
    }

    if (tabAction.classList.contains('tab-action--visible')) { 
      tabAction.style.maxHeight = tabAction.scrollHeight + 'px'; 
    } else {
      accordionContent.style.maxHeight = null;  
    }

  }

  // ================================================================
  // Слайдер план работы

  if (document.documentElement.clientWidth < 900) {
    new Swiper('.order__swiper', {
      loop: false,

      spaceBetween: 20,
      slidesPerView: 1.1,

      breakpoints: {
        375: {
          slidesPerView: 1.5,
        },
        501: {
          slidesPerView: 2,
        },
        701: {
          slidesPerView: 2.5,
        },
      },

      navigation: {
        nextEl: '.order__nav__next',
        prevEl: '.order__nav__prev',
      },

    });
  }

  // ==============================================
  // Аккордион


  const accordionLists = document.querySelectorAll('.accordion-list') 

  accordionLists.forEach(el => {       

    el.addEventListener('click', (e) => { 

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
      
      const accordionControl = e.target.closest('.accordion-list__control');  
      if (!accordionControl) return
      e.preventDefault() 
      const accordionItem = accordionControl.parentElement;  
      const accordionContent = accordionControl.nextElementSibling; 

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('accordion-list__item--opened');  

      if (accordionItem.classList.contains('accordion-list__item--opened')) { 
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
      } else {
        accordionContent.style.maxHeight = null;  
      }
    });

  });


  // ======================================================
  // Маска

  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(telInputs);


})()
