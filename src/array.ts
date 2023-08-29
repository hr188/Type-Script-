const arr :number[]= [1,2,3,4];
const arr1 : number[] = [1,2,3,4,5];

const arr2: Array<number |string> = ["hr" , 1, 4];

arr.forEach((i)=>{
    console.log(i+1);
})

//fixed size array tupple 
const arr4:[number,number,number] = [1,2,3];