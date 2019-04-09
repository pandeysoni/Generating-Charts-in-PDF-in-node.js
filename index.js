const tmp = require('tmp');
const fs = require('fs');
const pdfConverter = require('./pdfConverter');
function htmlToPdf() {
  (async () => {
    try {
      const htmlData = fs.readFileSync('index.html').toString();
      await pdfConverter.convert_html_string_to_pdf(htmlData);
    } catch (err) {
      console.log("Error processing request: " + err);
    }
  })()
}
htmlToPdf();