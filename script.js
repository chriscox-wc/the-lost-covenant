// Caesar Cipher Shift (-3 to decode)
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
    let correctAnswer = caesarCipher("Vhhk wkh Fryhqdqw", 3);  // Shift of 3 for Caesar Cipher

    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").innerHTML = "Correct! Proceed to the next chapter.";
        document.getElementById("result").style.color = "green";
        setTimeout(() => {
            window.location.href = "chapter2.html"; // Ensure you create this file later
        }, 2000);
    } else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
        document.getElementById("result").style.color = "red";
    }
}
