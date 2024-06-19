// Sem retorno e sem parâmetro:

// Definição: Função que não recebe parâmetros e não retorna valores.
// Uso: Executa um bloco de código simples.
// Exemplo

function saudacao() {
    console.log("Olá, mundo!");
}
saudacao(); // Output: Olá, mundo!


// Sem retorno e com parâmetro:

// Definição: Função que recebe parâmetros, mas não retorna valores.
// Uso : Execu
// Exemplo


function cumprimentar(nome) {
    console.log(`Olá, ${nome}!`);
}
cumprimentar("João"); // Output: Olá, João!


// Com retorno e sem parâmetro:

// Definição: Função que não recebe parâmetros, mas retorna um valor.
// Uso: Faz
// Exemplo


function gerarNumeroAleatorio() {
    return Math.random();
}
let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio); // Output: um número aleatório entre 0 e 1



// Com retorno e com parâmetro:

// Definição: Função que recebe parâmetros e retorna um valor.
// Uso: Percebeu
// Exemplo


function somar(a, b) {
    return a + b;
}
let resultado = somar(5, 7);
console.log(resultado); // Output: 12



// Função anônima:

// Definição: Função sem nome atribuída a uma variável.
// Uso: Funções locais ou como callbacks.
// Exemplo

let saudacao = function() {
    
 
    console.log("Olá, mundo!");
    };
    
    ;
    saudaca
    
    ;
    saudacao(); // Output: Olá, mundo!


//     Função de seta :

// Definição: Sintaxe concisa para definir funções.
// Uso : Par ideal
// Exemplo


let quadrado = x => x * x;
console.log(quadrado(4)); // Output: 16


// Exibir "Olá, mundo!" no console:

function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();


// Receber um nome como parâmetro e exibir "Olá, [nome]!" no console:


function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}


olaNom


olaNome("João");


// Receber um número como parâmetro e retornar o dobro desse número:


function dobro(numero) {
    return numero * 2;
}
console.log(dobro(5));


// Receber três números como parâmetros e retornar a média deles:


function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(media(4, 8, 6));


// Receber dois números como parâmetros e retornar o maior deles:



function maior(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log(maior(7, 10));


// Receber um número como parâmetro e retornar o resultado da multiplicação desse número por ele mesmo:

function quadrado(numero) {
    return numero * numero;
}
console.log(quadrado(4));


// Funções são blocos reutilizáveis de código que podem ser chamados em qualquer parte do seu programa.
// Parâmetros permitem passar dados para dentro das funções.
// Valores de retorno permitem que as funções forneçam resultados após a execução.
// Funções anônimas e arrow functions oferecem maneiras flexíveis e concisas de definir funções, especialmente úteis para callbacks e operações curtas.