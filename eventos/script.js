let status = true

function mudarTexto(){

    if (status){
        document.getElementById("texto").innerText = "Valor verdadeiro"
    }
    else {
        document.getElementById("texto").innerText = "Valor falso"
    }

    status = !status
}

function mudarCor(){
    document.getElementById("texto").style.color = "red";
}

function pegarValor(){
    document.getElementById("input").value 
    console.log("Mudança Detectada")
}

let botao = document.getElementById("btn")
botao.addEventListener("click", function(){
    document.getElementById("texto").innerText = "Olá"
})