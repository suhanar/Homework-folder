const wordOccurrence = (word, phrase) => {
    let result = 0; //o(1)
    const array  = phrase.split(' '); //o(1)
    for (let i = 0; i < array.length; i++) {  //o(n)
      if (word.toLowerCase() === array[i].toLowerCase()) {
        result += 1;
      }
    }
    return result; //0(1)
  }

  //o(n)

  const bubble_sort = list => {
    for (let i = 0; i < list.length - 1; i++) {
      for (let j  = 0; j < list.length - 2; j++) {
        if (list[j+1] < list[j]) {
          const temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
        }
      }
    }
    return list;
  }

  //o(n^2)

  const factorial = n => {
    if (n === 0) { //0(1)
      return 1;  // o(1)
    } else {
      return n * factorial(n-1); // o(n!)
    }
  }
  //o(n!);
  const bobIsFirst = people => {
    return people[0] == 'bob'; // constant
  }
  //o(1);

  const isPalindrome = input => {
    const stack = [];
    let output = "";
    for (let i = 0; i < input.length; i++){ //o(n)
      stack.push(input[i]); //o(1) 
    }
    while (stack.length) {//o(n)
      output += stack.pop(); //o(1)
    }
    return output == input;
  }
//o(n)

  const printAllNumbersThenSumPairs = numArray => {
    numArray.forEach(num => console.log(num));
    numArray.forEach((num, index)=>{ //o(n)
      if (index < numArray.length - 1) {
        console.log(num + numArray[index+1]);
      }
    });
  }

  //o(n)

  const isPrime = num => {
    if (num == 1 || num == 2) {
      return false;
    }
    for (let i = 2; i < num - 1; i++){ //n times
      if (num % 1 == 0) {
        return false;
      }
    }
    return true;
  }

  //o(n);