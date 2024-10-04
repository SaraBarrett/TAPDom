const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chatContainer");
const minimizeButton = document.getElementById("minimize-button");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("conversation-group");
const sendButton = document.getElementById("SentButton");

if (chatButton) {
    chatButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.add("open");
            chatButton.classList.add("clicked");
        }
    });
}

if (minimizeButton) {
    minimizeButton.addEventListener("click", function () {
        if (chatContainer) {
            chatContainer.classList.remove("open");
            chatButton.classList.remove("clicked");
        }
    });
}

function createMessage(message, isUser = true) {
    const newMessage = document.createElement('div');
    newMessage.classList.add(isUser ? 'sentText' : 'botText');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);

    if(isUser){
        chatbotResponse(message);

    }

    return newMessage;
}

function chatbotResponse(myMessage) {
    let message = '';
    let botMessage;
    
    switch(myMessage.toLowerCase()){
    case 'orçamento':
    message = 'Envie o seu pedido para orçamentos@gmail.com';
    botMessage = createMessage(message, false);
    break;
    case 'contacto':
    message = 'iremos contacta-lo, envie o contacto para  9636666666';
    botMessage = createMessage(message, false);
    break;
    default:
    message = 'geral@gmail.com';
    botMessage = createMessage(message, false);
    break;
    }
    botMessage.scrollIntoView();
 
}

chatInput.addEventListener("input", function (event) {
    if (event.target.value) {
        sendButton.classList.add("svgsent");
    } else {
        sendButton.classList.remove("svgsent");
    }
});

chatInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        //setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    }
});

if (sendButton) {
    sendButton.addEventListener("click", function () {
        const message = chatInput.value;
        chatInput.value = "";
        const userMessage = createMessage(message);
        userMessage.scrollIntoView();
        //setTimeout(chatbotResponse, 1000);
        sendButton.classList.add("svgsent");
    });
}

