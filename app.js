function cookieShop(min, max, average, location) {
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgCookiesPerCustomer = average;
  this.patsLocation = location;
  this.customersPerHour = 0;
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
  for (var i = 0; i < 15; i++) {
    this.customersPerHour = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.cookiesPerHour.push(this.customersPerHour * this.avgCookiesPerCustomer);
    this.totalCookiesSold += (this.customersPerHour * this.avgCookiesPerCustomer);
  }
}

var pikePlace = new cookieShop(17, 88, 5.2, 'Pike Place Market');
var seatacAirport = new cookieShop(6, 24, 1.2, 'Seatac Airport');
var southcenter = new cookieShop(11, 38, 1.9, 'Southcenter');
var bellevueSquare = new cookieShop(20, 48, 3.3, 'Bellevue Square');
var alki = new cookieShop(3, 24, 2.6, 'Alki');

// var pikePlace = { //pikePlace is an object
//   minCustomers: 17, //minCustomers is a key
//   maxCustomers: 88, //88 is an value
//   avgCookiesPerCustomer: 5.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   patsLocation: 'Pike Place Market' //I learned it is helpful to have a 'name' key
// };
//
// var seatacAirport = {
//   minCustomers: 6,
//   maxCustomers: 24,
//   avgCookiesPerCustomer: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   patsLocation: 'Seatac Airport'
// };
//
// var southcenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerCustomer: 1.9,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   patsLocation: 'Southcenter'
// };
//
// var bellevueSquare = {
//   minCustomers: 20,
//   maxCustomers: 48,
//   avgCookiesPerCustomer: 3.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   patsLocation: 'Bellevue Square'
// };
//
// var alki = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerCustomer: 2.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   patsLocation: 'Alki'
// };
//
// var locationArray = [pikePlace, seatacAirport, southcenter, bellevueSquare, alki];
//
// var hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ',
// '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']; //creating an array variable for each hour of operation
//
// function randomNumber(min, max) { //function named randomNumber with 2 parameters
//   return Math.floor(Math.random() * (max - min + 1)) + min; //parameters are local variables input into the function
// }; //using Math.random()
//
// for (var i = 0; i < hoursOpen.length; i++) { //a for iteration goes through the length of the array and stops
//   pikePlace.customersPerHour.push(randomNumber(pikePlace.minCustomers, pikePlace.maxCustomers)); //each iteration pushes a random minimum and a random maximum number of customers per hour
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   seatacAirport.customersPerHour.push(randomNumber(seatacAirport.minCustomers, seatacAirport.maxCustomers));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   southcenter.customersPerHour.push(randomNumber(southcenter.minCustomers, southcenter.maxCustomers)); //the iterations happen for each of Pats Salmon Cookie locations
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   bellevueSquare.customersPerHour.push(randomNumber(bellevueSquare.minCustomers, bellevueSquare.maxCustomers));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   alki.customersPerHour.push(randomNumber(alki.minCustomers, alki.maxCustomers));
// };
//
// function cookiesPerCustomerPerHour(avgCookiesPerCustomer, customersPerHour) { //created a second function that generates customers per hour
//   return Math.floor(customersPerHour * avgCookiesPerCustomer); //using the Math.floor() to produce the number of cookies sold per customer per hour
// };
//
// for (var i = 0; i < hoursOpen.length; i++) { //iterations put the average number of cookies per customer and customers per hour into an array for each location
//   pikePlace.cookiesPerHour.push(cookiesPerCustomerPerHour(pikePlace.avgCookiesPerCustomer, pikePlace.customersPerHour[i]));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) { //avgCookiesPerCustomer and customersPerHour fill arrays in respective objects
//   seatacAirport.cookiesPerHour.push(cookiesPerCustomerPerHour(seatacAirport.avgCookiesPerCustomer, seatacAirport.customersPerHour[i]));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   southcenter.cookiesPerHour.push(cookiesPerCustomerPerHour(southcenter.avgCookiesPerCustomer, southcenter.customersPerHour[i]));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   bellevueSquare.cookiesPerHour.push(cookiesPerCustomerPerHour(bellevueSquare.avgCookiesPerCustomer, bellevueSquare.customersPerHour[i]));
// };
//
// for (var i = 0; i < hoursOpen.length; i++) {
//   alki.cookiesPerHour.push(cookiesPerCustomerPerHour(alki.avgCookiesPerCustomer, alki.customersPerHour[i]));
// };
//
// function printCookies(location) { //this function will print the data on the browser when called in the console
//   var cookies = document.getElementById('cookies'); // a variable declared to attach the getElementById Id in HTML
//   var locationName = document.createElement('th'); //an element created to store the name of the location in HTML
//   locationName.textContent = location.patsLocation; //using the new variable to print the location name
//   cookies.appendChild(locationName); //adding the data to the DOM
//   for (var i = 0; i < hoursOpen.length; i++) { //an iteration to go through the array to print per hour open
//     var newCookie = document.createElement('td'); //creating an element in a list
//     newCookie.textContent = hoursOpen[i] + ' ' + location.cookiesPerHour[i] + ' cookies'; //printing to HTML using the new variable and textContent the array content each hour opened and the calculated cookiesPerHour per each location
//     cookies.appendChild(newCookie); //adding the newly printed data to the DOM
//   };
//   var sumTotal = document.createElement('li');
//   sumTotal.textContent = 'Total: ' + arraySum(location.cookiesPerHour) + ' cookies';
//   cookies.appendChild(sumTotal);
// }
//
// for (var i = 0; i < locationArray.length; i++) {
//   printCookies(locationArray[i]);
// }
//
// function arraySum(myArray) { //a function that calculates the total sum of the array data
//   var sum = 0;
//   for (var i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
//   }
//   return sum;
// }
