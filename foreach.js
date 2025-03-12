function contar(){ // cria a função contar
    let numero = 0; // cria a variavel temporaria 0
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); // ta pegando o elemento pelo id
    let divNumeros = document.getElementById("divNumeros"); // vai receber a div numeros, uma declaração de variavel, pegando a div numeros pelo Id
    divNumeros.innerHTML = ""; // retira os números quando requisitar outro número
    for (var i = numero; i <= txtNumeroFinal.value; i++) { // definir para onde ele vem e para onde ele vai, i recebe ele mesmo mais 1
        divNumeros.innerHTML += i + "<br />"; // += vai fazer com que a variavel receba ela mesma mais o valor desejado
    } // fecha o bloco de código do for
} // fecha o bloco de código da função contar

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) { // cria uma função event relacionada as teclas
    if (event.keyCode == 13) { // cria um evento ao clicar a tecla 13 (enter)
        contar(); // o evento realiza a função contar
    } else { // finaliza o bloco de códigos if
        if (
            isNaN(event.key) &&  // significa que é a tecla não numérica foi teclada
            event.keyCode !=8 && // código 8 é o backspace
            event.keyCode !=46 && // código 46 é o delete
            event.keyCode !=37 && // é a seta para a esquerda
            event.keyCode !=38 && // é a seta para cima
            event.keyCode !=39 && // é a seta para baixo
            event.keyCode !=40 &&  // é a seta para direita
            event.keyCode !=35 && // é a tecla end
            event.keyCode !=36 // é a tecla home
        ) { //
            console.log("Não é numérico. keyCode:", event.keyCode); // 
            divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente."; //
        } //
    }
}); // finaliza o bloco de códigos da função event, fecha o parentese do keyup.
        
document.getElementById("txtNumeroFinal").addEventListener('input', function (event) {
        // console.log(this):
        if (this.value.length > 3) {
            console.log("Tem mais de 3 caracteres");
            if (this.value > 999) {
                this.value = 999;
                alert("O número máximo permitido é 999!");
            } else {
            this.value = this.value.substring(0,3);
            }
        }   
}); // 