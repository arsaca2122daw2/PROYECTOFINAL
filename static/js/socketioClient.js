window.onload = function() {

    let instantaneas = 1
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
        defaultTeclas();
        socket.emit("keyUp")
        teclaAnterior = 0
    })

    function movimentKeyMotor(keyCode){
        if(keyCode == 87){// key w
            console.log("Cliente pulsa W")
            defaultTeclas();
            document.getElementById("letraW").style.border="none";
            document.getElementById("letraW").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderPotencia").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 83){ //Key s
            console.log("Cliente pulsa S")
            defaultTeclas();
            document.getElementById("letraS").style.border="none";
            document.getElementById("letraS").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderPotencia").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 81){ //Key q
            console.log("Cliente pulsa Q")
            defaultTeclas();
            document.getElementById("letraQ").style.border="none";
            document.getElementById("letraQ").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderPotencia").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 69){ //Key e
            console.log("Cliente pulsa E")
            defaultTeclas();
            document.getElementById("letraE").style.border="none";
            document.getElementById("letraE").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = document.getElementById("sliderPotencia").value;
            socket.emit("enviarKeyCode", keyCode, potencia)
        }
        else if(keyCode == 65){ //Key a
            console.log("Cliente pulsa A");
            defaultTeclas();
            document.getElementById("letraA").style.border="none";
            document.getElementById("letraA").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = 15;
            socket.emit("enviarKeyCode", keyCode, potencia);
        }
        else if(keyCode == 68){//Key d
            console.log("Cliente pulsa D");
            defaultTeclas();
            document.getElementById("letraD").style.border="none";
            document.getElementById("letraD").style.backgroundColor="rgb(131, 131, 131)";
            let potencia = 15;
            socket.emit("enviarKeyCode", keyCode, potencia);
        }
        else if(keyCode == 70){//key f
            console.log("Cliente pulsa F");
            let frame = document.getElementById("bg");
            let tamany = document.getElementById("img1")
            let datURL = getDataUrl(frame,tamany );
            console.log(datURL)

            let nombreFoto = new Date().toString()
            nombreFoto = nombreFoto + '.png'

            let url = document.createElement('a');
            url.download = nombreFoto;
            url.href = datURL;
            url.click();
            
            let potencia = 15;
            socket.emit("enviarKeyCode", keyCode, potencia);
            
            document.getElementById("letraF").style.border="none";
            document.getElementById("letraF").style.backgroundColor="rgb(131, 131, 131)";

            let imgDOM = "img" + instantaneas;
            console.log(imgDOM);
            document.getElementById(imgDOM).src = datURL;

            console.log(instantaneas);

            if(instantaneas != 9)instantaneas++;
            else instantaneas=1;
            
        }
        else{

        }
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

        document.getElementById("letraF").style.borderRight="2px rgb(87, 87, 87) solid";
        document.getElementById("letraF").style.borderBottom="2px rgb(87, 87, 87) solid";
        document.getElementById("letraF").style.backgroundColor="rgb(182, 182, 182)";
    }

    function getDataUrl(img, tamany) {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = tamany.width + 100;
        canvas.height = tamany.height + 100;
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/jpg');
     }

};



