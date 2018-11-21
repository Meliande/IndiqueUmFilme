var base;
$.ajax("https://leandrojsa.github.io/movies.html", {
	async: false,
	success: function(data){
		base = data;
	}
});
var filmes = base.children[34].getElementsByClassName(".movie");
console.log($(filmes).children(".movie"));
$("button").click(function() {
	console.log("mensagem");

	var ano = $('#Ano').val();
	var atores = $('#Atores').val();
	var categoria = $('#Categoria option:selected').text();
	var outras = $('#outras').val();
	for (var i = 3; i <= 4; i++) {
		console.log($(base).find("#"+i));
	}
});