// function Concat(...value) {
//     const numArr = [];
//     for (let i = 0; i < value.length; i++) {
//         numArr.push(value[i]);
//     }
//     return numArr.flat(2);
// }

// const result = Concat(1, 2, 3, 4,[5, 6]);
// console.log(result);





// const arr = [1, 2, [3, 4, [5, 6]]];
// arr.flat(3);
// console.log(arr);
// console.log(arr.flat(3));







// function reverse(arr){
//     const result = [];
//     for (let i = arr.length; i > 0 ; i--) {
//         result.push(arr[i-1]);
//     }
//     return result;
// }
// console.log(reverse([1,2,3,4,5,6]));


// function some(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }


// const xyz = (value) => value > 3;


// console.log(some([1, 2, 3, 6], xyz));





// function Every(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }


// const xyz = (value) => value > 3;

// console.log(Every([1, 2, 3, 6], xyz));


// function filter(arr){
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3) {
//         result.push(arr[i]);
//     }
// }
// return result;
// }
// console.log(filter([1,2,3,4,5,6]));






  
// function ForEach(arr = [], cb) {
//     for (let i = 0; i < arr.length; i++) {
//         each(arr[i]);
//     }
// }

// const each = (value, index, array) => console.log(value);


// ForEach([1, 2, 3, 4, 5, 6]);