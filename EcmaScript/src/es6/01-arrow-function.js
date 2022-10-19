function square(num){
    return num * num;
}
//Ya no es necesario usar la palabra function, ya que con la funcion flecha nos ahorramos esa parte
const square = (num) => {
    return num * num;
}
//Si estamos manejando solo un elemento podemos manejar de esta manera la funcion
const square = num => num * num;