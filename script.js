let ingTexto = document.getElementById('ingTextoHtml');
let key = document.getElementById('key');
let mensaje = document.getElementById('mensaje');
let encriptar = document.getElementById('encriptar');
let desencriptar = document.getElementById('desencriptar');
let limpia = document.getElementById('limpiar'); 

limpia.addEventListener("click",limpiar)

function limpiar(){
    key.value="";
    ingTexto.value="";
    mensaje.value="";
}

encriptar.addEventListener("click", encode);

function encode(){
    let key = document.getElementById('key').value;
    let nuevoTexto = '';
    for (let i=0; i< ingTexto.value.length; i++)
    {
        let convertir = ingTexto.value.charCodeAt(i);
        console.log(convertir);
        
        if(convertir >= 65 && convertir <= 90)
        {
            nuevoTexto += String.fromCharCode((convertir - 65 + parseInt(key))% 26 + 65);
        }
        else if(convertir >= 97 && convertir <= 122)
        {
            nuevoTexto += String.fromCharCode((convertir - 97 + parseInt(key))% 26 + 97);
        }
        else{
            console.log(ingTexto.value);
            nuevoTexto += ingTexto.value[i];
        }
    }
    mensaje.value= nuevoTexto;
    return nuevoTexto;
}

desencriptar.addEventListener("click", desencode);

function desencode(){
    let key = document.getElementById('key').value;
    let nuevoTexto = '';
    for (let i=0; i< ingTexto.value.length; i++)
    {
        let convertir = ingTexto.value.charCodeAt(i);
        console.log(convertir);
        
        if(convertir >= 65 && convertir <= 90)
        {
            nuevoTexto += String.fromCharCode((convertir - 90 - parseInt(key))% 26 + 90);
        }
        else if(convertir >= 97 && convertir <= 122)
        {
            nuevoTexto += String.fromCharCode((convertir - 122 - parseInt(key))% 26 + 122);
        }
        else{
            console.log(ingTexto.value);
            nuevoTexto += ingTexto.value[i];
        }
    }
    mensaje.value= nuevoTexto;
    return nuevoTexto;
}
