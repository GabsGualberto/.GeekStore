function validar(){
    if(txtemail.value.length < 6 || 
		txtemail.value.indexOf("@") <=0 ||
		txtemail.value.lastIndexOf(".") <=  txtemail.value.indexOf("@") ){
        alert("Informe um e-mail valido !");
        txtemail.value = "";
		txtemail.focus();
		return false;
    }
}