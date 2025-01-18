$('#loading').html(`
<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" style="margin-top:15px" fill="#b4dd1e">
    <circle cx="15" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate attributeName="r" from="9" to="9"
                 begin="0s" dur="0.8s"
                 values="9;15;9" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                 begin="0s" dur="0.8s"
                 values=".5;1;.5" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
    <circle cx="105" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
                 begin="0s" dur="0.8s"
                 values="15;9;15" calcMode="linear"
                 repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
                 begin="0s" dur="0.8s"
                 values="1;.5;1" calcMode="linear"
                 repeatCount="indefinite" />
    </circle>
</svg>`);


$('#loadUsers').click(async () => {
    let usuarios;
    
    //Lo puse aquí para que empiece autómaticamente
    $('#loading').css({'display' : 'block'})

    usuarios = await $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET'
    });

    setTimeout(() => {
        if(usuarios) {
            $('#loading').css({'display' : 'none'});
        }
        
        usuarios.forEach(usuario => {
            $('<tr>').append(
                $('<td>').html(usuario.name),
                $('<td>').html(usuario.email)
            ).appendTo('#usersTable tbody');
        });
    }, 2000)
})













































































// if (estaCargando) {
//     $('#loading').css({
//       "display":"block"
//     })
//     //añadimos un svg de un spinner (obtenido de un github)
//     $('#loading').html()
//   }
//   setTimeout(() => {
//     estaCargando=false;
//     if(!estaCargando){
//       $('#loading').css({
//         "display":"none"
//       })
//     }
//     let tbody=$('tbody');
//     respuesta.forEach(user => {
//       tbody.append(`<tr><td>${user.name}</td><td>${user.email}</td></tr>`);
//     });
//   }, 3000);