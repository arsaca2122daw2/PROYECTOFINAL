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
            document.getElementById("letraW").style.border="none";
            document.getElementById("letraW").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor11").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 83){ //Key s
            console.log("Cliente pulsa S")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzS").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraS").style.border="none";
            document.getElementById("letraS").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor12").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 81){ //Key q
            console.log("Cliente pulsa Q")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzQ").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraQ").style.border="none";
            document.getElementById("letraQ").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor21").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 69){ //Key e
            console.log("Cliente pulsa E")
            apagarLuces();
            defaultTeclas();
            document.getElementById("luzE").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraE").style.border="none";
            document.getElementById("letraE").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor22").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 65){
            console.log("Cliente pulsa A")
            apagarLuces();
            defaultTeclas();
            document.getElementById("flechaIzq").src="../static/imgs/flechasON.png";
            document.getElementById("letraA").style.border="none";
            document.getElementById("letraA").style.backgroundColor="rgb(131, 131, 131)";
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 68){
            console.log("Cliente pulsa D")
            apagarLuces();
            defaultTeclas();
            document.getElementById("flechaDer").src="../static/imgs/flechasON.png";
            document.getElementById("letraD").style.border="none";
            document.getElementById("letraD").style.backgroundColor="rgb(131, 131, 131)";
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
        document.getElementById("flechaIzq").src="../static/imgs/flechasOff.png";
        document.getElementById("flechaDer").src="../static/imgs/flechasOff.png";
    }

    function defaultTeclas(){
        document.getElementById("letraW").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraW").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraW").style.backgroundColor="rgb(182, 182, 182)";

        document.getElementById("letraS").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraS").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraS").style.backgroundColor="rgb(182, 182, 182)";

        document.getElementById("letraD").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraD").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraD").style.backgroundColor="rgb(182, 182, 182)";

        document.getElementById("letraA").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraA").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraA").style.backgroundColor="rgb(182, 182, 182)";

        document.getElementById("letraE").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraE").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraE").style.backgroundColor="rgb(182, 182, 182)";

        document.getElementById("letraQ").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraQ").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraQ").style.backgroundColor="rgb(182, 182, 182)";

    }

};



