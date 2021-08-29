//template Literale
const age = 26;

const personal = {
    name: "sumon",
    age: 26,
    village: "Belgharia"
};

let templtLiteral = `My name is ${personal.name}, My age is ${age}, My village is ${personal.village}`;
// console.log(templtLiteral);

//arrow func

const divider = (num) => num / 5;
const resultdevider = divider(20);
// console.log(resultdevider);

const sum = (num1, num2) => { 
    const sum1 = num1 + 2;
    const sum2 = num2 + 2;
    const multiply = sum1 * sum2;
    return multiply;

}
const resultSum = sum(2, 1);
// console.log(resultSum);

//map
let numbers = [10, 20, 30, 40,33,55];


let mapping = numbers.map(num => num * 5);
// console.log(mapping);

//filter
let oddnumbers = numbers.filter(num => num % 2 != 0);
// console.log(oddnumbers);

//find from array object
const products = [
    { name: "phone", price: 20000 },
    { name: "HP", price: 31000 },
    {name:'watch', price:5000}
    
]
const findPrice = products.find(prod => prod.price ==5000);
// console.log(findPrice);

//destructuring-object
const company =
    { name: "phone", price: 20000, place: "dhaka" };
    
const { price } = company;
// console.log(price);

//destructering-array
const nums = [20, 21, 22,25];
const [one,two,three,four] =nums;
// console.log(three);

//default value

const sumAll = (num1, num2, num3 = 10) => num1 + num2 + num3;

// console.log(sumAll(20, 10));

//nested object
const nestedObj = {
    num: "sumon",
    age: { id: 1997, instituion: 1998, original: 1995 },
    study: "green University of BD",
    friends: ["khalid", "pappu", "mahmud"]
}
//optional Chaining
const frindName = nestedObj?.friends;
const originalAge = nestedObj?.age;
console.log(frindName,originalAge);