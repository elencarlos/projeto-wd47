;(function () {
    const formulario = document.querySelector('.formNovoCartao');
    const textCartao = document.querySelector('.formNovoCartao-conteudo');
    formulario.addEventListener('submit',function (event) {
        event.preventDefault();

        if(textCartao.value.trim()){
            console.log(textCartao.value);
        }
        else{
            const temMsg = formulario.querySelector('.formNovoCartao-msg');
            if(!temMsg){
                const mensagem = document.createElement('p');
                mensagem.classList.add('formNovoCartao-msg');
                mensagem.textContent = 'Você precisa digitar algo';
                //this.insertBefore(mensagem,textCartao);
                textCartao.insertAdjacentElement('afterend',mensagem);
                mensagem.addEventListener('animationend',function () {
                    this.remove();
                })
            }
        }

    })
})();
