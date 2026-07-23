// var = not preferable
// let and const are preferable where let can vary but const must be fixed.



// // 1. decalaration without initialize
// var a; // allowed
// let b; // allowed
// const c; // not allowed


// // 2. scope of keywords
// function scopeofKeywords(){
//     if(true){
//         var a = 10;
//         let b = 20;
//         const c = 30;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//         console.log(a);    // scope within the function
//         console.log(b);   // scope within the block 
//         console.log(c);   // scope within the block
// }

// // 3. redecalaration
// var a = 10;
// var a = 20;  // redecalaration allowed 
// let b = 30;
// let b = 40; // redecalaration not allowed 
// const c = 50;
// const c = 60; // redecalaration not allowed 

// // 4. re-initialize
// var a = 30;
// a = 40;         // // can re-assign
// let b = 50;
// b = 40;         // can re-assign
// const c = 20;
// c = 40;         // const variable value must be constant

// // 5. Heisting
// console.log(a);  // Undefined doesn't throw error
// var a = 10;
// console.log(a);

// console.log(b);  // not initialized and throw error
// let b = 10;
// console.log(b);

// console.log(c); // not initialized and throw error
// const c = 10;
// console.log(c);