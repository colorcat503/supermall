<template>
  <div id="profile">
    <div>传值练习 </div>
    <ConB ref="conB" parent="A" @fromB="fromB" height="'178cm'" age="25"></ConB>
    <conC name="conC"></conC>
    <p>{{nowdate|datefilter}}</p>
  </div>
</template>

<script>
import ConB from '../../components/conB.vue'
import conC from '../../components/conC.vue'
import moment from 'moment'
  export default {
    name: "Profile",
    provide:{
      name:'A组件里的provide'
    },
    components:{
      ConB,
      conC
    },
    data() {
      return {
        message:'我是父组件',
        nowdate:new Date()
        };
    },
    filters:{
      datefilter:function(value){
        return moment(value).format('YYYY/MM/DD h:mm:ss a');
      }
    },
    created(){
    //  这里拿不到 this.$refs.conB
    localStorage.setItem('aData','A存储的数据');
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(moment())
    },
    mounted(){
      let zwy = {
        name:'zwy',
        age:'18'
      }
      let zyc = zwy;
      zyc.age = 2
      console.log(zyc,zwy)
      console.log(5555555555555555555555)

      let arr6 = [1,3,4,66,88,5]
     console.log(Math.max(...arr6))
      class Person{
        age;
        #weight;
        constructor(age,weight){
          this.age = age;
          this.#weight = weight
        }
      }
      let xiaohong = new Person(18,'45KG')
      console.log(xiaohong)
      // console.log(xiaohong.#weight)
      const people = {
        name5 : 'zwy',
        age:'18',
      }
      const child = {
        name6:'zyc',
        age:'1.5',
        love:'吃'
      }
      console.log({...people,...child})
      function sendAjax(url){
        return new Promise((resolve,reject)=>{
          const x=new XMLHttpRequest();
          x.open('GET',url);
          x.send();
          x.readyState = function(){
            if(x.readyState === 4){
              if(x.status >=200 && x.status <300){
                resolve(x.response)
              }else{
                reject(x.status)
              }
            }
          }
        })
      }
      // sendAjax('https://api.apiopen.top/getJoke').then(res=>{
      //   console.log(res)
      // },err=>{
      //   console.log(Error)
      // })

      async function main(url){
        await sendAjax(url)
      }
      main('https://api.apiopen.top/getJoke').then(res=>{},err=>{
        console.log(err)
      })

      async function fn(){
        return new Promise((resolve,reject)=>{
          reject('失败')
        })
      }
      console.log(fn())
      console.log(Number('123.66'))
      console.log(Number.isFinite(10/0))
      console.log(Number.isInteger(5.5))

      class Phone{
        get price(){
          return 100
        }
        set price(newP){
          console.log(newP)
          return newP
        }
      }
      let shouji = new Phone()
      console.log(shouji.price)
      shouji.price = 200
      console.log(shouji.price)

      function Father(){

      }
      Father.prototype.say=function(){
        console.log('我是爸爸')
      }
      function Son(){
        Father.call()
      }
      Son.prototype = new Father()
       console.log(Son.prototype)
      Son.prototype.constructor = Father
      console.log(Son.prototype)
      
      let arr4 = [1,2,3,4,2]
      let arr5 = [3,4,5,4,6]
      // 交集
      let set5 = new Set(arr5)
      // let result = [...new Set(arr4)].filter(item=>set5.has(item))
      // 并集
      // let result = [...new Set(arr4),...new Set(arr5)] 
      //差集
      let result = [...new Set(arr4)].filter(item=>!set5.has(item))

      console.log(result)
return
       console.log(this.$refs.conB.message)
       console.log(this.$children[0].message)
       this.$bus.$on('conC',(arg)=>{
         console.log(555)
         console.log(arg)
       })
      //        this.$bus.on.conC(arg){
      // console.log(arg)
      //        }


      // 数据类型
        // 原始类型 （基本类型） String Number Boolean Null Undefined Symbol Bigint（任意大的数字） 
        // 对象类型 （引用类型） Object
          // 特殊的引用类型 Function Array RegExp Date Math Error Set Map
      // Symbol 本质上是一种唯一标识符，可用作对象的唯一属性名

      // typeof
      console.log('~~~~~~~~~~~~~~~~~')
      console.log(typeof 'a')
      console.log(typeof 1)
      console.log(typeof true)
      console.log(typeof undefined)
      console.log(typeof null)//object
      console.log(typeof 1n)
      console.log(typeof Symbol('a'))
      console.log(typeof {})
      console.log(typeof [])
      console.log(typeof /a/)
      console.log(typeof new Date())
      console.log(typeof new Map())
      console.log(typeof new Set())
      console.log(typeof function(){})//function
      // typeof 可以判断除了null以外的原始类型  
      // typeof 只能判断对象类型中的function 其他都为 object
      //typeof null 为 object 是js最初的bug
      console.log(typeof NaN)//number

      //instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
      console.log(1 instanceof Number)//false
      console.log(new Number(1) instanceof Number)//true

      const arr22 = []
      console.log(arr22 instanceof Array)//true
      console.log(arr22 instanceof Object)//true

      const Fn = function(){
        this.name = '构造函数'
      }

      Fn.prototype = Object.create(Array.prototype)
      let a = new Fn()
      console.log(a.name)
      console.log(a instanceof Array)
      // instanceof 可以准确判断对象(引用)类型,但是不能准确检测原始类型
      //由于我们可以随意修改原型的指向导致检测结果不准确,所以这种方法不安全

      // Symbol.hasInstance  使用 instanceof 检测原始类型数据
      class ArrayType {
        static [Symbol.hasInstance] = instance => Array.isArray(instance);
      }
      console.log([] instanceof ArrayType);//true
      class NumberType {
        static [Symbol.hasInstance] = instance => typeof instance === 'number';
      }
      console.log(111 instanceof NumberType);//true
      class StringType {
        static [Symbol.hasInstance] = instance => typeof instance === 'string';
      }
      console.log('111' instanceof StringType);//true
      class BooleanType {
        static [Symbol.hasInstance] = instance => typeof instance === 'boolean';
      }
      console.log(true instanceof BooleanType);//true
      class SymbolType {
        static [Symbol.hasInstance] = instance => typeof instance === 'symbol';
      }
      console.log(Symbol() instanceof SymbolType);//true
      class NullType {
        static [Symbol.hasInstance] = instance => instance === null;
      }
      console.log(null instanceof NullType);//true
      class UndefindType {
        static [Symbol.hasInstance] = instance => typeof instance === 'undefined';
      }
      console.log(undefined instanceof UndefindType);//true

      // 手写instanceof
      const myintanceof = function(instance,constructor){
        if (typeof instance !== 'object' || instance === null ) return false
        let proto = Object.getPrototypeOf(instance)
        while(true){
          if(proto === null) return false
          if(proto === constructor.prototype) return true
          console.log(proto)
          proto = Object.getPrototypeOf(proto)
          console.log(proto)
        }
      }
      let arr333 = []
      console.log(myintanceof(arr333,Array))
      console.log(myintanceof(arr333,RegExp))

      //constructor
      console.log('zwy'.constructor === String)//true
      console.log((1).constructor === Number)//true
      console.log(true.constructor === Boolean)//true
      console.log(Symbol().constructor === Symbol)//true
      console.log(1n.constructor === BigInt)//true
      console.log({}.constructor === Object)//true
      console.log([].constructor === Array)//true
      console.log(function(){}.constructor === Function)//true
      console.log(new Date().constructor === Date)
      console.log(new Set().constructor === Set)//true
      console.log(new Map().constructor === Map)//true
      // 不能检测 null undefined，会报错  其他类型都可以检测（原始类型，引用类型）
      //不安全 实例的constructor 可以随意修改

      // Object.prototype.toString.call()  返回检测类型的字符串
      // str.replace(/^\[object (\S+)\]$/,'$1').toLowerCase() 转换检测结果为小写类型名称
      console.log(Object.prototype.toString.call('a')) //[object String]
      console.log(Object.prototype.toString.call(123)) //[object Number]
      console.log(Object.prototype.toString.call(true)) //[object Boolean]
      console.log(Object.prototype.toString.call(null)) //[object Null]
      console.log(Object.prototype.toString.call(undefined)) //[object Undefind]
      console.log(Object.prototype.toString.call(Symbol())) //[object Symbol]
      console.log(Object.prototype.toString.call(1n)) //[object BigInt]

      console.log(Object.prototype.toString.call({})) //[object Object]
      console.log(Object.prototype.toString.call([])) //[object Array]
      console.log(Object.prototype.toString.call(function(){})) //[object Function]
      console.log(Object.prototype.toString.call(new Set())) //[object Set]
      console.log(Object.prototype.toString.call(new Map())) //[object Map]
      console.log(Object.prototype.toString.call(new Date())) //[object Date]

      // 封装通用方法
      function getType(obj){
        let type = typeof obj
        if(type !== 'object') return type
        return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,'$1').toLowerCase()
      }
      console.log(getType('a'))//string
      console.log(getType([]))//array
      
      
return
      // Symbol 
        console.log('-----------------------------')
        let id1 = Symbol('id');
        let id2 = Symbol('id');
        console.log(id1)
        console.log(id1 === id2)

        let obj={
          [id1]:'SymBol1',
          typeof:'Object'
        }
        // 不可枚举
        for(let key in obj){
          console.log(obj[key])//只打印 ‘Object’
        }

        let arr = Object.getOwnPropertySymbols(obj)
        console.log(arr)//[Symbol(id)]
        console.log(obj[arr[0]])//'SymBol1'
        //symbol.for()
        let name1 = Symbol.for('name')
        let name2 = Symbol.for('name')
        console.log(name1 === name2)//true
        // Symbol.keyFor 获取参数值
        console.log(Symbol.keyFor(name1))//'name'
    
    //Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。
    let myMap = new Map();
    let keyObj = {};
    let keyFunc = function() {};
    let keyString = 'a string';

    // 添加键
    myMap.set(keyString, "和键'a string'关联的值");
    myMap.set(keyObj, "和键keyObj关联的值");
    myMap.set(keyFunc, "和键keyFunc关联的值");

    console.log(myMap.size) // 3
    // 读取值
    console.log(myMap.get(keyString)) ;    // "和键'a string'关联的值"
    console.log( myMap.get(keyObj));       // "和键keyObj关联的值"
    console.log(myMap.get(keyFunc));      // "和键keyFunc关联的值"

    console.log(myMap.get('a string'));   // "和键'a string'关联的值"
                            // 因为keyString === 'a string'
   console.log( myMap.get({}));           // undefined, 因为keyObj !== {}
   console.log( myMap.get(function() {})); // undefined, 因为keyFunc !== function () {}
 
  //  NAN 为key
    myMap.set(NaN, "not a number");

    console.log( myMap.get(NaN)); // "not a number"

    let otherNaN = Number("foo");
    myMap.set(otherNaN, "not a number2");
    console.log(otherNaN)//NAN
    console.log(typeof otherNaN)//number
    console.log( myMap.get(otherNaN)); // "not a number2"
     console.log( myMap.get(NaN)); // "not a number2"
// 枚举 for of
    for (let [key, value] of myMap) {
      console.log(key + " = " + value);
    }
    console.log(myMap.keys())//返回一个对象
    for (let key of myMap.keys()) {
      console.log(key);
    }
    for (let value of myMap.values()) {
      console.log(value);
    }
    // forEach
    myMap.forEach((value,key)=>{
      console.log(key,value)
    })

    const regexp = /t(e)(st(\d?))/g;
    const str = 'test1test2';
    const array = [...str.matchAll(regexp)];
    console.log(array)

    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    const regex = /Dog/ig;
    // replaceAll 参数是正则是 必须是全局匹配g
    console.log(p.replaceAll(regex, 'ferret'));

    let aaa = {name:'zwy',age:15}
    let namea=aaa['name']
    console.log(namea)
    const array1 = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    console.log(array1.copyWithin(0, 3, 4));
    console.log(array1)
    // expected output: Array ["d", "b", "c", "d", "e"]

    // copy to index 1 all elements from index 3 to the end
    console.log(array1.copyWithin(1, 3));
    // expected output: Array ["d", "d", "e", "d", "e"]

    const array2 = [1, 2, 3, 4];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array2.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array2.reduce(reducer, 5));

    let date = new Date()
    console.log(date)
    let date1 = new Date(95, 11, 17);
    console.log(date1)
    console.log(Date.now())
    console.log(date.getMilliseconds())
    console.log(date1.getTime())

    
    },
    methods:{
      fromB(arg){
        console.log(arg)
      }
    }
  };
</script>

<style scoped></style>
