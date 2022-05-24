const Fecha = document.querySelector("#f");
const Hora = document.querySelector("#hora");
const Ampm = document.querySelector("#PMAM");
const Segundos = document.querySelector("#seg");
const Btn_formato = document.querySelector("#btn_formato");
var ampm="";
var format24=0;
Dia=["Domingo" , "Lunes" , "Martes" , "Miercoles" , "Jueves" , "viernes" , "Sabado"]
Mes=["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"]

//Boton para elegir formato de hora
Btn_formato.addEventListener("click",(e)=>{
      		
      		if(format24 == 0 ){
      			//cambia el valor de la variable a 1
      			format24=1;
      			//cambia el atributo value del boton
      			btn_formato.setAttribute('value','Formato AM-PM');
      		}
      		else{
      			//cambia el valor de la variable a 0
      			format24=0;
      			//cambia el atributo value del boton
      			btn_formato.setAttribute('value','Formato 24HS');
      		}
});
//Funcion reloj 
function reloj(){
    //extrae todos los datos de la fecha , dia y hora
    var fecha = new Date();
    //extraemos el año
    var año = fecha.getFullYear();
	//extraemos el numero de mes
	var M = fecha.getMonth();
	//extraemos el dia del mes
	var diaMes = fecha.getDate();
	//extraemos el numero de dia de semana
	var diaSemana = fecha.getDay();
	//extraemos la hora
	var h = fecha.getHours();
	//extraemos los minutos
	var m = fecha.getMinutes();
	//extraemos los segundos
	var s = fecha.getSeconds();
	//variable que guardaremos los datos modificados de la hora
	var horaActual;

	//minutos
	//si los minutos son menor que 9 les agrega un 0 a la izquierda
	if(m<=9){
		m="0"+m;
	}
	//segundos
	//si los segundos son menor que 9 les agrega un 0 a la izquierda
	if(s<=9){
		s="0"+s;
	}
    
    //Formato AM-PM
    if(format24==0){
    	//asigna un atributo style display block al AM PM
    	Ampm.setAttribute('style','display:block;');
    	//Remueve la clase de los segundos
    	Segundos.classList.remove("Formato24");

		//entre mayor o igual a 0 y menor a 12 "AM"
		if(h>=0 && h<12){
	    	ampm="AM";
	    }
	    //Sino "PM"
	    else{
	    	ampm="PM";
	    }
	    //hora
		//cuando hora sea 0 asigna el valor de 12 a horaActual
		if(h==0){
			horaActual=12;
		}
		//cuando hora sea mayor que 0 y menor que 10 coloca un 0 a la izquierda
		else if(h>0 && h<=9){
			horaActual="0"+h;
		}
		//cuando hora sea mayor que 9 y menor o igual a 12, horaActual es igual a hora
		else if(h>9 && h<=12){
			horaActual=h;
		}
		//cuando hora sea mayor que 12 y menor que 22
		else if(h>12 && h<22){
			horaActual="0"+(h-12);
		}
		else{
			horaActual=h-12;
		}
    }

    if(format24==1){
    		//asigna un atributo display none para esconder a AM PM
    		Ampm.setAttribute('style','display:none;');
    		//Añade la clase a los segundos
    		Segundos.classList.add("Formato24");
    		//agrega 0 a la izquierda solo sei hora es menor a 10
    		if(h>=0 && h<=9){
    			horaActual="0"+h;
    		}
    		//deja la hora tal cual viene: 00-23
    		else{horaActual=h;}
    }
    //guarda el dia de la semana. "Dia" es un array  y "diaSemana" el numero de dia extraido
	dia=Dia[diaSemana];
	//guarda el mes del año. "Mes" es un array  y "M" el numero de mes extraido
	mes=Mes[M];
	//muestra en pantalla la fecha
	Fecha.innerHTML=dia+" "+diaMes+" De "+ mes;
	//muestra en pantalla la hora
	Hora.innerHTML=horaActual+':'+m +":";
	//muestra en pantalla el valor de ampm
	Ampm.innerHTML=ampm;
	//muestra en pantalla el valor de los segundos
	Segundos.innerHTML=s;
}
//llamada a la funcion interval
setInterval(reloj,1000);

