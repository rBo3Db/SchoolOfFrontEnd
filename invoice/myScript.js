define(['tpl!index.html', 'data.js'], function(tpl,data) {
	console.log(-1);
	return function(sel)
	{
		console.log(0);
		//$.get( "index.html", function(строка_щаблона) {
	 	//	var текст_щаблона_с_подставлеными_данными = tpl({name: 'Стул', единица_измерения: 'шт', количество: '2', цена_за_единицу: '25000', цена_за_всё: '50000',
	 	//	акциз: '0,00', сумма_налога: '9000', стоимость_всего_с_учетом_налога: '56000',страна: 'Испания, Италия', номер_тд: '14, 32'});
	 	$(sel).html(tpl(data));
		console.log(2);
	//	getElementbyName
		$(function Инпутинг(){
			var названия_инпутов =[];
			$("input[name]").keyup(function() {
				var имя_инпута = $(this).attr("name");
				названия_инпутов[имя_инпута] = $(this).val();
				console.log( названия_инпутов );
	//	console.log( названия_инпутов[имя_инпута] );
  				})
  			.keyup();
  		});
		$(".create_new_row_of_additional_information").click(function () {
			$( ".additional_information" ).clone(true).addClass("newElement").appendTo(".data");
			$(".newElement").removeClass("additional_information");
		});

  			//сначала клон, потом инсёрт

	 	//	текст_щаблона_с_подставлеными_данными = шаблон_как_функция({дополнительные_сведенья1:'761303034622532', дополнительные_сведенья2:'штрихкод'});
	 	//	$( ".my-control2" ).html(текст_щаблона_с_подставлеными_данными);
	};
});

			//prependTo
/*  		var perem=[];
		for (var i = 0; i < 12; i++) {
			$("input[name]").attr("name");
			console.log(name);
			$("name").keyup(function() {
			perem[i] = $("name").val();
			console.log(perem[i]);
			})
	  		.keyup();
*/