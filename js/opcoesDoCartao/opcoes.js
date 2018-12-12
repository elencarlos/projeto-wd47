;(function () {
    const cartoes = document.querySelectorAll('.cartao');

    for(let cartao of cartoes){
        cartao.addEventListener('focusin',function () {
            this.classList.add('cartao--focado')
        });
        cartao.addEventListener('focusout', function () {
            if(this.classList.contains('cartao--focado')){
                this.classList.remove('cartao--focado')
            }
        });
        cartao.addEventListener('change', function (event) {
            const mudarCor = event.target.classList.contains('corCartao');
            if(mudarCor){
                this.style.backgroundColor = event.target.value;
            }
        });
        cartao.addEventListener('click', function (event) {
            const remover = event.target.classList.contains('opcoesDoCartao-remove');
            if(remover){
                const element = this;
                element.classList.add('cartao--some');
                element.addEventListener('transitioned',function () {
                    element.remove();
                });
            }
        });

        cartao.addEventListener('keyup',function (event) {
            const mudarCor = event.target.classList.contains('opcoesDoCartao-tipo');
            if(mudarCor){
                switch(event.code){
                    case 'Enter':
                    case 'NumpadEnter':
                    case 'Space':
                        //this.style.backgroundColor = event.target.style.color;
                        event.target.click();
                        break;
                }
            }
            const remover = event.target.classList.contains('opcoesDoCartao-remove');
            if(remover){
                switch(event.code){
                    case 'Enter':
                    case 'NumpadEnter':
                    case 'Space':
                        //this.style.backgroundColor = event.target.style.color;
                        const element = this;
                        element.classList.add('cartao--some');
                        element.addEventListener('transitioned',function () {
                            element.remove();
                        });
                        break;
                }

            }
        });

    }
})();
