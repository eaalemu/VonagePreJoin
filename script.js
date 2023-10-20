// JS - Get the chat input field, send button, and chat messages container
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');
const chatMessages = document.querySelector('.chat-area');

// Function to send a message
function sendMessage() {
  const messageText = chatInput.value.trim();

  if (messageText !== '') {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messageText;

    // Append the message element to the chat messages container
    chatMessages.appendChild(messageElement);

    // Clear the input field
    chatInput.value = '';

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listeners for sending a message
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// replace these values with those generated in your Video API account
var apiKey = "47780571";
var sessionId = "1_MX40Nzc4MDU3MX5-MTY5NTQxMjI0NjI5OH56M3RhcWNGTWJRZTJoaU1heHBBakRUR3J-fn4";
var token = "T1==cGFydG5lcl9pZD00Nzc4MDU3MSZzaWc9ZTU4NWQzZmRmODBjYjNjNTU4OTYxZjM1NzgwMWZiOGRhNWQ4NzczNzpzZXNzaW9uX2lkPTFfTVg0ME56YzRNRFUzTVg1LU1UWTVOVFF4TWpJME5qSTVPSDU2TTNSaGNXTkdUV0pSWlRKb2FVMWhlSEJCYWtSVVIzSi1mbjQmY3JlYXRlX3RpbWU9MTY5NTQxMjMyOSZub25jZT0wLjY3NjQ3ODk0MDQ0MzEwODImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY5NTQ5ODcyOCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
  
}