// partial<type>

type user ={
    name: string;
    age: number;
}
type user2 = Partial<user>;
// optional ho jaingi properties jo user mai thi with the help of partial

//opposite of partial 
// Required<type>
interface User {
    name?:string; //optional property
    age?: number;
}
type user3 = Required<User>;

//or can be used as 

const userr : Required<User> = {
    name : "hr",
    age: 20,
}

//Readonly<type> makes every property read only 




//Record utility Record<"string of key pair " , type >
interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
   
  cats.boris;