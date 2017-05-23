var nomes = ["Lucas Soares",
				"Ludmilla Marroig",
				"Luca Alves",
				"Patrick Scoralick",
				"Antoanne Pontes",
				"José Augusto",
				"Daniel Martins",
				"Henrique Junior"
			];

for(i = 0; i<nomes.length; i++){
	var name = app.activeDocument.artLayers["nome"].textItem.contents = nomes[i];
}
