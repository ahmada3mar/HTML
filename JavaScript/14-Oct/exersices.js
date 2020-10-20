/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

function isNumeric(num){
    return !isNaN(num)
  }
  
  myFunction();
  
  
  function myFunction() {
    
      do {
        var a = prompt("Please enter a number ");
        if(!isNumeric(a)){
            alert("YOU SHOULD ENTER NUMBER !!!!!")
        }
      }
      while (!isNumeric(a));
      
      
      do {
        var b = prompt("Please enter another number ");
        if(!isNumeric(b)){
            alert("YOU SHOULD ENTER NUMBER !!!!!")
        }
      }
      while (!isNumeric(b));
  
  if (a>b){
      alert(a)
  }else{
      alert(b)
  }
  
  }
  






/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

const a = 3 ;
const b = -7;
const c = 2;

if ( (a * b * c) >= 0  ){
    alert("The sign is '+'");

}else{
    alert("The sign is '-'");
}







/******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/


var a = [0 , -1 , 4];
a.sort();
a.reverse();
alert(a);


/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

var a = [-5,-2,-6,0,-1];
a.sort();
alert(a[a.length-1]);





/******* End Your Code ********* */





/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/

if(x>y){
    alert("Hello world");
}else{
    alert("Goodbye");
}



/******* End Your Code ********* */