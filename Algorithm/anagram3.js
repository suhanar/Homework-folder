function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
    return false;
    }
    
    
    const counter1 = {};
    const counter2 = {};
    
    for(let char of str1){
        counter1[char] = counter1[char]+1 || 1
    }
    for(let char of str2){
        counter2[char] = counter2[char]+1 || 1
    }
    for(let key in counter1){
        if(!(key in counter2) || counter2[key] !== counter1[key]) {
            return false;
        }
    }
    return true;
    
    }
     console.log(validAnagram('rail safety', 'fairy tales'));