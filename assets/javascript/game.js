var wins = 0;
var loses = 0;
var chances = 7;
// variables to/for grab the id from html
var chosenWord = document.getElementById("chosen-Word");
var chancesLeft = document.getElementById("chances-Left");
var letterGuessed = document.getElementById("letter-Guessed");
var win = document.getElementById("win");
var lose = document.getElementById("lose");

// THE START OF THE GAME HERE
function start() {
    chosenWord.innerHTML = "";
    var start = document.getElementById("start");
    var context = this;
    // the arrays for the letters of the alphabet and words that will be picked randomly
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var words = ["chicken dinner", "gravy with food", "tuna", "salmon", "kibbles", "fish", "beef", "turkey", "pumpkin", "mouse wands", 
    "feather toys", "bells and balls", "a tabby", "a torbie", "a tortoiseshell", "a calico", "cat tree", "tunnel for cat", "treats"];
    var guessed = []; //letter user guessed
    var unique = []; //unique letters from chosen word
    var charSpace = ""; //the dashes of the chosen word

    // variables for pc to pick a random word
    var randomWord = words[Math.floor(Math.random() * words.length)]
    var placed = [];
    // showing _ _ _ _ for every character of the word picked
    for (var i = 0; i < randomWord.length; i++) {
    if (randomWord.charAt(i) === " ") { //solving the space so there is no _ for a space, but a space
        charSpace += "&nbsp;"
    } else {
        charSpace += "_&nbsp;";
    }
    chosenWord.innerHTML = charSpace;
    chancesLeft.innerHTML = chances;
    win.innerHTML = wins;
    lose.innerText = loses;
    //checking for unique letter and spaces to input into array
    if (!unique.includes(randomWord.charAt(i)) && ((randomWord.charAt(i) !== " "))) {
        unique.push(randomWord.charAt(i));
    }
    }   
    console.log(randomWord)
    // User input by pressing on anything on the keyboard
    document.onkeyup = function(keypressed) {
        var userInput = keypressed.key.toLowerCase();
        // limiting the letters shown to only the alphabet
        if (alphabet.includes(userInput)) {

            //chances left
            if (!unique.includes(userInput) && !guessed.includes(userInput)) { // loses code
                chances -= 1;
                chancesLeft.innerHTML = chances;

                if (chances === 0) {
                    loses += 1;
                    lose.innerHTML = loses;
                    chancesLeft.innerHTML = chances;
                    letterGuessed.innerHTML = [];
                    chances = 7;
                    setTimeout(() => {context.start();}, 100)
                }
            }
            // this nested if else will check if you already use the letter
            else if (!guessed.includes(userInput)) {
                guessed.push(userInput);
                letterGuessed.append(userInput + " ");

                if (unique.includes(userInput)) { //checking if user letter matches the selected word letter
                    var pickedWord = randomWord;
                    var index = unique.indexOf(userInput);
                    unique.splice(index, 1); //splicing where the index letter user picked

                    for (var i = 0; i < unique.length; i++) {
                        for (var j = 0; j < pickedWord.length; j++) {
                            if (pickedWord.charAt(j) === unique[i]){
                                pickedWord = pickedWord.substr(0,j) + "_" + pickedWord.substr(j + 1);
                            }
                        }
                    }
                    var correctWord = "";//getting rid of the _ being combined
                    for (var i = 0; i < pickedWord.length; i++) {
                        if (pickedWord.charAt(i) === " ") {
                            correctWord += "&nbsp";
                        } else {
                            correctWord += pickedWord.charAt(i) + "&nbsp";
                        }
                    }
                    chosenWord.innerHTML = correctWord; //paste the word into html

                    if (unique.length === 0) { //winner code
                        wins += 1;
                        win.innerHTML = wins;
                        letterGuessed.innerHTML = [];
                        chances.innerHTML = chances;
                        chances = 7;
                        setTimeout(() => {context.start();}, 100)
                    }
                    
                }
            } else {
                alert("You already guessed this letter!");
            }
        } else {
            alert("That is not a letter!")
        }
    }
}

function stop(){
    var stop = document.getElementById("stop");
    alert("Thanks for playing");
    alert("wins:" + wins + " loses:" + loses)
    document.getElementById("bulk").innerHTML = "<h1>Thanks for playing</h1>";
    
}