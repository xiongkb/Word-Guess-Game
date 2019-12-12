// the arrays for the letters of the alphabet and words that will be picked randomly
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["chicken dinner", "gravy with food", "tuna", "salmon", "kibbles", "fish", "beef", "turkey", "pumpkin", "mouse wands", 
    "feather toys", "bells and balls", "a tabby", "a torbie", "a tortoiseshell", "a calico", "cat tree", "tunnel for cat", "treats"];
var guessed = []; //letter user guessed
var unique = []; //unique letters from chosen word
var charSpace = ""; //the dashes of the chosen word

// variables for wins and loses, starting out at 0
var winCount = 0;
var loseCount = 0;

// variables to/for grab the id from html
var chosenWord = document.getElementById("chosen-Word");
var chancesLeft = document.getElementById("chances-Left");
var letterGuessed = document.getElementById("letter-Guessed");
var start = document.getElementById("start");
var stop = document.getElementById("stop");


// variables for pc to pick a random word
var randomWord = words[Math.floor(Math.random() * words.length)]

// showing _ _ _ _ for every character of the word picked
for (var i = 0; i < randomWord.length; i++) {
    if (randomWord.charAt(i) === " ") { //solving the space so there is no _ for a space, but a space
        charSpace += "&nbsp;"
    } else {
        charSpace += "_&nbsp;";
    }
    chosenWord.innerHTML = charSpace;

    //checking for unique letter and spaces to input into array
    if (!unique.push(randomWord.charAt(i)) && !((randomWord.charAt(i) === " "))) {
        unique.push(randomWord.charAt(i));
    }
}
console.log(randomWord)
// User input by pressing on anything on the keyboard
document.onkeyup = function(keypressed) {
    var userInput = keypressed.key.toLowerCase();
// limiting the letters shown to only the alphabet
    if (alphabet.includes(userInput)) {
        // this nested if else will check if you already use the letter
        if (!guessed.includes(userInput)) {
            guessed.push(userInput);
            letterGuessed.append(userInput + " ");

            if (unique.includes(userInput)) {
                var pickedWord = randomWord;
            }
        }
        else {
            alert("You already guessed this letter!");
        }
    }
    else {
        alert("That is not a letter!")
    }
}
