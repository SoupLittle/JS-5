//Oppgave 1
 function sum_three(nums)
 {
   return nums[0] + nums[1] + nums[2];
 }

 console.log(sum_three([10, 32, 20]));  

//Oppgave 2

 let a = Number(prompt("Skriv et numer"))
 let b = Number(prompt("Skriv et til numer"))
 let c = Number(prompt("Skriv et siste numer"))

 function sumThreeNumbers() {

   return a + b + c;
 }

   console.log (sumThreeNumbers());
  

//Oppgave 3

 function compareNumbers() {
   // Lager to random tall
   const num1 = Math.floor(Math.random() * 11);
   const num2 = Math.floor(Math.random() * 11);

   // Sammenligner tall
   if (num1 < num2) {
    return `${num1} er mindre enn ${num2}`;
   } else if (num1 > num2) {
    return `${num1} er større enn ${num2}`;
   } else {
    return `${num1} er lik ${num2}`;
   }
 }

 console.log(compareNumbers());


//Oppgave 4

 function calculator() {
   let num1 = prompt("Skriv et tall");
   let num2 = prompt("Skriv et til tall");
   let operator = prompt("Hvilket tegn? (+, -, *, /)");

   let result;

  switch (operator) {
     case "+":
      result = Number(num1) + Number(num2);
       break;
    case "-":
       result = Number(num1) - Number(num2);
       break;
     case "*":
       result = Number(num1) * Number(num2);
       break;
     case "/":
       result = Number(num1) / Number(num2);
       break;
     default:
       return "Ikke gyldig!";
   }

   return `Resultat: ${result}`;
 }

 console.log(calculator());


//Oppgave 5

 let lower = prompt("Skriv inn et tall"); 
 let upper = prompt("Skriv inn et tall");

 let randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + Number(lower);

 console.log(randomNumber);
