// 01 - Encontrar maior e menor número
// Recebe entrada do usuário e converte para array de números
// Estudar: método split(), map(), some() e spread operator (...)
let entrada = prompt("Informe uma sequência de números separados por vírgula:");
// Divide a string nos pontos onde há vírgula e converte cada elemento para número
let valores = entrada.split(",").map(Number);

// Validações de entrada
if (valores.length < 2) {
    // Verifica se foram inseridos pelo menos 2 números
    console.log("→ Erro: Por favor, informe dois números separados por vírgula.←");
} else if (valores.some(isNaN)) {  
    // Verifica se todos os valores são números válidos
    console.log("→ Erro: Por favor, informe apenas números válidos.←");
} else {
    // Usa spread operator (...) para expandir o array e encontrar maior e menor valores
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);
    
    console.log(`O maior número é ${maior}`);
    console.log(`O menor número é ${menor}`);
}

// 02 - Calculadora de potência
// Estudar: arrays, Math.pow(), template literals
function calculatePower(numbers) {
    // Verifica se o array tem pelo menos base e expoente
    if (numbers.length >= 2) {
        let base = numbers[0];
        let exponent = numbers[1];
        // Calcula a potência usando Math.pow
        let result = Math.pow(base, exponent);
        console.log(`${base} elevado a ${exponent} é igual a ${result}`);
    } else {
        console.log("Erro: forneça pelo menos dois números.");
    }
}

// Obtém base e expoente do usuário e converte para números inteiros
let result = [
    parseInt(prompt("Digite a base:")),
    parseInt(prompt("Digite o expoente:"))
];

calculatePower(result);

// 03 - Calculadora de fatorial
// Estudar: loops, recursão como alternativa
function calcularFatorial(n) {
    // Verifica se o número é negativo
    if (n < 0) {
        return "O fatorial não é definido para números negativos.";
    }
    // Calcula o fatorial multiplicando números de 1 até n
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
console.log(`O fatorial de ${numero} é ${calcularFatorial(numero)}`);

// 04 - Calculadora de área do círculo
// Estudar: Math.PI, Math.pow(), parseFloat()
function calcularAreaCirculo(raio) {
    // Calcula área usando fórmula PI * raio²
    return Math.PI * Math.pow(raio, 2);
}

// Obtém o raio do usuário e converte para número decimal
let raio = parseFloat(prompt("Digite o raio do círculo:"));
console.log(`A área do círculo de raio ${raio} é ${calcularAreaCirculo(raio)}`);

// 05 - Filtrar números pares
// Estudar: método filter(), arrow functions, operador módulo
function filtrarNumerosPares(arr) {
    // Usa filter com operador módulo para encontrar números pares
    return arr.filter(num => num % 2 === 0);
}

let entrada = prompt("Digite números separados por vírgula:");
// Converte entrada em array de números
let numeros = entrada.split(",").map(Number);
console.log(filtrarNumerosPares(numeros));

// 06 - Encontrar maior número
// Estudar: Math.max(), spread operator
function encontrarMaiorNumero(arr) {
    // Usa spread operator para passar array como argumentos separados
    return Math.max(...arr);
}

let entrada = prompt("Digite números separados por vírgula:");
let numeros = entrada.split(",").map(Number);
console.log(`O maior número do array é ${encontrarMaiorNumero(numeros)}`);

// 07 - Sequência de Fibonacci
// Estudar: arrays, slice(), push()
function fibonacci(n) {
    // Retorna array vazio se n <= 0
    if (n <= 0) {
        return [];
    }

    // Inicia sequência com primeiros números
    const sequencia = [0, 1];

    // Gera próximos números somando os dois anteriores
    for (let i = 2; i < n; i++) {
        const proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoNumero);
    }

    // Retorna sequência com n números
    return sequencia.slice(0, n);
}

// 08 - Contador de vogais
// Estudar: strings, loops, includes(), toLowerCase()
function contarVogaiss(str) {
    // Verifica se entrada é string
    if (typeof str !== 'string') {
        return 0;
    }
    let contador = 0;
    const vogais = "aeiou";
    
    // Percorre cada caractere e conta vogais
    for (const caractere of str.toLowerCase()) {
        if (vogais.includes(caractere)) {
            contador++;
        }
    }
    return contador;
}

// 09 - Verificador par/ímpar
// Estudar: operador módulo, typeof, isNaN()
function verificarParOuImpar(numero) {
    // Valida se entrada é número
    if (typeof numero !== 'number' || isNaN(numero)) {
        return "Entrada inválida. Por favor, forneça um número.";
    }
    // Usa operador módulo para verificar se é par
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// 10 - Inversor de string
// Estudar: split(), reverse(), join()
function inverterString(str) {
    // Valida se entrada é string
    if (typeof str !== 'string') {
        return "Entrada inválida. Por favor, forneça uma string.";
    }
    // Divide string em caracteres, inverte e junta novamente
    return str.split('').reverse().join('');
}

// 11 - Calculadora básica
// Estudar: switch case, operadores aritméticos
function calculadora(num1, num2, operador) {
    // Valida se entradas são números
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Entrada inválida. Os dois primeiros argumentos devem ser números.";
    }
    
    // Realiza operação baseada no operador fornecido
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Erro: Divisão por zero não é permitida.";
            }
            return num1 / num2;
        default:
            return "Operador inválido. Use '+', '-', '*' ou '/'.";
    }
}

// 12 - Validador de CPF
// Estudar: regex, substring(), parseInt()
function validarCPF(cpf) {
    // Valida se entrada é string
    if (typeof cpf !== 'string') return false;
    
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // Valida tamanho e dígitos repetidos
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;
    
    let soma;
    let resto;
    
    // Calcula primeiro dígito verificador
    soma = 0;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    // Calcula segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}

// 13 - Cronômetro simples
// Estudar: setInterval(), template literals, padStart()
function iniciarCronometroSimples() {
    let segundos = 0;
    console.log("Cronômetro iniciado.");
    
    // Atualiza cronômetro a cada segundo
    const intervaloId = setInterval(() => {
        segundos++;
        // Calcula horas, minutos e segundos
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segs = segundos % 60;
        
        // Formata números com dois dígitos
        const horasFormatadas = String(horas).padStart(2, '0');
        const minutosFormatados = String(minutos).padStart(2, '0');
        const segundosFormatados = String(segs).padStart(2, '0');
        
        console.log(`${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`);
    }, 1000);
