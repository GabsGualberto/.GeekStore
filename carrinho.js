function validarPagamento(){
    if(nome.value == "" || nome.value.length < 3){
        alert("Informe o seu nome !");
        txtnome.value = "";
        txtnome.focus;
        return false;
    }
    if(cartao.value == "" || cartao.value.length < 15 || isNaN(cartao.value)){
        alert("Numero de cartao invalido!");
        txtnome.value = "";
        txtnome.focus;
        return false;
    }
    if(cvv.value == "" || cvv.value.length != 3 || isNaN(cvv.value)){
        alert("cvv invalido!");
        txtnome.value = "";
        txtnome.focus;
        return false;
    }
    if(vencimento.value == "" || vencimento.value.length <=4 || vencimento.value.length >5 || vencimento.value.indexOf('/')<=1 || vencimento.value.indexOf('/')>2){
        alert("Digite uma data de vencimento valida!");
        txtnome.value = "";
        txtnome.focus;
        return false;
    }
    else{
        alert("pagemento efetuado com sucesso");
        return true;
    }

}