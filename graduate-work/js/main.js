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


  // ----------------------------------------------
  // Модалка

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.header__button')
  const mobilPhone = document.querySelector('.mobil__phone')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)
  mobilPhone.addEventListener('click', openModal)

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

  


})()



// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });