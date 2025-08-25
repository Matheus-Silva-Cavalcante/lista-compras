const descricaoItem = document.querySelector("#descricaoItem");
const btnAddItem = document.querySelector("#btnAddItem");

const btnLimparLista = document.querySelector(".btn-remover-lista");
const limparLista = document.querySelector(".remover-lista");

const erroMsgCampoVasio = document.querySelector(".erro-msg-campo-vasio")


btnAddItem.addEventListener("click", () => {
    if (!descricaoItem.value) {
        alertaInputVasio();
        return;
    }

    const item = {
        descricao: descricaoItem.value,
        checked: false
    }

    itens.push(item);
    salvar();

    descricaoItem.value = "";
    listarItem();
    limparLista.style.display = "";
});


function alertaInputVasio() {
    descricaoItem.classList.add("erro-input-vasio");
    erroMsgCampoVasio.style.display = "";

    setTimeout(() => {
        descricaoItem.classList.remove("erro-input-vasio");
        erroMsgCampoVasio.style.display = "none";
    }, 5000);
}

btnLimparLista.addEventListener("click", () => {
    delete itens;

    localStorage.removeItem("itens");

    listaCompra.innerHTML = "";
    limparLista.style.display = "none";

    itens = [];

    msgListaRemovidaSecesso();
});
