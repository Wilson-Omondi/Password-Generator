// Get the variables

const numbers = document.getElementById('numbers');
const password = document.getElementById('password');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const symbols = document.getElementById('symbols');
const generate = document.querySelector('.btn-generate');
const copy = document.querySelector('.btn-copy');


// LISTEN FOR CLICKS FROM THE COPY BUTTON

  copy.addEventListener('click', () => {

    password.select();
    document.execCommand("copy")

  })

//LISTEN FOR CLICK ON THE GENERATE BUTTON

generate.addEventListener('click', ()=>{
  //create an empty array

  let result = [];

  // List of password characters

  var characters = "";
  //if numbers is checked add digits to characters
  if(numbers.checked){
    characters += "0123456789";
  }
  if(uppercase.checked){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(lowercase.checked){
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if(symbols.checked){
    characters += "!@#$%&*?/\<>^*";
  }

  //GET THE LENGTH OF THE CHARACTER STRING

  let charactersLength = characters.length;

  // A FOR LOOP TO RANDOMLY CHOOSE CHARACTERS FROM CHARACTER AND ADD TO RESULT
  //default length can be altered, this caseits 12.

  for(let i = 0; i < 12; i++){
    var randomNumber = (Math.floor(Math.random() * charactersLength))
    result += characters.substring(randomNumber, randomNumber +1)
    //console.log(result);
  }

  //CHANGING THE PASSWORD DISPLAYED
  password.value = result;

});


