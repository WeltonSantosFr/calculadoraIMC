/* function calculo() {
    let inputNome = document.querySelector("#nome").value
    let inputPeso = document.querySelector("#peso").value
    let inputAltura = document.querySelector("#altura").value

    let resultado = Math.round(inputPeso / (inputAltura * inputAltura))
    
    return document.getElementById("log").innerHTML = resultado
};
*/
function resultadoFinal() {

    let inputNome = document.querySelector("#nome").value
    let inputPeso = document.querySelector("#peso").value
    let inputAltura = document.querySelector("#altura").value

    let resultado = Math.round(inputPeso / (inputAltura * inputAltura))

    if (resultado >= 35) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Super Obesidade"`
    } 
    else if (resultado >= 30 && resultado < 35) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Obesidade"`
    }
    else if (resultado >= 25 && resultado < 30) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Excesso de peso"`
    }
    else if (resultado >= 20 && resultado < 25) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Peso Normal"`
    }
    else if (resultado >= 15 && resultado < 20) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Abaixo do Normal"`
    }
    else if (resultado < 15) {
        return document.getElementById("tela").innerHTML = `${inputNome} seu IMC está classificado em "Magreza Extrema"`
    }
}

