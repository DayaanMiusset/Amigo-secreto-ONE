// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // Eliminar espacios extras

    // Expresión regular para validar que solo se acepten letras y espacios
    const esNombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    // Validación del input
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        inputAmigo.value = ""; // Limpia el campo
        return; // Salimos de la función
    }

    if (!esNombreValido.test(nombre)) {
        alert("Error: Solo se permiten letras y espacios. Por favor, ingresa un nombre válido.");
        inputAmigo.value = ""; // Limpia el campo
        return; // Salimos de la función
    }

    // Si pasa las validaciones, lo agregamos al array
    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpiamos el input después de añadir
}


// Detectar la tecla "Enter" en el input
document.getElementById("amigo").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función para actualizar la lista en el DOM
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos la lista

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "x"; // Más sutil
        botonEliminar.classList.add("boton-eliminar"); // Añadimos una clase para estilizarlo
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminamos el amigo del array
    actualizarLista(); // Actualizamos la lista en el DOM
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const amigoGanador = amigos[indiceGanador];

    // Mostramos el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoGanador}</strong>! 🎉</li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Limpiamos el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiamos la lista
    document.getElementById("resultado").innerHTML = ""; // Limpiamos el resultado
}


