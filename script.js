
boton = document.querySelector(".boton")
contenedor = document.querySelector(".contenedor")

URL = "https://practica-g393.onrender.com/"





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