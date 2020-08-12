'use strict'

//proof of life
console.log('ITS ALIVE!')

var storeHourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customersEachHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSoldToday: 0,

  calculateCustomersEachHour: function () {
    for (var i = 0; i < storeHourArr.length; i++) {
      var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customers);
    }
  },

  calculateCookiesEachHour: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesSoldPerHour.push(cookies);
      this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
    }
  },

  render: function() {
    var storeName = document.getElementById('seattle-name')
    storeName.textContent = this.name;

    var 
    
  }
} 

seattle.render ();

var tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  customersEachHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSoldToday: 0,

  calculateCustomersEachHour: function () {
    for (var i = 0; i < storeHourArr.length; i++) {
      var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customers);
    }
  },

  calculateCookiesEachHour: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesSoldPerHour.push(cookies);
      this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
    }
  },

  render: function() {
    var storeName = document.getElementById('tokyo-name')
    storeName.textContent = this.name;
  }
} 

tokyo.render();


var dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  customersEachHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSoldToday: 0,

  calculateCustomersEachHour: function () {
    for (var i = 0; i < storeHourArr.length; i++) {
      var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customers);
    }
  },

  calculateCookiesEachHour: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesSoldPerHour.push(cookies);
      this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
    }
  },

  render: function (){
    var storeName = document.getElementById('dubai-name')
    storeName.textContent = this.name;
  }

} 

dubai.render();

var paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  customersEachHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSoldToday: 0,

  calculateCustomersEachHour: function () {
    for (var i = 0; i < storeHourArr.length; i++) {
      var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customers);
    }
  },

  calculateCookiesEachHour: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesSoldPerHour.push(cookies);
      this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
    }
  },

  render: function () {
    var storeName = document.getElementById('paris-name')
    storeName.textContent = this.name;
  }
} 

paris.render();

var lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  customersEachHour: [],
  cookiesSoldPerHour: [],
  totalCookiesSoldToday: 0,

  calculateCustomersEachHour: function () {
    for (var i = 0; i < storeHourArr.length; i++) {
      var customers = getRandomNumber(this.minCustomer, this.maxCustomer);
      this.customersEachHour.push(customers);
    }
  },

  calculateCookiesEachHour: function () {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.avgCookieSale);
      this.cookiesSoldPerHour.push(cookies);
      this.totalCookiesSoldToday = this.totalCookiesSoldToday + this.cookiesSoldPerHour[i];
    }
  },

  render: function () {
    var storeName = document.getElementById('lima-name')
    storeName.textContent = this.name;
  }
} 

lima.render();





