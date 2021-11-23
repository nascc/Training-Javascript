<!-- Mostra informações no console  -->
console.log("Print on console.");
console.warn("Show warning.");
console.error("Show error.");


<!-- Variavel: var é o antigo modo, let é o novo modo. As duas é possivel mudar seu valor pelo console.  -->
var name = "Caio";
let nome = "Henrique"


<!-- Constante: const não pode mudar seu valor pelo console. -->
const sobrenome = "Nascimento";


<!-- Tipos de estrutura: -->
const str = "string"; //String
const num = 3; //Number
const flt = 3.14; //Float - Numeros com decimais
const bool = true; // Boolean - pode ter o valor true ou false
const list = [1, 2, "nome1", 3.14, []] //Array = lista
const thing = null; //constante thing não tem nada.
const notDefined = undefined; // Não possui valor, no momento.
const getAge = function() { return 25; }// function = função
const obj = {
    "name": "Caio",
    "lastName": "Nascimento",
    "profession": "Student",
    "Age": 25
}// Object; pode ser acessado com obj["name"]


<!-- Condições: -->
const primeiroNome = "Caio";
if(primeiroNome == "Fernanda") {
    //Se primeiroNome for igual à Fernanda, então execute o codigo que está entre {}
    console.log("Olá Fernanda.")


}else if(primeiroNome == "Aikis") {
    //Caso primeiroNome não for igual à Fernanda, então execute o codigo que está entre {}
    console.log("Olá Aikis.")

}else {
    console.log("Olá estranho.")
}


<!-- Objetos -->
let person = {

    "firstName": "Airke",
    "LastName": "Correia",
    "age": 25,
    "favGame": "Valorant"
}


<!-- String Methods -->
const aula = "Curso de Javascritp";
//aula.length - Para saber o tamanho da string.
//aula.search("de") - ele vai contar em qual caracter a palavra "de" vai começar. Nesse caso mostraria o número 6. Lembrando que ele começa a contar do 0.
//aula.slice(6, 7) - Corta a string nos intervalos que você descrever. Funciona assim: (?start, ?end)
//aula.substr(6, 2) - Pega o intervalo da string baseado onde começa a contagem e quantos caracteres você quer depois do lugar onde você escolheu começar. Parecido com o .slice, mas nesse funciona assim: (?start, length)
//aula.split(" ") - Vai usar o 'espaço' para separar as palavras e tornar um valor para o objeto aula, como:     0: "Curso", 1: "de", 2:"Javascript"
//aula.replace("Javascript", "Programação") - irá substituir a uma palavra por outra. OBS: Como estamos trabalhando com 'const', não é possivel alterar as palavras pelo console. Se quiser alterar, use o 'let'.


<!-- String concat -->
let idade = 25;
let mostrar =  `Meu nome é ${nome} e minha idade é ${idade}`;
//Usando o '`' no começo e no final e usando '${}' para concatenar as variáveis e constantes que você declarou.


<!-- Function -->

//Cria um função, retornando o valor quando você chama de volta a função. Nesse caso, pra chamar a função de volta é addNum(., .., ...), já que eu adicionei três parâmetros.

function addNum(num1, num2, num3){
    const total = (num1 + num2)/num3;
    return total;

}


let aula2 = "            uhashduashdu         salve meu bom      ."
//aula2.trim() - Vai apagar os espaços desnecessários.






























<!-- Um outro jeito é usar <script scr = "Nomegenerico.js"></script> e ter um arquivo Nomegenerico.js na pasta, que ai ele vai direto.  -->
