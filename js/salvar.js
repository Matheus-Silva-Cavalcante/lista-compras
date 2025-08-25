let itens = localStorage.itens ? JSON.parse(localStorage.itens) : [];

function salvar(){
    localStorage.setItem("itens", JSON.stringify(itens));
}