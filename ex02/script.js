
const title = document.getElementById("main-title");
const message = document.querySelector("#message");
const button = document.getElementById("changeButton");

title.textContent = "The Live DOM Tree";
message.textContent = "The message has been changed!";
title.style.color = "blue";
message.classList.add("active");

button.addEventListener("click", function() {
    message.textContent = "The button changed the text!";
});

