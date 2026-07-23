// Named function with Rest parameters - same type
function addNumbers(...num: number[]) {
    let i;
    let sum: number = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
}
addNumbers(2, 4, 5, 1);

// Named function with Rest parameters - different type
function findElement(...elements: (number | string)[]): number {
    return elements.length;
}
console.log(findElement(3, "SN", 3, 4, 5, "aNKIT"));

// Named function with optional parameters => ?:
function displayDetails(id: number, name: string, mailId?: string): void {
    console.log(mailId);
}
displayDetails(1, "ankit");
displayDetails(1, "ankit", "qwscape8955@gmail.com");

// Named function with default parameters
function calculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log(discount);
}
calculateDiscount(100, 0.30); // .30 value will be used for rate variable
calculateDiscount(100);  // default rate value will be used

// 