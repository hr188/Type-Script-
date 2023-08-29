interface obj {
    height: number;
    age:number;
    gender?:boolean;
}
interface newobj extends obj{
    name : string ; 
}

const object : obj | newobj= {
    height: 23,
    age: 23,
    gender: true,
    name :"hr"
};

//one more way to determine objects 
const objectt : {
    height : number ;
    age : number;
    gender:boolean;
    name: string;

}= {
    height: 23,
    age: 23,
    gender: true,
    name :"hr"
};

console.log(objectt);
type add = (a:number, b:number) => void;
interface naya {
    num: number;
    func:add;
}

const obj3 : naya = {
    num: 34,
    func:(a,b)=>{
        console.log(a+b) 
    }
}
obj3.func(3,4);