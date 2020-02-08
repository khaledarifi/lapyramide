
	var x=prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux tu ?",2)
	console.log(x)
    console.log("Voici la pyramide")
	for (var i=1; i<=x; i++)
	{	
		var espaces="";
		for(var j=1; j<=x-i; j++)
				espaces+=" ";
		var diez=""
		for(var k=1; k<=2*i-1; k++)	
				diez+="#"
			
		console.log(espaces+diez);
	}