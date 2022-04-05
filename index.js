const puppeteer = require('puppeteer')
const fs=require('fs')
const { title } = require('process')
let main=async ()=>{
  try{
    console.log('browser is opening...')
    let browser=await puppeteer.launch({headless:false,ignoreHTTPSErrors: true})
    console.log('opening new page...')
    let page = await browser.newPage()
    await page.setDefaultNavigationTimeout(300000);
    console.log('navigating to url')
    // await setDefaultNavigationTimeout(90000)
    await page.goto('https://www.scribd.com/books/Business',{waitUntil:"load"})
    console.log('getting page content')
    // const html=await page.content()
    // let titles=await html.getElementByClassName('_3Ny5GS').content
    // console.log(titles)
    // fs.writeFileSync("index.html",html)
    
    // console.log(await page.content())
    
    let document=await page.content()
    console.log('writing html file')
    // const titles = await page.evaluate(() => {
    //   document.getElementsByClassName('_3Ny5GS')
    // })
    // console.log(titles.content)
    const t = await page.getElementsByClassName("_3Ny5GS")
    //obtain text
    const titles = await (await t.getProperty('textContent')).toArray()

    console.log(titles)
    const a = await page.getElementsByClassName(".rGmJST")
    //obtain text
    const authors = await (await a.getProperty('textContent')).toArray()

    console.log(authors)
    const r = await page.getElementsByClassName(".AovU2y")
    //obtain text
    const ratings = await (await r.getProperty('textContent')).toArray()
    console.log(ratings)

    console.log(authors)
    result=[]
    for (i=0;i<titles.length;i++){
      book={
        title:titles[i],
        author:authors[i],
        rating:ratings[i]
      }
      result.push(book)


    }
    console.log(result)
    
    
    // console.log('clicking login button ')
    // let pageContent=await page.content()

    // await page.click('.header_login_btn');

    // await page.click('#details-button')

    } 
  catch(err){
    console.error(err)
  }
}
main();
