class Person{
    static overview:string="这是类的静态属性，只能通过类来调用"
    static eat(){console.log("类的静态方法")}
    name:string="wgj";
    age:number=18;
    readonly pro = "sssss" //只读属性
    sayHello(){
        console.log("sayHello");
    }
    constructor(name:string,age:number  ){
            this.name = name;
            this.age = age;
    }
}

let dog = new Person("豆桑",1);
console.log(dog);