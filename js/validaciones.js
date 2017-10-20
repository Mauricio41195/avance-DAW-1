function init() {
    
    var datos = document.getElementsByName("datos");
    var divinput = document.getElementsByName("divinput");
    var btnComent = document.getElementById("ver");
    
    var arraysugerencias = [];
    var re1 = new RegExp(/\w+@\w+\.+[a-z]/);
    var re2 = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/);
		
    //guarda los valores en el objeto sugerencia, en arraysugerencia y en localStorage
    function guardar() {
        var sugerencia = {};
        //guarda los datos en el objeto sugerencia
        sugerencia.nombre = datos[0].value;
        sugerencia.correo = datos[1].value;
        sugerencia.pais = datos[2].value;
        sugerencia.comentario = datos[3].value;
        //recupera los datos del localStorage para añadir los nuevos 
        if(localStorage.getItem("sugerencia")){//verifica si existe el dato en el localStorage
            arraysugerencias = JSON.parse(localStorage.getItem("sugerencia"));  
        }
        //guarda el objeto sujerencia en el arreglo arraysugerencia
        arraysugerencias.push(sugerencia);
        //guarda el arreglo en el dataStorage
        localStorage.setItem("sugerencia", JSON.stringify(arraysugerencias));
    }
    
    
    
    document.getElementById('login').onclick = function (e) {

        var campoVacio = false;
        
        
        
        //elimina los mensajes de errores antes de volver a validar   
        for (i = 0; i < datos.length; i++) {
            datos[i].style.borderColor = "rgba(0,0,0,.15)";
            if(divinput[i].children[2]){
                divinput[i].removeChild(divinput[i].children[2]);    
            }    
        }
        
        //valida que los campos no esten vacios
        for (i = 0; i < datos.length; i++) {
            if(datos[i].value == "") {
                datos[i].style.borderColor = "red";
                divinput[i].insertAdjacentHTML("beforeend","<p class=\"text-danger\">este campo no puede estar vacio</p>");
                datos[i].focus();
                e.preventDefault();
                campoVacio = true;
            }
        }
        //valida mediante expresion regular que el texto cumpla el formato
        if(!campoVacio) {
            if (!re1.test(datos[1].value)) {
				divinput[1].insertAdjacentHTML("beforeend","<p class=\"text-danger\">porfavor ingrese un correo que sea valido\nEjemplo: juan@mail.com</p>");
                datos[1].style.borderColor = "red";
				datos[1].focus();
				e.preventDefault();
			 }
			 if (!re2.test(datos[0].value)) {
				divinput[0].insertAdjacentHTML("beforeend","<p class=\"text-danger\">porfavor ingrese un nombre valido (solo letras e inicial en mayusculas)</p>")
                datos[0].style.borderColor = "red";
				datos[0].focus();
				e.preventDefault();
			 }
			 else if( re1.test(datos[1].value) && re2.test(datos[0].value)){
                guardar();
			 }   
        }
    }
    
    btnComent.addEventListener("click",function(){window.location.href = "comentarios.html"})
       
}
		
window.onload = init