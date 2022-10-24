const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')




let sumarInputValues = (event) => {
    event.preventDefault();
    const sumaInput = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerHTML = `Resultado: ${sumaInput}`
}


form.addEventListener('submit', sumarInputValues);
