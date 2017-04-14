$(document).ready(function(){
	var Recup = [];
	

	$("#valider").click(function(){
		var Text = $("#text").val();
		var Titre = $("#titre").val();
		var blog = {"title":Titre, "texte":Text}
		Recup.push(blog);
		console.log(Recup);
		Save();

	})

	$("#Charger").click(function(){
		$("Recuptext").html(Recup);
		Charger();
	})

	


	function Save(){
		$.ajax({
			url:'http://192.168.1.50/json-db',
			data: {
				task: 'set',
				key: 'BlogFranck',
				value: JSON.stringify(Recup)

			}
		});
	};
	
	function Charger(){
		$.ajax({
			url:'http://192.168.1.50/json-db',
			data: {
			task: 'get',
			key: 'BlogFranck'

			},
			success: function(data){
				console.log(data);
				//$("#Recuptext").append(Recup);
			}
		});
	}

	function Delete(){
		$.ajax({
			url:'http://192.168.1.50/json-db',
			data: {
			task: 'delete',
			key: 'BlogFranck'
			}
		});

	}
});