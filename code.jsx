var members = ["Lucas Soares","Ludmilla Marroig","Luca Alves","Patrick Scoralick","Antoanne Pontes","José Augusto","Daniel Martins","Henrique Junior"];

GenerateCertified();

function GenerateCertified(){	
	for(i = 0; i<members.length; i++){
		app.activeDocument.artLayers["nome"].textItem.contents = members[i];
		ExportToPDF(members[i]);	
	}
	alert('Concluido com sucesso');
}

function ExportToPDF(name){
	var doc = app.activeDocument;
	var file = new File(doc.path +'/PDF/' + name + '.pdf');
	var pdfSaveOptions = new PDFSaveOptions()
	pdfSaveOptions.preserveEditing = false;
	doc.saveAs(file, pdfSaveOptions, true);	
}
