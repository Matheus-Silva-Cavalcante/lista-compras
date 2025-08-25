const msgItemRemovido = document.querySelector(".msg-item-removido");
const msgListaRemovida = document.querySelector(".msg-lista-removida");

const btnLimparMsgItem = document.querySelector("#btnLimparMsgItem");
const btnLimparMsgLista = document.querySelector("#btnLimparMsgLista");

function msgItemRemovidoSecesso(){
    msgItemRemovido.style.display = "";
    

    setTimeout(() => {
        msgItemRemovido.style.display = "none";
    }, 4000);
}

function msgListaRemovidaSecesso(){
    msgListaRemovida.style.display = "";

    setTimeout(() => {
        msgListaRemovida.style.display = "none";
    }, 4000);
}


btnLimparMsgItem.addEventListener("click", () => {
    msgItemRemovido.style.display = "none";
});

btnLimparMsgLista.addEventListener("click", () => {
    msgListaRemovida.style.display = "none";
});
