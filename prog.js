function validar(){
    if(txtnome.value == "" || txtnome.value.length < 3){
        alert("Informe o seu nome !");
        txtnome.value = "";
        txtnome.focus;
        return false;
    }

    if(txtemail.value.length < 6 || 
		txtemail.value.indexOf("@") <=0 ||
		txtemail.value.lastIndexOf(".") <=  txtemail.value.indexOf("@") ){
        alert("Informe um e-mail valido !");
        txtemail.value = "";
		txtemail.focus();
		return false;
    }

    if(senha1.value.length <6 || isNaN(senha1.value)==false){
        alert("Informe uma senha alfanumerica de almenos 6 caracteres!");
        senha1.value="";
		senha1.focus();
		return false;
	}
	if(senha1.value != senha2.value){
        alert("Senha e confirmação nao são iguais!");
        senha2.value="";
		senha2.focus();
		return false;
    }
    
    if(txtcpf.value.length < 11){
        alert("Digite o seu CPF");
        txtcep.value="";
        txtcpf.focus();
        return false;
    }

    if(txttel.value == "" || txttel.value.length < 8){
        alert("Informe o seu telefone");
        txttel.value = "";
        txttel.focus();
        return false;
    }
}