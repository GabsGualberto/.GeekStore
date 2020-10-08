function validar(){
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
}