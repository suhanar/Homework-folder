function validAnagram(arr1, arr2){
    if(!arr1 || !arr2){return false};
    if(arr1.length !== arr2.length){return false}

    let obj = {};
    for(first of arr1){
        //console.log(first);
        obj[first] = (obj[first]||0)+1;
    }
    //console.log(obj);

    for(second of arr2){
        if(!obj[second]){return false}
        else{
            obj[second] -= 1;
        }
    }
    return true






}

//validAnagram('', '') // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
//validAnagram('awesome', 'awesom') // false
//validAnagram('qwerty', 'qeywrt') // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true