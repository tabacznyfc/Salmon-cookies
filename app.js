'use strict'

// store hours
var hours =['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];
var pikeStore = new Stores ('Pike Place', 23, 65, 6.3);
var seaTac = new Stores('SeaTac', 3, 24, 1.2);
var seattleCenter = new Stores('Seattle Center', 11, 38, 3.7);
var capHill = new Stores('Capital Hill', 20, 38, 2.3);
var alki = new Stores('Alki', 2, 16, 4.6);


//store Objects
function Stores (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.avgCookie = avgCookie;
  this.totalSales = 0;
  this.hourSales = [];
};

//Random Customer
Stores.prototype.storeRandomCust = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
//Hours Sales
Stores.prototype.storeHourlySales = function() {
  for (var i = 0; i < hours.length; i++) {
    var randCookies = Math.floor(this.avgCookie * this.storeRandomCust());
    this.hourSales.push(randCookies);
    this.totalSales += randCookies;
    }
};

var dataTable = document.getElementById('salesTable');
var createRowEl = document.createElement('tr');
dataTable.appendChild(createRowEl);

// Populating table head
function tableHead() {
  var storeNames = document.createElement('th');
  storeNames.textContent ='Store';
  createRowEl.appendChild(storeNames);
  for (var i = 0; i < hours.length; i++) {
    var storeHours = document.createElement('th');
    storeHours.textContent = hours [i];
    createRowEl.appendChild(storeHours);
  }
  var storeTotal = document.createElement('th');
  storeTotal.textContent = 'Total Sales';
  createRowEl.appendChild(storeTotal);
}

tableHead();

Stores.prototype.render = function() {
  this.storeHourlySales();
  var storeEl = document.createElement('tr');
  storeEl.textContent = this.name;
  dataTable.appendChild(storeEl);

  for (var i = 0; i < hours.length; i++) {
    var dataEl = document.createElement('td');
    dataEl.textContent = this.hourSales[i];
    storeEl.appendChild(dataEl);
  };
  var totalEl = document.createElement('td');
  totalEl.textContent = this.totalSales;
  storeEl.appendChild(totalEl);
}
//Add new store button
// var button = document.getElementById('addStoreButton');
// var nameInput = document.getElementById('name');
// var minInput = document.getElementById('minCust');
// var maxInput = document.getElementById('maxCust');
// var avgInput = document.getElementById('avgCookie');
//
// function clearForm(event) {
//   nameInput.value = null;
//   minInput.value = null;
//   maxInput.value = null;
//   avgInput.value = null;
// }
//
// button.addEventListener('click',  function(event) {
//   event.preventDefault();
//   var getName = nameInput.value;
//   var getMin = minInput.value;
//   var getMax = maxInput.value;
//   var getAvg = avgInput.value;
//   var addStore = new Stores(getName, getMin, getMax, getAvg);
// });


pikeStore.render();
seaTac.render();
capHill.render();
seattleCenter.render();
alki.render();
