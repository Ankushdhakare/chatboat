document.addEventListener("DOMContentLoaded", function() {
    const send = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const imageInput = document.getElementById("image-input");
    const audioInput = document.getElementById("audio-input");
    const chatBox = document.getElementById("chat-box");
   
 console.log(chatBox)

    function sendMessage(message) {
      
        const messageElement = document.createElement("div");
        messageElement.className = "user-message";
        messageElement.innerHTML = message;
        chatBox.appendChild(messageElement);
    }
});




send.addEventListener("click", function() {
    const message = userInput.value.trim();
    if (message !== "") {
        sendMessage(message);
        userInput.value = "";
    }
});



navigator.mediaDevices.getUserMedia({ audio: true, video:true })
  .then(function(stream) {
    console.log("accessed")
  })
  .catch(function(err) {
    console.error('Error accessing microphone:', err);
  });

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
    if (userText == "") {
        userText = "I love Code Palace!";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}



function sendButton() {
    const micResp = micButton();
    console.log(micResp);
    if (micResp) buttonSendText(micResp)
}

function micButton() {

      const setInputValue = document.getElementById("textInput");
      recognition = new webkitSpeechRecognition() || new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.start();
     
      recognition.onresult = (event) => {
          const result = event.results[0][0].transcript;
          setInputValue.value = result;
      
     window.recording = result
      };

       return window.recording;

    }


   

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});



function sendPicture(){
    sendMessage("hello")
    console.log("hello")


}

document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chat");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const send = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value;
        sendMessage("user", userMessage);

        // Process user message and generate bot response
        const botResponse = generateBotResponse(userMessage);

        // Simulate a delay for the bot's response (optional)
        setTimeout(function () {
            sendMessage("bot", botResponse);
        }, 1000);

        // Clear the input field
        userInput.value = "";
    });

    function sendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = sender;
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);

        
    }

    function generateBotResponse(userMessage) {
        // You can implement your chatbot logic here to generate responses based on user input.
        // For simplicity, let's echo the user's message for now.
        return "You said: " + userMessage;
    }
});

let camera = document.getElementById('camera');
if (navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({camera: true})
    .then(function(s){
        camera.srcObject=s;
      })
      .catch(function(err){
        console.log(err);
      })
}
else{
    console.log("No");
}








    




