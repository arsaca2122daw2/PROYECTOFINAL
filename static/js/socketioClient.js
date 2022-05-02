window.onload = function() {

    let socket = io()

    window.addEventListener("keydown", (event) =>{
        movimentKeyMotor(event.keyCode)
    })

    window.addEventListener("keyup", (event) =>{
        apagarLuces();
        defaultTeclas();
        socket.emit("keyUp")
    })

    function movimentKeyMotor(keyCode){
        if(keyCode == 87){// key w
            console.log("Cliente pulsa W")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzW").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraW").style.backgroundColor="yellow";
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 83){ //Key s
            console.log("Cliente pulsa S")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzS").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraS").style.backgroundColor="yellow";
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 81){ //Key q
            console.log("Cliente pulsa Q")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzQ").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraQ").style.backgroundColor="yellow";
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 69){ //Key e
            console.log("Cliente pulsa E")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzE").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraE").style.backgroundColor="yellow";
            socket.emit("enviarKeyCode", keyCode)
        }
        else{

        }
    }
    
    function apagarLuces(){
        document.getElementById("luzW").src="../static/imgs/luzVerdeOff.png";
        document.getElementById("luzQ").src="../static/imgs/luzVerdeOff.png";
        document.getElementById("luzE").src="../static/imgs/luzVerdeOff.png";
        document.getElementById("luzS").src="../static/imgs/luzVerdeOff.png";
    }

    function defaultTeclas(){
        document.getElementById("letraW").style.backgroundColor="white";
        document.getElementById("letraS").style.backgroundColor="white";
        document.getElementById("letraE").style.backgroundColor="white";
        document.getElementById("letraQ").style.backgroundColor="white";

    }
};



