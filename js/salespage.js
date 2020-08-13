'use strict'
var allStores = [];
var storeHourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('table');
var totalOfAllTotals = 0
var seattle = new StoreLocation('Seattle', 23, 65, 6.3)
var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2)
var dubai = new StoreLocation('Dubai', 11, 38, 3.7)
var paris = new StoreLocation('Paris', 20, 38, 2.3)
var lima = new StoreLocation('Lima', 2, 16, 4.6)


function StoreLocation(name, minCustomer, maxCustomer, avgCookieSale,) {
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
  for(var i = 0; i < storeHourArr.length; i++)
  var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
  this.customersEachHour.push(customers);
}

StoreLocation.prototype.calculateCookiesSoldPerHour = function (){
  for(var i=0; i<this.customersEachHour.length; i++);
  var cookies = Math.ceil(this.avgCookieSale * this.customersEachHour[i]);
  this.cookiesSoldPerHour.push(cookies);
  this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour;

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

function generateHeader(){
  var tableRow = document.createElement('tr')
  for (var i=0;i<storeHourArr.length; i++){
  var tableHeader = document.getElementById('th')
  tableHeader.textContent = storeHourArr[i];
  tableRow.appendChild(tableHeader);
  }
  parentElement.appendChild(tableRow);
}

function generateFooter( {
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

// I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateContent(){
  for(i=0;i<allStores.length;i++){
    allStores[i].calculateCustomersEachHour();
    allStores[i].calculateCookiesSoldPerHour();
    allStores[i].render();
  }
}

// calculateCustomersEachHour()
// calculateCookiesSoldPerHour()
// StoreLocation()
generateHeader()
generateContent()
generateFooter







// var seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   customersEachHour: [],
//   cookiesSoldPerHour: [],
//   totalCookiesSoldToday: 0,

//   calculateCustomersEachHour: function () {
//     for (var i = 0; i < storeHourArr.length; i++) {
//       var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
//       this.customersEachHour.push(customers);
//     }
//   },

//   calculateCookiesEachHour: function () {
//     for (var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
//       this.cookiesSoldPerHour.push(cookies);
//       this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
//     }
//   },

//   render: function() {
//     var storeName = document.getElementById('seattle-name');
//     storeName.textContent = this.name;

//     var parentElement = document.getElementById('seattle');
//     for(var i=0;i<this.cookiesSoldPerHour.length;i++){
//       var listItem = document.createElement('li');
//       listItem.textContent = `${storeHourArr[i]}: ${this.cookiesSoldPerHour[i]} cookies`
//       parentElement.appendChild(listItem);
//     }

//     listItem = document.createElement('li');
//     listItem.textContent = `Total: ${this.totalCookiesSoldToday} cookies`;
//     parentElement.appendChild(listItem);
    
//   },
// } 

// seattle.calculateCustomersEachHour ();
// seattle.calculateCookiesEachHour ();
// seattle.render();


// var tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   customersEachHour: [],
//   cookiesSoldPerHour: [],
//   totalCookiesSoldToday: 0,

//   calculateCustomersEachHour: function () {
//     for (var i = 0; i < storeHourArr.length; i++) {
//       var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
//       this.customersEachHour.push(customers);
//     }
//   },

//   calculateCookiesEachHour: function () {
//     for (var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
//       this.cookiesSoldPerHour.push(cookies);
//       this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
//     }
//   },

//   render: function() {
//     var storeName = document.getElementById('tokyo-name')
//     storeName.textContent = this.name;

//     var parentElement = document.getElementById('tokyo');
//     for(var i=0; i<this.cookiesSoldPerHour.length; i++){
//       var listItem = document.createElement('li');
//       listItem.textContent = `${storeHourArr[i]}; ${this.cookiesSoldPerHour[i]} cookies`;
//       parentElement.appendChild(listItem);
//     }

//     var listItem = document.createElement('li')
//     listItem.textContent = `Total: ${this.totalCookiesSoldToday}`
//     parentElement.appendChild(listItem);
//   },
// } 

// tokyo.calculateCustomersEachHour();
// tokyo.calculateCookiesEachHour();
// tokyo.render();


// var dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   customersEachHour: [],
//   cookiesSoldPerHour: [],
//   totalCookiesSoldToday: 0,

//   calculateCustomersEachHour: function () {
//     for (var i = 0; i < storeHourArr.length; i++) {
//       var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
//       this.customersEachHour.push(customers);
//     }
//   },

//   calculateCookiesEachHour: function () {
//     for (var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
//       this.cookiesSoldPerHour.push(cookies);
//       this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
//     }
//   },

//   render: function (){
//     var storeName = document.getElementById('dubai-name')
//     storeName.textContent = this.name;

//     var parentElement = document.getElementById('dubai')
//     for(var i=0;i<this.cookiesSoldPerHour.length;i++){
//       var listItem = document.createElement('li')
//       listItem.textContent = `${storeHourArr[i]}: ${this.cookiesSoldPerHour[i]} cookies`
//       parentElement.appendChild(listItem)
//     }

//     var listItem = document.createElement('li')
//     listItem.textContent = `Total : ${this.totalCookiesSoldToday}`
//     parentElement.appendChild(listItem)
//   },
// } 

// dubai.calculateCustomersEachHour ();
// dubai.calculateCookiesEachHour ();
// dubai.render();

// var paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   customersEachHour: [],
//   cookiesSoldPerHour: [],
//   totalCookiesSoldToday: 0,

//   calculateCustomersEachHour: function () {
//     for (var i = 0; i < storeHourArr.length; i++) {
//       var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
//       this.customersEachHour.push(customers);
//     }
//   },

//   calculateCookiesEachHour: function () {
//     for (var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
//       this.cookiesSoldPerHour.push(cookies);
//       this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
//     }
//   },

//   render: function () {
//     var storeName = document.getElementById('paris-name')
//     storeName.textContent = this.name;

//     var parentElement = document.getElementById('paris')
//     for(var i =0; i<this.cookiesSoldPerHour.length;i++){
//       var listItem = document.createElement('li');
//       listItem.textContent = `${storeHourArr[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       parentElement.appendChild(listItem);
//     }

//     var listItem = document.createElement('li')
//     listItem.textContent = `Total: ${this.totalCookiesSoldToday}`
//     parentElement.appendChild(listItem)
    
//   },
// } 

// paris.calculateCustomersEachHour ();
// paris.calculateCookiesEachHour ();
// paris.render();

// var lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   customersEachHour: [],
//   cookiesSoldPerHour: [],
//   totalCookiesSoldToday: 0,

//   calculateCustomersEachHour: function () {
//     for (var i = 0; i < storeHourArr.length; i++) {
//       var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
//       this.customersEachHour.push(customers);
//     }
//   },

//   calculateCookiesEachHour: function () {
//     for (var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
//       this.cookiesSoldPerHour.push(cookies);
//       this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
//     }
//   },

//   render: function () {
//     var storeName = document.getElementById('lima-name')
//     storeName.textContent = this.name;

//     var parentElement = document.getElementById('lima')
//     for(var i=0; i< this.cookiesSoldPerHour.length;i++){
//       var listItem = document.createElement('li')
//       listItem.textContent = `${storeHourArr[i]}: ${this.cookiesSoldPerHour[i]}`;
//       parentElement.appendChild(listItem);
//     }

//     var listItem = document.createElement('li')
//     listItem.textContent = `Total; ${this.totalCookiesSoldToday}`
//     parentElement.appendChild(listItem);
//   },
// } 

// lima.calculateCustomersEachHour ();
// lima.calculateCookiesEachHour ();
// lima.render();





