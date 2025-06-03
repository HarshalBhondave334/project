// function printNumbers() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }
// printNumbers();


// for in loop 

let student = { Name :'Rahul Kumar', Age : 20 , Address: 'kalyn', Number:76687675}


// for (let i in student ) {
//   console.log(i); // with out key 

// }

for (let i in student ){
 console.log('key=',i,"value=",student[i]);
}

