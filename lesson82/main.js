// function sumNumbers(firstNumber, secondNumber) {
//   return firstNumber + secondNumber
// }

// const result = sumNumbers(4, 7)
// console.log(result)
// console.log(sumNumbers(-2,2))

// ==============================================================================

// Функция проверяет массив данных на наличие в нем указанного элемента

// const users = ['John', 'Ann', 'Alex', 'Max']

// const numbers = [1, 2, 3]

// function checkForCopyItem(array, item) {
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === item) {
//       return `There is a copy of the ${item} in array`
//     }
//   }
//   return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 2))

// ==============================================================================

// Стрелочная функция проверяет массив данных на наличие в нем указанного элемента.
// Работает так же как и предыдущая, но есть отличия которые пока не объяснили.

// const users = ['John', 'Ann', 'Alex', 'Max']

// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
// for(let i = 0; i < array.length; i++) {
//     if(array[i] === item) {
//       return `There is a copy of the ${item} in array`
//     }
//   }
//   return 'There is no such item in the array'
// }

// console.log(checkForCopyItem(numbers, 2))

// ==============================================================================

// Функция выводит Hello + имя пользователя

function userNam(name) {
  return 'Hello ' + name + '!'
}

console.log(userNam('Alex'))

// ==============================================================================

// Функция перебирает массив чисел и если число больше 10 то выводит в консоль

const numbers = [1, 3, 5, 7, 10, 23, 2, 12, 19]

function checkNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
}

checkNumbers(numbers)


// ==================================================================



function calk(num1, num2, operator) {
  if (operator == 'plus') {
    return num1 + num2
  } else if(operator == 'minus') {
    return num1 - num2
  } else if(operator == 'multiply') {
    return num1 * num2
  } else if(operator == 'divide') {
    return num1 / num2
  }
}

const result = calk(9, 3, 'plus')
console.log(result)