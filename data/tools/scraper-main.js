// ==UserScript==
// @name     PCPartPicker-Scrapper-Main
// @version  1
// @grant    GM.openInTab
// @include https://pcpartpicker.com/products/*
// ==/UserScript==

var links = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 

async function open() {
  // Wait in case of dynamic elements (after page load)
  await sleep(2000);
  
  var pidRegistry = JSON.parse(window.localStorage.getItem('PIDRegistry'));
  if (pidRegistry === null) {
    pidRegistry = [];
  }

  // Table hyperlink references
  var list = document.getElementsByClassName('td__name');
  for (let item of list) {
    links.push(item.childNodes[3].getAttribute('href'));
  }
  
  for (let i = 0; i < links.length; i++) {
    // Skip if product was already saved
    var productCode = links[i].substr(9, 6);
    var pidIndex = pidRegistry.findIndex(t => t.ProductCode == productCode);
    if (pidIndex != -1) {
      continue; // Item exists
    }
    
    // Open link and wait for data processing, wait between a random interval for bot checking.
    window.open('https://pcpartpicker.com' + links[i], '_blank');
  	await sleep(getRandomInt(3000,5000));
    
    // Check if product data was saved. This may wait for bot checking verification.
    while (true) {
      pidRegistry = JSON.parse(window.localStorage.getItem('PIDRegistry'));
      if (pidRegistry.findIndex(t => t.ProductCode == productCode) != -1) {
        break; // Item exists
    	}
      await sleep(2000);
    }
  }
  await sleep(2000);
  
  // Go to next page or stop and export from localstorage variable
  var pageNum = parseInt(document.getElementsByClassName('pagination--current')[0].innerText);
  var paginationList = document.getElementsByClassName('pagination list-unstyled xs-text-center')[0].children;
  var pageLast = parseInt(paginationList[paginationList.length - 1].innerText);
  
  if (pageNum != pageLast) {
  	window.open('https://pcpartpicker.com' + window.location.pathname + '#page=' + (pageNum + 1));
    await sleep(2000);
    window.close();
  } else {
    a = document.createElement('a');
    a.href = 'data:application/csv;charset=utf-8,' + encodeURIComponent(JSON.stringify(localStorage));
    a.download = 'Data' + '.json'
    document.getElementsByTagName('body')[0].appendChild(a);
    
    a.click();
  }
}




open();