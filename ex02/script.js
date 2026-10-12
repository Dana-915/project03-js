const title = document.getElementById("main-title");
const message = document.querySelector("#message");

title.textContent = "The Live DOM Tree";
message.textContent = "The message has been changed!";

title.style.color = "blue";

message.classList.add("active");