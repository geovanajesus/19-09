function calcular() {

    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)

    let soma = etanol / gasolina

    if (soma <= 0.7){
        document.getElementById('resultado').innerHTML = `<p>Etanol`
    }

    else {
        document.getElementById('resultado').innerHTML = `<p>Gasolina`
    }
}