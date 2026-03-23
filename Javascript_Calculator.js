// Use case to perfom basic calculator operations: addition, subtraction, multiplication, and division.
//Use an array to keep track of calculations in a history log and display it to the user.
//Display calculation history upon request.


let history = [] //This is the array that holds the history of calculations
let result
// This function performs the calculation based on the operator provided and updates the history log.
function calculate(num1, operator, num2) {
//switch is used to determine which operation to perform based on the operator provided by the user.
switch(operator){
case "+":
    result = num1 + num2;
    break
case "-":
    result = num1 - num2;
    break
case "*":
    result = num1 * num2;
    break
case "/":
    result = num1 / num2;
    break
default:
    return "Invalid operator. Please use +, -, *, or /."
}
//After performing the calculation, we push a string representation of the calculation and its result into the history array.
history.push(`${num1} ${operator} ${num2}= ${result}`)
return result

}
// This function displays the history of calculations performed by the user. If no calculations have been performed, it informs the user accordingly.
showHstory = () => {
    if (history.length === 0) {
        console.log("No calculations performed yet.")
        return
    }
    console.log("Calculation History:")
    history.forEach(entry => console.log(entry))
}
// Example usage of the calculate function and displaying the history log.
console.log(calculate(11, "+", 3))
console.log(calculate(12, "+", 4))
console.log(calculate(200,"-",4))
console.log(calculate(8, "*", 7))
console.log(calculate(20, "/", 2))
console.log(calculate(10, "^", 2)) // Invalid operator example

 showHstory()