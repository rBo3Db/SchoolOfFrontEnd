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
	$("input[name='имя']")
  	.keyup(function() {
	var имя = $( this ).val();
	console.log( имя );
  	})
  	.keyup();

	 	//	текст_щаблона_с_подставлеными_данными = шаблон_как_функция({дополнительные_сведенья1:'761303034622532', дополнительные_сведенья2:'штрихкод'});
	 	//	$( ".my-control2" ).html(текст_щаблона_с_подставлеными_данными);
	};
});


//	for (var i = 0; i < 12; i++) {
//		$("input").attr("name");
//		console.log(name);
//		$("name").keyup(function() {
//		имя = $("name").val();
//		console.log( имя );
//		})
//  		.keyup();
//  	}