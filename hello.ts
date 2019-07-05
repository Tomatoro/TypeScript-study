/*
 * @Author: Rsj 
 * @Date: 2019-06-05 12:00:01 
 * @Last Modified by: Rsj
 * @Last Modified time: 2019-07-05 09:12:24
 */
class Site {
    name():void{
        console.log('Run');
    }
}
var obj = new Site()
obj.name()


/* 变量声明 */
//变量声明 let [变量名] : [类型] = 值
var uname:string = 'Rsj'
//声明变量的类型但是没有初始值,变量值会设置为 undefined
var uname2:string
console.log(uname) // undefined

var uname:string = "Runoob"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("名字: "+uname) 
console.log("第一个科目成绩: "+score1) 
console.log("第二个科目成绩: "+score2) 
console.log("总成绩: "+sum)


/* 类型断言 */
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
//语法格式：
//<类型>值 b 或: 值 as 类型
var str = '1'
var str2 : number = <number><any>str
console.log(str2)

var str = '1'
var str2 : number = str as any
console.log(str2)

/* 类型推断 */
var num = 3
// num = 'ss' 报错 不能将类型'ss'分配给类型number


/* 函数 */
function add (x: number, y: number):number{
    return x=y
}
console.log("TCL: add", add(1,2))

//--可选参数?
function buildName(firstName: string, lastName?: string){
    console.log(firstName+lastName)
}
//firstName为必选参数 lastName为可选参数 可选参数必须跟在必需参数后面。如果都是可选参数就没关系。

//--默认参数
function calculate(price: number,rate: number = 0.5){
    console.log(price*rate)
}
//默认参数不可设置为可选参数

//--剩余参数
function bulidName(firstName: string, ...otherName: string[]){
    console.log(firstName)
}

/* BUmber */
//toExponential 把对象的值转换为指数计数法
var num1 :number = 1225.3
num1.toExponential()//1.2253e+3
//toFixed 把数字转换为字符串，并对小数点指定位数
var num2: number = 1225.3
num2.toFixed()//1225
num2.toFixed(1)//1225.3
num2.toFixed(2)//1225.30
//toPrecision 把数字格式化为指定的长度的字符串
var num2: number = 7.123456
num2.toFixed()//7.123456
num2.toFixed(1)//7
num2.toFixed(2)//7.1
//toLocaleString() 把数字转换为字符串，使用本地数字格式顺序。
var num3 = new Number(177.1234); 
console.log( num3.toLocaleString());  // 输出：177.1234
//toString() 把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。
//valueOf() 返回一个 Number 对象的原始数字值。

/* 数组 */
var numArr: number[] = [1,2,3]
var strarr: string[] = ['1','2','3']
var numsArr: number[][] = [[1,2,3],[1,2,3]]
/* 元祖 */
var yuanArr = [1,'2',{3:'3'}]
/* 联合 */
var arr: number[] | string[]

/* 接口 */
//接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: ()=>string
}

var cus1: IPerson = {
    firstName: 'Tom',
    lastName: 'Sen',
    sayHi: ():string =>{
        return 'sayHi'
    }
}
console.log(cus1.firstName);
console.log(cus1.lastName);
console.log(cus1.sayHi());

var cus2: IPerson = {
    firstName: 'Tom2',
    lastName: 'Sen2',
    sayHi: ():string =>{
        return 'sayHi2'
    }
}
console.log(cus2.firstName);
console.log(cus2.lastName);
console.log(cus2.sayHi());

/* 继承 */
//单继承
interface Person{
    name: string
}
interface onPerson extends Person {
    age: number
}
// var zs:onPerson = {name: '',age: 0}
var zs = <onPerson>{}
zs.name = "zs"
zs.age = 18

//多继承
interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23}

/* 类 */
/* 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

字段 − 字段是类里面声明的变量。字段表示对象的有关数据。

构造函数 − 类实例化时调用，可以为类的对象分配内存。

方法 − 方法为对象要执行的操作。 */
class Car {
    //字段
    engine: string
    //构造函数
    constructor(engine:string){
        this.engine = engine
    }
    //方法
    disp():void {
        console.log(this.engine)
    }
}
var bmw = new Car('BMW')
console.log(bmw.engine);
bmw.disp()
