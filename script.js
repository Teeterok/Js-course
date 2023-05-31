"use strict";
// fisrt task
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "Введите число");
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("На сколько оцените его?", "");
const answer = movies[a]
const personalMovieDB {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false

}
personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

  




 const arrayOfNumbers = [];
 for (let i = 5; i <= 10; i++) {
 arrayOfNumbers[i - 5] = i;
 console.log(arrayOfNumbers);
}

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//        result[i] = arr[i]
//         console.log(result)    
//     } 

    
    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // for (let i = 0; i < data.length; i++) {
    //    if ( typeof data[i] === "number") {
    //     data[i] *= 2
    //    }

    //    if ( typeof data[i] === "string") {
    //     data[i] = data[i] + " - done"
    //    }
    //    console.log(data)
    // }
    

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }
    // console.log(result)


    const lines = 7;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i < lines.length; i++) {
    lines[i] = "\n"
    for(let j = 0; j <= result.length; j++) {
        result[j] =  "*"
        
    }
   
   console.log(result)
}
