
boton = document.querySelector(".boton")
contenedor = document.querySelector(".contenedor")
formulario = document.querySelector(".formulario")
botonForm = document.querySelector(".botonForm")
body = document.querySelector(".body")


inputBorrar = document.querySelector(".inputBorrar")
botonBorrar = document.querySelector(".botonBorrar")


URL = "https://practica-1-pj9w.onrender.com/"





boton.addEventListener("click", ()=>{
    contenedor.style.display = "flex"
    contenedor.innerHTML = ""
    fetch(URL)
    .then(res => res.json())
    .then(data => {
         console.log(data)
         data.forEach((i) => {
            const nombreProducto = document.createElement("div")
            const precioProducto = document.createElement("div")

            nombreProducto.textContent = `Nombre: ${i.nombre}`
            precioProducto.textContent = `Precio: $${i.precio}`

            nombreProducto.classList.add("contenido-respuesta")
            precioProducto.classList.add("contenido-respuesta")

            const items = document.createElement("div")
            items.classList.add("items")

            items.appendChild(nombreProducto)
            items.appendChild(precioProducto)


            contenedor.appendChild(items)
            
         });

    })
    .catch(error => {
        contenedor.style.display = "flex"
        contenedor.innerHTML = ""
        console.log(error)
        const mensaje = document.createElement("div")
        mensaje.textContent = `Parece que ha ocurrido el error: ${error}`
        contenedor.appendChild(mensaje)
    })





})







formulario.addEventListener("submit", function(event){
    event.preventDefault()

    


    let nombre = document.querySelector(".nombreProducto").value
    let precio = document.querySelector(".precioProducto").value
    precio= parseInt(precio)///lo convierto en int(viene como text)
    let stock = document.querySelector(".stockProducto").value
    stock = parseInt(stock)


    fetch("https://practica-1-pj9w.onrender.com/ingresar", {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },

        body: JSON.stringify({ nombre, precio, stock }),

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("Producto agregado exitosamente")
    })
    .catch(error =>{
        console.log(error);
        alert(`parece que ha ocurrido un error: ${error}`)
        
    })
})



///Hacer evento de escucha para borrar producto

botonBorrar.addEventListener("click", ()=>{
    id = inputBorrar.value
    id = parseInt(id)
    fetch("https://practica-1-pj9w.onrender.com/borrar", {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },

        body: JSON.stringify({id}),

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert(data)
    })
    

})



