 let Nombre = 1;
 for(let Nombre = 1; Nombre <= 30; Nombre++) {
     if(Nombre % 3 === 0 && Nombre % 5 === 0) {
         console.log(Nombre+" FizzBuzz");
     } else if(Nombre % 3 === 0) {
         console.log(Nombre+" Fizz");
     } else if(Nombre % 5 === 0) {
         console.log(Nombre+" Buzz");
     } else {
         console.log(Nombre);
     }
    }