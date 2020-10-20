// Write a program to calculate the marks of a student, the program should has the following:
// - 6 variables for each subject (Math, English, Arabic, Bio, Computer, Religion)
// - a constant of the subjects number
// The program work flow should be as follow:
// 1. Ask student to enter his/her name
// 2. Ask student to enter the mark of each subject one by one (mark of 100).
// 3. the program will calculate the sum of all subjects marks
// 4. the program will calculate the average mark of the subjects
// 5. the program will print out the result average as follow:
// a. 50 to 60 will print (Pass)
// b. 60 to 70 will print (average)
// c. 70 to 80 will print (good)
// d. 80 to 90 will print (very good)
// e. 90 to 100 will print (Excellent)


var Name= prompt("Enter Your Name");
        
        const numOfsub = 6;

        
        function isNumeric(num){
            return !isNaN(num)
        }
        
        myFunction();
  
  
  function myFunction() {
    
      do {
        var math= prompt("Enter Your marks of math out of 100");
        if(!isNumeric(math) || 0 > math || math >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(math) || 0 > math || math >100);
      
      ///////////////////////////////////////////////////////////
      do {
        var eng= prompt("Enter Your marks of english out of 100");
        if(!isNumeric(eng) || 0 > eng || eng >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(eng) || 0 > eng || eng >100);
///////////////////////////////////////////////////////////////////////
      do {
        var ar= prompt("Enter Your marks of Arabic out of 100");
        if(!isNumeric(ar) || 0 > ar || ar >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(ar) || 0 > ar || ar >100);
///////////////////////////////////////////////////////////////////////
      do {
        var bio= prompt("Enter Your marks of Biology out of 100");
        if(!isNumeric(bio) || 0 > bio || bio >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(bio) || 0 > bio || bio >100);
/////////////////////////////////////////////////////////////////////

      do {
        var comp= prompt("Enter Your marks of Computer out of 100");
        if(!isNumeric(comp) || 0 > comp || comp >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(comp) || 0 > comp ||comp >100);

///////////////////////////////////////////////////////////////////////
      do {
        var rel= prompt("Enter Your marks of Religion out of 100");
        if(!isNumeric(rel) || 0 > rel || rel >100){
            alert("YOU SHOULD ENTER NUMBER BETWEEN 0 AND 100");
        }
      }
      while (!isNumeric(rel) || 0 > rel || rel >100);
      
      
      
      var total = parseInt(math) + parseInt(ar) + parseInt(eng)+ parseInt(rel) + parseInt(comp)+ parseInt(bio) ;
      
      
      alert("The SUM of all subjects is :" + total  );
      var Avg = ( total / numOfsub  );

      if (Avg < 50 ){
          alert("YOU ARE FALL STUPID")
      }
      
      if (50 <= Avg && Avg < 60 ){
          alert("Pass")
      }
      if (60 <= Avg && Avg < 70 ){
          alert("average")
      }
      if (70 <= Avg && Avg < 80 ){
          alert("good")
      }
      if (80 <= Avg && Avg < 90 ){
          alert("very good")
      }
      if (90 <= Avg && Avg < 100 ){
          alert("Excellent")
      }

        }