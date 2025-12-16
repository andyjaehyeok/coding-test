//배열 뒤집기
function reverseArray(array){
    return array.reverse();
}

//문자열 뒤집기
function reverseString(my_string) {
    let array=[];

    for(let i=my_string.length-1; i>=0; i--){
        array.push(my_string[i])
    }


    let sum= "";
    for(let i=0; i<array.length; i++){
        sum += array[i]
    }

    return sum;
}



