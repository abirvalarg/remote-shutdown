shutdownBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('post', '/', false);
    xhr.send(new FormData(tokenForm));
    if(xhr.status == 200) {
        msgBox.innerText = "request accepted";
    } else if(xhr.status == 403) {
        msgBox.innerText = "Wrong token";
    }
}
