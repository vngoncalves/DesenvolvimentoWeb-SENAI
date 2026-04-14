let estado = true;

function MudarTexto(){
    if (estado){
        document.getElementById("texto").innerText = "Olá mundo";
        document.getElementById("texto").style.color = "red";
    } 

    else {
        document.getElementById("texto").innerText = "Hello world";
        document.getElementById("texto").style.color = "blue";
    }  

    estado = !estado;

    let novo = document.createElement("p");
    novo.innerText = "Novo parágrafo";
    document.body.append(novo);
}
