const listaUsuarios = async () => { //indica la funcion asincronica
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users"); //await de espera de la sincronizacion
    const users=await respuesta.json(); //convierto la respuesta a json
    
    let tablaBody = ``;
    users.forEach((user, index) => {
        tablaBody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        </tr>`;
    });
    //document.getElementById("tablaBody_Usuarios").innerHTML = tablaBody; //obtiene el elemnto por id y le pone el contenido html
    tablaBody_Usuarios.innerHTML = tablaBody;
};

window.addEventListener("load",function(){ //evento de carga
    listaUsuarios();
})