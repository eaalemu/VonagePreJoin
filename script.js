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
var sessionId = "1_MX40Nzc4MDU3MX5-MTY5NjAxNTM1Njc1N356WUR5amMxOFZTQnhrVVNuTVVzM3UwR2t-fn4";
var token = "T1==cGFydG5lcl9pZD00Nzc4MDU3MSZzaWc9ZWU0YWY1ZTA3MWI1MzE4YmFhODU4OGVlMGY4NTI0ZmZiOWYwYjVlZTpzZXNzaW9uX2lkPTFfTVg0ME56YzRNRFUzTVg1LU1UWTVOakF4TlRNMU5qYzFOMzU2V1VSNWFtTXhPRlpUUW5oclZWTnVUVlZ6TTNVd1IydC1mbjQmY3JlYXRlX3RpbWU9MTY5NjAxNTUxNyZub25jZT0wLjM0MzQyOTkyNjI3MTMyNjA3JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2OTY2MjAzMTYmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=";

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

const muteButton = document.getElementById("muteButton");
const cameraButton = document.getElementById("cameraButton");

muteButton.addEventListener("click", () => {
    toggleAudio();
});

cameraButton.addEventListener("click", () => {
    toggleVideo();
});

// ...

function toggleAudio() {
  var session = OT.initSession(apiKey, sessionId);
    if (session) {
        const publisher = session.publisher.find(p => p.stream.hasAudio);
        if (publisher) {
            const audioEnabled = !publisher.stream.audioEnabled;
            publisher.publishAudio(audioEnabled);
            muteButton.textContent = audioEnabled ? "Mute Microphone" : "Unmute Microphone";
        }
    }
}

function toggleVideo() {
  var session = OT.initSession(apiKey, sessionId);
    if (session) {
        const publisher = session.publisher.find(p => p.stream.hasVideo);
        if (publisher) {
            const videoEnabled = !publisher.stream.videoEnabled;
            publisher.publishVideo(videoEnabled);
            cameraButton.textContent = videoEnabled ? "Turn Off Camera" : "Turn On Camera";
        }
    }
}
