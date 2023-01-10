const arr1 = [9,3,5,2,7,9,10];
function mergeDivide(arr){
    if(arr.length <= 1){
        return arr;
    }

    let arrMid = arr.length / 2;
    let left = arr.slice(0,arrMid);
    let right = arr.slice(arrMid);

    return merge(mergeDivide(left),mergeDivide(right));
}

function merge(left,right){

    let leftIndex = 0;
    let rightIndex = 0;
    let result =[];

    while(leftIndex<left.length && rightIndex<right.length){
          if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            
            leftIndex++;
           // console.log("left",result)
          }
          else{
            result.push(right[rightIndex]);
            
            rightIndex++;
           // console.log("right",result)
          }
         // console.log(left.slice(leftIndex));
          //console.log(right.slice(rightIndex));
    }


    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(mergeDivide(arr1));