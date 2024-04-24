//Making a array of countries and print it original orders
let countriestovisit = ["Pakistan", "India", "Denmark", "Brazil"];

console.log("original order:", countriestovisit);

//print the array of alphabetic order without modify actual array
console.log("Alphabetic order:",[...countriestovisit].sort());

console.log("still in original order:", countriestovisit);

console.log("Reverse order:", [...countriestovisit].reverse());

console.log("still in original order in again:", countriestovisit);

console.log("original order reverse:", countriestovisit.reverse());

console.log("back to original order:", countriestovisit.reverse());

console.log("sorted in alphabetical order:", countriestovisit.sort());

console.log("original order reversed again:", countriestovisit.reverse());