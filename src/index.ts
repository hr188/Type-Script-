//type script basic Syntax
let  a:string = ' sad';
let num:number = 43;
let b:boolean = true;
console.log(num);
console.log(a);

let naam =<string> "hr";
console.log(naam);


//to make both string and number
//union
let surname:string | number  = "ray";

const func = (n:number,m :number):number =>{
    return n+m ;
}

//type apne
type apna = number|string;
let hr: apna = 20;
console.log(hr);