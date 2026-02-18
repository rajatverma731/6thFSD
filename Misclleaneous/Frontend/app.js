/// PROTOTYPE ///

// const stu1 = {
//     name : "Bunny",
//     age: 21,
//     marks: 95,
//     getMarks: function(){
//         return this.marks;
//     }
// };
// const stu2 = {
//     name : "jonny",
//     age: 22,
//     marks: 99,
//      getMarks: function(){
//         return this.marks;
//     }
// };

// const stu3 = {
//     name : "funny",
//     age: 25,
//     marks: 91,
//      getMarks: function(){
//         return this.marks;
//     }
// };

// let arr = [1,2,3];
// arr.sayhello = ()=>{
//     console.log("Hello, i am this")
// } 

/// FAMILY FUNCTION ///

// function PersonMaker(name, age){
//     const person = {
//         name:name,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     }
//     return person; 
// }


/// NEW OPERATOR /// Constructors - does'nt return anything

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person ("Rajat", 25); // instanece
// let p2 = new Person("ritu",26);

// let p1 = PersonMaker("Rajat", 21); // iski alag copy banegi memory me
// let p2 = PersonMaker("Sahil", 25); // iski bhi alag copy banegi


/// CLASSES IN JAVASCRIPT /// 

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Rajat", 21);
// let p2 = new Person("eve",25);

// Here is the parent or base class 

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
       super(name, age); // parent class constructor  called  
        this.marks = marks;
    }
   
}

class Teacher extends Person{
    constructor(name,age,subject){
      super(name,age); // parent class constructor  called  
        this.subject = subject;
    }
    
}
