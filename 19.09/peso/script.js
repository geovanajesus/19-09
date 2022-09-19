function calcular() {

    let saida = document.getElementById('resultado')
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let soma = peso / (altura * altura)

    if (soma <= 18.5) {
        saida.innerHTML += `<p> Seu teste deu ${soma}, você esta abaixo do peso. </p> `
    }
    else if (soma >= 18.6 && soma <= 24.9) {   
        saida.innerHTML += `<p> Seu teste deu ${soma}, você esta no peso ideal (parbéns). </p> `
}  
 else if (soma >= 24.9 && soma <= 29.9) {
    saida.innerHTML += `<p> Seu teste deu ${soma}, você esta levemente acima da media. </p> `
}
else if (soma >= 30 && soma <= 34.9) {
    saida.innerHTML += `<p> Seu teste deu ${soma}, você tem obesidade Grau I. </p> `
}   
else if (soma >= 35 && soma <= 39.9) {
    saida.innerHTML += `<p> Seu teste deu ${soma}, você tem obesidade Grau II. </p> `
}

else if (soma >= 40) {
    saida.innerHTML += `<p> Seu teste deu ${soma}, você tem obesidade Grau III. </p> `
}


}  