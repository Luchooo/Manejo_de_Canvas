var nombre=prompt("Escriba su nombre");
window.onload = function()
{

	

panel();

function panel () {

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="27px impact";

// Create gradient
var gradient=ctx.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
ctx.fillStyle=gradient;
ctx.textAlign="center"; 
ctx.fillText("¿POR QUÉ EJECUTAMOS VARIOS ",430,50); 
ctx.fillText("PROCESOS SI SOLO TENEMOS UN ",470,90);
ctx.fillText("SOLO PROCESADOR?",550,130);

var img=document.getElementById("confusion");
ctx.drawImage(img,10,10);

//Reglas
ctx.font="40px Impact";
ctx.fillStyle ="#29a1f1",
ctx.fillText("Reglas: ",190,280); 
ctx.fillStyle ="#000000";
ctx.font="30px Impact";
ctx.fillText("No se puede ejecutar dos",405,280);
ctx.fillText("procesos al tiempo.",372,310);

//Objetivo
ctx.font="39px Impact";
ctx.fillStyle ="#913FCC",
ctx.fillText("Objetivo:",190,370); 
ctx.fillStyle ="#000000";
ctx.font="30px Impact";
ctx.fillText("Eres el procesador "+nombre+" i7 da nombres y ",390,410);
ctx.fillText("lineas de ejecución a los procesos.",344,450);

}


	

//PARAMETROS INICIALES***********************************************************************	
	
	//Datos a graficar
	datos = [0,0,0];
	
	//Creación de canvas
	canvas = nom_div('canvas'); 
	
	//Contexto de canvas 2D
	var c = canvas.getContext('2d'); 
	
	//Fondo del canvas
	c.fillStyle = "white"; 
	
	//Tamaño del canvas
	c.fillRect(0,0,500,500);
	

	//
	convenciones();
//**************************************************************************************************
	
	var proceso_1=false;
	var proceso_2=false;
	var proceso_3=false;
	
	var cont=0;
	var cont2=0;
	var cont3=0;



	var tiempo_inicial_1_final;
	var tiempo_inicial_2_final;
	var tiempo_inicial_3_final;


function convenciones()
	{
		
//**********Contruccion de las lineas del eje (X,Y)

		//Color de Lineas
		c.fillStyle = "black"; 
		
		//Ancho de la linea
		c.lineWidth = 2.0; 
		
		//Inicio de la ruta (Para la construccion de las lineas)
		c.beginPath(); 
		c.moveTo(30,10); 
		c.lineTo(30,460); 
		c.lineTo(490,460); 
		c.stroke();
//************Fin de la ruta



//************ Adicionar parametros en los ejes (X,Y)
		
		//Parametros en el eje Y
		c.fillStyle = "black"; 
		
		for(var i=0; i<6; i++) 
		{ 
			var timer = ["O","G","I","D","Ó","C"]; 
		    c.fillText(timer[(5-i)]+ "", 4, i*80+60); 
		    c.beginPath(); 
		    c.moveTo(25,i*80+60); 
		    c.lineTo(30,i*80+60); 
		    c.stroke(); 
		}  
		//Fin de los parametros en el eje Y

	

		
	}//Fin FUNCIÓN convenciones()******************************************************************************


function fecha() {
	
	var Fecha= new Date();
	var hora = Fecha.getHours() 
	var minuto = Fecha.getMinutes() 
	var segundo = Fecha.getSeconds() 
	var horaImprimible = hora + " : " + minuto + " : " + segundo ;	
	return horaImprimible;
}





//******Botón descarga
	nom_div("descarga").addEventListener('click', function(event)
	{
    	
    	this.href = canvas.toDataURL();
    
    });
//******Fin Botón descarga




	for(var i = 1; i <=3; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			
			var ind = event.target.id.split("_");
			datos[ind[1] - 1] = Number(this.value);
			
		});
	}




