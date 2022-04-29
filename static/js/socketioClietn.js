window.onload = function() {

    let socket = io()

    window.addEventListener("keydown", (event) =>{
        movimentKeyMotor(event.keyCode)
    })

    function movimentKeyMotor(keyCode){
        if(keyCode == 87){// key w
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 83){ //Key s
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 38){ //Flecha arriba
            socket.emit("enviarKeyCode", keyCode)
        }
        else if(keyCode == 40){ //Flecha abajo
            socket.emit("enviarKeyCode", keyCode)
        }
        else{

        }
    }
    
};



