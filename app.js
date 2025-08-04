// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
friendList = [];

function friendAdd(){
    
    let friend = document.getElementById('friend').value.trim();

    // Verificar que no ingrese una cadena vacia o numero

    if ( (friend === '') || ( !isNaN(friend))){

        // Si ingresa una cadena vacia vuelve a pedir el nombre

        alert("Nombre incorrecto. Por favor, ingrese el nombre:");
        cleanDisplay();
        document.getElementById('friend').focus(); // Pone el cursor de forma automatica para escribir
        

    } else {

        friendList.push(friend);
        cleanDisplay();
        updateFriendList(document.getElementById('friend-list'));
        document.getElementById('friend').focus(); // Pone el cursor de forma automatica para escribir

    }

}

function cleanDisplay(){
    document.querySelector('#friend').value = ''; // Uso el querySelector por Id con #
}

// funcion para mostrar los nombres en la lista arriba del boton sorteo
function updateFriendList(element){
    /* Recibe un elemento del DOM html, lo limpia y recorre la lista de amigos, por cada amigo
    se agrega un elemento <li> */

    element.innerHTML = "";
    for (let i = 0; i < friendList.length; i++){

        let li = document.createElement("li");
        li.textContent = friendList[i];
        element.appendChild(li);
    }
}


function raffleFriend(){
    /* Recibir por parametro la lista de amigos
    y elegir un amigo al azar */

    if (friendList.length === 0){

        alert("No hay amigos para sortear");
    } else {

    let position = Math.floor( Math.random() * friendList.length);
    let selectedFriend = friendList[position];
    console.log(document.getElementById('result'));
    document.getElementById('friend-list').innerHTML = '';
    document.getElementById("result").innerHTML =`<li> Amigo sorteado es: ${selectedFriend}</li>`
    
    }
}
