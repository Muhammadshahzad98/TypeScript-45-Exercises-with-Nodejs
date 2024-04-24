// Making function
function make_shirt(size, printMassage) {
    if (size === void 0) { size = "Large"; }
    if (printMassage === void 0) { printMassage = "I Love Pakistan"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMassage, " print on shirt"));
}
// Calling function
make_shirt();
make_shirt("Large", "We Can We will");
