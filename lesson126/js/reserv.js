// // Ниже прописана самовызывающаяся функция для того, чтобы создать локальную область видимости. Весь функционал прописывается в этой функции (области видимости)ю Это нужно, чтобы объявленные внутри нее переменные не создали конфликт в будущем, если придется позднее объявлять переменную с таким же именем.

// const Inputmask = require("./inputmask.min")


(function () {         // создали самовызывающуюся функцию

  // Бургер

  document.addEventListener('click', burgerInit) //повесили слушатель на документ и по клику в любом месте документа будет проичходить указанная функция burgerInit

  function burgerInit(e) {  // создали фукцию 


    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }

  // ============================================================
  //  Модалка

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()            // используется для отмены действия по умолчанию, которое обычно выполняется в ответ на определённое событие.
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cansel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
    }

  }

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && document.body.classList.contains('body--opened-modal')) {
      document.body.classList.remove('body--opened-modal')
    }
  })

  // ============================================
  // Табы 

  const tabControls = document.querySelector('.tab-controls') // задаем переменную с элементом с классом tab-controls

  // используем делегирование событий по этому элементу и будем обрабатывать все клики на нем

  tabControls.addEventListener('click', toggleTab) // добавляем слушательБ событие click и прописываем функцию

  function toggleTab(e) {
    // добавляем проверку
    const tabControl = e.target.closest('.tab-controls__link')  // проверяем, ести у кнопки класс tab-controls__link

    if (!tabControl) return     // если tab-controls__link нет? то прекращаем функцию
    // если в кнопке ести класс tab-controls__link, то делаем следующее
    e.preventDefault()      // отменяем дефолтное поведение ссылки

    if (tabControl.classList.contains('tab-controls__link--active')) return // если у элемента имеется класс tab-controls__link--active, функция возвращается

    const tabContentID = tabControl.getAttribute('href') // объявляем переменную в которой при клике определяется знаяение указанное в href
    // далее при клике на tab-controls__link нужно навешивать на program__tab-content модификатор program__tab-content--show с соответствующим ID. При этом на предыдущем активном элементе нужно убирать данный класс

    if (document.querySelector('.tab-controls__link--active')) {
      document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active') // проверяем есть ли у элемента по которому происходит клик класс tab-controls__link--active. И если есть, то удаляем его
    }
    if (document.querySelector('.program__tab-content--show')) {
      document.querySelector('.program__tab-content--show').classList.remove('program__tab-content--show') // проверяем есть ли у элемента по которому происходит обращение по ID класс program__tab-content--show. И если есть, то удаляем его
    }

    document.querySelector(tabContentID).classList.add('program__tab-content--show') // при клике на кнопку с href элементу с данным ID добавляется класс program__tab-content--show

    tabControl.classList.add('tab-controls__link--active') // при клике добавляем класс tab-controls__link--active




    // console.log(tabControl.getAttribute('href'))    // выводит в консоль значение записанное в href элемента


  }

  // ============================================
  // Аккордеон

  const accordionLists = document.querySelectorAll('.accordion-list') // в данную переменную записываем все accordion-list

  // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';  // данная запись используется если по дизайну необходимо будет, чтобы при загрузке страницы один из аккордеонов был открыт

  accordionLists.forEach(el => {       // пробегаемся по каждому из них

    el.addEventListener('click', (e) => { // для каждого из них навешиваем обработчик событий click и далее используем делегирование событий

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
      
      const accordionControl = e.target.closest('.accordion-list__control');  // записываем в переменноую accordion-list__control
      if (!accordionControl) return   // еслеи это не accordionControl, то прекращаем выполнение функции
      const accordionItem = accordionControl.parentElement;  // записываем в переменную родительский элемент кнопки по которой кликнули
      const accordionContent = accordionControl.nextElementSibling; // выбираем следуещий елемент после accordionControl

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('accordion-list__item--opened');  // для accordionItem навешиваем класс accordion-list__item--opened

      if (accordionItem.classList.contains('accordion-list__item--opened')) { // делаем проверку. Если данный элемент находится под воздействием модификатора accordion-list__item--opened
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; // тогда мы проиписываем стиль для контента. Увеличиваем его максимальную высоту на высоту элемента как если бы он небыл скрыт и на нее мы этот элемент увеличиваем
      } else {
        accordionContent.style.maxHeight = null;  // иначе мы обнуляем
      }
    });


  });
  // ============================================
  // Слайды галерея

  new Swiper('.gallery__slider', {

    loop: false,

    slidesPerView: 1.5,
    spaceBetween: 15,
  
    // If we need pagination
    pagination: {
      el: '.gallery__pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    // Работают как медиазапросы, только есть отличие. Сдесь указывается 320px и более.
    breakpoints: {
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }

  });

// ====================================================

new Swiper('.testimonials__slider', {

  loop: false,
  

  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

  scrollbar: {
    el: '.testimonials__scrollbar',
    draggable:true,
  },

  breakpoints: {
    901: {
      slidesPerView: 1.5,
    },
    1101: {
      slidesPerView: 2,
    }
  }



});

// =============================
// Маска телефона

const telInputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99');
im.mask(telInputs);

})()







// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });