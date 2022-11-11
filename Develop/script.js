// Assignment code here

//declare all character sets
var charsnumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
var charsnonumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
var charsnonumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charsnumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenumnospec = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenonumnospec = 'abcdefghijklmnopqrstuvwxyz';
var charsnocasenonumspec = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
var num = '1234567890';

//create array that will contain password characters
var pwleng = [];

//ask user for number of characters, which will equal the length of the array
var makepw = function() {
  pwleng.length = prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");

//chekcs valid entry for number of characters
  if (pwleng.length < 8){
    alert("Sorry, that is not a valid answer, please choose a number between 8 and 128.");
  } else if (pwleng.length>128){
    alert("Sorry, that is not a valid answer, please choose a number between 8 and 128.");

//asks user for other specifications
  } else {
    var pwcase = prompt("Case sensitive? Answer Y/N");
      if (pwcase === "y" || "Y"){
        var pwcasenum = prompt("Include numbers? Answer Y/N");
          if (pwcasenum === "y" || "Y") {
            var pwcasenumchar = prompt("Include special characters? Answer Y/N");
              if (pwcasenumchar === "y" || "Y") {
          //redirects to password writing function
                var characterset = charsnocasenonumnospec + num;
                writepw();
              } else if (pwcasenumchar === "n" || "N") {
         //runs a randomizer for each oject in the array - for character set: yes to numbers and case sensitive but no to special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnumnospec.charAt(Math.floor(Math.random() * charsnumnospec.length));
                }
          //creates a string from the array
                var pwstring = pwleng.join('');
          //prints the string to the password field
                document.getElementById("password").innerHTML = pwstring;
          
          //invalid input
                } else {
                alert("Sorry, that is not a valid answer, please choose Y or N");
              } 
          } else if (pwcasenum === "n" || "N") {
            var pwcasenonumchar = prompt("Include special characters? Answer Y/N")
              if (pwcasenonumchar === "y" || "Y") {
          //runs a randomizer for each oject in the array - for character set: no to numbers but yes to case sensitive and special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnonumspec.charAt(Math.floor(Math.random() * charsnonumspec.length));
                }
          //creates a string from the array
                var pwstring = pwleng.join('');
          //prints the string to the password field
                document.getElementById("password").innerHTML = pwstring;


              } else if (pwcasenonumchar === "n" || "N") {
          //runs a randomizer for each oject in the array - for character set: no number, yes case sensitive, no special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnonumnospec.charAt(Math.floor(Math.random() * charsnonumnospec.length));
                }
          //creates a string from the array
                var pwstring = pwleng.join('');
          //prints the string to the password field
                document.getElementById("password").innerHTML = pwstring;
          //invalid input 
                } else {
                alert("Sorry, that is not a valid answer, please choose Y or N");
              }
          }


      } else if (pwcase === "n" || "N") {
          var psnocasenum = prompt("Include numbers? Answer Y/N");
            if (psnocasenum === "y" || "Y") {
              var psnocasenumchar = prompt("Include special characters? Answer Y/N");
                if (psnocasenumchar === "y" || "Y") {
          //runs a randomizer for each oject in the array - for character set: not case sensitive, yes numbers and special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenumspec.charAt(Math.floor(Math.random() * charsnocasenumspec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;


                } else if (psnocasenumchar === "n" || "N") {
          //runs a randomizer for each oject in the array - for character set: not case sensitive, yes numbers, no special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenumnospec.charAt(Math.floor(Math.random() * charsnocasenumnospec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;
          //invalid input
                  } else {
                  alert("Sorry, that is not a valid answer, please choose Y or N");
                }


            } else if (psnocasenum === "n" || "N") {
              var psnocasenonumchar = prompt("Include special characters? Answer Y/N");
                if (psnocasenonumchar === "y" || "Y") {
          //runs a randomizer for each oject in the array - for character set: not case sentitive, no numbers, yes to special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumspec.charAt(Math.floor(Math.random() * charsnocasenonumspec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;


                } else if (psnocasenonumchar === "n" || "N") {
          //runs a randomizer for each oject in the array - for character set: not case sentitive, no numbers, and no special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumnospec.charAt(Math.floor(Math.random() * charsnocasenonumnospec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;


                } else {
          //invalid input
                alert("Sorry, that is not a valid answer, please choose Y or N");
                }
            } else {
          //invalid input
              alert("Sorry, that is not a valid answer, please choose Y or N");
              }
        } else {
          //invalid input
          alert("Sorry, that is not a valid answer, please choose Y or N");
          }
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/

// Add event listener to generate button
generateBtn.addEventListener("click", makepw);

function writepw() {
//runs a randomizer for each oject in the array - for yes answers to all character types
for (var i=0; i < pwleng.length; i++) {
  pwleng[i] = charsnumspec.charAt(Math.floor(Math.random() * characterset.length));
}
//creates a string from the array
var pwstring = pwleng.join('');
//prints the string to the password field
document.getElementById("password").innerHTML = pwstring;
}