//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const nums = [2,5,3,4,7,9,8,10,1,0,6]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every
//Determine if every number is greater than or equal to 0
let num=nums.every((el)=>{
   return el >= 0;
})
console.log(num);
//determine if every word shorter than 8 characters
let word = panagram.every((el)=>{
    return el.length<8;
})
console.log(word);

//Filter
//filter the array for numbers less than 4
let filterNum=nums.filter((el)=>{
    return el < 4;
})
console.log(filterNum)
//filter words that have an even length
let filterWord = panagram.filter((el)=>{
    if(el.length%2 == 0){
        return el;
    }
})
console.log(filterWord);


//Find
//Find the first value divisible by 5 // return only the first one
let findNum = nums.find((el)=>{
    return el%5 == 0;
})
console.log(findNum);
//find the first word that is longer than 5 characters
let findWord = panagram.find((el)=>{
    return el.length>5
})
console.log(findWord);

//Find Index
//find the index of the first number that is divisible by 3
let fIndex = nums.findIndex((el)=>{
    return el%3 == 0;
})
console.log(fIndex);
//find the index of the first word that is less than 2 characters long
let fWord = panagram.findIndex((el)=>{
    return el.length < 2;
})
console.log(fWord);


//For Each
//console.log each value of the nums array multiplied by 3
let forNum = nums.forEach((el)=>{
    //console.log(el*3);
})
//console.log(forNum);
//console.log each word with an exclamation point at the end of it
let forWord = panagram.forEach((el)=>{
    //console.log(el+'!');
    
})

//Map
//make a new array of each number multiplied by 100
let mapNum = nums.map((el)=>{
    //return el*100;
})
console.log(mapNum);
//make a new array of all the words in all uppercase
let mapWord = panagram.map((el)=>{
    return el.toUpperCase();
})
console.log(mapWord);


//Some
//Find out if some numbers are divisible by 7
let someNum = nums.some((el)=>{
    return el%7 == 0;
})
console.log(someNum);
//Find out if some words have the letter a in them
let someWord = panagram.some((el)=>{
    return el.includes('a');
})
console.log(someWord)

// Reduce
// Add all the numbers in the array together using the reducemethod

let reduceNum = nums.reduce((total,el)=>{
    
    return total += el;
}) 
console.log(reduceNum)
// concatenate all the words using reduce
let reduceWord = panagram.reduce((words,el)=>{
    return words += el
})
console.log(reduceWord)


// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?

let numSort = nums.sort();
console.log('Without Argument ',numSort);
// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
        
//         let temp = nums[i];
//         if (nums[i] < nums[j]) {
//             nums[i] = nums[j];
//             nums[j] = temp;
//         }
//     }
// }
// console.log(nums);
// Try to sort without any arguments, do you get what you'd expect with the words array?

let panaSort = panagram.sort();
console.log("Panagram sort without argument ", panaSort);
// for (let i = 0; i < panagram.length; i++) {
//     for (let j = 0; j < panagram.length; j++) {
        
//         let temp = panagram[i].toLowerCase();
//         if (panagram[i] < panagram[j]) {
//             panagram[i] = panagram[j];
//             panagram[j] = temp;
//         }
//     }
// }
// console.log(panagram);

// Sort the numbers in ascending order

let sortAscen=nums.sort(function(a,b){
    return (a > b ? 1 : -1);
})
console.log("Ascending " + sortAscen);

// Sort the numbers in descending order

let sortDesc=nums.sort(function(a,b){
    return (a < b ? 1 : -1);
})
console.log("Descending " + sortDesc);

// for (let i = nums.length; i >= 0 ; i--) {
//     for (let j = nums.length; j > 0; j--) {
        
//         let temp = nums[i];
//         if (nums[i] < nums[j]) {
//             nums[i] = nums[j];
//             nums[j] = temp;
//         }
//     }
// }
// console.log(nums);
// Sort the words in ascending order

let wordAscen = panagram.sort(function(a,b){
    return (a > b ? 1 : -1)
})
console.log("Word Ascending order is ", wordAscen);
// Sort the words in descending order


let wordDesc = panagram.sort(function(a,b){
    return (a < b ? 1 : -1)
})
console.log("Word Descending order is ", wordDesc);

// for (let i = panagram.length; i >= 0 ; i--) {
//     for (let j = panagram.length; j > 0; j--) {
        
//         let temp = panagram[i];
//         if (panagram[i] < panagram[j]) {
//             panagram[i] = panagram[j];
//             panagram[j] = temp;
//         }
//     }
// }
// console.log('dsd',panagram);


const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]


//   Working with data
// filter for products with a price that is less than 10, using the array below:
let arrPrice = products.filter((el)=>{
    if(el.price < 10){
        return el.name;
    }
})
//console.log(arrPrice);
// sort alphabetically by product name

// .sort((a, b) => (a.name > b.name ? 1 : -1));
let sort=products.sort(function(a, b) { return a.name.localeCompare(b.name)});
//console.log(sort);



// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once
const letter ='abcdefghijklmnopqrstuvwxyz';
let split = letter.split('');
let lower = panagram.map((el)=>{
    return el.toLowerCase();
})
//console.log(lower)
let str = lower.join(''); 
let strArr = str.split('');//['t,']

strArr.sort(function(a,b){
    return (a > b ? 1 : -1);
})
let uniqueChars = [...new Set(strArr)]; //the charecter will occur only one time in the array
//console.log(uniqueChars);
let join = uniqueChars.join('');
console.log(join);
if(letter == join){
    console.log('the letters are present')
}
else{
    console.log('letters are missing')
}


//console.log(someWord1)

// const letter ='abcdefghijklmnopqrstuvwxyz';
//  



// let str = panagram.join('');


//   let arr1 = panagram.some((el)=>{
//     if(split.indexOf(el)!==-1){
//         return el;
//     }
//   })
  //console.log(arr1);

//   const filtered = products
//   .filter((product) => product.price < 10)
//   .sort((a, b) => (a.name > b.name ? 1 : -1));
// console.log(filtered);
