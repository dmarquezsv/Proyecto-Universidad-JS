window.onload = function(){

    comentario = document.getElementById("comentario");

    nombre = document.getElementById("nombre") ;
    comentar = document.getElementById("comentar");
    zona = document.getElementById("zone");
    contador=0;
    comentar.onclick = function(){

       
        if(contador==0){

    if(!(comentario.value == "") && !(nombre.value == "")){
        contador++;
        text='<ul id="comments-list" class="comments-list"><li><div class="comment-main-level"><div class="comment-avatar"><img src="img/comentario.png" alt=""></div><div class="comment-box"><div class="comment-head"><h6 class="comment-name by-author"><a href="">'+nombre.value+'</a></h6><span></span><i class="fa fa-reply"></i><i class="fa fa-heart"></i></div><div class="comment-content">'+ comentario.value+'</div></div></div></ul>';
        zona.innerHTML = text;
            comentario.value ="";
            nombre.value="";
           

    }else{
        if(nombre.value== ""){
            alert("Por favor ingrese su nombre y apellido");
            nombre.focus();
        }else{
            if(comentario.value == ""){
                alert("Por favor ingrese un comentario");
                comentario.focus();
            

            }
        
        }

    }
}else{
    if(contador>0){

        if(!(comentario.value == "") && !(nombre.value == "")){
            contador++;
            text='<ul id="comments-list" class="comments-list"><li><div class="comment-main-level"><div class="comment-avatar"><img src="img/comentario.png" alt=""></div><div class="comment-box"><div class="comment-head"><h6 class="comment-name by-author"><a href="">'+nombre.value+'</a></h6><span></span><i class="fa fa-reply"></i><i class="fa fa-heart"></i></div><div class="comment-content">'+ comentario.value+'</div></div></div></ul>';
              zona.innerHTML += text;
                comentario.value ="";
                nombre.value="";
                
    
        }else{
            if(nombre.value== ""){
                alert("Por favor ingrese su nombre y apellido");
                nombre.focus();
            }else{
                if(comentario.value == ""){
                    alert("Por favor ingrese un comentario");
                    comentario.focus();
                
    
                }
            
            }
    
        } 

}
}


        
    

    }





}