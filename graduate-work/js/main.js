(function () {         // создали самовызывающуюся функцию

  // Бургер

  document.addEventListener('click', burgerInit) //повесили слушатель на документ и по клику в любом месте документа будет проичходить указанная функция burgerInit

  function burgerInit(e) {  // создали фукцию 


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
    e.preventDefault()            // используется для отмены действия по умолчанию, которое обычно выполняется в ответ на определённое событие.
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
    e.preventDefault()            // используется для отмены действия по умолчанию, которое обычно выполняется в ответ на определённое событие.
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

  const tabControls = document.querySelector('.tabs__controls') // задаем переменную с элементом с классом tab-controls

  // используем делегирование событий по этому элементу и будем обрабатывать все клики на нем

  tabControls.addEventListener('click', toggleTab) // добавляем слушательБ событие click и прописываем функцию

  function toggleTab(e) {
    // добавляем проверку
    const tabControl = e.target.closest('.tabs__link')  // проверяем, ести у кнопки класс tab-controls__link

    if (!tabControl) return     // если tab-controls__link нет? то прекращаем функцию
    // если в кнопке ести класс tab-controls__link, то делаем следующее
    e.preventDefault()      // отменяем дефолтное поведение ссылки

    if (tabControl.classList.contains('tabs__item--active')) return // если у элемента имеется класс tab-controls__link--active, функция возвращается

    const tabContentID = tabControl.getAttribute('href') // объявляем переменную в которой при клике определяется знаяение указанное в href
    // далее при клике на tab-controls__link нужно навешивать на program__tab-content модификатор program__tab-content--show с соответствующим ID. При этом на предыдущем активном элементе нужно убирать данный класс

    if (document.querySelector('.tabs__item--active')) {
      document.querySelector('.tabs__item--active').classList.remove('tabs__item--active') // проверяем есть ли у элемента по которому происходит клик класс tab-controls__link--active. И если есть, то удаляем его
    }
    if (document.querySelector('.program__tab-content--show')) {
      document.querySelector('.program__tab-content--show').classList.remove('program__tab-content--show') // проверяем есть ли у элемента по которому происходит обращение по ID класс program__tab-content--show. И если есть, то удаляем его
    }

    document.querySelector(tabContentID).classList.add('program__tab-content--show') // при клике на кнопку с href элементу с данным ID добавляется класс program__tab-content--show
    // document.querySelector(tabContentID).classList.add('tab-action--active') // при клике на кнопку с href элементу с данным ID добавляется класс program__tab-content--show

    tabControl.classList.add('tabs__item--active') // при клике добавляем класс tab-controls__link--active


    const tabActionField = document.querySelector(tabContentID);
    const tabAction = tabActionField.parentElement;
    const tabActionVisible = document.querySelector('.tab-action--visible')

    tabAction.classList.add('tab-action--visible')

    if (tabAction != tabActionVisible) {
      tabAction.style.maxHeight = null;
    }

    if (tabAction.classList.contains('tab-action--visible')) { // делаем проверку. Если данный элемент находится под воздействием модификатора accordion-list__item--opened
      tabAction.style.maxHeight = tabAction.scrollHeight + 'px'; // тогда мы проиписываем стиль для контента. Увеличиваем его максимальную высоту на высоту элемента как если бы он небыл скрыт и на нее мы этот элемент увеличиваем
    } else {
      accordionContent.style.maxHeight = null;  // иначе мы обнуляем
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


  const accordionLists = document.querySelectorAll('.accordion-list') // в данную переменную записываем все accordion-list

  // document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';  // данная запись используется если по дизайну необходимо будет, чтобы при загрузке страницы один из аккордеонов был открыт

  accordionLists.forEach(el => {       // пробегаемся по каждому из них

    el.addEventListener('click', (e) => { // для каждого из них навешиваем обработчик событий click и далее используем делегирование событий

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
      
      const accordionControl = e.target.closest('.accordion-list__control');  // записываем в переменноую accordion-list__control
      if (!accordionControl) return   // еслеи это не accordionControl, то прекращаем выполнение функции
      e.preventDefault() 
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


  // ======================================================
  // Маска

  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(telInputs);







})()


// accordionItem.classList.toggle('accordion-list__item--opened');


// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });