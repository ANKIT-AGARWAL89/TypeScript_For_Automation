// Array doesn't have specific size in TS

// Approach 1 : using literals
let names : string[] = [];
names[0] = "Ankit";
names[1] = "Ankii";
console.log(names);

// Approach 2 
let names1:string[]=["Ankit", "Akki"];
console.log(names1);

// Approach 3
let empNames:Array<string>=["ankit", "smith", "peter"];
let data:Array<string|number>=["ankit", "smith", "peter", 53,2];
let mixedData:Array<any>=[1,"John",true, null, undefined];
console.log(mixedData);

for(let i=0; i<mixedData.length; i++){
    console.log(mixedData[i]);
}

// for ... in  => index of array
for(let index in mixedData){
    console.log(mixedData[index]);
}

// for ... of  => actual value of array 
for(let input of mixedData){
    console.log(input);
}