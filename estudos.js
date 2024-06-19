*alert("Opa fique avontade");

var nome = "lua";

var idade = "25";

var numeroDeVendas = "50";

var saldoDisponivel = "1000";

alert("Erro, Preencha todos os campos");

var mensagemDeErro = "Erro, Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Qual seu nome?");

idae = prompt("Qual sua idade?");

if("idade >= 18"){
  alert("Pode tirar a Habilitação");
}

 alert('Boas vindas ao curso de logica de programação da alura');

 let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

 console.log(numeroSecreto)
 let chute 

 while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

   
}


 if (chute == numeroSecreto){
   alert(`Voce acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
 } else{
   if (chute > numeroSecreto){
     alert(`O numero secreto é menor que ${chute}`);
   }else {
     alert(`O numero secreto é maior que ${chute}`);
   }

  tentativas++;
  
 } 
 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


  if(tentativa > 1){
  alert(`isso ai, voce acertou o ${numeroSecreto}`)
   }else{
   alert(`isso ai, voce acertou o ${numeroSecreto}`)
   }

 parseInt(Math.random() * 10 + 1)




 let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

 function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto) {
     exibirTextoNaTela('h1', 'Acertou!');
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
     exibirTextoNaTela('p', mensagemTentativas);
   } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
     } else {
       exibirTextoNaTela('p', 'O número secreto é maior');
     }
     tentativas++;
   }
 }




 function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');




 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
 }


 function exibirMensagemInicial() { 
   exibirTextoNaTela('h1', 'Jogo do número secreto'); 
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
 }


 function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial()
 }


 function exibirMensagemInicial() {    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
 }

 exibirMensagemInicial()



 function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas =1;
     exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
 }


    // LISTA DE NUMERO SECRETO


 function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
         return gerarNumeroAleatorio();
     } else {
         return numeroEscolhido;
     }
 }

 function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite) {
         listaDeNumerosSorteados = [];
         }

   
 }

 let listaDeNumeros Sorteados = [];
 let numeroLimite = 10;
 let numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1; I




 function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

 }
 function exibirMensagemInicial() {
     exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
 }




















// function olaMundo() {
//     console.log("Olá, mundo!");
// }


// function olaNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }


// function dobro(numero) {
//     return numero * 2;
// }


// function media(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }


// function maior(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
// }


// function quadrado(numero) {
//     return numero * numero;
// }


// olaMundo();
// olaNome("João");

// console.log("Dobro de 5: " + dobro(5));
// console.log("Média de 4, 8 e 6: " + media(4, 8, 6));
// console.log("Maior entre 7 e 10: " + maior(7, 10));
// console.log("Quadrado de 4: " + quadrado(4));

