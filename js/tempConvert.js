const tempConvert = (fahrenheit) => {
let celcius = ((fahrenheit-32)*(5/9));
    return celcius;
}
console.log(tempConvert(55));

/*
Write a program that converts a temperature from Fahrenheit to another temperature unit indicated by a variable.

Requirements

Your program should store an integer (in Fahrenheit) in a variable.
You should also have a variable holding either "k" or "c" indicating a conversion to Kelvin or Celsius, respectively.
Convert from F to C or K based on the indicator variable.
The output of the program should read: "X degrees Fahrenheit is Y degrees Celsius/Kelvin"
*/