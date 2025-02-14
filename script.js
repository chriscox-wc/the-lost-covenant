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
