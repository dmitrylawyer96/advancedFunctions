'use strict';

// № 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно 
// від їх кількості (але без використання вбутованого об'єкту Math). Використайте оператор розширення:

// console.log(addThemAll(2,4)); // 6
// console.log(addThemAll(1,2,3,4)); // 10
// console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
      let something = 0;
  
      for (let arg of args) {
        something += arg;
      };
  
      return something;
    }


// № 2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b

// console.log(multiply(5)(5))		// 25*
// console.log(multiply(2)(-2))	 // -4*
// console.log(multiply(4)(3))		// 12*


function multiply(a) { 
  // тут ваш код*
  return function (b) {
    return a * b;
  }; 
}



// № 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. 
// Функція буде приймати два аргумента:
// 1) властивість за якою треба посортувати 2) опцію напрямку сортування, зростання чи спадання

const movies = [
  {
  movieName: 'The Thing',
  releaseYear: 1982,
  directedBy: 'Carpenter',
  runningTimeInMinutes: 109,
  },
  {
  movieName: 'Aliens',
  releaseYear: 1986,
  directedBy: 'Cameron',
  runningTimeInMinutes: 137,
  },
  {
  movieName: 'Men in Black',
  releaseYear: 1997,
  directedBy: 'Sonnenfeld',
  runningTimeInMinutes: 98,
  },
  {
  movieName: 'Predator',
  releaseYear: 1987,
  directedBy: 'McTiernan',
  runningTimeInMinutes: 107,
  },
  ];
  
  // console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
  // console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
  // console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
  

  function byProperty(property, direction) {
    // тут ваш код*
    return function(a, b) {
        if (direction === '>') {
            if (a[property] > b[property]) {
                return 1;
            }
            if (a[property] < b[property]) {
                return -1;
            }
            return 0;
        } else if (direction === '<') {
            if (a[property] > b[property]) {
                return -1;
            }
            if (a[property] < b[property]) {
                return 1;
            }
            return 0;
        }
    }
  }

  const sorted1 = movies.sort(byProperty('releaseYear', '<'));
  console.log(sorted1);

//   const sorted2 = movies.sort(byProperty('runningTimeInMinutes', '<'));
//   console.log(sorted2);

//   const sorted3 = movies.sort(byProperty('movieName', '>'));
//   console.log(sorted3);
  

// № 4. Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. 
// Напишіть її двома варіантами:
// Використовуючи setInterval
// Використовуючи вкладений setTimeout

// detonatorTimer(3);
// *// 3
// // 2
// // 1
// // BOOM!*

function detonatorTimer(delay) {
  // тут ваш код*	
    let countDown = delay;
    const timer = setInterval(() => {
      if (countDown > 0) {
        console.log(countDown);
        countDown--;
      } else {
        console.log('BOOM!');
        clearInterval(timer);
      }
    }, 1000);
  }

  detonatorTimer(3);


// № 5. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. Наприклад:

    let dima = {
        firstname: 'Dima',
        lastname: 'Loshak',
        nationality: 'Ukrainian',
        year: 2023,
        hello() {
        console.log(`My fullname is ${this.firstname + " " + this.lastname} and I am ${this.nationality}`);
        },
        wish() {
        console.log(`Ukraine will win the war with russia in ${this.year}`);
        }
    }

    // dima.hello();
    // dima.wish();

// № 6. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - аби вони були захищені від перезапису об'єкту
//  і їх можна було викликати в таймері:


let securedSelfhello = dima.hello.bind(dima);
let securedSelfwish = dima.wish.bind(dima);


setTimeout(securedSelfhello, 1000); 
setTimeout(securedSelfwish, 2000); 


// № 7. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.

// function someFunction // тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль


function slower(func, seconds) {
  // тут ваш код для декоратора*
  return function() {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => func.apply(this, arguments), seconds * 1000);
  }
}

function myFunction(arg1, arg2) {
  console.log(`The arguments are ${arg1} and ${arg2}`);
}

let slowedFunction = slower(myFunction, 5);

slowedFunction("hello", "world");

// виведе в консоль "Chill out, you will get you result in 5 seconds"
//...через 5 секунд виведе результат роботи 'someFunction*'