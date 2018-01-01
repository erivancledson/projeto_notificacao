function verificarNotificacao() {

	$.ajax({
		url:'verificar.php',
		type:'POST',
		dataType:'json',
		success:function(json) {
           //se for maior que zero é pq existe uma notificacao
			if(json.qt > 0) {
				$('.notificacoes').addClass('tem_notif');
				$('.notificacoes').html(json.qt);
			} else {
				//não tem notificação nova
				$('.notificacoes').removeClass('tem_notif');
				$('.notificacoes').html('0');
			}

		}
	});

}

$(function(){
	setInterval(verificarNotificacao, 2000);
	verificarNotificacao();

	$('.notificacoes').on('click', function(){

	});

	$('.addNotif').on('click', function(){
		$.ajax({
			url:'add.php'
		});
	});















});