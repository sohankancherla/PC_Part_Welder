// ==UserScript==
// @name     PCPartPicker-Scrapper-Process
// @version  1
// @grant    none
// @include https://pcpartpicker.com/product/*
// ==/UserScript==

var success = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function finish() {
  if (success) {
    await sleep(2000);
    close();
  }
}


function init() {
  var type = document.querySelector('ol.list-unstyled > li:nth-child(1) > a:nth-child(1)').textContent;
  var typeP = type + '-pricing';
  
  var pid = parseInt(JSON.parse(window.localStorage.getItem('PIDSequence')));
  if (pid === null || isNaN(pid)) {
    pid = 0;
  } else {
    pid += 1;
  }
  
  var typeData = JSON.parse(window.localStorage.getItem(type));
  if (typeData === null) {
    typeData = [];
  }
  
  var typePricing = JSON.parse(window.localStorage.getItem(typeP));
  if (typePricing === null) {
    typePricing = [];
  }
  
  var types = JSON.parse(window.localStorage.getItem('Types'));
  if (types === null) {
    types = [];
  } else {
    if (types.findIndex(t => t == type) == -1) {
      types.push(type);
      types.push(typeP);
    }
  }
  
  var pidRegistry = JSON.parse(window.localStorage.getItem('PIDRegistry'));
  if (pidRegistry === null) {
    pidRegistry = [];
  }
  
  var productCode = window.location.pathname.substr(9, 6);
  if (pidRegistry.findIndex(t => t.ProductCode == productCode) != -1) {
    return; // Item exists
  }
    
  //Specs
  var data = {};
  data['PID'] = pid;
  document.getElementsByClassName('sidebar-content col xs-col-12 md-col-3 lg-col-3')[0].getElementsByClassName('block xs-hide md-block specs')[0].childNodes.forEach(node => {
    if (node.getAttribute != undefined && node.getAttribute('class') == 'group group--spec') {
      var titleNode = node.childNodes[1].innerText;
      var contentNode = node.childNodes[3];
      data[titleNode] = contentNode.innerText;
    }
  })
  typeData.push(data);
  
  //Pricing
  var prices = document.getElementById('prices').getElementsByTagName('tr')
  for (let i = 1; i < prices.length; i++) {
    if (prices[i].getAttribute('class') === null) {
      var pricingData = {};
      pricingData['PID'] = pid;
      pricingData['Merchant'] = prices[i].children[0].children[0].children[0].getAttribute('alt');
      pricingData['Availability'] = prices[i].children[5].textContent.replace(/^\s+|\s+$/g, '');
      pricingData['Total'] = parseFloat(prices[i].children[6].children[0].textContent.replace(/^\s+|\s+$/g, '').replace(/[^0-9\.]/g, ''));

      typePricing.push(pricingData);		
    }
  }
  
  //PID Registry
  pidRegistryData = {};
  pidRegistryData['PID'] = pid;
  pidRegistryData['ProductCode'] = productCode;
  pidRegistryData['ProductType'] = type;
  pidRegistryData['ProductName'] = document.title.replace('- PCPartPicker', '').trim();
  pidRegistry.push(pidRegistryData);

  window.localStorage.setItem(type, JSON.stringify(typeData));
  window.localStorage.setItem(typeP, JSON.stringify(typePricing));
  window.localStorage.setItem('Types', JSON.stringify(types));
  window.localStorage.setItem('PIDSequence', JSON.stringify(pid));
  window.localStorage.setItem('PIDRegistry', JSON.stringify(pidRegistry));
  
  success = true;
}





init();
finish();