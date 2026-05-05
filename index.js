// const arrowfn=(a,b)=>{
//     return a*b
// }
// console.log(arrowfn(3,4));

const { log } = require("console");



// const person={
//     name:"Himesh",
//     age:23,
//     greet(){
//         console.log(`My name is ${this.name}`);
        
//     }
// }


// person.greet()



// class Student {
//     constructor(name ,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }
//     setPlacementAge(minPlacementAge){
//         console.log(this,"jhjhjhj");
        
//           return  (minMarks)=>{
//         console.log(this,"minMarks");

//                   return  (name)=>{
//         console.log(this,"name");

//                     if(name==this.name){
//                       if(minMarks<this.marks && minPlacementAge<this.age){
//                   console.log(`${this.name} is eligible for placement`)
                
//                         }else{
//                             console.log(`${this.name} is not eligible for placement`)

//                         }   
//                     }
//                   }

            
//           }
//     }
// }


// const himsh =new Student("himesh",23,45)
// const hitesh =new Student("hitesh",23,50)
// himsh.setPlacementAge(18)(30)("himesh")



 const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
//  const res=array.map((item)=>item==' '?'empty string':item);
//  console.log(res);
//  console.log(array);

// const manipu=[...array,"fdfsdfd"];

// console.log(array);
// console.log(manipu);




//  const obj1 = {'key1': 1}

// const obj2 = {...obj1}
// console.log(obj1);
// console.log(obj2);

// if(obj2 == obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }


// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



//  console.log(obj1)

// console.log(obj2)




// const Counter = {
//     count: 0,
//     increment: function (){
//         this.count++;
//         console.log(this.count);
        
//     }
//     // your implementation here
// };


// console.log(Counter.increment());    
// console.log(Counter.increment());    
// Counter.incrementWithDelay(2000);


// const Counter = {
//     count: 0,
//     increment: function () {
//         this.count++;
//         return this.count 
//     },
//     incrementWithDelay: (time) => {
//         const self=Counter;
        
//         setTimeout(() => {
//             self.count++;
//              console.log(self.count)
//         },time)
//     }

// };

// console.log(Counter.increment());    
// console.log(Counter.increment());    
// Counter.incrementWithDelay(2000);






// function exactValues(people,key){
//    return people.map((item)=>{
        
//         return item[key]
//     })
// };




// const people = [

//  { name: 'Alice', age: 25 },

//  { name: 'Bob', age: 30 },

//  { name: 'Charlie', age: 35 },

// ];

// const res=exactValues(people,"name")
// console.log(res);


// console.log('a');

// console.log('b');

// setTimeout(async() => await console.log('c'), 3000)

// console.log('d');
// 

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// async function run() {
//   console.log('a');
//   console.log('b');

//   await delay(3000);
//   console.log('c');

//   await delay(0);
//   console.log('d');

//   console.log('e');
// }

// run();








// function applyDiscounts(products) {
//     return products.map((item) => {
//         console.log(item.price*(1-item?.discount));
        
//         return {
//             name: item?.name,
//             discountedPrice:item.price*(1-item?.discount)
//         }
//     })
// }




// const products =[{

// name: 'Laptop',

// price: 1000,

// discount: 0.1 },

// { name: 'Phone',

// price: 500,

// discount: 0.05

// }]


// const res=applyDiscounts(products);
// console.log(res);



//  function collectArgs(...args){
//     let uniqueArgs=[];
//      args.map((item)=>{
//         if(!uniqueArgs.includes(item)) {
//             uniqueArgs.push(item)
//         }
       
//     })

//     return {count:args.length,uniqueArgs}
    
//  }
//  const res=collectArgs(1,2,3,4,5,5);
//  console.log(res);
 
// const describe=(name,age=25,...hobbies)=>{
//     console.log(hobbies.map((item)=>item));
    
//     return `${name} is ${age} ${hobbies.map((item)=>item)} .`
// }

// const res=describe("himesh",28,"Atcing", "art","music");
// console.log(res);


// const tajMahal = {
//   name: 'Taj Mahal',
//   location: 'Agra',
//   built: 1648,
//   architecturalStyle: 'Mughal',
//   dimensions: {
//     area: '17 acres',
//   },
//   UNESCOWorldHeritage: true,
// };

// // Destructuring and renaming variables
// //Write your code here
// tajMahal.yearBuilt = tajMahal.built;
// tajMahal.dimensions={totalArea:tajMahal.dimensions.area}
// const { name, location, yearBuilt, architecturalStyle, dimensions, UNESCOWorldHeritage } = tajMahal;


// console.log(name, location, yearBuilt, architecturalStyle, dimensions, UNESCOWorldHeritage);











