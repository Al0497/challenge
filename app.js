
let amigos = [];
let amigosElegidos = [];

function agregarAmigo() {
    
    const agregarAmigo = document.getElementById('amigo');
    const nombreAmigo = agregarAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    amigos.push(nombreAmigo);
    agregarAmigo.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }
    
    if (amigosElegidos.length === amigos.length) {
        alert("Todos los nombres ya han sido elegidos. Reinicia el programa para empezar de nuevo.");
        return;
    }
    // Seleccionar un nombre aleatorio que no haya sido elegido
    let indiceAleatorio;
    let amigoSecreto;
    do {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSecreto = amigos[indiceAleatorio];
    } while (amigosElegidos.includes(amigoSecreto));

    amigosElegidos.push(amigoSecreto);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Función para reiniciar el programa
function reiniciarJuego() {
    amigos = []; 
    amigosElegidos = []; 
    document.getElementById('listaAmigos').innerHTML = ""; 
    document.getElementById('resultado').innerHTML = ""; 
    alert("El programa ha sido reiniciado. Puedes agregar nuevos nombres.");
}