fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(usuario =>{
    const container = document.querySelector("#container")
    const usuarios = usuario.slice(0)
    const user = usuarios.map(item => {
        return `
         <div class="users">
           <img src="https://placehold.co/600x400" alt=${item.title}/>
           <h2>${item.name}</h2>
           <p><strong> Username:</strong> ${item.username}
           <p><strong> Email:</strong> ${item.email}
           <p><strong> Telefone:</strong> ${item.phone}
           <p><strong> Website:</strong> ${item.website}
           <p><strong> Empresa:</strong> ${item.company.name}
           <p><strong> Endereço:</strong> ${item.address.street}, ${item.address.suite}, ${item.address.city}

         </div>
        `
    })

    container.innerHTML = user.join("")
})