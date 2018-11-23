var base; // onde vai ficar o html com os filmes.
var filmes = []; // array com os filmes filtrados.
var indiceFilme = 0; // indice do filme escolhido randomicamente.
$.ajax({ // Puxa html de referência e joga na variável "base".
	url:"https://leandrojsa.github.io/movies.html", 
	success: function(data,status){
	base = $.parseHTML(data);
	filtra();
	},
});

function filtra(){ // função principal, filtra filmes ao clicar no botão.
	$("button").click(function() { //evento engatilhado pelo click no botão.
		if (indiceFilme>0) { //remove o Filme anterior ao fazer uma nova busca.
			$('#'+indiceFilme).remove();
		}

		var filmeAtual; // filme a ser filtrado no loop.

		for (var i = 3; i <= base.length; i+=2) { // loop que percorre o html base, filtrando os filmes.
			filmeAtual = $(base)[i];
			procura(filmeAtual);	
		}

		indiceFilme = Math.floor(Math.random()*(filmes.length-2+1)+0); // gera um número aleatório entre 0 e o número de filmes filtrados -1.

		$('#principal').append(filmes[indiceFilme]); // Adiciona o filme do índice aleatório ao html.

		indiceFilme = $(filmes)[indiceFilme].id;
		filmes = [];
	});
}

function procura(filme){ // verifica se o filme está dentro dos critérios da busca

	// Variáveis referentes aos campos do form:
	var ano = $('#Ano').val();
	var atores = $('#Atores').val();
	var categoria = $('#Categoria option:selected').val();
	var outras = $('#Outras').val();

	// busca por categoria:
	$(filme).children('.categories').children().each(function(index) {
		if ($(this).text() == categoria) { //procura dentro de cada li da lista de categorias pela desejada.
			// busca por atores:
			if (atores) {
				$(filme).children('.actors').children().each(function() {
					if ($(this).text() == atores) { //procura dentro de cada li da lista de atores pelo desejado.
						if (ano){
							if ($(filme).children('p').children('span').children('span').text() == ano) {
								if (outras){
									if ($(filme).find(".sinopsis:contains('"+outras+"')")) {
									filmes.push(filme);
									return;
									}
								} else {
									filmes.push(filme);
									return;
								}
							}
						} else if (outras){
							if ($(filme).find(".sinopsis:contains('"+outras+"')")) {
								filmes.push(filme);
								return;
							}
						} else {
							filmes.push(filme);
							return;
						}
					}
				});
			}
			// busca por ano:
			else if (ano) {
				if ($(filme).children('p').children('span').children('span').text() == ano) {
						if (outras){
							if ($(filme).find(".sinopsis:contains('"+outras+"')")) {
							filmes.push(filme);
							return;
							}
						} else {
							filmes.push(filme);
							return;
						}
					}
			} else if (outras){
				if ($(filme).find(".sinopsis:contains('"+outras+"')")) {
					filmes.push(filme);
					return;
				}
			} else {
				filmes.push(filme);
				return;
			}
		}
	}); 
};