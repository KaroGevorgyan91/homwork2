/*1. Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...) */
/*

function del(arr, i = 0, y = arr.length ){
  if (i === y - 1 ){
    --arr.length;
    return arr;
  } else {
    arr[i] = arr[i + 1];
  }
  return del(arr, i += 1, y)
  }
  var a = [1, 3, 5, 6, 7, 8];
console.log(del(a))
*/

/*2. Given a number. Write a function that calculates its sum of
the digits and if that sum has more than 1 digit find the sum of
digits of that number. Repeat that process if needed and return
 the result. */
/*
function sumOfDigits(num, sum = 0) {
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  if (sum < 10) {
    return sum
  } else {
    return sumOfDigits(sum)
  }
}
console.log(sumOfDigits(10));
console.log(sumOfDigits(999999999999));
console.log(sumOfDigits(14));
/*

/*3.Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays).
*/
/*
function concatArr(arr, newArr = []){
    debugger
    for(var i = 0; i < arr.length; i++){
        let element = arr[i];
        if (Array.isArray(element)){
            concatArr(element, newArr);
        } else {
            newArr.push(element)
        }
    }
    return newArr;
}
let a = [[1,2,3], 1, [3, 4, [1, 2]], 10, 6];
console.log(concatArr(a))
*/

/*

function rep(obj) {
  var newObj = {};
  for (var key in obj) {
    if (newObj.hasOwnProperty(obj[key])) {
      if (Array.isArray(newObj[obj[key]])) {
        newObj[obj[key]].push(key)
      } else {
        newObj[obj[key]] = [newObj[obj[key]]];
        newObj[obj[key]].push(key);
      }

    } else {
      newObj[obj[key]] = key;
    }
  }

  return newObj;
}

var obj = {
  a: '1', b: '2', c: '3', d: '2', e: '1', f: '3', g: '2'
}
console.log(rep(obj));

*/