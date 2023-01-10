// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1,str2){
    let lower1 = str1.toLowerCase();
    let change1 = lower1.replaceAll('!','');
    let strChange1 = change1.trim(' ');

    let lower2 = str2.toLowerCase();
    let change2 = lower2.replaceAll('!','');
    let strChange2 = change2.trim(' ');
    console.log(strChange1);
    if(!strChange1 || !strChange2){return false};
    if(strChange1.length !== strChange2.length){return false}


    let obj = {};
    for(let str of strChange1){
        //obj[str] ? obj[str] += 1 : obj[str] + 1;
        obj[str] = obj[str]+1 || 1;
    }
    //console.log(obj);
    for(second of strChange2){
        
        if(!obj[second]){return false}
        else{
            obj[second] -= 1;
        }
    }
    return true

   

}
console.log(anagrams('rail safety!', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.log(anagrams('',''));