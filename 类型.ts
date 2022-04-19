let a:number;
let b:string;
//字面量(有点像常量，但是他可以有限定值的范围，这时候就有点像联合类型了)
let c0:10|12
let d:number|boolean;
//any 表示任意类型，一个类型设置any后 相当于对该变量关闭了ts类型检测
let f:any ; 
let g;//只声明为赋值，这时候认为也是any 。隐式的any
let h:unknown //any 和unknow 的区别， unknow 不能赋值给任何类型的变量，但any可以
h= 'hello';
b = h as string ;//AS 是类型断言，告诉编译器h 就是string 类型。
b = <string>h;//as 的另外一种方式。
//void 设置函数的没有返回值
//如果函数没写返回语句，默认也是void,或者编译器会根据返回的值来确定返回类型，如 return 123，return bool
 function fn(params:number):void {
     
 }
//never 就是没有值
  function f2(params:number) :never{
  throw new Error();

  }
//object 对象类型，用的很少

let aa:{name:string,aeg?:number};//用来指定对象中需要那些属性
//let bb:{name:number,[propNmae:stirng]:any};
//函数结构类型声明
let dd:(a:number,b:number)=>number;
dd = function fun(params:number,b:number):number {
    return 1;
}
//array 数组,限制元素类型
let  cc:string[]
let  ccc:number[];
let  cccc:Array<number>;
//元组，就是固定长度的数组
let hh:[string,string];
h= ['a','b'];
//枚举
enum Gender{
    male = 0,
    female = 1
}

//类型别名
type myType = 1|2|3|4;
let mm:myType;
mm=1;