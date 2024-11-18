const { read } = require("fs")

function sumAll(...all) {
	return all.reduce((acc, n) => {
		return acc + n
	}, 10)
}
// console.log(sumAll(2,4,56,3,22));

const person = {
	name: 'Danil',
	lastName: 'Mishun',
	year: 2006,
	isProgrammer: true,
	info: function (pow2) {
		console.log('My name', this.name)
		console.log(pow2)
	},
}

const { name, lastName, info, notFound = 404 } = person // Деструктуризация

// Object.keys(person).forEach(key => console.log(person[key]))

const person2 = { name: 'Max' }

// function pow2(a) {
// 	return a ** 2
// }

// const bound = person.info.bind(person2, pow2(2))
// bound()

// person.info.call(person2, 1, 2, 3) //Параметры func info
// person.info.apply(person2, [1,2,3])

// const delay = (fn, wait = 1000) => {
// 	setTimeout(fn, wait)
// }

// delay(() => {
// 	console.log("after 1s...");
// })

const delay = (wait = 1000) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, wait)
	})
}

delay(2500).then(() => {
	const num = 40
	return num
})


function readText(t) {
	return t.toString()
}

console.log(readText(123456))