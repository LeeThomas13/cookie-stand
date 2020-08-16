'use strict'
// debugger;

var allStores = [];
var storeHourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('table');
var totalOfAllTotals = 0

function StoreLocation(name, minCustomer, maxCustomer, avgCookieSale) {
  this.storeName = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customersEachHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesSoldToday = 0;
  allStores.push(this)
}

StoreLocation.prototype.calculateCustomersEachHour = function (){
  for(var i = 0; i < storeHourArr.length; i++){
    var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
    this.customersEachHour.push(customers);
  }
}

StoreLocation.prototype.calculateCookiesSoldPerHour = function (){
  for(var i=0; i<storeHourArr.length; i++){
    var cookies = Math.ceil(this.avgCookieSale * this.customersEachHour[i]);
    this.cookiesSoldPerHour.push(cookies);
    this.totalCookiesSoldToday += cookies;
  }
}

StoreLocation.prototype.render = function () {
  var tableRow = document.createElement('tr');
  for(var i=0;i<storeHourArr.length; i++){ 
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldPerHour[i];
    tableRow.appendChild(tableData);
  }

  var totalDailySales = document.createElement('td');
  totalDailySales.textContent = this.totalCookiesSoldToday;
  tableRow.appendChild(totalDailySales);
  parentElement.appendChild(tableRow);
}

new StoreLocation('Seattle', 23, 65, 6.3)
new StoreLocation('Tokyo', 3, 24, 1.2)
new StoreLocation('Dubai', 11, 38, 3.7)
new StoreLocation('Paris', 20, 38, 2.3)
new StoreLocation('Lima', 2, 16, 4.6)

function generateHeader(){
  var tableRow = document.createElement('tr')
  for (var i=0;i<storeHourArr.length; i++){
  var tableHeader = document.createElement('th')
  tableHeader.textContent = storeHourArr[i];
  tableRow.appendChild(tableHeader);
  }
  parentElement.appendChild(tableRow);
}

function generateFooter() {
  var tableRow = document.createElement('tr')

  for (var i=0; i<storeHourArr.length; i++){
    var hourlyTotals = 0

    for (var j=0; j < allStores.length; j++){
      hourlyTotals += allStores[j].cookiesSoldPerHour[i];
      totalOfAllTotals += allStores[j].cookiesSoldPerHour[i];
    }
    var tableData = document.createElement('td')
    tableData.textContent = hourlyTotals;
    tableRow.appendChild(tableData);
  }
  var tableFooterTotal = document.createElement('td')
  tableFooterTotal.textContent = totalOfAllTotals;
  tableRow.appendChild(tableFooterTotal)
  parentElement.appendChild(tableRow);
}

function generateContent(){
  for(var i=0;i<allStores.length;i++){
    allStores[i].calculateCustomersEachHour();
    allStores[i].calculateCookiesSoldPerHour();
    allStores[i].render();
  }
}

// I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// cookieForm.addEventListener('submit', function(){
//   event.preventDefault();
//   var minCust = parseInt(event.target.minCustomer.value);
//   var locations = event.target.location.value;
//   var maxCust = parseInt(event.target.maxCustomer.value);
//   var avgCookie = parseInt(event.target.avgCookieSale.value);

//   new StoreLocation(locations, minCust, maxCust, avgCookie);

//   parent.innerHTML = '';
//   generateHeader();
//   generateContent();
//   generateFooter();
// })

generateHeader();
generateFooter();
generateContent();






