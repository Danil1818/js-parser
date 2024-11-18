const puppeteer = require('puppeteer');
const fs = require('node:fs');


(async () => {
	const browser = await puppeteer.launch({ headless: false })
	const page = await browser.newPage()
	await page.goto('https://it-rating.ua/it-kompaniya')
	// await page.screenshot({ path: './screenshots/img.png' })
	// await new Promise(page => setTimeout(page, 5000))

	let urls = []

	let arr = await page.evaluate(() => {
		let text = Array.from(document.querySelectorAll('.company-item-name'), el => el.href)
		return text
	})

	urls.push(...arr)

	// await page.click('.pagination__links a:last-child')

	console.log(urls)

	let content = "asdfassfasdf"

	fs.writeFile('./text/urls.txt', JSON.stringify(urls), err => {
		if (err) {
			console.error(err)
		} else {
			// file written successfully
		}
	})

	// let emails = []

	// for(let i = 0; i < urls.length; i++) {
	// 	await page.goto(urls[i], {waitUntil: 'load'})

	// 	let email = await page.evaluate(() => {
	// 		let mail = document.querySelector('.sidebar__contact-row a:href').innerText
	// 		return mail
	// 	})
	// 	emails.push(mail)
	// }

	// console.log(emails)

	await browser.close()
})()
