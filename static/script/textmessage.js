const chatBody = document.querySelector("#chat-box");
const txtInput = document.querySelector(".chat-bar-input-block");
const send = document.querySelector("#send-button");

send.addEventListener("click", (event) => renderUserMessage());

txtInput.addEventListener("keyup",(event) =>{
    if(event.keyCode === 13){
        renderUserMessage();
    }
});

const renderUserMessage = (txt)=>{
    const userInput = txtInput.value;
    renderMessageEle(userInput);
    txtInput.value = "";
};

const renderMessageEle = (txt) => {
    const MessageEle = document.createElement("div");
    const txtNode = document.createTextNode();
    MessageEle.classList.add("user-message");
    MessageEle.append(txtNode);
    chatBody.append(MessageEle);
};
