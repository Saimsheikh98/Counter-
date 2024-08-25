let number = parseInt(document.querySelector('span').innerHTML, 10); 

console.log(number); // Log initial value
number++; // Increment number
console.log(number); // Log incremented value

function plus() {
    number++; // Increment the global number variable
    console.log(number); // Log the new value
    document.querySelector('span').innerHTML = number; // Update the span element
}

// Function to decrement the number
function minus() {
    number--; // Decrement the global number variable
    console.log(number); // Log the new value
    document.querySelector('span').innerHTML = number; // Update the span element
}

// Function to reset the number to 0
function reset() {
    number = 0; // Reset the global number variable
    document.querySelector('span').innerHTML = number; // Update the span element
}
