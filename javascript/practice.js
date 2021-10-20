// Declaring and printing variable
var x = 5;
console.log(x);

// Working with strings
var string = "Hi, Welcome to JS";
console.log(string.length);

// Arrays
var myArray = [];
myArray[10] = 10;
console.log(myArray);

console.log(typeof(myArray));

// Objects
var newobj = {
    name: "Rhithick",
    test: function() {
        console.log(this);
    }
};
newobj.test();

// Constructors
var obj = function() {
    this.name = "Rhithick";
    this.driving = true;
}

var temp = new obj();
console.log(temp.name, temp.driving);

var Date = new Date();
console.log(Date);