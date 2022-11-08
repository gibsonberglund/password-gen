// Assignment code here

//declare all character sets
var charsnumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
var charsnonumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
var charsnonumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charsnumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenumnospec = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenonumnospec = 'abcdefghijklmnopqrstuvwxyz';
var charsnocasenonumspec = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()';

//create array that will contain password characters
var pwleng = [];

//ask for specifications from user
pwleng.length = prompt("How many characters do you want your password to be?");
//chekcs valid entry for character number
  if (pwleng.length < 8){
    console.log("sorry");
  } else if (pwleng.length>128){
    console.log("sorry");
//asks for other specifications
  } else {
    var pwcase = prompt("Case sensitive?");
      if (pwcase === "y"){
        var pwcasenum = prompt("Include numbers?");
          if (pwcasenum === "y") {
            var pwcasenumchar = prompt("Include special characters?");
              if (pwcasenumchar === "y") {
         //prints result for all yes answers
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnumspec.charAt(Math.floor(Math.random() * charsnumspec.length));
                }
                  console.log(pwleng.toString());
              } else if (pwcasenumchar === "n") {
         //prints result for yes to numbers and case sensitive but no to special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnumnospec.charAt(Math.floor(Math.random() * charsnumnospec.length));
                }
                  console.log(pwleng.toString());
          //invalid input
                } else {
                prompt("Sorry that is not a valid input. Please choose y or n.")
              } 
          } else if (pwcasenum === "n") {
            var pwcasenonumchar = prompt("Include special characters?")
              if (pwcasenonumchar === "y") {
          // prints result for no to numbers but yes to case sensitive and special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnonumspec.charAt(Math.floor(Math.random() * charsnonumspec.length));
                }
                  console.log(pwleng.toString());
              } else if (pwcasenonumchar === "n") {
          //prints result for no number, yes case sensitive, no special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnonumnospec.charAt(Math.floor(Math.random() * charsnonumnospec.length));
                }
                  console.log(pwleng.toString());
          //invalid input 
                } else {
                prompt("Sorry");
              }
          }
        } else if (pwcase === "n") {
          var psnocasenum = prompt("Include numbers?");
            if (psnocasenum === "y") {
              var psnocasenumchar = prompt("Include special characters?");
                if (psnocasenumchar === "y") {
          //prints result for not case sensitive, yes numbers and special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenumspec.charAt(Math.floor(Math.random() * charsnocasenumspec.length));
                  }
                    console.log(pwleng.toString());
                } else if (psnocasenumchar === "n") {
          //prints result for not case sensitive, yes numbers, no special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenumnospec.charAt(Math.floor(Math.random() * charsnocasenumnospec.length));
                  }
                    console.log(pwleng.toString());
          //invalid input
                  } else {
                  prompt("Sorry");
                }
            } else if (psnocasenum === "n") {
              var psnocasenonumchar = prompt("Include special characters?");
                if (psnocasenonumchar === "y") {
          //prints result for not case sentitive, no numbers, yes to special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumspec.charAt(Math.floor(Math.random() * charsnocasenonumspec.length));
                  }
                    console.log(pwleng.toString());
                } else if (psnocasenonumchar === "n") {
          //prints result for not case sentitive, no numbers, and no special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumnospec.charAt(Math.floor(Math.random() * charsnocasenonumnospec.length));
                  }
                    console.log(pwleng.toString());
                } else {
          //invalid input
                  prompt("Sorry");
                }
            } else {
          //invalid input
              prompt("sorry");
              }
        } else{
          //invalid input
            prompt("Sorry that is not a valid option. Choose y or n.");
          }
  }

//print password to html field
function writepw() {
  document.getElementById("password").innerHTML = pwleng.toString();
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writepw);
