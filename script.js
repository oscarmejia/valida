$(document).ready(function() {

	$('.btn2').click(function(){
		if ($('.txtnum').val()===0) {
			$('button.btn2').addClass("disabled");
		}else{
			var menos =$(this).parents().find('.txtnum').val();
		$(this).parents().find('.txtnum').val(menos-1);
		}
	});

	$('.btn1').click(function(){
		if ($('.txtnum').val()===0) {
			$('button.btn1').addClass("disabled");
		}else{
			var mas =$(this).parents().find('.txtnum').val();
		$(this).parents().find('.txtnum').val(parseInt(mas)+1);
		}
	});



   $('.btnAddCar').click(function(){
   	 var nombre =$(this).parents('tr').find('.pron').html();
   	var precio =$(this).parents('tr').find('.prop').html();
   	var cantidad =$(this).parents('tr').find('.proo').val();
   	var num=parseInt(cantidad);
   	var fila="<tr><td>"+precio+"</td><td>"+nombre+"</td><td>"+num+"</td></tr>";
   	$(fila).appendTo(".tabla2");
   	
   });
} );