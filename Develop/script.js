// Assignment code here

//declare all character sets
var charsnumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
var charsnonumspec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
var charsnonumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charsnumnospec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenumnospec = 'abcdefghijklmnopqrstuvwxyz0123456789';
var charsnocasenonumnospec = 'abcdefghijklmnopqrstuvwxyz';
var charsnocasenonumspec = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
var charsnocasenumspec = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

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
    var pwcase  = prompt("Case sensitive? Answer Y/N");
    pwcase = pwcase.toLowerCase();
      if (pwcase === "y"){
        var pwcasenum = prompt("Include numbers? Answer Y/N");
        pwcasenum = pwcasenum.toLowerCase();
          if (pwcasenum === "y") {


    //selection is yes to case sensitive, numbers, and special characters
            var pwcasenumchar = prompt("Include special characters? Answer Y/N");
            pwcasenumchar = pwcasenumchar.toLowerCase();
              if (pwcasenumchar === "y") {
          //runs a randomizer for each oject in the array - for character set: yes to case sensitive, numbers, and special characters
                for (var i=0; i < pwleng.length; i++) {
                pwleng[i] = charsnumspec.charAt(Math.floor(Math.random() * charsnumspec.length));
                }
          //creates a string from the array
                var pwstring = pwleng.join('');
          //prints the string to the password field
                document.getElementById("password").innerHTML = pwstring;


    //selection is yes to case sensitive and numbers, no special characters      
              } else if (pwcasenumchar === "n") {
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
                return;
              } 

          //user selects yes case sensitive but no numbers
          } else if (pwcasenum === "n") {
            var pwcasenonumchar = prompt("Include special characters? Answer Y/N")
            pwcasenonumchar = pwcasenonumchar.toLowerCase();
    //selection is yes case sensitive, no to numbers, yes to special characters
              if (pwcasenonumchar === "y") {
          //runs a randomizer for each oject in the array - for character set: yes to case sensitive, no to numbers, yes to special characters
                for (var i=0; i < pwleng.length; i++) {
                  pwleng[i] = charsnonumspec.charAt(Math.floor(Math.random() * charsnonumspec.length));
                }
          //creates a string from the array
                var pwstring = pwleng.join('');
          //prints the string to the password field
                document.getElementById("password").innerHTML = pwstring;

    //selection is yes case sensitive, no to numbers, no to special characters
              } else if (pwcasenonumchar === "n") {
          //runs a randomizer for each oject in the array - for character set: yes case sensitive, no number, no special characters
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
          } else {
            alert("Sorry, that is not a valid answer, please choose Y or N");
            return;
          }

    //user selects not case sensitive
      } else if (pwcase === "n") {
          var psnocasenum = prompt("Include numbers? Answer Y/N");
          psnocasenum = psnocasenum.toLowerCase();
            if (psnocasenum === "y") {
              var psnocasenumchar = prompt("Include special characters? Answer Y/N");
              psnocasenumchar = psnocasenumchar.toLowerCase();
          //selection is no to case sensitive, yes to numbers, yes to special characters
                if (psnocasenumchar === "y") {
          //runs a randomizer for each oject in the array - for character set: not case sensitive, yes numbers and special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenumspec.charAt(Math.floor(Math.random() * charsnocasenumspec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;


                } else if (psnocasenumchar === "n") {
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

    //user selects no to case sensitive and no to numbers
            } else if (psnocasenum === "n") {
              var psnocasenonumchar = prompt("Include special characters? Answer Y/N");
              psnocasenonumchar = psnocasenonumchar.toLowerCase();
    //selection is no to case sensitive, no to numbers, yes to special characters
                if (psnocasenonumchar === "y") {
          //runs a randomizer for each oject in the array - for character set: not case sentitive, no numbers, yes to special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumspec.charAt(Math.floor(Math.random() * charsnocasenonumspec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;

    //selection is no to case sensitive, no to numbers, no to special characters
                } else if (psnocasenonumchar === "n") {
          //runs a randomizer for each oject in the array - for character set: not case sentitive, no numbers, and no special characters
                  for (var i=0; i < pwleng.length; i++) {
                    pwleng[i] = charsnocasenonumnospec.charAt(Math.floor(Math.random() * charsnocasenonumnospec.length));
                  }
          //creates a string from the array
                  var pwstring = pwleng.join('');
          //prints the string to the password field
                  document.getElementById("password").innerHTML = pwstring;


                } else {
          //invalid input for 'special characters
                alert("Sorry, that is not a valid answer, please choose Y or N");
                return;
                }
            } else {
          //invalid input for 'numbers'
              alert("Sorry, that is not a valid answer, please choose Y or N");
              return;
              }
        } else {
          //invalid input for 'case sensitive'
          alert("Sorry, that is not a valid answer, please choose Y or N");
          return;
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
