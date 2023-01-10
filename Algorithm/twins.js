function twins(a, b) {
    // Write your code here
    let obj = {};
    let a3 = a.split('');
    for(a1 of a){
       // obj[a1]?obj[a1]+=1:obj[a1]=1;
       obj[a1] = (obj[a1] || 0 ) + 1
    }
    console.log(obj);
    

}
console.log(twins(['cdab','dcba','abcd'],['abcd','abcd','abcdcd']));
