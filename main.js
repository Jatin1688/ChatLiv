const socket = io();

const clientsTotal = document.getElementById("clients-total");
const messageContainer = document.getElementById("message-container");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Send a message
sendButton.addEventListener("click", () => {
  if (messageInput.value.trim() === "") return;

  const messageData = {
    name: nameInput.value || "Anonymous",
    message: messageInput.value,
    dateTime: new Date(),
  };

  addMessageToUI(true, messageData);
  socket.emit("message", messageData);
  messageInput.value = "";
});

// Receive messages
socket.on("chat-message", (data) => {
  addMessageToUI(false, data);
});

// Update client count
socket.on("clients-total", (count) => {
  clientsTotal.innerText = `Total Clients: ${count}`;
});

// Add a message to the UI
function addMessageToUI(isOwnMessage, data) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", isOwnMessage ? "sent" : "received");

  messageElement.innerHTML = `
    <p>${data.message}</p>
    <span>${data.name} ● ${moment(data.dateTime).fromNow()}</span>
  `;

  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Typing feedback
messageInput.addEventListener("keypress", () => {
  socket.emit("feedback", {
    feedback: `${nameInput.value || "Someone"} is typing...`,
  });
});

messageInput.addEventListener("blur", () => {
  socket.emit("feedback", { feedback: "" });
});

socket.on("feedback", (data) => {
  const feedbackElement = document.getElementById("feedback");

  if (data.feedback) {
    if (!feedbackElement) {
      const feedback = document.createElement("div");
      feedback.id = "feedback";
      feedback.classList.add("feedback");
      feedback.innerText = data.feedback;
      messageContainer.appendChild(feedback);
    } else {
      feedbackElement.innerText = data.feedback;
    }
  } else if (feedbackElement) {
    feedbackElement.remove();
  }
});
