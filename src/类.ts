class Person{
    static overview:string="这是类的静态属性，只能通过类来调用"
    static eat(){console.log("类的静态方法")}
    name:string="wgj";
    _age:number;
    
    
    //   get age() : number {
    //     return this._age;
  //  }
    
 
    //public 是默认值  private 私有   只能在类内部修改
    readonly pro = "sssss" //只读属性
    sayHello(){
        console.log("sayHello");
    }
    constructor(name:string,age:number  ){
            this.name = name;
            this._age = age;
    }
    //下面是简写方式,相当于直接声明了 name,age 两个属性，并且不用再写赋值过程，比如 this.name = name,this.age = age
    // constructor(public name:string,public age:number){

    // }

    //泛型
    function <T>(params:T):T {
        return params;
    }
}

let dog = new Person("豆桑",1);
console.log(dog);