/* Arquivo Javascript */
function validar() {
	if (document.form.nome.value== "") {
		alert("Preencha o campo com seu nome ou o nome da sua empresa");
		document.form.nome.focus();
		return false;
	}
	if (document.form.email.value== "") {
		alert("Preencha o endereço de email corretamente");
		document.form.email.focus();
		return false;
	}
}
function mudaCor(obj,tipo) {
	if(tipo ==1){
		obj.style.backgroundColor="#ff0000";
	}else if(tipo == 2){
		obj.style.backgroundColor="#ffffff";
	}
}