function Proceso() {
			
		//console.log('proceso 1'+proceso_1)
		//console.log('proceso 2'+proceso_2)

//***Validacion de comentarios REANUDAR - PAUSAR - INICIAR DEL PROCESO 1			
		if(proceso_1==true&&proceso_2==false&&(datos[0]!=0)&&proceso_3==false) {
		
			if(cont==0){
						
						tiempo_inicial_1_final=fecha();
						var color=nom_div("color_p1").value;
						nom_div("notificaciones").style.color=color;
						nom_div("notificaciones").innerHTML+= 'Se ha iniciado el proceso ** '+ nom_div('nombre_p1').value+ ' ** a las '+ fecha()+'\n';
						cont++;
		

						}

			else{
				
			
				nom_div("notificaciones").innerHTML+= 'Se ha reanudado el proceso ** '+ nom_div('nombre_p1').value+ ' ** a las '+ fecha()+'\n';
				}

		};
//FIN DE LA VALIDACIÓN




//***********************Validacion de comentarios REANUDAR - PAUSAR - INICIAR DEL PROCESO 2	
			if(proceso_1==false&&proceso_2==true&&(datos[1]!=0)&&proceso_3==false) {
		
			if(cont2==0){
						tiempo_inicial_2_final=fecha();
						nom_div("notificaciones").innerHTML+= 'Se ha iniciado el proceso ** '+ nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
						cont2++;
						}

			else{
				
				nom_div("notificaciones").innerHTML+= 'Se ha reanudado el proceso ** '+ nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
				}

		};

//FIN DE LA VALIDACIÓN		




//***Validacion de comentarios REANUDAR - PAUSAR - INICIAR DEL PROCESO 3			
		if(proceso_1==false&&proceso_2==false&&(datos[2]!=0)&&proceso_3==true) {
		
			if(cont3==0){
						
						tiempo_inicial_3_final=fecha();
						nom_div("notificaciones").innerHTML+= 'Se ha iniciado el proceso ** '+ nom_div('nombre_p3').value+ ' ** a las '+ fecha()+'\n';
						cont3++;
						}

			else{
				nom_div("notificaciones").innerHTML+= 'Se ha reanudado el proceso ** '+ nom_div('nombre_p3').value+ ' ** a las '+ fecha()+'\n';
				}

		};
//FIN DE LA VALIDACIÓN






//****PROCESO 1***********************************
setInterval(function(){
		if(proceso_1==true&&proceso_2==false&&proceso_3==false) {
    		
    	    c.clearRect (0,0,140,500);
		    var alto1 = datos[0];
			posX = 40 + 0 * 100;
		    posY = 460 - alto1 * 5;
		    c.fillStyle = nom_div("color_p1").value;
		    c.fillRect(posX, posY, 50, alto1 * 5); 
		    datos[0]=datos[0]-1;
		    convenciones();

		   


		   //Cuando finaliza el proceso
		    if(datos[0]==-1){
			if(proceso_1==true&&proceso_2==true){
				nom_div("notificaciones").innerHTML+= 'INTERRUPCIÓN ENTRE PROCESOS ** '+ nom_div('nombre_p1').value+' y'+nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
			}


			else{
			var tiempo_final_1= fecha();
			nom_div("notificaciones").innerHTML+= 'Se ha finalizado el proceso ** '+ nom_div('nombre_p1').value+ ' ** a las '+ fecha()+'\n';
		 	nom_div("notificaciones").innerHTML+= 'El proceso ** '+ nom_div('nombre_p1').value+ ' ** se a demorado '+ tiempototal(tiempo_final_1,tiempo_inicial_1_final)+' segundos en finalizar.\n\n';
		    nom_div("Iniciar_Detener_1").value="Iniciar";
		    proceso_1=false;
			convenciones();
			limpiar_espacio(1);
			cont=0;
			}
			return false;
			}//____________________________________________________________
		}//Fin Validacion 1
},1000);//Fin del primer setInterval			





//SEGUNDO PROCESO******

setInterval(function(){

		
		if(proceso_2==true&&proceso_1==false&&proceso_3==false) {
    	c.clearRect (140,0,90,500);
		
		    var alto2 = datos[1];
			posX = 40 + 1 * 100;
		    posY = 460 - alto2 * 5;
		    c.fillStyle = nom_div("color_p2").value;
		    c.fillRect(posX, posY, 50, alto2 * 5);
		    datos[1]=datos[1]-1;
		    convenciones();  
		

		 
		   //Cuando finaliza el proceso
		    if(datos[1]==-1){
					if(proceso_1==true&&proceso_2==true)
							{
								nom_div("notificaciones").innerHTML+= 'INTERRUPCIÓN ENTRE PROCESOS ** '+ nom_div('nombre_p1').value+' y'+nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
			}	
			



			else{
			var tiempo_final_2= fecha();
			nom_div("notificaciones").innerHTML+= 'Se ha finalizado el proceso ** '+ nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
			nom_div("notificaciones").innerHTML+= 'El proceso ** '+ nom_div('nombre_p2').value+ ' ** se a demorado '+ tiempototal(tiempo_final_2,tiempo_inicial_2_final)+' segundos en finalizar.\n\n';
		  	nom_div("Iniciar_Detener_2").value="Iniciar";
		  	proceso_2=false;
			convenciones();
			limpiar_espacio(2);
			cont2=0;
			}
			return false;
			}//____________________________________________________________
		}
},1000);


//****PROCESO 3***********************************
setInterval(function(){
		if(proceso_1==false&&proceso_2==false&&proceso_3==true) {
    		
    	   c.clearRect (240,0,140,500);
		    var alto3 = datos[2];
			posX = 40 + 2 * 100;
		    posY = 460 - alto3 * 5;
		    c.fillStyle = nom_div("color_p3").value;
		    c.fillRect(posX, posY, 50, alto3 * 5); 
		    datos[2]=datos[2]-1;
		    convenciones();

		   


		   //Cuando finaliza el proceso
		    if(datos[2]==-1){
			if(proceso_1==true&&proceso_2==true&&proceso_3==true){
				nom_div("notificaciones").innerHTML+= 'INTERRUPCIÓN ENTRE PROCESOS ** '+ nom_div('nombre_p1').value+' y'+nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
			}


			else{
			var tiempo_final_3= fecha();
			nom_div("notificaciones").innerHTML+= 'Se ha finalizado el proceso ** '+ nom_div('nombre_p3').value+ ' ** a las '+ fecha()+'\n';
		 	nom_div("notificaciones").innerHTML+= 'El proceso ** '+ nom_div('nombre_p3').value+ ' ** se a demorado '+ tiempototal(tiempo_final_3,tiempo_inicial_3_final)+' segundos en finalizar.\n\n';
		    nom_div("Iniciar_Detener_3").value="Iniciar";
		    proceso_3=false;
			convenciones();
			limpiar_espacio(3);
			cont3=0;
			}
			return false;
			}//____________________________________________________________
		}//Fin Validacion 1
},1000);//Fin del primer setInterval			



			
		
		
	if((proceso_1==true&&proceso_2==true)||(proceso_1==true&&proceso_3==true)||(proceso_2==true&&proceso_3==true)||(proceso_1==true&&proceso_2==true&&proceso_3==true)){
		nom_div("notificaciones").innerHTML+= 'INTERRUPCIÓN ENTRE PROCESOS ** '+ nom_div('nombre_p1').value+' y '+nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
		alert('Un proceso  se esta ejecutando !!NO PUEDE EJECUTAR 2 PROCESOS AL MISMO TIEMPO!! Por favor detenga uno...')
		}
		


 }


