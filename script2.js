
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    } 

    else if(e.target.innerHTML == '<--'){
      string = ""
      document.querySelector('input').value = string;
    } 
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  }) 
})

// let string = " ";
// let buttons = document.querySelectorAll('.button') // here we use query to accece the class button
// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (e) => {
//    // start  
//        if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     } //end but equal sign comming  
//     else{  
//     console.log(e.target)
//     // 1) here we input one and more input in conslsole
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;

//     }

//   })
// })
//     // 2) here we get answer of operation input




