function ConsultarCep(){
    let cep = document.getElementById("cep").value;
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(response => response.json())
    .then(dados => {console.log(dados)

    document.getElementById("rua").innerHTML = dados.logradouro;
    document.getElementById("bairro").innerHTML = dados.bairro;
    document.getElementById("cidade").innerHTML = dados.localidade;
    document.getElementById("estado").innerHTML = dados.estado;
    
    })
}

function ConsultarCep2(){
    let cep = document.getElementById("cep2").value;
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(response => response.json())
    .then(dados => {
    document.getElementById("rua2").value = dados.logradouro;
    document.getElementById("bairro2").value = dados.bairro;
    document.getElementById("cidade2").value = dados.localidade;
    document.getElementById("estado2").value = dados.estado;
})
}