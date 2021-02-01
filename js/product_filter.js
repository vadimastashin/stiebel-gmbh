$(document).ready(function(){
	$("#btn-form").click(function(){
		$(this).text($(this).text() == 'Показать' ? 'Скрыть' : 'Показать');
		$("#rest-form").slideToggle();
	});
});	