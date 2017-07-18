;(function(){
	// Seleciona Elemento
	const btns = document.querySelectorAll('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	for(let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function() {
			const cartao = btns[i].parentNode.parentNode
			cartao.classList.add("cartao--some")
			cartao.addEventListener("transitionend", function(){
				cartao.remove()
			})
		})
		// Remove o no-js de todos os botões
		btns[i].classList.remove('no-js')
	}

	const cartoes = document.querySelectorAll(".cartao")

	for(let j = 0; j < cartoes.length; j++){
		const cartao = cartoes[j]

		cartao.addEventListener("focusin", function(){
			cartao.classList.add("cartao--focado")
		})

		cartao.addEventListener("focusout", function(){
			cartao.classList.remove("cartao--focado")
		})

	}

})()
