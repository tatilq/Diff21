var numero1 = document.getElementById("numero_1");
var diferencia = 0;

function calcular()
{
	var  valornumero1=numero1.value;
	var val_num1=parseFloat(valornumero1);
	
	if(valornumero1 == "" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingreso ningun numero</div>';
	}
	else if (val_num1 > 21 )
	{
		diferencia =(( parseFloat(numero1.value)-21)*2);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Numero mayor, la diferencia sera el doble</div>';
	
	}
	else 
	{
		diferencia =21- parseFloat(numero1.value);
		var valorDiferencia= parseFloat(diferencia);
		salida.innerHTML = valorDiferencia.toFixed(2);

	}

}
