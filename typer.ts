// let a : (string | number)[] = [12,"ankit",456];
// console.log(a);

// let a : [number , boolean , string] = [23,true,"ankiy"];
// console.log(a);


// const obj : {name:string , age:number} = {
//     name : "ankit",
//     age :12,   
// }
// console.log(obj);
class person{
    name : string;
    private age :number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;


    }
    greet(){
        console.log("hi")
    }
}