'use strict'

var = pikeStore {  // 1st and Pike Store
  minCust: 23;
  maxCust: 65;
  avgCookie: 6.3;
  totalSales: 0;
  hourSales: [];

  storeRandCust: function() {  // random number
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
  storeHourlySale: function (){
    for (var i = 0; i < hours.length; i++) {
      hours[i]
      Math.floor(this.avgCookie * this.StoreRandCust());
      this.hourSales.push(randCookie);
      this.totalSales += randCookie;
    }
  }
  render: function() {
    this.storeHourlySale(); // Hourly Sales
    var sectionEl = document.getElmentById('PikePlace');
    sectionEl.textContent = 'Pike Place Store';
    var ulEl = document.createElement('ul)');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent =hours[i] + this.hourSales[i];
      ulEl.appendedChild(liEl);
    }
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Total Sales: ' + this.totalSales
    ulEl.appendedChild(liElTotal);
    sectionEl.appendedChild(ulEl);
  }
};
pikeStore.render();


var = seaTac {    // seaTac airport store
  minCust: 3;
  maxCust: 24;
  avgCookie: 1.2;
  totalSales: 0;
  hourSales: [];

  storeRandCust : function() { // random number
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
  storeHourlySale: function() {
    for (var i = 0; i < hours.length; i++) {
    var randCookie = math.floor(this.avgCookie * this.storeRandCust());
    this.hourSales.push(randCookie);
    this.totalSales += randCookie;
    }

  }
  render: function () { // Hourly Sales
    this.storeHourlySale();
    var sectionEl = document.getElmentById('seaTac');
    sectionEl.textContent = 'Sea Tac Store',
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liElTotal.text.content = hours[i] + this.hourSales[i];
      ulEl.appendedChild(liEl);
    }
      var liElTotal = document.createElement('li');
      liElTotal.textContent = 'Total Sales: ' + this.totalSales
      ulEl.appendedChild(liElTotal);
      sectionEl.appendedChild(ulEl);

    }
}

var = seattleCenter {   // Seattle Center store
  minCust: 11;
  maxCust: 38;
  avgCookie: 3.7;
  totalSales: 0;
  hourSales: [];

  storeRandCust :function () { // random number
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }

  storeHourlySale: function () { // Hourly Sales
    for (var i = 0; i < hours.length; i++) {
      var randCookie = Math.floor(this.avgCookie * this.storeRandCust());
      this.hourSales.push(randCookie);
      this.totalSales += randCookie;
    }

  }

  render: function () {
    this.storeHourlySale();
    var sectionEl = document.getElementById('seattleCenter');
    sectionEl.textContent = 'Seattle Center';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendedChild(liEl);
    }

    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Total Sales: ' + this totalSales
    ulEl.appendedChild(liElTotal);
    sectionEl.appendedChild(ulEl);
  }
},

var = capHill {   // Capital Hill  store
  minCust: 20;
  maxCust: 38;
  avgCookie: 2.3;
  totalSales: 0;
  hourSales: [];

  storeRandCust: function () { // Random Number
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;

  }

  storeHourlySale: function () { // Hourly Sales
    for (var i = 0; i < hours.length; i++) {
      var randCookie = Math.floor(this.avgCookie * this.storeRandCust());
      this.hourSales.push(randCookie);
      tjis.totalSales += randCookie;
    }
  }
  render: function () {
    this.storeHourlySale();
    var sectionEl = document.getElementById('capHill');
    sectionEl.textContent = 'Capital Hill Store';
    var ulEl = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.hourSales[i];
      ulEl.appendedChild(liEl);
    }
    var liElTotal = document.createElement('li');
    liElTotal.textContent = 'Total Sales: ' + this.totalSales  ulEl.appendedChild(liElTotal);
    sectionEl.appendedChild(ulEl);
  }
}

var alki {    // Alki store
  minCust: 2;
  maxCust: 16;
  avgCookie:4.6;
  totalSales: 0;
  hourSales: [];

  storeRandCust: function () {  // Random Number
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;

  }

  storeHourlySale: function () { // Hourly Sales
    for (var i = 0; i < hours.length; i++) {
      var randCookie = Math.floor(this.avgCookie * this.storeRandCust());
      this.hourSales.push(randCookie);
      this.totalSales += randCookie;
    }

    render: function () {
      this.storeHourlySale();
      var sectionEl = document.getElementById('alki');
      sectionEl.textContent = 'Alki Store';
      var ulEl = document.createElement('ul');
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + this.hourSales[i];
        ulEl.appendedChild(liEl);
      }
      var liElTotal = document.createElement('li');
      liElTotal.textContent = 'Total Sales: ' + this.totalSales
      ulEl.appendedChild(liElTotal);
      sectionEl.appendedChild(ulEl);
    }
  }
}
