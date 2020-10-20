
//i'll try to comment as can as possible
// enjoy with reading spaghetti code ......





//create class named person
class person{
   
    //set constructor to the class that named person and giv it 3 arguments 
    constructor(first , last ,gender,){
        //set attributes to class person and set value to there equle constructor's arquments
        this.first=first;
        this.last=last;
        this.gender=gender;
            }
//create arow function (method) to print all attributes of person
            getFullInfo = () => (console.log( this.first , this.last , "and the gender is : ", this.gender))
          
}


//create object from person class 
ahmad = new person("Ahmad","Emar","Male");
//use getFullinfo to print all attributes
ahmad.getFullInfo();
moh = new person("mohammad" , "ziad" , "Male");

//create subclass called employee that inherits from person
class employee extends person{
    constructor(first , last , gender ,position,sallary,age){
        super(first,last)
        this.first=first;
        this.last=last;
        this.gender=gender;
        this.position=position;
        this.sallary=sallary;
        this.age=age;



    }


    getFullInfo = () => (console.log( this.first , this.last , "and the gender is : ", this.gender , "the position is : " , this.position , "sallary : " , this.sallary , "age is : " , this.sallary))
    gettax = () => (console.log( "tax is : ", this.sallary*0.16))
    
}


khalid = new employee("khalid" , "hani", "male" , "maneger" , 720 , 40)

khalid.getFullInfo()


//a new class called car 
class car{

    constructor(modle,color,speed){
        this.modle=modle;
        this.color=color;
        this.speed=speed;
    }


//you can measure the time needed to arrive by using this method
    getTime = (distance) => console.log(distance/this.speed);
    getFullInfo=() => console.log("color : " , this.color , "modle : ", this.modle , "speed : " , this.speed +"KM/h")

    
}


ahmads_car = new car("Mustang" , "Yellow",500);
ahmads_car.getFullInfo()
mohs_car = new car("sephia" ,"black", 100);
mohs_car.getFullInfo()

//exampli to measure a time 
ahmads_car.getTime(1500);








//there is nothing new :) 
class animal{

    constructor(name , food){
        this.name=name;
        this.food=food;

    }

    getFullInfo = () => console.log("this :", this.name , "can eat :" , this.food);
}

bird = new animal("bird","bateekh");
bird.getFullInfo();
cat = new animal("shrawekh","Mansaf");
cat.getFullInfo();

///by the way , yes my cat can eat mansaf :) 




