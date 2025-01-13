const forms = document.getElementById("form_preencher");
let empresa = "";

const loadingOverlay = document.getElementById("loading-overlay");

function empresa_selecionado(nomeEmpresa, imagem) {
    const imagens = document.querySelectorAll(".empresas_icon");
    imagens.forEach(function (img) {
        img.classList.remove("selected");
    });

    imagem.classList.add("selected");
    empresa = nomeEmpresa;
    console.log("Empresa selecionada:", empresa);
}

function showPopup(message, isSuccess) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;
    popup.style.backgroundColor = isSuccess ? "#4CAF50" : "#f44336";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 100);

    setTimeout(() => {
        popup.classList.add("hide");
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 500);
    }, 3000);
}

forms.addEventListener("submit", function (event) {
    event.preventDefault();

    if (empresa === "") {
        alert("Por favor, selecione uma empresa!");
        return;
    }

    const id_pedido = document.getElementById("pedido").value;
    const status_envio = document.getElementById("entregue").checked
        ? "Entregue"
        : "Não Entregue";
    const data = document.getElementById("envio").value;

    const dados = {
        id_pedido: id_pedido,
        empresa: empresa,
        data: data,
        status: status_envio,
    };

    loadingOverlay.classList.add("active");

    axios
        .post("http://localhost:5000/post_sheets", dados)
        .then((response) => {
            console.log("Resposta do servidor:", dados);
            showPopup("Dados enviados com sucesso!", true);
        })
        .catch((error) => {
            console.error("Erro ao enviar os dados:", error);
            showPopup("Erro ao enviar os dados. Tente novamente!", false);
        })
        .finally(() => {
            loadingOverlay.classList.remove("active");
        });
});
