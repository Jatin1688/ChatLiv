
# Real-Time Chat Application

## Overview
This is a live chat application built using Node.js and Socket.IO. The application allows multiple users to instantly connect to the chat room and exchange messages. It has a modern and user-friendly interface that provides instant feedback based on the type of user. The backend uses WebSocket technology to manage client connections and ensure message delivery.

---

## Features
- **Real-Time Messaging:** Messages are sent and received instantly.
- **Multiple Client Support:** Handles multiple users in the chatroom simultaneously.
- **Typing Feedback:** Displays live feedback when someone is typing.
- **Modern UI:** Clean and intuitive interface for seamless interaction.
- **Dynamic Updates:** Automatically updates the chat for all users without requiring a refresh.

---

## Application Architecture
The application follows a **client-server architecture**:
1. **Backend (Server):**
   - Built with **Node.js** and **Socket.IO**.
   - Listens for incoming client connections.
   - Manages real-time communication using WebSockets.
   - Broadcasts messages and typing feedback to all connected clients (excluding the sender).
2. **Frontend (Client):**
   - Developed using **HTML, CSS, and JavaScript**.
   - Displays the chat interface.
   - Sends user messages and typing notifications to the server.
   - Dynamically updates the chat window with incoming messages and notifications.

---

## How Concurrency is Handled
The backend uses **Socket.IO** to handle multiple client connections simultaneously:
- Each client is assigned a unique socket ID upon connection.
- Connections are tracked using a `Set`, ensuring efficient management of connected clients.
- All operations (message broadcasting, typing feedback) are non-blocking, achieved through asynchronous I/O.

---

## Assumptions and Design Choices
1. **Unique Usernames:** Each user is assumed to have a unique name for clear identification in the chatroom.
2. **Broadcast Logic:** Messages from a client are broadcast to all other clients except the sender to avoid duplication.
3. **Typing Feedback:** Minimalistic feedback implementation ensures that typing notifications do not overwhelm the chat window.
4. **No External Libraries for Chat Logic:** The project strictly adheres to the use of standard libraries as per the technical constraints.

---

## How to Run the Application

### Prerequisites
- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)

### Steps to Run Locally
1. **Clone the Repository:**
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Server:**
   ```bash
   node app.js
   ```
   The server will start listening on `http://localhost:8000`.

4. **Access the Application:**
   - Open a browser and navigate to `http://localhost:8000`.
   - Open multiple tabs or devices to test real-time chat functionality.

---

## Deployment
1. Deploy the application using a platform like **Heroku**, **Vercel**, or **Render**.
2. Share the deployment link with your users.
3. Make sure the server port is configured for the hosting environment.

---

## Folder Structure
```
├── app.js                   # Backend server file
├── Public                   # Static files served to the client
│   ├── index.html           # Main HTML file
│   ├── style.css            # Styling for the application
│   ├── main.js              # Client-side JavaScript
├── package.json             # Dependencies and scripts
├── README.md                # Documentation
```

---

## Accessing the Application
1. **Local Deployment:** Open `http://localhost:8000` after running the server locally.
2. **Deployed Version:** Use the link provided after deploying to a hosting platform.

---

## Credits
- **Backend:** Node.js, Socket.IO
- **Frontend:** HTML, CSS, JavaScript

😊Feel free to contribute to this project by forking the repository and submitting pull requests.

--- 
