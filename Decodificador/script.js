const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function bntEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = " ";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = descriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = " ";
}

function descriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDesencriptada;
}

document.querySelector('.btn-copiar').addEventListener('click', btnCopiar);

function btnCopiar() {
    document.querySelector('.mensagem').select();
    document.execCommand('copy');
}