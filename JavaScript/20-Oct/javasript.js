// 1) create 3 classes as follow:
// - class name Person
// - class name Car
// - class name Animal
// - Class Person has 3 attributes inside (id, name, age) and has function named "Greeting" which will pring a greeting message
// - Class Carhas 3 attributes inside (id, type, year) and has function named "start" which will print a message that the car is running
// - Class Animal has 3 attributes inside (id, name, isPet (boolean)) and has function named homeAnimal which will return animal objects where its boolean isPet value is true.
// 2) create 2 objects for each class:
// - from class Person create 2 objects (name them as you please)
// - from class Car create 2 objects (name them as you please)
// - from class Animal create 2 objects (name them as you please)
// 3) create a class called "Teacher" that inherits the Person class then:
// - create an object called "Sobhi" from the class Teacher, and use inside it the function Greeting.
// 4) write an arrow function to print any object you pass it in the function braces ()
// 5) write a constructor to add attributes to the objects (ex: for the person class to add the id, name, and age using the constructor)
// 6) write an example for the following:
// - encapsulation
// - abstraction
// - inheritence
// - polymorphism
// >>try to use the example within the upper task



//crate class called person
class Person{

constructor(id , name , age){
    this.id = id;
    this.name=name;
    this.age=age;

}


Greeting=() => console.log("Hello" , this.name);
    
}

class Car{


constructor(id, type, year){
    this.id=id;
    this.type=type;
    this.year=year;

}

start = () => console.log("the car is running");

    


}


class Animal{
 

    constructor(id,name,isPet){
        this.id=id;
        this.name=name;
        this.isPet=isPet;

    }

/// to return object , just replace (this.name) to (this) only and delete all stringes
    homeAnimal = () =>((this.isPet) ? "the "+ this.name + " is a pet" : "not a Pet" );
    

}

//ctrate 2 object from Person class
Ahmad = new Person ("03A" , "Ahmad E'mar", 24);
Anas = new Person("04A","Anas jawabeh",22);

//crate 2 object from car class 
Ahmad_car =new Car('15-96521',"mustang",2020);
Anas_car= new Car("19-25475","Kia Sephia", 1994);

//crate 2 objects from Animal class 
Ahmad_fav_animal = new Animal("007","cat",true);
Anas_fav_animal = new Animal("13", "Lion", false);

//crate Teacher subclass from person 
class Teacher extends Person{

    constructor(id,name,age,sallary){
        super(id,name,age);

    }
    
    
}

//crate sobhi object from Teacher subclass 
sobhi = new Teacher("55C" , "Sobhi Murad" , 30 , 760);

//call Greeting method from parson
sobhi.Greeting();



