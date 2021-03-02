let timeoutId = null;

tokenForm.onsubmit = (e) => {
    e.preventDefault();
    msgBox.innerText = "Hold the button for 5 seconds to send a request";
}

shutdownBtn.onmousedown = () => {
    msgBox.innerText = "Keep holding...";
    if(timeoutId !== null) clearTimeout(timeoutId);
    timeoutId = setTimeout(send_request, 5000);
}

shutdownBtn.onmouseup = () => {
    if(timeoutId !== null) {
        clearTimeout(timeoutId);
        msgBox.innerText = "Hold the button for 5 seconds to send a request";
    }
}

function send_request() {
    if(timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    msgBox.innerText = "Sending request...";
    let xhr = new XMLHttpRequest();
    xhr.open('post', '/', false);
    xhr.send(new FormData(tokenForm));
    if(xhr.status == 200) {
        msgBox.innerText = "Request accepted";
    } else if(xhr.status == 403) {
        msgBox.innerText = "Wrong token";
    }
}
