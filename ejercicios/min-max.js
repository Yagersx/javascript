function getMinAndMaxNumber(...numbers){
    if(numbers.length==0) return 0;
    if(numbers.length==1) return {min:numbers[0], max:numbers[0]};

    numbers.sort( (num1,num2)=> num1-num2 );

    const min = numbers.shift();
    const max = numbers.pop();

    return {min,max};
}

console.log(getMinAndMaxNumber([2,5,4,6,3]));