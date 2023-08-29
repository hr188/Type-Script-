const fun =  (m:number , n:number):void=>{
    console.log(m+n);
}

fun(2,3);

//optional parameter usage 
type functype = (a: number , b : number , c?:number) => number;

const fun1 : functype = (m, n  ,l)=>{
    if(typeof l  ==="undefined")  return m*n 

    return m*n*l;
}

//rest operator usage 

type functype1 = (...m:number[])=>number[];

const fun2 :functype1 = (...m)=>{
    return m;
}


//objects and functions

//const getData = (product :{name: string , stock: number , price: number ,photo: string}):void =>{
//    console.log(product);
//}
//can also be written as 

type getDatainfo = (product :{
    name: string , 
    stock: number , 
    price: number ,
    photo: string}
    )=>void;

const fun3:getDatainfo = (product)=>{
    console.log(product);
}     

interface ex {
    name:string ;
    stock: number;
    price: number;
    photo: string;
    readonly id ?: string;
}
const product1 :ex = {
    name : "mac",
    stock:50 ,
    price :4987,
    photo: "jnovjr",
}

fun3(product1);

