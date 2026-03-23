// Use case to perfom basic calculator operations: addition, subtraction, multiplication, and division.
//Use an array to keep track of calculations in a history log and display it to the user.
//Display calculation history upon request.

let history = []
let result
function calculate(num1, operator, num2) {
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
history.push(`${num1} ${operator} ${num2}= ${result}`)
return result

}

showHstory = () => {
    if (history.length === 0) {
        console.log("No calculations performed yet.")
        return
    }
    console.log("Calculation History:")
    history.forEach(entry => console.log(entry))
}
console.log(calculate(11, "+", 3))
console.log(calculate(12, "+", 4))
console.log(calculate(200,"-",4))
console.log(calculate(8, "*", 7))
console.log(calculate(20, "/", 2))
console.log(calculate(10, "^", 2)) // Invalid operator example

 showHstory()