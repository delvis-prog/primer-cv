window.addEventListener("load" , function() {
    //evento click
    document.getElementById("btnEnvio").addEventListener("click" , function(){
        document.getElementById("mensaje").innerHTML = "Hello world!";
    });
    //EVENTO DBLICK
    document.getElementById("btnEnvio2").addEventListener("dblclick" , function(){
        document.getElementById("mensaje2").innerHTML = "Hello world!";
    });

    //Mouse over
    document.getElementById("btnEnvio3").addEventListener("mouseover" , function(){
        document.getElementById("mensaje3").innerHTML = "Hello world!";
    });

});