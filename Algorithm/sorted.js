function mergeArr(arr){
    if(arr.length <= 1){
        return arr
    }

    let middle = arr.length/2;
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);


  return merge(mergeArr(left),mergeArr(right));
}
function merge(arr1,arr2){
    let leftI = 0;
    let rightI = 0;
    let result =[];
    while(leftI < arr1.length && rightI < arr2.length){
        if(arr1[leftI] < arr2[rightI]){
            result.push(arr1[leftI]);
            leftI++;
        }
        else{
            result.push(arr2[rightI]);
            rightI++;
        }
    }
    return result.concat(arr1.slice(leftI)).concat(arr2.slice(rightI));




    //return arr1.concat(arr2);
}

let a = [6,3,8,9,1,4,10];


console.log(mergeArr(a));



