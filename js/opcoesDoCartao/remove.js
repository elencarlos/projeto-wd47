;(function () {
    const btnList = document.querySelectorAll('.opcoesDoCartao-remove');



    btnList.forEach(function (t) {
        t.addEventListener('click', function () {
            const element = this.parentElement.parentElement;
            element.classList.add('cartao--some');
            element.addEventListener('transitioned',function () {
                element.remove();
            });
        });
    });
})();

