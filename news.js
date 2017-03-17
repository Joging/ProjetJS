var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
	var i = $("#zone_saisie").val();
	if(recherches.indexOf(i) == -1){
		recherches.push(i);
		$("#recherches-stockees").append("<p class=\"titre-recherche\"><label>"+ i +"</label><img src=\"croix30.jpg\" class=\"icone-croix\"/> </p>");
		$(".icone-croix").attr("onclick","supprimer_recherche(this)");
		$(".titre-recherche").attr("onclick","selectionner_recherche(this)");
	} else {
		alert("Recherche déja enregistrée");
	}

}

function supprimer_recherche(e)
{ 
	var parent = e.parentNode;
	var label = parent.firstChild.innerHTML;
	recherches.splice(recherches.indexOf(label),1);
	parent.parentNode.removeChild(parent);	
}


function selectionner_recherche(e)
{ 
	var label = e.firstChild.innerHTML;
	$("#zone_saisie").val(label);
	recherche_courante = label;
}


function init()
{

}


function recherche_nouvelles()
{
	
	
}


function maj_resultats(res)
{

	
}


function sauve_news(e)
{
	
}


function supprime_news(e)
{
	
}





	






