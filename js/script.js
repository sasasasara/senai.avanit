const showModalDeletar = function(id){
	$('#id_deletar').val(id)	
	$('#deleteModal').modal('show')
}

const deletar = function(nome){
	let id = $('#id_deletar').val()
	if (id != 0)
		window.location.href = '/' + nome + '/delete/' + id
}

const verificarSenha = function(){
	if ($('#senha').val().length > 1){
		if($('#senha').val().length < 6 || $('#senha').val().length > 12){
			$('#labelsenhalength').css('display', 'block')
		} else {
			$('#labelsenhalength').css('display', 'none')
		}
	
		if ($('#confirmarSenha').val() != '') {
			if($('#senha').val() != $('#confirmarSenha').val()){
				$('#labelsenha').css('display', 'block')
			} else {
				$('#labelsenha').css('display', 'none')
				
			}
		}	
	}
}

const verificarLogin = function(){

	if($('#login').val().length > 1){
		if($('#login').val().length < 6 || $('#login').val().length > 12){
			$('#labelloginlength').css('display', 'block')
		} else {
			$('#labelloginlength').css('display', 'none')
		}
	}
	
}

$(document).ready(function(){
	$(".mascaraTelefone").mask("(99) 99999-9999");
	$(".mascaraRg").mask("999.999.999");
	$(".mascaraCpf").mask("999.999.999-99");
	$(".mascaraData").mask("99/99/9999");
});
