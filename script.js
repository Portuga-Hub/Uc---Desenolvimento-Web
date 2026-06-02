async function buscarCEP(){

    let cep = document.getElementById("cep");
    let resultado = document.getElementById("resultado");
    let mensagem = document.getElementById("mensagem");

    resultado.innerHTML = "";
    mensagem.innerHTML = "";

    if(cep.value == ""){
        mensagem.innerHTML =
        "<p class='erro'>Digite um CEP!</p>";
        return;
    }

    try{

        let resposta = await fetch(
            `https://viacep.com.br/ws/${cep.value}/json/`
        );

        let dados = await resposta.json();

        if(dados.erro){
            mensagem.innerHTML =
            "<p class='erro'>CEP não encontrado!</p>";
            return;
        }

        resultado.innerHTML = `
            <div class="info"><strong>CEP:</strong> ${dados.cep}</div>
            <div class="info"><strong>Rua:</strong> ${dados.logradouro}</div>
            <div class="info"><strong>Bairro:</strong> ${dados.bairro}</div>
            <div class="info"><strong>Cidade:</strong> ${dados.localidade}</div>
            <div class="info"><strong>Estado:</strong> ${dados.uf}</div>
        
        `;

    }catch{
        mensagem.innerHTML =
        "<p class='erro'>Ta errado burro!</p>";
    }
}