// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron');
var btn_login = document.getElementById('btn_login');
btn_login.addEventListener('click', (event)=>{
    let credenciales = {
        user: document.querySelector('input[name="user"]').value,
        pass: document.querySelector('input[name="pass"]').value
    }
    ipcRenderer.send('login', credenciales);
});
ipcRenderer.on('loginfailed', ()=>{
    alert('credenciales incorrectas');
});