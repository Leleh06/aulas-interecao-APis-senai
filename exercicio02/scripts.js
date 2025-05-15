fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(usuario =>{
    const container = document.querySelector("#container")
    const user = primeiros10.map(item => {
        return `
         <div class="card">
           <img src="https://placehold.co/600x400" alt=${item.title}/>
           <h2>${item.title}</h2>
         </div>
        `
    })
})