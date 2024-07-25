// Ниже прописана самовызывающаяся функция для того, чтобы создать локальную область видимости. Весь функционал прописывается в этой функции (области видимости)ю Это нужно, чтобы объявленные внутри нее переменные не создали конфликт в будущем, если придется позднее объявлять переменную с таким же именем.

// (function() {
//   const burgerIcon = document.querySelector('.burger-icon')
//   const body = document.querySelector('.body')
//   const navList = document.querySelector('.nav__list')
  
//   const openMenu = () => {
//     body.classList.add('body--opened-menu')
//   }
  
//   const closeMenu = () => {
//     body.classList.remove('body--opened-menu')
//   }
  
//   burgerIcon.addEventListener('click', () => {
//     if(body.classList.contains('body--opened-menu')) {
//       closeMenu()
//     } else {
//       openMenu()
//     }
//   })
  
//   navList.addEventListener('click', () => {
//     if(body.classList.contains('body--opened-menu')) {
//       closeMenu()
//     } else {
//       openMenu()
//     }
//   })

// })()

(function() {         // создали самовызывающуюся функцию

  document.addEventListener('click', burgerInit ) //повесили слушатель на документ и по клику в любом месте документа будет проичходить указанная функция burgerInit

  function burgerInit(e) {  // создали фукцию 
    

    const burgerIcon = e.target.closest('.burger-icon') 
    const burgerNavLink = e.target.closest('.nav__link')

    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth >900) return
    
    if(!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

    
  }



})()
