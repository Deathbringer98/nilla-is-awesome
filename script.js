window.onload = function() {
    var container = document.getElementById('stream-container');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://kick.com/nillavanilla';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);
};
