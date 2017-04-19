
var titre = ""
var text = ""

$("#titre").keyup(function(){
	titre = $("#titre").val();

});	

$("#text").keyup(function(){
	text = $("#text").val();

});	

$("#envoyer").click(function(){

	var valeur = {"titre" : titre, "text" : text}
	$("input").val("");
	$("textarea").val("");
	
    $.ajax({
        
        url:'http://192.168.1.50/json-db',
        
        data: {
            
            task: 'set',
            
            key: 'FranckBlog2',
            
            value: JSON.stringify(valeur),
        }
    });
    
});


function Ajouter(table){
 	for (var i = 0; i < table.length; i++) {
 		$("#title").append('<a><div><li>'+table[i].titre+'</div></li></a>');
 		$("#article").append('<div>'+table[i].text+'</div>')
 	}
}

function Addadmin(tableau){
for (var i = 0; i < tableau.length; i++) {
 		$("#suptitle").append('<a><div><li>'+tableau[i].titre+'</div></li></a>');
 		$("#suparticle").append('<div>'+tableau[i].text+'</div>'+ '<button id="sup">sup</button>')
 	}
 }

function affichage(){
	$.ajax({ 
		url:'http://192.168.1.50/json-db', 
		data: { 
			task: 'get',
			key: 'FranckBlog2', 
		} 
	})
	.done(function(data){

		valeur=JSON.parse(data);
		console.log(valeur);
		Ajouter(valeur);
		Addadmin(valeur)
	});	

}

affichage();

	$("#supprimer").click(function(){
		
		$.ajax({
    		url: 'http://192.168.1.50/json-db',
    		data: {
    			task: 'delete',
    			key: 'FranckBlog2',
   			}
		});
	});

	$("#text").keyup(function(){
	
	var converter = new showdown.Converter(),
    	text      = $('#text').val(),
    	html      = converter.makeHtml(text);
	
		$("#texthtml").html(html);
	});