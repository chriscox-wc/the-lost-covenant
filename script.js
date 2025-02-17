// Function to decrypt Caesar Cipher with a shift of -3
function caesarCipherDecrypt(str, shift) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {  // Uppercase letters (A-Z)
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {  // Lowercase letters (a-z)
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        return char;  // Keep spaces and punctuation unchanged
    }).join('');
}

function checkAnswer() {
    let userInput = document.getElementById("user-input").value.trim();
    let correctAnswer = caesarCipherDecrypt("Vhhn wkh Fryhqdqw", 3);  // Decrypt back to "Seek the Covenant"

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "Correct! Proceed to the next chapter.";
        document.getElementById("result").style.color = "green";
        setTimeout(() => {
            window.location.href = "chapter2.html";  // Ensure this file exists for navigation
        }, 2000);
    } else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Ensure script only runs on Chapter 2 page
    if (document.getElementById("puzzle-text")) {
        document.getElementById("userInput").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                checkSolution();
            }
        });
    }
});

function checkSolution() {
    let userInput = document.getElementById("userInput").value.toUpperCase().trim();
    let correctAnswer = "THE FIRST KEY WAS NEVER LOST"; // Correct plaintext

    if (userInput === correctAnswer) {
        document.getElementById("feedback").innerHTML = "Correct! You’ve decrypted the message.";
        document.getElementById("feedback").style.color = "green";
        document.getElementById("next-chapter").style.display = "block";
    } else {
        document.getElementById("feedback").innerHTML = "Incorrect. Try again.";
        document.getElementById("feedback").style.color = "red";
    }
}

// Function to check the Bible verse cipher puzzle
function checkBiblePuzzle() {
    // Expected correct letters forming "THE ANSWER LIES WITHIN THE CODE"
    const correctLetters = [
        "T", "H", "E", "A", "N", "S", "W", "E", "R", 
        "L", "I", "E", "S", "W", "I", "T", "H", "I", "N", 
        "T", "H", "E", "C", "O", "D", "E"
    ];
    
    // Get user inputs
    const userInputs = [];
    for (let i = 1; i <= correctLetters.length; i++) {
        userInputs.push(document.getElementById(`letter${i}`).value.toUpperCase());
    }

    // Check if user inputs match the correct letters
    let isCorrect = true;
    for (let i = 0; i < correctLetters.length; i++) {
        if (userInputs[i] !== correctLetters[i]) {
            isCorrect = false;
            break;
        }
    }

    // Display feedback
    const feedback = document.getElementById("puzzleFeedback");
    if (isCorrect) {
        feedback.innerHTML = "✅ Correct! The message reveals: <b>‘The answer lies within the code.’</b>" +
                             "<br><br><a href='chapter4.html' id='next-chapter'>➡ Continue to Chapter 4</a>";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Incorrect. Check the verse and letter positions again.";
        feedback.style.color = "red";
    }
}