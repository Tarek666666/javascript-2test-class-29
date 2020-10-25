//Explain what and why would be logged on the console?

   function parent() {
     var hoisted = "I'm a variable";
     function hoisted() {
         return "I'm a function";
     }
     return hoisted(); 
   }
   console.log(parent());
   

   // it will prints an error, because it's true we declared var hoisted but we declare inside a function scope , and we declared it as a variable,
   // inside the same function scope when we try to declare the same var hoisted which was a string as a function, it won't work and prints error that 
   // hoisted is not a function. if we declare the function with a different name it will work propely.
   