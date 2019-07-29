//programa que realiza una simulación de funciones de calculadora.
//Autor: José P. Chanatásig V. 
var oper1 = "";
var i = 0;
var cifra="";
var tecla1
var operando = [false,false,false,false]
var operacion = ""
var sumando1 = 0
var suma1 = 0
var resultado = 0
var cont = 0
var cont_punto=0
var prod1 = 1
var  divisor = 1
var ans = 0
var cociente1 = 0
var cont3=0
var opern=0
var idt =""
var operador=""
var operMulti=""

   document.getElementById('1').onclick = function(){ escribir(12)}; // Click sobre tecla 1
   document.getElementById('2').onclick = function(){ escribir(13)}; // Click sobre tecla 2
   document.getElementById('3').onclick = function(){ escribir(14)}; // Click sobre tecla 3
   document.getElementById('4').onclick = function(){ escribir(8)}; // Click sobre tecla 4
   document.getElementById('5').onclick = function(){ escribir(9)}; // Click sobre tecla 5
   document.getElementById('6').onclick = function(){ escribir(10)}; // Click sobre tecla 6
   document.getElementById('7').onclick = function(){ escribir(4)}; // Click sobre tecla 7
   document.getElementById('8').onclick = function(){ escribir(5)}; // Click sobre tecla 8
   document.getElementById('9').onclick = function(){ escribir(6)}; // Click sobre tecla 9
   document.getElementById('0').onclick = function(){ escribir(15)}; // Click sobre tecla 0
   document.getElementById('punto').onclick = function(){ escribir(16)}; // Click sobre tecla punto
   document.getElementById('mas').onclick = function(){suma()}; // Click sobre tecla mas
   document.getElementById('menos').onclick = function(){resta()}; // Click sobre tecla menos
   document.getElementById('por').onclick = function(){multi()}; // Click sobre tecla por
   document.getElementById('dividido').onclick = function(){divide()}; // Click sobre tecla dividisión
   document.getElementById('igual').onclick = function(){opermath()}; // Click sobre tecla igual
    document.getElementById('on').onclick = function(){encerar()}; // Click sobre tecla ON/C
	 document.getElementById('sign').onclick = function(){cambio_signo()}; // Click sobre tecla +/-
	//captura de teclado
	
   function escribir(ordc1){    //captura de teclado numérico
   
  cont_punto=0
  pulso(ordc1);
   
 idt=document.getElementsByClassName("tecla")[ordc1].id; 
  cifra= idt;
  console.log("idt = "+idt+" cifra = "+cifra)
  
  
  if(idt!="mas" || idt!="menos" || idt!="por" || idt!="dividido" || idt!="igual"){
	  if(oper1.length<8&& cont3<8){
		  if(idt=='punto'){
	  if(cont_punto <1){cifra=".";
	  cont_punto=cont_punto+1;
	  oper1=oper1+cifra;
	  console.log("cont_punto = 2"+cont_punto+"\n cifra = "+cifra+"\n oper1 = "+oper1);
	  cifra=""
	  }else{cifra=""}
		  }
  oper1=oper1+cifra;
  console.log(oper1)
   document.getElementById("display").innerHTML =oper1; 
   cont3=cont3+1
   
	  }else{
		  cifra=""
	  }
	    
	  
	  
  }
  opern=Number(oper1)
   //console.log(opern);
	  //oper1=String(opern);
		  
	console.log(oper1,opern)
   }
   


	
   // funcion suma
   function suma(){
	   cont_punto=0
	   
	   pulso(18)
	   console.log("opern = "+ opern);
	   
	  
	   if(ans==0){
	   sumando1 = opern}
	   else{sumando1=ans}
	   
	   oper1="";
   
		console.log("ans = "+ans)
	
		cont3=0
		operador="+";
		document.getElementById("display").innerHTML ="0"; 
   }
  // funcion resta
   function resta(){
	   cont_punto=0
	   pulso(11)
	   console.log("opern = "+ opern);
	  
		if (ans==0){
	   minuendo=opern
	   }else{
		   minuendo=ans;
		   console.log("primera iteración: ans ="+ans+"\n minuendo = "+minuendo)
	   }
		   
	   oper1="";
   
	//cont=cont+1
	 
	   cont3=0
	   operador="-";
	    document.getElementById("display").innerHTML =0; 
   }
   // funcion multiplicacion
   
    function multi(){
		
		cont_punto=0
	   pulso(7);
	   
	  
		if (ans==0){
		   factor1=opern;
		   console.log( "factor1 = "+ factor1);
		    }else{
		   factor1=ans;
	   
		console.log("ans "+ ans);
		} 
	 oper1="";
		cont3=0
	   operador="*";
	    document.getElementById("display").innerHTML =0; 
	   
	   }
   
   function divide(){
	   
	   cont_punto=0
	   pulso(3)
	    if(ans==0){
		   dividendo=opern
	   }else{
	   dividendo = ans;
	   }
	  
	 document.getElementById("display").innerHTML ="0"; 
	//suma1=cociente1
	operador="/";
	cont3=0
	oper1="";
   }
   //captura de tecla igual
   function opermath(){
	   cont_punto=0
	   var tecla1 = document.getElementById("igual")
  
   tecla1.style.padding="4px";
   tecla1.style.transition="linear 0.2s";
    tecla1.style.delay="2s";
   tecla1.addEventListener("mouseout",agrandar);
   function agrandar(){
	   tecla1.style.padding="0"
	   tecla1.style.transition="linear 0.4s";
	  
   }
  resolucion()
   }
   
   //función encerar
	 function encerar(){
		 cont_punto=0
	   var tecla1 = document.getElementById("on")
  
   tecla1.style.padding="4px";
   tecla1.style.transition="linear 0.2s";
    tecla1.style.delay="2s";
   tecla1.addEventListener("mouseout",agrandar);
   function agrandar(){
	   tecla1.style.padding="0"
	   tecla1.style.transition="linear 0.4s";
	  
   }
		suma1=0
		operacion=""
		oper1=""
		cifra=""
		prod1=1
	  document.getElementById("display").innerHTML =0; 
	  ans=0;
	  console.log( "answer = "+ ans);
	  
   }

   // funcion resolución igual
 function resolucion(){
  // operador=operacion.slice(-1) // obtener ultima operación
   console.log(operador)
   operacion = operacion + operador
   console.log(opern)
   switch(operador){
	   case "+":
	   
	   console.log(sumando1)
     sumando2=opern;
	   oper1=""
   console.log(operacion)
	
    suma1 = sumando2 + sumando1;
	 console.log( sumando2 + " + "+sumando1+ " = " + suma1) 
	 suma1$=String(suma1)
	  document.getElementById("display").innerHTML =(suma1$.slice(0,8)); 	 
	 ans = suma1;
	 sumando1=ans;
	  
	  
	  console.log( "ans = "+ans);
	  break;
	  
	  case "-":
	  console.log(minuendo)
	   sustraendo = opern;
	  oper1=""
   console.log(operacion)
   
   
    cociente = minuendo - sustraendo;
	 console.log( minuendo + " - " + sustraendo +" = "+cociente)
	 cociente$=String(cociente)
	document.getElementById("display").innerHTML =(cociente$.slice(0,8)); 	 
	 
	  cont=cont + 1
	  minuendo=cociente
	  ans = cociente
	  
	  
	  console.log("tecla igual: respuesta almacenada =" + ans);
	  //opern=0
	  break;
	  
	   case "*":
	  
	   console.log("factor1 = " + factor1)
	   console.log(operacion)
   
		factor2 = opern;
		prod1 = factor1*factor2;
	 console.log( factor1 + " multiplicado x " + factor2 + " = " + prod1)
	 factor1=prod1;
	 displayMulti();
	 ans=prod1
	  break;
	  
		  
	   case "/":
	  divisor=opern;
	   console.log("divisor =  " + divisor)
   
	   //oper1=""
   console.log(operacion)
   
    cociente1 = dividendo/divisor;
	 console.log( dividendo + "dividido entre " + divisor  + " = " + cociente1)
	 cociente1$=String(cociente1)
	 
	  document.getElementById("display").innerHTML =(cociente1$.slice(0,8)); 
	
		 
	  dividendo=cociente1;
	  ans = cociente1;
	  
	  //divisor=1
	  //opern=1
	  
	  break;
	 
   }
    cont3=0
	cont=1
}
function cambio_signo(){
	var tecla1 = document.getElementById("sign")
  
   tecla1.style.padding="4px";
   tecla1.style.transition="linear 0.2s";
    tecla1.style.delay="2s";
   tecla1.addEventListener("mouseout",agrandar);
   function agrandar(){
	   tecla1.style.padding="0"
	   tecla1.style.transition="linear 0.4s";
	    
	
}
x = document.getElementById("display").innerText;
	    console.log(x);
		numero=Number(x)
		cambio_sig=String((-1)*numero);
		 document.getElementById("display").innerHTML =cambio_sig;
			
	ans = numero*(-1)
	//suma1 = numero*(-1)
	console.log("answer = "+ans+"suma1 = "+suma1);
}
function pulso(ordc1){
	 idt=document.getElementsByClassName("tecla")[ordc1].id;
 var tecla1 = document.getElementById(idt)
  
   tecla1.style.padding="4px";
   tecla1.style.transition="linear 0.2s";
    tecla1.style.delay="2s";
   tecla1.addEventListener("mouseout",agrandar);
   function agrandar(){
	   tecla1.style.padding="0"
	   tecla1.style.transition="linear 0.4s";
	  
   }
}
function displayMulti(){
		prod1$=String(prod1);
		if(prod1>99999999){
			prod1$=prod1.toExponential();
		}
		
	 
	 
	 if((prod1$.length)>8){
		 start$=prod1$.slice(0,4)
		 end$=prod1$.slice(-4)
		 prod1$=start$+" "+end$
	 }
	 
	  
	 
	  document.getElementById("display").innerHTML =prod1$; 
	  suma1=prod1;
	  ans = prod1;
	  //prod1 = 1
	  //opern=0;
		}