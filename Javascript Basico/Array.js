var frutas = ["Manzana", "PEra", "Mango"];
//Push es para el final
var agregarFinal = frutas.push("UVas");
//pop es para eliminar el final
var eliminarFinal = frutas.pop("Uvas");
//Agregar al inicio
var agregarInicio = frutas.unshift("UVas");
//Eliminar al inicio
var inicio = frutas.shift("UVas");
//Saber cual es la posicion
var posicion = frutas.indexOf("PEra");


var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"Moto", costo: 5000},
    {nombre:"Carro", costo: 13000},
    {nombre:"PAtin", costo: 2000},
]
//Traer segun la condicion
var traerArticulos = articulos.filter(function(articulo){
    return articulo.costo <= 4000
});
//traer segun el nombre
var mapearArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
//Buscar
var EspecificoArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici"
});
