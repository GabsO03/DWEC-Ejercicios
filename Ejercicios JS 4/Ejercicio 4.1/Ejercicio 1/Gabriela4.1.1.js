import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.0/dist/esm/axios.min.js';
let usuariosFetch = [];
let usuariosAxios = [];


//Lo hago con priomesa para practicar su uso y no hacerlo todo dentro el .then

async function fetchUsuarios() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((json) => {
            resolve(json)
        })
        .catch ((error) => reject(error))
    });
}

async function axiosUsuarios() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
}

usuariosFetch = fetchUsuarios();
usuariosAxios = axiosUsuarios();

window.addEventListener('load', () => {
    usuariosFetch
    .then((usuarios) =>{
        usuarios.forEach(usuario => {
            pintarUsuario('userTableFetch', usuario, 'fetch');
        });
    })
    usuariosAxios
    .then((usuarios) =>{
        usuarios.forEach(usuario => {
            pintarUsuario('userTableAxios', usuario, 'axios');
        });
    })

    const userForm = document.getElementById('userForm');
    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name =  document.getElementById('name').value;
        const email =  document.getElementById('email').value;

        aniadirUsuario(name, email);
    })
})

function pintarUsuario(userTableId, usuario, table) {
    const userTable = document.getElementById(userTableId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${usuario.id}</th>
        <th>${usuario.name}</th>
        <th>${usuario.email}</th>
        <th>
            <button id="${usuario.id}delete${table}">Eliminar</button>
            <button id="${usuario.id}detail${table}">Detalles</button>
        </th>
    `;
    //Esto lo saqué del mdn Document.querySelectorAll()
    const tbody =  userTable.querySelector('tbody');
    tbody.appendChild(tr);
    const botonEliminar = document.getElementById(usuario.id + 'delete' + table);
    botonEliminar.addEventListener('click', () => {
        console.log('https://jsonplaceholder.typicode.com/users/' + usuario.id);
        Swal.fire({
            title: `¿Seguro de eliminar a ${usuario.name}?`,
            text: 'Comprueba en la consola para ver los cambios',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, bórralo",
            cancelButtonText: "Cancelar"
        }).then((result) => {

        if (result.isConfirmed) {

            switch (table) {
                case 'fetch':
                    fetch('https://jsonplaceholder.typicode.com/users/' + usuario.id, {
                        method: 'DELETE',
                    });
                    break;
                case 'axios':
                    axios.delete('https://jsonplaceholder.typicode.com/users/' + usuario.id)
                    break;
            
                default:
                    break;
            }

            Swal.fire({
                title: "Eliminado",
                text: 'Cuando se borra, sigue saliendo su nombre pero si intentras entrar a su enlace ya no lo encuentra',
                icon: "success"
            });
        }
        });
    });

    const botonDetalles = document.getElementById(usuario.id + 'detail' + table);
    botonDetalles.addEventListener('click', () => {
        Swal.fire({
            icon: "info",
            title: "Detalles " + usuario.name,
            html: `<strong>Nombre:</strong> ${usuario.name}<br><strong>Username:</strong> ${usuario.username}<br><strong>Email:</strong> ${usuario.email}<br><strong>Dirección:</strong> ${usuario.address.street} ${usuario.address.suite} ${usuario.address.city}<br><strong>Telefono:</strong> ${usuario.phone}<br><strong>Website:</strong> ${usuario.website}`
        });
    });
}

function aniadirUsuario(name, email) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            id: 2,
            name: name,
            username: name + 'username',
            email: email,
            address: {
              street: "Victor Plains",
              suite: "Suite 879",
              city: "Wisokyburgh",
              zipcode: 90566-7771,
              geo: {
                lat: -43.9509,
                lng: -34.4618
              }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
              name: "Deckow-Crist",
              catchPhrase: "Proactive didactic contingency",
              bs: "synergize scalable supply-chains"
            }
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}