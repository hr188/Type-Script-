class player {
    public readonly id:string;
    constructor(private height:  number , public weight: number ,  protected power: number) {
        this.id  = String(Math.floor(Math.random()*100));
    }
    
    getmyHeight = ()=> this.height;
}

const hrr = new player(6,75,55);

class player1 extends player{
    constructor(height: number , weight: number , power :number , public special : boolean){
        super(height , weight , power);
        this.special = special;
    }

    getmypower = ()=> this.power;
}

const hrrr = new player1 (100,20,40 , true);

console.log("height" , hrrr.getmyHeight());
console.log("weight" , hrrr.weight );
console.log("power", hrrr.getmypower());
console.log("id" , hrrr.id)



//class with interface

interface ProductType {
    name : string ;
    price : number;
    stock : number;
    
    offer ?: boolean;

}

class Productt implements ProductType{
    private  id : string = String(Math.random()*1000);
    constructor(
        public name : string ,
        public  price : number ,  
        public stock : number ) 
        {}
    get getid():string{
        return   `Product ID ${this.id}`;
    }    
}

const p1 = new  Productt('hr', 100, 100 );
console.log(p1.getid);