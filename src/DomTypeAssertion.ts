//baap ko mt sikha 

const bnt  = document.getElementById("one") as HTMLElement ;
console.log(bnt);
// OR 
//const bntT  =<HTMLElement> document.getElementById("one") ;

//const bntT  = document.getElementById("one")!;

const form = document.getElementById("faarm") as HTMLFormElement;

const inpt = document.querySelector(" form > input") as HTMLInputElement;

form.onsubmit = (e : SubmitEvent) =>{
    e.preventDefault();
    const value = Number(inpt.value);
    console.log(value);
    bnt.innerHTML += `<h1> ${value +20 } </h1>`
}

interface personn {
    name: string;
    email:string;
}

const myp :personn = {
    name:"sara",
    email:"hfioe",
}

const getname = ():string=>{
    return myp['name'];
}
const getemail = ():string=>{
    return myp['email'];
}
const getdata = (typ: 'name' | 'email' ):string=>{ //also can use keyof person
    return myp[typ];
}