/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/
function same(arr1, arr2) {
   if(!arr1 || !arr2){return false}
   if(arr1.length !== arr2.length){return false}

   let obj = {};
   for (let firstEl of arr1){
    //console.log(firstEl);
    obj[firstEl*firstEl] = (obj[firstEl*firstEl]|| 0)+1;
   }
   console.log(obj);// {1:1,4:2,9:1}

   for(secondEl of arr2){
    if(!obj[secondEl]) {return false}   
    else{
        obj[secondEl] -= 1;   
    }
    
   }
   return true;
  }


console.log(same([1,2,3,2], [4,1,9,4])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)