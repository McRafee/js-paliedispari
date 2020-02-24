/*
    A) Una funzione per capire se la parola è palindroma
    B) L’utente sceglie pari o dispari e un numero da 1 a 5.
        Generiamo un numero random (sempre da 1 a 5) per il computer.
        Sommiamo i due numeri e dichiariamo chi ha vinto.
*/
var myPal = promptMePalindrome();


// A - Write a JavaScript function that checks whether a passed string is palindrome or not?
function check_Palindrome(inputString){
// Check-1 - Change the string into lower case and remove all non-alphanumeric characters
   var checkString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''); // g flag is for global search
	var checkCount = 0;
// Check-2 - Check whether the string is empty or not
	if(checkString==="") { // === is for strictly equal search
		console.log("Nothing found!");
		return false;
	}
// Check-3 - Check if the length of the string is even or odd
	if ((checkString.length) % 2 === 0) {
		checkCount = (checkString.length) / 2;
	} else {
// Check-4 - If the length of the string is 1 then it becomes a palindrome
		if (checkString.length === 1) {
			console.log("The input is a palindrome.");
			return true;
		} else {
// Check-5 - If the length of the string is odd ignore middle character - Example: "madam"
			checkCount = (checkString.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var c = 0; c < checkCount; c++) { // c is for char index
// Compare characters and drop them if they do not match
		if (checkString[c] != checkString.slice(-1-c)[0]) {
			console.log("The input is not a palindrome.");
			return false;
		}
	}
	console.log("The input is a palindrome.");
	return true;
}

function promptMePalindrome(){
    var txt;
    var myPrompt = prompt("Write a String:");
    if (myPrompt == null || myPrompt == "") {
      txt = "User cancelled the prompt.";
    } else {
        if (check_Palindrome(myPrompt) === true) {
            txt = myPrompt.toUpperCase() + " is a palindrome.";
            alert(myPrompt.toUpperCase() + " is a palindrome.");
        } else {
            txt = myPrompt.toUpperCase() + " is not a palindrome.";
            alert(myPrompt.toUpperCase() + " is not a palindrome.");
        }
    }
    document.getElementById("response").innerHTML = txt
    return txt;
}

// B

function uglyGame() {
    var userOddEven = prompt("Scegli pari o dispari");
    console.log(userOddEven);
    var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
    console.log(userNumber);
    var machineNumber = generaRandomMinMax(1, 5);
    console.log(machineNumber);
    var sumGame = userNumber + machineNumber;
    console.log(sumGame);

    if (isPari(sumGame) && (userOddEven == "Pari") ) {
        alert("Bravo, hai scelto " + userOddEven + " e la somma è " + userOddEven + ".");
    } else if ((!isPari(sumGame)) && (userOddEven == "Dispari")) {
        alert("Bravo, hai scelto " + userOddEven + " e la somma è " + userOddEven + ".");
    } else {
        alert("Sei un pollo e hai perso.")
    }
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}

function isPari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
