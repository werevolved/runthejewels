
$('#start').click(carMove1);

function carMove1(){
	$('#audio').get(0).play();
	$('#car').animate({'left':'700px'}, 2500, carMove2)
}

var carMove2 = function(){
	$('#car').addClass('rotate90');
	$('#car').animate({'top':'400px'}, 2000, carMove3)
}

var carMove3 = function(){
	$('#car').removeClass('rotate90');
	$('#car').addClass('flip180');
	$('#car').animate({'left':'-=500px'}, 1500, carMove4)
}

var carMove4 = function(){
	$('#car').removeClass('flip180');
	$('#car').addClass('rotate90');
	$('#car').animate({'top':'+=100px'}, 1500, carMove5)
}

var carMove5 = function(){
	$('#car').removeClass('rotate90');
	$('#car').animate({'left':'+=250px'}, 4000, carMove6)
}

var carMove6 = function (){

	$('#audio').get(0).pause();
}
