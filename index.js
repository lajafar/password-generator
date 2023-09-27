const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")

function getRandomCharacter() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
    
}

let passwordLength = 12

function generateRandomPassword() {
    let passwordOne = " "
    let passwordTwo = " "
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += getRandomCharacter()
        passwordTwo += getRandomCharacter() 
    }
    password1.textContent = passwordOne
    password2.textContent = passwordTwo
}

