var base = $.get("movies.html");
$("h1").click(function(){
	$("h1").css("color", "yellow");
	});
$("button").click(function() {
	console.log("mensagem");
	var ano = $('#Ano').val();
	var atores = $('#Atores').val();
	var categoria = $('#Categoria option:selected').text();
	var outras = $('#outras').val();
	$(base).children(".movie").each(function(){
		if ($(this).children(".categories:contains('"+categoria+"'").length > 0) {
			console.log($(this).context.outerHTML);
			console.log("mensagem");
		};
	});
});