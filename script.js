document.addEventListener('DOMContentLoaded'.function());
document.getElementById(registration-form);
document.getElementById(form-feedback);

document.addEventListener('submit');
function register(submit) {
    event.preventDefault()
};

document.getElementById(username);
document.getElementById(email);
document.getElementById(password);

const username = "username";
const email = "email";
const password = "password";

const value = username.trim();
const string = email.trim();
const str = password.trim();

var isValid = true;
let messages = [];
messages.push();

if (username.length<3) {
    return !isValid
}else {
    messages = isValid
};

if (password.length>8) {
    return isValid
}else {
    messages = !isValid
};

function displayFeedback(isValid, messages) {
    const feedbackDiv = document.getElementById('feedbackDiv');
    feedbackDiv.style.display = 'block';

    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }

}