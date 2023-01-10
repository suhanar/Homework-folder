function maxChar(arr1){
    if(!arr1){return false};

    let obj = {};
    for(first of arr1){
        //obj[first] = (obj[first]||0)+1
       // (obj[first])?(obj[first]+=1) : (obj[first] =1);
       obj[first] = obj[first]+1 || 1;
    }
   
    console.log(obj);
    // let max=Math.max.apply(null,Object.values(obj));
    // return Object.keys(obj).find(key=>
    //     obj[key] === max
    // )

    let count = 0;
    let maxChar = null;
    for(let key in obj){
        if(obj[key] > count){
            count = obj[key];
            maxChar = key;
        }
    }
    return maxChar;


}

console.log(maxChar("abcccccccd")) // === "c"
console.log(maxChar("apple 23333311111")) // === "1