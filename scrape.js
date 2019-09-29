let Nightmare = require('nightmare');
let fs = require('fs');
let nightmare = Nightmare({ show: true });
nightmare
  .goto('https://www.southpearlstreet.com/merchants/')
  .wait('h4')
  .evaluate(() => {
    let merchantNodes = document.querySelectorAll('h4');
    let merchantList = [].slice.call(merchantNodes);
    return merchantList.map(merchant => {
      return merchant.innerText
    });
  })
  .end()
  .then(result => {
    fs.writeFileSync('testOutput.js', JSON.stringify(result));
    console.log(result);
  })
  .catch(error => {
    console.error('Search failed:', error);
  });