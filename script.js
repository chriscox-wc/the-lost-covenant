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

// Existing script, add this part below the existing functions for handling Chapter 1

document.getElementById('check-answer').addEventListener('click', function() {
    let correctGuesses = {
        'X': 'E',
        'L': 'T',
        'C': 'H',
        'J': 'S',
        'P': 'A'
    };

    let userGuesses = {
        'X': document.getElementById('guess-X').value.toUpperCase(),
        'L': document.getElementById('guess-L').value.toUpperCase(),
        'C': document.getElementById('guess-C').value.toUpperCase(),
        'J': document.getElementById('guess-J').value.toUpperCase(),
        'P': document.getElementById('guess-P').value.toUpperCase()
    };

    let correctCount = 0;
    for (let letter in correctGuesses) {
        if (userGuesses[letter] === correctGuesses[letter]) {
            correctCount++;
        }
    }

    if (correctCount === 5) {
        // If all guesses are correct, reveal the decoded message
        document.getElementById('message').textContent = 'Correct! Well done!';
        let cipherText = 'Xlxc jpnq gmj xyj fqjf xlmjw mlxpx slx xlmjxpwq ysqjq pxqq xmjx xyqj wqzx.';
        let decodedMessage = cipherText
            .replace(/X/g, 'E')
            .replace(/L/g, 'T')
            .replace(/C/g, 'H')
            .replace(/J/g, 'S')
            .replace(/P/g, 'A');
        document.getElementById('decoded-message').textContent = decodedMessage;
    } else {
        document.getElementById('message').textContent = 'Incorrect. Try Again.';
    }
});
