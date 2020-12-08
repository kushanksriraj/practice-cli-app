var input = require('readline-sync');

function starsAscending(n) {

  console.log("Printing " + n + " lines of stars in ascending...");

  //  for(var i = 1; i <= n; i++){
  //    for(var j = 1; j <= i; j++){
  //     process.stdout.write('*');
  //   }
  //   console.log("\n");
  // }

  var stars = '';
  for (var i = 1; i <= n; i++) {
    stars = '';
    for (var y = 1; y <= i; y++) {
      stars = stars + '*';
    }
    console.log(stars);
  }

}

function starsDescending(n) {

  console.log("Printing " + n + " lines of stars in descending...");

  // for(var i =n; i>0; i--){
  //   for(var y=i; y>0; y--){
  //     process.stdout.write('*');
  //   }
  //   console.log('\n')
  // }

  // var stars = '';
  // for(var i=n; i>0; i--){
  //   stars = '';
  //    for(var y=i; y>0; y--){
  //     stars = "*".repeat(i);
  //    }
  //   console.log(stars);
  // }

  var stars = '*'.repeat(n);

  for (var i = n; i > 0; i--) {

    console.log(stars);
    stars = stars.slice(0, -1);
  }

}

function checkLeapYear(year) {

  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (year % 4 == 0) {
    return true;
  }
  else {
    return false;
  }

}


function checkPrimeNumber(n) {

  for(var i=2; i<Math.sqrt(n); i++){
    if(n % i == 0){
      return false;
    }
  }

  return true;
}


// execution
console.log("Choose an option below to continue:");
console.log(`
  1. Print stars in ascending order
  2. Print stars in descending order
  3. Check leap year
  4. Check prime number`);

var n = input.question();

switch (n) {
  case '1': {
    var lines = input.question("Enter the lines of stars to print (min 5) :");
    if (lines < 5) {
      lines = 5;
    }
    starsAscending(lines);
    break;
  }

  case '2': {
    var lines = input.question("Enter the lines of stars to print (min 5) :");
    if (lines < 5) {
      lines = 5;
    }
    starsDescending(lines);
    break;
  }

  case '3': {
    var year = input.question("Enter the year to check if it's a leap year : ");
    if (checkLeapYear(year)) {
      console.log("Leap year!");
    }
    else {
      console.log("Not a leap year!");
    }
    break;
  }

  case '4': {
    var number = input.question("Enter a number to check if it's a prime number : ");
    if (checkPrimeNumber(number)) {
      console.log("Prime number!");
    }
    else {
      console.log("Not a prime number");
    }
    break;
  }

  default:
    console.log("Please choose a valid option");
}