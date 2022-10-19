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
// ${container.innerHTML}
        container.innerHTML += `
    
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
//  eliminarCard();
console.log(pagina);
console.log("https://rickandmortyapi.com/api/character/?page=2");
console.log(`https://rickandmortyapi.com/api/character/?page=${pagina}`);

    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        .then(response => response.json())
        .then(json => {
        printJugadores(json.results);
        });
}


function mostrar(){
    var juga = document.querySelectorAll(".jugador");
    console.log(juga);
    var x = document.getElementsByClassName("jugador")
    console.log(x);
}


function eliminarCard(){
    var cards = document.querySelectorAll(".jugador");
    console.log(cards);
    for (const item of cards) {
        cards.remove(item);
    }

}
function eliminador() {
    var x = document.getElementsByClassName("jugador")
    console.log(x);
    for (i = 0; i < x.length; i++) {
        console.log(x.length)
        console.log(x[i]);
        console.log(i);
        x[i].remove();
    }
}

function eliminador2() {
        var x = document.getElementsByClassName("jugador")
        console.log(x);
        for (const i in x) {
            if (Object.hasOwnProperty.call(x, i)) {
                const element = x[i];
                console.log(x.length)
                console.log(x[i]);
                console.log(i);
              x[i].remove();
            }
        }
}

function eliminador3() {
    var x = document.getElementsByClassName("jugador")
    console.log(x);
    for (const i of x) {
        console.log(x.length)
        console.log(x[i]);
        console.log(i);
        x[i].remove();
    }
}

function eliminarElemento(){
	hijo = document.getElementsByClassName("jugador");
    console.log(jugador);
	if (!hijo){
		alert("El elemento selecionado no existe");
	} else {
		padre = hijo.parentNode;
		padre.removeChild(hijo);
	}
}

function eliminador4() {
    var x = document.getElementsByClassName("jugadores");
    var y =""
    console.log(x);
    x.innerHTML=y;
}

function eliminar5(){
	var hijo = document.getElementsByClassName("jugador");
    var padre = hijo.parentNode;
    // hijo.parentNode.removeChild(hijo);
    console.log(hijo);
    console.log(padre);
    padre.removeChild(hijo[0]);
    // for (var i=0; i<hijo.length; i++){
	// 	padre.removeChild(hijo);
    // }}
}
    // var parrafo = document.getElementById("provisional");
    // hijo.parentNode.removeChild(hijo);