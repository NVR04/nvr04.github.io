const sendButton = document.getElementById("sendButton");
const deleteButton = document.getElementById("deleteButton");

const webhookInput = document.getElementById("webhookInput");
const messageInput = document.getElementById("messageInput");
const usernameInput = document.getElementById("usernameInput");
const title = document.getElementById("title");

const message = document.getElementById("message");
const sent = document.getElementById("sent");
const deleted = document.getElementById("deleted");

let messageShowing = false;

title.addEventListener("click", () => {
  window.location.href = "/index.html";
})

sendButton.addEventListener(
  "click",
  () => {
    if (messageShowing) return;
    fetch(webhookInput.value, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // the username to be displayed
        username: usernameInput.value,
        // the avatar to be displayed
        content: messageInput.value,
      }),
    });

    if (!messageShowing) {
      messageShowing = !messageShowing;
      message.classList.add("show");
      message.classList.add("delete");
      deleted.classList.add("delete");
      setTimeout(function () {
        message.classList.add("hide");
        message.classList.remove("delete");
        message.classList.remove("show");
        setTimeout(function () {
          deleted.classList.remove("delete");
          messageShowing = false;
        }, 100);
      }, 5000);
    }
  },
  false
);

deleteButton.addEventListener("click", () => {
  if (messageShowing) return;
  fetch(webhookInput.value, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!messageShowing) {
    messageShowing = !messageShowing;
    message.classList.add("show");
    message.classList.add("delete");
    sent.classList.add("delete");
    setTimeout(function () {
      message.classList.add("hide");
      message.classList.remove("delete");
      message.classList.remove("show");
      setTimeout(function () {
        sent.classList.remove("delete");
        messageShowing = false;
      }, 100);
    }, 5000);
  }
});
