// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
friendList = [];

function friendAdd(){
    
    let friend = document.getElementById('friend').value.trim();
    console.log(friend);

    // Verificar que no ingrese una cadena vacia

    if ( (friend === '') || ( isNaN(friend))){

        // Si ingresa una cadena vacia vuelve a pedir el nombre

        document.getElementById('friend').placeholder = "Nombre incorrecto. Por favor, ingrese el nombre de un amigo: ";

    } else {

        friendList.push(friend);
        cleanDisplay();

    }

}

function cleanDisplay(){
    document.querySelector('#friend').value = ''; // Uso el querySelector por Id con #
}

