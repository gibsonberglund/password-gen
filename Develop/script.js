// Assignment code here

var pwleng = prompt("How many characters do you want your password to be?");
  if (pwleng === "8") {
    var pwcase = prompt("Case sensitive?");
      if (pwcase === "y"){
        var pwcasenum = prompt("Include numbers?");
          if (pwcasenum === "y") {
            var pwcasenumchar = prompt("Include special characters?");
              if (pwcasenumchar === "y") {
                prompt("cool");
              } else if (pwcasenumchar === "n") {
                prompt("aight");
              } else {
                prompt("Sorry that is not a valid input. Please choose y or n.")
              } 
          } else if (pwcasenum === "n") {
            var pwcasenonumchar = prompt("Include special characters?")
              if (pwcasenonumchar === "y") {
                prompt("word");
              } else if (pwcasenunumchar === "n") {
                prompt("gotcha");
              } else {
                prompt("Sorry");
              }
          }
        } else if (pwcase === "n") {
          var psnocasenum = ("Include numbers?");
            if (psnocasenum === "y") {
              var psnocasenumchar = prompt("Include special characters?");
                if (psnocasenumchar === "y") {
                  prompt("noice");
                } else if (psnocasenumchar === "n") {
                  prompt("k");
                } else {
                  prompt("Sorry");
                }
            } else if (psnocasenum === "n") {
              var psnocasenonumchar = prompt("Include special characters?");
                if (psnocasenonumchar === "y") {
                  prompt("right");
                } else if (psnocasenonumchar === "n") {
                  prompt("okay");
                } else {
                  prompt("Sorry");
                }
            } else {
              prompt("sorry");
              }
        } else{
            prompt("Sorry that is not a valid option. Choose y or n.");
          }
     } else {
    prompt("Sorry that is not a valid option. Choose a number between 8 and 128.");
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
generateBtn.addEventListener("click", writePassword);
