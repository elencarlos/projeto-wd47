;(function () {
    const btnAjuda = document.querySelector('#btnAjuda');


    const listAjudas = [
        {
            conteudo: "Bem vindo ao ceep",
            cor: "red",
            classe: "ajuda"
        },
        {
            conteudo: "Use o campo texto para criar um novo cartão",
            cor: "blue",
            classe: "ajuda"
        },
        {
            conteudo: "Clique em Salvar para adicionar um novo cartão",
            cor: "yellow",
            classe: "ajuda"
        },
        {
            conteudo: "Bem vindo ao ceep",
            cor: "green",
            classe: "ajuda"
        },
        {
            conteudo: "Bem vindo ao ceep",
            cor: "purple",
            classe: "ajuda"
        }
    ];

    btnAjuda.addEventListener('click',function () {
        let temAjuda = document.querySelector('.ajuda');
        if(!temAjuda){
            for (let ajuda of listAjudas) {
                criaCartaoInsereMural(ajuda);
            }
        }
    })

})();