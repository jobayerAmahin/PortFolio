const prompt=require("prompt-sync")({sigint:true});

let c=parseInt(prompt("Enter Height in meter= "));
let d=parseInt(prompt("Enter Weight in kg= "));
console.log("BMI- ", Math.round(d/(c*c)));