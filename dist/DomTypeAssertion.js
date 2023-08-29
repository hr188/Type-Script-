"use strict";
//baap ko mt sikha 
const bnt = document.getElementById("one");
console.log(bnt);
// OR 
//const bntT  =<HTMLElement> document.getElementById("one") ;
//const bntT  = document.getElementById("one")!;
const form = document.getElementById("faarm");
const inpt = document.querySelector(" form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(inpt.value);
    console.log(value);
    bnt.innerHTML += `<h1> ${value + 20} </h1>`;
};
const myp = {
    name: "sara",
    email: "hfioe",
};
const getname = () => {
    return myp['name'];
};
const getemail = () => {
    return myp['email'];
};
const getdata = (typ) => {
    return myp[typ];
};
