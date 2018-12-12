;(function () {
    const btnAjuda = document.querySelector('#btnAjuda');

    const listAjudas = [
        {
            conteudo: "Bem vindo ao ceep",
            cor: "red"
        },
        {
            conteudo: "Use o campo texto para criar um novo cartão",
            cor: "blue"
        },
        {
            conteudo: "Clique em Salvar para adicionar um novo cartão",
            cor: "yellow"
        },
        {
            conteudo: "Bem vindo ao ceep",
            cor: "green"
        },
        {
            conteudo: "Bem vindo ao ceep",
            cor: "purple"
        }
    ];

    btnAjuda.addEventListener('click',function () {
        for (let ajuda of listAjudas) {
            criaCartaoInsereMural(ajuda);
        }
    })

})();