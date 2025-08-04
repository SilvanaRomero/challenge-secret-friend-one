// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
friendList = [];

function friendAdd(){
    
    let friend = document.getElementById('friend').value.trim();
    console.log(friend);

    // Verificar que no ingrese una cadena vacia

    if ( (friend === '') || ( !isNaN(friend))){

        // Si ingresa una cadena vacia vuelve a pedir el nombre

        alert("Nombre incorrecto. Por favor, ingrese el nombre de un amigo: ");

    } else {

        friendList.push(friend);
        cleanDisplay();
        printFriends(document.getElementById('friend-list'));

    }

}

function cleanDisplay(){
    document.querySelector('#friend').value = ''; // Uso el querySelector por Id con #
}

// funcion para mostrar los nombres en la lista arriba del boton sorteo
function printFriends(element){
    /* Recibe un elemento del DOM html, lo limpia y recorre la lista de amigos, por cada amigo
    se agrega un elemento <li> */

    element.innerHTML = "";
    for (let i = 0; i < friendList.length; i++){

        let li = document.createElement("li");
        li.textContent = friendList[i];
        element.appendChild(li);
    }
}
