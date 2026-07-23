function sum1(a: number, b: number, dr: (result: number) => void): void {
    let summation = a + b;
    displayResult(summation)
}


// call back function
function displayResult(result: number): void {
    console.log(result);
}

sum1(10, 20, displayResult);