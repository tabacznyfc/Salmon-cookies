'use strict'
// store hours
var hours =['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

//store names
var nameStores = [pikeStore,seaTac,seattleCenter,capHill,alki];

//store Objects

function Store(name, min, max, avgCookie) {
  newStore.name = name;
  newStore.min = min;
  newStore.max = max;
  newStore.avgCookie = avgCookie;
  newStore.totalSales = 0;
  newStore.hourSales = [];
  return newStore;

}
Stores.prototype.storeRandomCust = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
Stores.prototype.storeHourlySales = function() {
  for (var i = 0; i < hours.length; i++){
    var randCookies = Math.floor(this.avgCookie * this.storeRandomCust());
    this.hourSales.push(randCookies);
    this.totalSales += randCookies;
    }
};
Stores.prototype.render = function() {
  this.storeHourlySales();
  var storeEl = document.getElementById('shops');
  var newStoreEl = document.createElement('section');
  storeEl.appendChild(newStoreEl);
  var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendChild(liEl);
  };

  var liElTotes = document.createElement('li');
  liElTotes.textContent = 'Total Sales: ' + this.totalSales
  ulEl.appendChild(liElTotes);
  newStoreEl.textContent = this.name;
  newStoreEl.appendChild(ulEl);
};


  var pikeStore = newStore('Pike Place','23','65','6.3');
  var seaTac = newStore('SeaTac','3','24','1.2');
  var seattleCenter = newStore('Seattle Center','11','38','3.7');
  var capHill = newStore('Capital Hill','20','38','2.3');
  var alki = newStore('Alki','2','16','4.6');

  //might render stores
  for(int i = 0; i< nameStores, i++){
    this.render();
  }
