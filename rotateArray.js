// //Left Rotate
// //aRRAY: [1,2,3,4,5] K=2
// //Output: [3,4,5,1,2]

// function reverse(arr,start,end){
//     while(start < end){
//         let temp = arr[start];
//         arr[start]= arr[end];
//         arr[end]= temp;

//         start++;
//         end--
//     }
//     return arr;
// }
// let arr = [1,2,3,4,5]
// let k = 2
// k = k % arr.length

// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// reverse(arr,0,arr.length-1)
// console.log(arr);


//Right Rotate
//aRRAY: [1,2,3,4,5] K=2
//Output: [4,5,1,2,3]

function reverse(arr,start,end){
    while(start < end){
        let temp = arr[start];
        arr[start]= arr[end];
        arr[end]= temp;

        start++;
        end--
    }
    return arr;
}
let arr = [1,2,3,4,5]
let k = 2
k = k % arr.length

reverse(arr,0,arr.length-1)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
console.log(arr);