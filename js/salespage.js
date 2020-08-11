'Use Strict'

// proof of life
console.log('IM ALIVE');

var storeHourArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattle = {
  minCustomer = 23,
  maxCustomer = 65,
  avgCookieSale = 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],

  calculateCustomersEachHour: function () {
    for(var i=0; i < storeHourArr.length; i++);
    var customers = getRandomNumber(this.minCustomer,this.maxCustomer);
    this.customersEachHour.push(customer);
  }

  // calculateCookiesEachHour: function () {
  //   for(var i=0; i<)
  // }
}

seattle.calculateCustomersEachHour();
console.log(seattle)

//I got this from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
