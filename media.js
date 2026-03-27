let botao=document.getElementById("botao")
botao.onclick=function () {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let media = (n1+n2)/2;
    if (media < 6) {
        document.getElementById("resultado").innerText= "media: "+ media + "- aluno em risco";
    } else {
        document.getElementById("resultado").innerText= "media:" + media + "- desempenho satisfatorio.";
    }
};