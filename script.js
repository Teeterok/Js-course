"use strict";


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его?", "");

//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("error");
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);




// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`, "");
//     }

// }
// writeYourGenres();


// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
//     console.log(arrayOfNumbers);
// }

// // const arr = [3, 5, 8, 16, 20, 23, 50];
// //     const result = [];

// //     for (let i = 0; i < arr.length; i++) {
// //        result[i] = arr[i]
// //         console.log(result)
// //     }


// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// // for (let i = 0; i < data.length; i++) {
// //    if ( typeof data[i] === "number") {
// //     data[i] *= 2
// //    }

// //    if ( typeof data[i] === "string") {
// //     data[i] = data[i] + " - done"
// //    }
// //    console.log(data)
// // }


// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = [];

// // for (let i = 1; i <= data.length; i++) {
// //     result[i - 1] = data[data.length - i]
// // }
// // console.log(result)


// const lines = 7;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i < lines.length; i++) {
//     lines[i] = "\n"
//     for (let j = 0; j <= result.length; j++) {
//         result[j] = "*";

//     }

//     console.log(result)
// }

// // Правильное использование функции
// const sum = 40

// function calc(a, b) {
//     console.log(a + b)
// }

// calc(10, sum)

// function sayHello(name) {
//     console.log(name)
// }
// sayHello("John")

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1]
// }
// returnNeighboringNumbers(5)


// function getMathResult(num, times) {
//     if (typeof (times) !== "number" || times <= 0) {
//         return num
//     }

//     let str = ""
//     for (let i = 1; i < times; i++) {
//         if (i === times) {
//             str += `${num * i}`
//         }
//         else {
//             str += `${num * i}---`
//         }
//     }
//     return str
// }
// getMathResult(10, 5);

// const logg = "Hello world"
// console.log(logg.slice(6, 10))

// let question;
// function writeYourGenres() {
//     question = prompt("Ваш любимый жанр под", "");

//     while (question === "" || question === !isNaN(question) || question === null) {

//         question = prompt("Ваш любимый жанр под", "");
//     }
// }
// writeYourGenres();

function calculateVolumeAndArea(length) {
	if (typeof (length) !== "number" || length < 0 || !Number.isInteger(length)) {
		return "При вычислении произошла ошибка";
	}

	let volume = 0,
		area = 0;

	volume = length * length * length;
	// length ** 3 - это тоже самое, что и выше или варианты через цикл.
	// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
	area = 6 * (length * length);

	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);


function getCoupeNumber(seatNumber) {
	if (seatNumber < 0 || !Number.isInteger(seatNumber) || typeof (seatNumber) !== "number")
		return "Ошибка. Проверьте правильность введенного номера места";

	if (seatNumber === 0 || seatNumber > 36) {
		return "Таких мест в вагоне не существует";
	}
	return Math.ceil(seatNumber / 4);
}

getCoupeNumber(33);

// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
	if (typeof (minutesTotal) !== "number" || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
		return "Ошибка, проверьте данные";
	}

	const hours = Math.floor(minutesTotal / 60);
	const minutes = minutesTotal % 60;

	let hoursStr = "";

	switch (hours) {
		case 0:
			hoursStr = "часов";
			break;
		case 1:
			hoursStr = "час";
			break;
		case 2:
		case 3:
		case 4:
			hoursStr = "часа";
			break;
		default:
			hoursStr = "часов";
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	// Самое простое - это использовать Math.max :)
	// А оптимизировать такую проверку мы научимся совсем скоро
	if (typeof (a) !== "number" ||
		typeof (b) !== "number" ||
		typeof (c) !== "number" ||
		typeof (d) !== "number") {
		return 0;
	} else {
		return Math.max(a, b, c, d);
	}
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, "6", "10");

function fib(num) {
	if (typeof (num) !== "number" || num <= 0 || !Number.isInteger(num)) {
		return "";
	}

	let result = "";
	let first = 0;
	let second = 1;

	for (let i = 0; i < num; i++) {
		if (i + 1 === num) {
			result += `${first}`;
			// Без пробела в конце
		} else {
			result += `${first} `;
		}

		let third = first + second;
		first = second;
		second = third;
	}

	return result;
}

fib(5);

function copy(obj) {
	let objCopy = {};
	let key;
	for (key in obj) {
		objCopy[key] = obj[key];
	}
	return objCopy;
}
const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4,
	}
};
const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers);

const add = {
	d: 17,
	e: 20
};

console.log(Object.assign(numbers, add));

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "asdasdasd";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo",];
blogs = ["wordpress", "livejournal", "blogger"];
internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	}
};


function showExperience(plan) {

	let key;
	for (key in plan) {
		console.log(plan[key]);
	}

}
showExperience(personalPlanPeter);

function () {
	console.log(ads)
}
