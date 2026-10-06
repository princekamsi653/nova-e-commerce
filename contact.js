document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

if (!form) {
    return;
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !userMessage) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent = "Thank you. Your message has been received.";

    form.reset();

});


});
