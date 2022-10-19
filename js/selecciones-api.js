// Obtenemos los datos de la api 
fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(json => {
        //prueba de imprimir lo recibido, para revisar como estar ordenados
        //console.log(json.results) 

        // Llama a la funcion que va a insetar el html, y les pasa los datos recibidos
        printJugadores(json.results);
    });

// Inserta todos los jugadores insertando un HTML dentro del #container (container se inserta en "jugadores")
function printJugadores(personajes) {

    //Selecciona donde insertar las cards
    const container = document.querySelector('.jugadores')

    //Para cada elemento (personaje) del array (personajes)
    personajes.forEach(personaje => {
        //muestro x consola datos, estos son los datos que extraigo del json para usar en las cards
        // console.log(personaje.name)
        // console.log(personaje.image)
        // console.log(personaje.name.length)
        // console.log(personaje.location.name)
        // console.log(personaje.status)
        // console.log(personaje.id)

        container.innerHTML = `
    ${container.innerHTML}
    <div class="jugador">
    <img src="${personaje.image}" alt="foto de ${personaje.name}" class="jugador-foto">
       <div class="jugador-texto">
            <h3>${personaje.name}</h3>
            <p>camiseta: ${personaje.name.length}</p>
            <p>equipo: ${personaje.location.name}</p>
            <p>posición: ${personaje.status}</p>
            <p>altura: ${personaje.id}</p>
        </div>
    </div>
    `;
    });
}


// Actualizar Cards, primero eliminar las cards con la función eliminarCard, y luego insertara as correspondientes
function actualizaCard(pagina) {
    //  eliminarCard(); todavía no funciona
    console.log(pagina);
    console.log("https://rickandmortyapi.com/api/character/?page=2");
    console.log(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
    
        fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
            .then(response => response.json())
            .then(json => {
            printJugadores(json.results);
            });
    }
    