function limpiar_espacio (n) {
	if (n==1) {
	nom_div("nombre_p1").value="";
	nom_div("opcion_1").value='';
	nom_div("nombre_p1").focus();
	};

	if (n==2) {
	nom_div("nombre_p2").value="";
	nom_div("opcion_2").value='';
	nom_div("nombre_p2").focus();
	};

	if (n==3) {
	nom_div("nombre_p3").value="";
	nom_div("opcion_3").value='';
	nom_div("nombre_p3").focus();
	};

}
  

function tiempototal (n,m) {

	var x=n.split(' : ');
	var y=m.split(' : ');

	var totalfinal= Number((x[0]*3600)+(x[1]*60)+(x[2]*1));
	var totalinicial= Number((y[0]*3600)+(y[1]*60)+(y[2]*1));	
	
	//	console.log("final "+ totalfinal);
	//	console.log("inicial "+totalinicial);
	//console.log("inicial "+ y[0]*3600 +"+"+ y[1]*60+"+"+y[2]);
	//console.log("final "+ x[0]*3600 +"+"+x[1]*60+"+"+x[2]);

	
	return totalfinal-totalinicial;
}












//*LISTENES AGREGAR********************************************************************************************

		nom_div("agregar_P1").addEventListener('click', function(event)
		{	
					
			if (validarcampos_p1()==true) {
			graficaDatos();
			};

		});

		nom_div("agregar_P2").addEventListener('click', function(event)
		{	
			if (validarcampos_p2()==true) {
			graficaDatos();
			};
		});


		nom_div("agregar_P3").addEventListener('click', function(event)
		{	
			if (validarcampos_p3()==true) {
			graficaDatos();
			};
		});



