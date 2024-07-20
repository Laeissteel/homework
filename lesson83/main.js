// const user = {
//   name: 'Alex',
//   age: 23,
//   isAdmin: false
// }

// console.log(user.name)

// ===================================================

// const users = {
//   Alex: {
//     age: 23,
//     isAdmin: false
//   },
//   John: {
//     age: 20,
//     isAdmin: true,
//     sayHello(name) {
//       console.log(`Hello ${name}`)
//     }
//   }
// }

// console.log(users.John)
// users.John.sayHello('Tom')

// ===================================================

// const users = [
//   {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
//   },
//   {
//     name: 'John',
//     age: 27,
//     isAdmin: true
//   }
// ]

// Метод .push долбавляет элемент в конец массива

// users.push({
//   name: 'Ivan',
//   age: 27,
//   isAdmin: true
// })

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i])
// }

// Метод .toUpperCase выводит текст переменной в верхнем регистре

// const foo = 'hllo world'
// console.log(foo.toUpperCase())

// =======================================================================

// Домашнее задание
// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод объекта, который в качестве аргумента будет 
// принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). 
// Объявите отдельную переменную, в которой будет храниться количество простых пользователей, 
// начальное значение будет - 0. Обойдите массив пользователей 
// и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. 
// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

// const user = {
//   name: 'Ivan',
//   age: 24,
//   upsurge: 174,
//   weight: 78,
//   sayHello(name) {
//     console.log(`Hello ${name}`)
//   }
// }

// user.sayHello('Ivan')

// const users = [
//   {
//     name: 'Ivan',
//     age: 24,
//     upsurge: 174,
//     weight: 78,
//     isAdmin: false
//   },
//   {
//     name: 'Oleg',
//     age: 24,
//     upsurge: 174,
//     weight: 78,
//     isAdmin: false
//   },
//   {
//     name: 'Micky',
//     age: 23,
//     upsurge: 170,
//     weight: 69,
//     isAdmin: false
//   },
//   {
//     name: 'Tom',
//     age: 24,
//     upsurge: 174,
//     weight: 66,
//     isAdmin: false
//   },
//   {
//     name: 'Alex',
//     age: 29,
//     upsurge: 164,
//     weight: 78,
//     isAdmin: true
//   },
//   {
//     name: 'John',
//     age: 56,
//     upsurge: 178,
//     weight: 90,
//     isAdmin: false
//   },
//   {
//     name: 'Mary',
//     age: 18,
//     upsurge: 161,
//     weight: 52,
//     isAdmin: false
//   },
// ]

// let normUsers = 0

// for (let i = 0; i < users.length; i++) {
//   if (users[i].isAdmin === false) {
//     normUsers++
//   }
// }

// console.log(normUsers)

// ====================================================================

const users = [
  {
    name: 'Alex',
    age: 27,
    role: 'isNotAdmin'
  },
  {
    name: 'Alex',
    age: 27,
    role: 'isNotAdmin'
  },
  {
    name: 'Alex',
    age: 27,
    role: 'isNotAdmin'
  },
  {
    name: 'Alex',
    age: 27,
    role: 'admin'
  },
  {
    name: 'Alex',
    age: 27,
    role: 'isNotAdmin'
  },
  {
    name: 'Alex',
    age: 27,
    role: 'isNotAdmin'
  }
]

let normalUsers = 0

for(let i = 0; i < users.length; i++) {
  if(users[i].role === 'isNotAdmin') {
    normalUsers++
  }
}

console.log(`Всего простых пользователей: ${normalUsers}`)

