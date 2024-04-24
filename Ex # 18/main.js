var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a array of countries and print it original orders
var countriestovisit = ["Pakistan", "India", "Denmark", "Brazil"];
console.log("original order:", countriestovisit);
//print the array of alphabetic order without modify actual array
console.log("Alphabetic order:", __spreadArray([], countriestovisit, true).sort());
console.log("still in original order:", countriestovisit);
console.log("Reverse order:", __spreadArray([], countriestovisit, true).reverse());
console.log("still in original order in again:", countriestovisit);
console.log("original order reverse:", countriestovisit.reverse());
console.log("back to original order:", countriestovisit.reverse());
console.log("sorted in alphabetical order:", countriestovisit.sort());
console.log("original order reversed again:", countriestovisit.reverse());