//***PROCESO 1 LISTENER********

	nom_div("Iniciar_Detener_1").addEventListener('click', function(event)
	{
		
	if (validarcampos_p1()==true) {
				
		if(!proceso_1)
		{		
			proceso_1=true;	
			graficaDatos();
			this.value = "Detener";
			Proceso();
		}

		else
		{
			proceso_1=false;
			nom_div("notificaciones").innerHTML+= 'Se ha pausado el proceso ** '+ nom_div('nombre_p1').value+ ' ** a las '+ fecha()+'\n';
			this.value = "Continuar";
			graficaDatos();
		}
	};
	});
//**************************************************************************************


//****PROCESO 2 LISTENER*****

nom_div("Iniciar_Detener_2").addEventListener('click', function(event)
	{
		
		if (validarcampos_p2()==true) {
		if(!proceso_2)
		{		
			proceso_2=true;	
			graficaDatos();
			this.value = "Detener";
			Proceso();
		}

		else
		{
			proceso_2=false;
			nom_div("notificaciones").innerHTML+= 'Se ha pausado el proceso ** '+ nom_div('nombre_p2').value+ ' ** a las '+ fecha()+'\n';
			this.value = "Continuar";
			graficaDatos();
		}
		};
	});

//********************************************************************


//****PROCESO 3 LISTENER*****
nom_div("Iniciar_Detener_3").addEventListener('click', function(event)
	{
		
	if (validarcampos_p3()==true) {
				
		if(!proceso_3)
		{		
			proceso_3=true;	
			graficaDatos();
			this.value = "Detener";
			Proceso();
		}

		else
		{
			proceso_3=false;
			nom_div("notificaciones").innerHTML+= 'Se ha pausado el proceso ** '+ nom_div('nombre_p3').value+ ' ** a las '+ fecha()+'\n';
			this.value = "Continuar";
			graficaDatos();
		}
	};
	});
//********************************************************************






//**********VALIDAR CAMPOS PROCESO 1******
function validarcampos_p1 () {
	
	if (nom_div("nombre_p1").value!=""&&nom_div("opcion_1").value!=0) {

		return true;

	}


	else{

		if (nom_div("nombre_p1").value=="") {

			alert('Asigne un nombre al proceso 1');
			nom_div("nombre_p1").focus();
		}

		if(nom_div("opcion_1").value==0){

			alert('¿Cuantas Lineas de codigo quiere compilar en el proceso 1?')
			nom_div("opcion_1").focus();
		}

		return false;
	};
}//FIN**********VALIDAR CAMPOS PROCESO 1******


//**********VALIDAR CAMPOS PROCESO 2******
function validarcampos_p2 () {
	
	if (nom_div("nombre_p2").value!=""&&nom_div("opcion_2").value!=0) {

		return true;

	}


	else{

		if (nom_div("nombre_p2").value=="") {

			alert('Asigne un nombre al proceso 2');
			nom_div("nombre_p2").focus();
		}

		if(nom_div("opcion_2").value==0){

			alert('¿Cuantas Lineas de codigo quiere compilar en el proceso 2?')
			nom_div("opcion_2").focus();
		}

		return false;
	};
}//FIN**********VALIDAR CAMPOS PROCESO 2******

//**********VALIDAR CAMPOS PROCESO 1******
function validarcampos_p3 () {
	
	if (nom_div("nombre_p3").value!=""&&nom_div("opcion_3").value!=0) {

		return true;

	}


	else{

		if (nom_div("nombre_p3").value=="") {

			alert('Asigne un nombre al proceso 3');
			nom_div("nombre_p3").focus();
		}

		if(nom_div("opcion_3").value==0){

			alert('¿Cuantas Lineas de codigo quiere compilar en el proceso 3?')
			nom_div("opcion_3").focus();
		}

		return false;
	};
}//FIN**********VALIDAR CAMPOS PROCESO 1******



var graficaDatos = function()
	{
		
	
		c.clearRect (0,0,500,500);
		for(var i = 0; i < datos.length; i++)
		{   
		    
		    var alto = datos[i];
		    posX = 40 + i * 100;
		    posY = 460 - alto * 5;
		    c.fillRect(posX, posY, 50, alto * 5); 
		}
		convenciones();
	}








//Capturar los elementos de HTML	
	function nom_div(div)
	{
		return document.getElementById(div);
	}
//Fin Capturar elementos de HTML	

}//Fin
