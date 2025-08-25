const listaCompra = document.querySelector(".lista-compra");

function gerarLista(item, index) {
    const itemCompra = document.createElement("div");
    itemCompra.classList.add("lista-compra_item");
    itemCompra.setAttribute("data-index", index)

    itemCompra.innerHTML = `
        <div class="checkbox">
            <div class="checkbox-img"></div>
            <input class="checked" type="checkbox" ${item.checked ? "checked" : ""} name="check">
        </div>

        <div class="lista-compra_item_descricao">
            ${item.descricao}
        </div>

        <button class="lista-compra_item_lixeira excluir-item">
            <img src="icons/lixeira.svg">
        </button>
    `;

    listaCompra.append(itemCompra);

    document.querySelector(`[data-index="${index}"] .excluir-item`).addEventListener("click", () => {
        delete itens[index];
        salvar();

        itemCompra.remove();

        msgItemRemovidoSecesso();
    });

    document.querySelector(`[data-index="${index}"] .checked`).addEventListener("change", (evento) => {
        item.checked = evento.target.checked;
        salvar();
    });

}

function listarItem() {
    listaCompra.innerHTML = "";

    itens.forEach((item, index) => {
        if (item) {
            limparLista.style.display = "";
            gerarLista(item, index);
        }
    });
}

listarItem();

