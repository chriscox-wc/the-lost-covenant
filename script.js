// Caesar Cipher Shift (-5 to decode)
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {  // Uppercase letters
            return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {  // Lowercase letters
            return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        return char;
    }).join('');
}

function checkAnswer() {
    let userInput = document.getElementById("user-input").value.trim();
    let correctAnswer = "Seek the Covenant";  // Correct decoded message

    // Decode the cipher text
    let decodedMessage = caesarCipher("Ymnx nx f qtsl yt ijxnsl.", 5); // Shift of 5 for Caesar Cipher

    if (userInput.toLowerCase() === decodedMessage.toLowerCase()) {
        document.getElementById("result").innerHTML = "Correct! Proceed to the next chapter.";
        document.getElementById("result").style.color = "green";
        // Redirect to next chapter (if available)
        setTimeout(() => {
            window.location.href = "chapter2.html"; // Ensure you create this file later
        }, 2000);
    } else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }
}
