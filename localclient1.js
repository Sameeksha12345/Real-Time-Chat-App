const socket = io()
let name1;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message_area')
do {
    name1 = prompt('Please enter your name: ')
} while(!name1)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name1,
        message: message.trim()
        //message bhejo toh dusri line bhui  aa ajti hai toh trim kr do
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)
//event emit kr rehe server pr  aabhi hum server pr esko listen kr sakte hai
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

 //Recieve messages this is a client code aur browser pr run hoga server pr nhi 
socket.on('message', (msg) => {
  //  console.log(msg)
    appendMessage(msg, 'incoming')
   scrollToBottom()
})
function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight
}