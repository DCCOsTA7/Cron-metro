isStart = false;
var count;
window.onload = function(){
	var segundos = document.getElementById("input-segundos");
	var minutos = document.getElementById("input-minutos");
	var horas = document.getElementById("input-horas");
	var btnStart = document.getElementById("btn-start");
	var btnReset = document.getElementById("btn-reset");
	var btnMark = document.getElementById("btn-mark");
	var markArea = document.getElementById("mark-area");
	function contar(){
		segundos.value++;
		if(segundos.value > 59){
			segundos.value = "00";
			minutos.value++;
		}
		if(minutos.value > 59){
			minutos.value = "00";
			horas.value++;
		}
		if(horas.value > 23){
			horas.value = "00";
		}//	Função que vai contar as horas e os segundos
	}
	function repor(){
		horas.value = "00";
		minutos.value = "00"
		segundos.value = "00";
		btnStart.innerHTML = "Iniciar";
		markArea.innerHTML = "";
		clearInterval(count); isStart = false;
	} 
	btnStart.onclick = function(e){
		if(!isStart){
			this.innerHTML = "Parar";
			count = setInterval(contar, 1000); isStart = true;
		}else{
			this.innerHTML = "Iniciar";
			clearInterval(count); isStart = false;
		}//Se isstart for verdadeiro entáo o botão terá a palavra "parar" e vai ter um intervalo de 1 segundo, caso falso tera palavra "iniciar" e não terá um intervalo, será estático
	}
	btnReset.onclick = function(){
		repor();
	}
	btnMark.onclick = function(){
		if(horas.value > 0 && isStart || minutos.value > 0 && isStart || segundos.value > 0 && isStart){
			markArea.innerHTML += '<span class="mark">'+horas.value+'h:'+minutos.value+'m:'+segundos.value+'s</span>'
			markArea.scrollTop += 2000;
		}else{
			alert ("INICIE O CRONOMETRO")
		}
	}

}