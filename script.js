window.onload = function() {
    var container = document.getElementById('stream-container');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://player.kick.com/nillavanilla';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
};

let tempName = '';

function enterChat() {
    tempName = document.getElementById('temp-name').value;
    if (tempName.trim() === '') {
        alert('Please enter a temporary name');
        return;
    }
    document.querySelector('.auth-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
}

function sendMessage() {
    var input = document.getElementById('chat-input').value;
    if (input.trim() === '') {
        return;
    }
    var chatLog = document.getElementById('chat-log');
    var message = document.createElement('div');
    message.textContent = tempName + ': ' + input;
    chatLog.appendChild(message);
    document.getElementById('chat-input').value = '';
}
