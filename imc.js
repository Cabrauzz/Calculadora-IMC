function Calcular() {
    const altura = document.getElementById('height').value
    const peso = document.getElementById('weight').value

    
    if (altura != '' && peso != '') {
        const imc = (peso/(altura * altura)).toFixed(2)
        let classification =''

        if (imc < 18.5){
            classification = 'Abaixo do peso'
        } else if (imc < 25){
            classification = 'Peso normal'
        } else if (imc < 30){
            classification = 'Acima do peso'
        } else if (imc < 35){
            classification = 'Obesidade Grau I'
        } else if (imc < 41){
            classification = 'Obesidade Grau II'
        } else{
            classification = 'Obesidade Grau III'
        }

        document.getElementById('resultado').innerHTML = classification;
 
    }
      
}
