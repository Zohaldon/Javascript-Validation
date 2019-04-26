/*To Check if two password are same or not -----------------------------------------------------------*/
var checkPassword = function() {
    if (document.getElementById('passwordinput').value == document.getElementById('confirminput').value)
    {
      document.getElementById('passwordmatch').style.color = 'green';
      document.getElementById('passwordmatch').innerHTML = 'Entered password is matching';
    }
    else 
    {
      document.getElementById('passwordmatch').style.color = 'red';
      document.getElementById('passwordmatch').innerHTML = 'Entered password is not matching';
    }  
} 
/*----------------------------------------------VALIDATE EMAIL---------------------------------------------*/
function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userform.emailinput.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address! Make sure that it contains @ and . ")
    return (false)
} 

/*----------------------------------------------VALIDATE POSTAL CODE---------------------------------------------*/
function ValidatePostCode(code) {
 if (/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/.test(userform.postcodeinput.value))
  {
    return (true)
  }
    alert("You have entered an invalid postal code !")
    return (false)
} 
/*----------------------------------------------VALIDATE PASSWORD---------------------------------------------*/
var myInput = document.getElementById("passwordinput");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("paswwordrequirment").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("paswwordrequirment").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    document.getElementById('let').innerHTML = '&#10004;';    
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    document.getElementById('let').innerHTML = '&#10008;';
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    document.getElementById('cap').innerHTML = '&#10004;';
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.getElementById('cap').innerHTML = '&#10008;';
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
    document.getElementById('num').innerHTML = '&#10004;';
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    document.getElementById('num').innerHTML = '&#10008;';
  }

  // Validate length
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    document.getElementById('len').innerHTML = '&#10004;';
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    document.getElementById('len').innerHTML = '&#10008;';
  }
}

/*------------------------------------ restrict user from entering the number in the text field------------------------------------------*/
function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}
/*-----------------------------restrict user from entering the number in the text field---------------------------------------------------*/
function numbersOnly(input) {
    var regex = /[^0-9]/gi;
    input.value = input.value.replace(regex, "");
}
