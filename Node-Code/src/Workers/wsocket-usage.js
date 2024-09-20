
// Create a new WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

// Connection opened
socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
    
    // Send a message to the server
    socket.send('Hello, server!');
});

// Listen for messages from the server
socket.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);
});

// Connection closed
socket.addEventListener('close', (event) => {
    console.log('Disconnected from WebSocket server');
});

// Error occurred
socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});

// Function to send a message
function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(message);
    } else {
        console.log('Connection not open. Unable to send message.');
    }
}

// Function to close the connection
function closeConnection() {
    socket.close();
}

// Example usage:
// sendMessage('Hello from the browser!');
// closeConnection();