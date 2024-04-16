const MAINBUTTON = document.getElementById("generateButton");
const copybutton = document.getElementById("copypassword");

function generatePassword() {
    console.log("conta");
    var forcadasenha = 0;
    var gerada = document.getElementById("generatedpass");
    const length = document.getElementById("passLength").value;
    const b1 = document.getElementById("checkbox1").checked;
    const b2 = document.getElementById("checkbox2").checked;
    const b3 = document.getElementById("checkbox3").checked;
    const b4 = document.getElementById("checkbox4").checked;
    let charset = "";
    const charm = "abcdefghijklmnopqrstuvwxyz";
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[{]}|;:'\",<.>/?`\\~";

    if (b1) {
        charset += char;
        forcadasenha += 20;
    }
    if (b2) {
        charset += charm;
        forcadasenha += 20;
    }

    if (b3) {
        charset += numbers;
        forcadasenha += 20;
    }

    if (b4) {
        charset += symbols;
        forcadasenha += 20;
    }

    if (!b1 && !b2 && !b3 && !b4) {
        alert("Senha inválida, selecione alguma opção.");
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charset.length);
        password += charset[random];
    }

    console.log(password);

    if (password.length > 10) {
        forcadasenha += 20;
    } else if (password.length > 6) {
        forcadasenha += 0;
    } else if (password.length < 6 && password.length > 0) {
        forcadasenha += -50;
    } else {
        alert("Senha inválida, sem tamanho.");
    }

    if (forcadasenha < 0) {
        forcadasenha = 0;
    }

    console.log(forcadasenha);

    var forcaSpan = document.getElementById("forcadasenha");
    var label = document.getElementById("senhaLabel");
    forcaSpan.textContent = forcadasenha;

    if (forcadasenha < 34) {
        label.style.color = "red";
    } else if (forcadasenha > 34 && forcadasenha < 67) {
        label.style.color = "yellow";
    } else {
        label.style.color = "green";
    }

    gerada.value = b1 || b2 || b3 || b4 ? password : "";
}

if (MAINBUTTON) {
    MAINBUTTON.addEventListener("onclick", generatePassword); // Corrigido o evento para "click"
}

function copy() {
    var copyText = document.getElementById("generatedpass");
    if (copyText.value.trim() !== "") {
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    } else {
        alert("Impossivel copiar, campo vazio");
    }
}

if (copybutton) {
    copybutton.addEventListener("click", copy);
}
