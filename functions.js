// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting (){
  console.log("Happy Holiday")
}

printGreeting(1);
printGreeting(2);
printGreeting(3);


// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function getCoffee(coffee) {
  console.log(`Let's make some ${coffee} right now.`);
}
console.log(getCoffee("Latte"));

// 3: Write a function that has 3 parameters: a string and two numbers.
// The String will be the name of a company, and the numbers will represent
// the minimum and maximum of a pay range for a posted job.
// The function should print out a sentence that includes the name of the company
// and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function postJob(nameCom,minPay,maxPay){
  var range = maxPay - minPay;
  console.log(`${nameCom} post a job with the pay range of ${range} `)
  };

postJob("Moon Inc", 40000,90000);


// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"
function checkStock(amount,inventory){
if (amount >1 && amount <4) {
  var aval = "running LOW";
  }  else if(amount >0){
    var aval = "stocked";
    } else {
      var aval = "out of stocked";
      }
  console.log(`${inventory} is ${aval}`)
}


checkStock(3, "Tortillas");
// => "Tortillas - running LOW"
checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
