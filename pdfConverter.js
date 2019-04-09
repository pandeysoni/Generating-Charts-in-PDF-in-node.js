const puppeteer = require('puppeteer');

async function convert_html_string_to_pdf(html_string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('requestfailed', request => {
    })
    page.on('requestfinished', request => {
        resp = request.response()
    })
   
    await page.goto('data:text/html,' + html_string, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: 'index.pdf', format: 'A4', printBackground: true, displayHeaderFooter: true,
        footerTemplate: `<style>@font-face{font-family:Lato;src:url('http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext') font-style:Regular} )}h1,h2,h3,h4,h5,h6,p,span{font-family:Lato}</style><p style="-webkit-print-color-adjust: exact;color:#294E79;font-size: 7pt; text-align:center; margin-left:225px;">Copyright © thepandeysoni.org 2019</p>`,
        margin: {
            bottom: "50px"
          }
       });
    console.log("File has been saved as mentioned path.")
    await browser.close()
}


exports.convert_html_string_to_pdf = convert_html_string_to_pdf;