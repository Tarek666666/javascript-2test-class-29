
/* Explain what and why will be logged on the console if we run this code snippet?

Bonus: explain what and why will be logged on the console if we used let instead of var inside the for loop?*/




const myFunction = () => {
    const arr = [10, 12, 15, 21];
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function() {
        console.log('Index: ' + i);
      }, 3000);
    }
  };
  
  myFunction();

  // first case it will print after 3 seconds ( index : 4 ) 4 times cause there is a setTimeout of 3 seconds , the iteration will reach the last index before
  // the 3 seconds is passed and since we have useed var to declare i so var i after 3 seconds will be reassigned to the last value which is 4 .


  // if we use let instead of var , it will normally iterate and print : index : 0 , index : 1 , index : 2 , index : 3  cause i is already declared with let so
  // it will maintain it's value through the iteration

  