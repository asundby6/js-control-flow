const larger = (num1, num2) => {
    if (num1 == num2){
        console.log('Number 1: ' + num1 + ' and Number 2: ' + num2 + ' are equal to each other.')
    }
    else if (num1 > num2){
        console.log('The larger number between ' + num1 + ' and ' + num2 + ' is ' + num1)
    }
    else if (num1 < num2){
        console.log('The larger number between ' + num1 + ' and ' + num2 + ' is ' + num2)
    }
}

larger(7,3)



/*
Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

Requirements

Your program should maintain two variables
It should correctly identify which is larger and print that result
*/