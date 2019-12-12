// the arrays for the letters of the alphabet and words that will be picked randomly
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["chicken dinner", "gravy with food", "tuna", "salmon", "kibbles", "fish", "beef", "turkey", "pumpkin", "mouse wands", 
    "feather toys", "bells and balls", "a tabby", "a torbie", "a tortoiseshell", "a calico", "cat tree", "tunnel for cat", "treats"];
var guessed = [""];

// variables for wins and loses, starting out at 0
var winCount = 0;
var loseCount = 0;

// variables to/for grab the id from html
var guessWord = document.getElementById("guess-Word");
var chancesLeft = document.getElementById("chances-Left");
var letterGuessed = document.getElementById("letter-Guessed");
var start = document.getElementById("start");
var stop = document.getElementById("stop");


// variables for pc to pick a random word
var randomWord = words[Math.floor(Math.random() * words.length)]

// showing _ _ _ _ for every character of the word picked
for (var i = 0; i < randomWord.length; i++) {
    guessWord.append("_ ");
    console.log(randomWord);
}

// User input by pressing on anything on the keyboard
document.onkeyup = function(keypressed) {
    var userInput = keypressed.key.toLowerCase();
// limiting the letters shown to only the alphabet
    if (letters.includes(userInput)) {
        // this nested if else will check if you already use the letter
        if (!guessed.includes(userInput)) {
            guessed.push(userInput);
            letterGuessed.append(userInput + " ");
        }
        else {
            alert("You already guessed this letter!");
        }
    }
    else {
        alert("That is not a letter!")
    }

// comparing user input with the generated word
if (randomWord.includes(userInput)) {
    alert("you are right!");
}
    
}

