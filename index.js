const puppeteer = require('puppeteer')

const main = async () => {
  const browser = await puppeteer.launch({ headless:false,ignoreHTTPErrors: true });

  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0);

  await page.goto('https://www.scribd.com/books/Business')
  
  console.log("server is connecting")
  await page.waitForSelector('._3Ny5GS')
	let element = await page.$('._3Ny5GS')
	let value = await page.evaluate(el => el.textContent, element)
	console.log(value)

//   await page.screenshot({ path: 'unsplash.png' })
await page.setDefaultNavigationTimeout(0);
  await browser.close()
}

main()
