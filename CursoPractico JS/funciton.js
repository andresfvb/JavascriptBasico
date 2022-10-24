const  h1 = document.querySelector('h1')
const  p = document.querySelector('p')
const  parrafo = document.querySelector('.parrafo')
const  parrafo_id= document.querySelector('#parrafo_id')
const  input = document.querySelector('input')

console.log(input.value);
console.log({
    h1,
    p,
    parrafo,
    parrafo_id,
    input
})

h1.innerHTML = "Texto cambio"
h1.setAttribute('class', 'rojo');
h1.setAttribute('style', 'color:green')
h1.classList.add('Hola')

//crear HTML
const img = document.createElement("img");
img.setAttribute('src', 'https://www.heromotocorp.com/en-mm/uploads/bike/360/glamour-2.jpg')
parrafo_id.append(img)

