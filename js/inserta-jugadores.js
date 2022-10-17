//borra otros jugadores
var jugador = "";

// Recorre los datos y genera las card en "jugador"

    for (let i = 0; i < data.length; i++) {
    jugador += `
        <div class="jugador">
            <img src="${data[i].imagen}" alt="foto de ${data[i].nombre}" class="jugador-foto">
            <div class="jugador-texto">
                <h3>${data[i].nombre}</h3>
                <p>camiseta: ${data[i].camiseta}</p>
                <p>equipo: ${data[i].equipo}</p>
                <p>posición: ${data[i].posicion}</p>
                <p>altura: ${data[i].altura}</p>
            </div>
        </div>
       `
};

// Inserta "jugador" en el contenedor "jugadores"

// console.log(jugador); --- Muestra x consola las cards
// console.log(document.querySelector(".jugadores")); --- Muestra x consola donde va a insertar 
document.querySelector(".jugadores").innerHTML = jugador;
