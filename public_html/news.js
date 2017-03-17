var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
	var i = $("#zone_saisie").val();
	if(recherches.indexOf(i) == -1){
		recherches.push(i);
		$("#recherches-stockees").append("<p class=\"titre-recherche\"><label>"+ i +"</label><img src=\"images/croix30.jpg\" class=\"icone-croix\"/> </p>");
		$(".icone-croix").attr("onclick","supprimer_recherche(this)");
		$(".titre-recherche").attr("onclick","selectionner_recherche(this)");
                var json = JSON.stringify(recherches);
                $.cookie('recherche',JSON.stringify(recherches), {expire : 1000});
	} else {
		alert("Recherche déja enregistrée");
	}
}

function supprimer_recherche(e)
{ 
	var parent = $(e).parent();
	var label = $(e).parent().children('label').val();
	recherches.splice(recherches.indexOf(label),1);
        $(e).parent().remove();
        $.cookie('recherche',JSON.stringify(recherches), {expire : 1000});
}


function selectionner_recherche(e)
{ 
	var label = $(e).children("label").html();
	$("#zone_saisie").val(label);
	recherche_courante = label;
}


function init()
{
    if($.cookie('recherche')){
       recherches = JSON.parse($.cookie('recherche')); 
       $.each(recherches,function(i,val){
            $("#recherches-stockees").append("<p class=\"titre-recherche\"><label>"+ val +"</label><img src=\"images/croix30.jpg\" class=\"icone-croix\"/> </p>");
            $(".icone-croix").attr("onclick","supprimer_recherche(this)");
            $(".titre-recherche").attr("onclick","selectionner_recherche(this)");
       });
    }
}


function recherche_nouvelles()
{
    $("#resultats").empty();
    $("#wait").css("display","block");
    $.ajax({
        url : 'search.php',
        type : 'GET',
        data : 'data=' + $("#zone_saisie").val(),
        async : false,
        xhr : maj_resultats
    });
	
}


function maj_resultats(res)
{
    $("#wait").css("display","none");
   /* $.each(res,function(i,val){
        $("#resultats").append("<p class=\"titre_result\">\n\
                                <a class=\"titre_news\" href=\"url\" target=\"_blank\"> titre \n\
                                </a><span class="date_news">date</span><span class="action_news" onclick="sauve_news(this)">< img src="horloge15.jpg"/></span></p>")
    });*/
	
}


function sauve_news(e)
{
	
}


function supprime_news(e)
{
	
}





	






