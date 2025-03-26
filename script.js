const resultado = document.getElementById("pantalla");
let primerNumero = 0;
let segundoNumero = 0;
let operacion;

const guardarNumero = (num) => {
    if (operacion) {
        segundoNumero += num;
    } else {
        primerNumero += num;
    }
    
    resultado.value += num;
}

const guardarOperacion = (valor) => 
{

    switch(valor)
    {
        case 1: operacion = '+'; break;
        case 2: operacion = '-'; break;
        case 3: operacion = '*'; break;
        case 4:  operacion = '/'; break;
    }
    resultado.value += operacion;

}

const resolver = () => {
    let resul = 0;
    switch(operacion)
    {
        case "+": 
            resul = parseInt(primerNumero) + parseInt(segundoNumero); 
            break;
        case "-": 
            resul = parseInt(primerNumero) - parseInt(segundoNumero);
            break;
        case "*": 
            resul = parseInt(primerNumero) * parseInt(segundoNumero);
            break;
        case "/": 
            resul = parseFloat(primerNumero) / parseFloat(segundoNumero);
            break;
    }
    resultado.value = resul;
    if(resul > 0)
    {
        resultado.style.color = "Green";
    }
    else {
        resultado.style.color = "Red";
    }
        primerNumero = resul;
        segundoNumero = 0;
        operacion = "";
} 

const borrar = () => {
    document.getElementById("pantalla").value= "";   
}