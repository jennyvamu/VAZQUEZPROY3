function limpiarFormulario(){
	document.getElementById("miForm").reset();
}
var cd=function(n1){
	var a = parseInt(document.getElementById("numx").value);
	var e = parseInt(document.getElementById("exp").value);
	resultado = (a*e);
	return "Es igual a: " + resultado + "e^" + e;
}
var ca=function(n1, n2, n3){
	var f = parseInt(document.getElementById("vf").value);
	var i = parseInt(document.getElementById("vi").value);
	var ti = parseInt(document.getElementById("t").value);
	acel = ((f-i)/ti);
	return "La aceleración es: " + acel + "m/s^2"; 
}