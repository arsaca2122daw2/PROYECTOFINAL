window.onload = function() {

    let socket = io()
    let teclaAnterior;

    window.addEventListener("keydown", (event) =>{
        if(teclaAnterior != event.keyCode){
            movimentKeyMotor(event.keyCode)
        }
        teclaAnterior = event.keyCode
        console.log("teclaanterior"+teclaAnterior)
        console.log("keyCode"+event.keyCode)
    })

    window.addEventListener("keyup", (event) =>{
        apagarLuces();
        defaultTeclas();
        tituloBODYapagar()
        tituloHEADapagar()
        socket.emit("keyUp")
        teclaAnterior = 0
    })

    function movimentKeyMotor(keyCode){
        if(keyCode == 87){// key w
            console.log("Cliente pulsa W")
            defaultTeclas();
            tituloBODYencender()
            document.getElementById("luzW").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraW").style.border="none";
            document.getElementById("letraW").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor11").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 83){ //Key s
            console.log("Cliente pulsa S")
            defaultTeclas();
            tituloBODYencender()
            document.getElementById("luzS").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraS").style.border="none";
            document.getElementById("letraS").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor12").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 81){ //Key q
            console.log("Cliente pulsa Q")
            defaultTeclas();
            tituloHEADencender()
            document.getElementById("luzQ").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraQ").style.border="none";
            document.getElementById("letraQ").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor21").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 69){ //Key e
            console.log("Cliente pulsa E")
            defaultTeclas();
            tituloHEADencender()
            document.getElementById("luzE").src="../static/imgs/luzVerdeOn.png";
            document.getElementById("letraE").style.border="none";
            document.getElementById("letraE").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderMotor22").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 65){ //Key a
            console.log("Cliente pulsa A")
            defaultTeclas();
            document.getElementById("flechaIzq").src="../static/imgs/flechasON.png";
            document.getElementById("letraA").style.border="none";
            document.getElementById("letraA").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = 15
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 68){//Key d
            console.log("Cliente pulsa D")
            defaultTeclas();
            document.getElementById("flechaDer").src="../static/imgs/flechasON.png";
            document.getElementById("letraD").style.border="none";
            document.getElementById("letraD").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = 15
            socket.emit("enviarKeyCode", keyCode, potencia)
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

    function tituloHEADencender(){
        document.getElementById("motor2Titulo").style.opacity="1";
    }

    function tituloBODYencender(){
        document.getElementById("motor1Titulo").style.opacity="1";
    }

    function tituloHEADapagar(){
        document.getElementById("motor2Titulo").style.opacity="0.8";
    }

    function tituloBODYapagar(){
        document.getElementById("motor1Titulo").style.opacity="0.8";
    }

};



