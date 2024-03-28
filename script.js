// By using reduce

function calculateFactorial() {
  let number = Number(document.getElementById("number").value);
  //   let numbers = [];
  let numbers = Array.from(Array(number + 1).keys()).slice(1);

  // Check if the input is a valid number
  if (isNaN(number) || number < 0) {
    alert("Please enter a non-negative number.");
    return;
  }

  // Calculate factorial
  //   for (var i = number; i > 0; i--) {
  //     numbers.push(i);
  //   }

  const factorial = numbers.reduce((a, b) => {
    return a * b;
  });

  // Display result
  document.getElementById("result").innerHTML =
    "Factorial of " + number + " is: " + factorial;
}

// By using for loops

// function calculateFactorial() {
//     var number = document.getElementById("number").value;
//     var factorial = 1;

//     // Check if the input is a valid number
//     if (isNaN(number) || number < 0) {
//         alert("Please enter a non-negative number.");
//         return;
//     }

//     // Calculate factorial
//     for (var i = 1; i <= number; i++) {
//         factorial *= i;
//     }

//     // Display result
//     document.getElementById("result").innerHTML = "Factorial of " + number + " is: " + factorial;
// }
