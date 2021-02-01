$(document).ready(function(){
	$("#btn-specs").click(function(){
		$(this).text($(this).text() == 'Показать' ? 'Скрыть' : 'Показать');
		$("#rest-table").slideToggle();
	});
});	


