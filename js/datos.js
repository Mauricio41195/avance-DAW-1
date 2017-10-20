function datos(){
    //variables
    var btncomentar = document.getElementById("comentar");
    var contenedor = document.getElementById("contenedor");
    var arraysugerencias = {};
    
    recuperardatos();
    
    
    
    //funcion para recuperar los datos del local storage
    function recuperardatos(){
        if(localStorage.getItem("sugerencia")){
            arraysugerencias.length = 0;// vacia el array
            arraysugerencias = JSON.parse(localStorage.getItem("sugerencia"));
            mostrarDatos();
        }
        else{
         contenedor.insertAdjacentHTML("afterbegin", "<h2 class=\"text-muted text-center\">Aún no existen comentarios</h2>")
        };
    }
    
    
    //muestra los comentarios realizados
    function mostrarDatos(){
        
        for(i = 0; i<arraysugerencias.length; i++){
            contenedor.insertAdjacentHTML("afterbegin","<div name=\"comentarios\" class=\"card card-outline-info\" ><div class=\"card-header  text-white card-info\"></div><div class=\"card-block \"></div></div></br>")
        }
        
        var comentarios = document.getElementsByName("comentarios");
        
        for(i = 0; i<arraysugerencias.length; i++){
            comentarios[i].firstChild.innerHTML = arraysugerencias[i].nombre+" "+arraysugerencias[i].correo+" "+arraysugerencias[i].pais;
            comentarios[i].lastChild.innerHTML = arraysugerencias[i].comentario;
        }
        
    }

    btncomentar.addEventListener("click",function(){window.location.href = "index.html"})


}
window.onload = datos;