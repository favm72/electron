const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
window.Bootstrap = require('bootstrap');
var btn_cancel = document.getElementById('btn_cancel');
btn_cancel.addEventListener('click', (event)=>{
    ipcRenderer.send('cancel');
});
ipcRenderer.on('aftercancel', ()=>{
    alert('credenciales incorrectas');
});