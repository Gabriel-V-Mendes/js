function calcularIMC(altura, peso) {
    
  
    let imc = peso / (altura * altura);
        
        r
    return imc;
    }
    
    
    
    // Testando a função
    let imc = calcularIMC(1.75, 70);
    
    
    console.log(`IMC: ${imc.toFixed(2)}`); // Output: IMC: 22.86
    //  Função para calcular o valor do fatorial de um número
    // e
    

    function calcularFatorial(numero) {
        
        i
    if (numero < 0) return -1;
        
      
    if (numero === 0) return 1;
        
      
    let fatorial = 1;
        
     
    for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        
            fatorial *= i;
        }
        re
    
            fatorial 
    
     
    return fatorial;
    
    
    // Testando a função
    let fatorial = calcularFatorial(5);
    
    
    console.log(`Fatorial: ${fatorial}`); // Output: Fatorial: 120
    //  Função para converter um valor em dólar para reais
    // javasc
    
   
    function converterDolarParaReal(valorEmDolar) {
        
        co
    const cotacaoDolar = 4.80;
        let valorEmReal = valorEmDolar * cotacaoDolar;
        
        r
    return valorEmReal;
    }
    
    
    
    // Testando a função
    let valorEmReal = converterDolarParaReal(100);
    
    c
    console.log(`Valor em Reais: R$${valorEmReal.toFixed(2)}`); // Output: Valor em Reais: R$480.00
    // Função para calcular a área e o perímetro de uma sala retangular
    // Java
    
    
    function calcularSalaRetangular(altura, largura) {
        
        le
    let area = altura * largura;
        
       
    let perimetro = 2 * (altura + largura);
        
       
    console.log(`Área: ${area} m²`);
        
        co
    console.log(`Perímetro: ${perimetro} m`);
    }
    
    
    
    
    
    // Testando a função
    
    calcularSalaReta
    
    calcularSa
    
    cal
    calcularSalaRetangular(5, 10);
    // Output:
    
    
    // Área: 50 m²
    // Perímetro: 30 m
    //  Função para calcular a área e o perímetro de uma sala circular
    // javascript
    
  
    function calcularSalaCircular(raio) {
        
        cons
    const pi = 3.14;
        
       
    let area = pi * (raio * raio);
        let perimetro = 2 * pi * raio;
        
        cons
    console.log(`Área: ${area} m²`);
        
        co
    console.log(`Perímetro: ${perimetro} m`);
    }
    
    // Testando a função
    
    calcularSalaCircular
    
    calcul
    calcularSalaCircular(3);
    // Output:
    // Área: 28.26 m²
    // Perímetro: 18.84 m
    //  Função para mostrar a tabuada de um número
    // javascript
    
    function mostrarTabuada(numero) {
        
        
    for (let i = 1; i <= 10; i++) {
            
           
    console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    
    
        
    // Testando a função
    
    mostrarTabuad
    
    m
    mostrarTabuada(7);
    // Output:
    // 7 x 1 = 7
    // 7 x 2 = 14
    // 7 x 3 = 21
    // 7 x 4 = 28
    // 7 x 5 = 35
    // 7 x 6 = 42
    // 7 x 7 = 49
    // 7 x 8 = 56
    // 7 x 9 = 63
    // 7 x 10 = 70




    //  criando array

    let frutas = ["Maçã", "Uva", "Laranja"];

    console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"

// elemento push

frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]

// metodo pop

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]
