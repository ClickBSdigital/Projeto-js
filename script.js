// // alert("Bem Vindo!")
// //================================
// //DECLARAÇÃO DE VARIAVEIS
// // EXISTE 3 MODOS DE DECLARAR VARIÁVEL

// // VAR , LET, CONST
// // input -> Python = PRONPT ->
// // 3 FORMAS DE PRINTAR RESULTADOS : console.log(), documento.write(), alert()
// //=====================================================

// // VAR (consigo sobrescrever a variavel basicamente trocar todo o conteudo)

// // var x = 10;

// // var y =20;

// // var x =30;

// // var res = x + y;

// // alert(res)

// //LET NÃO PODE CRIAR OUTRA VARIAVEL COM O MESMO NOME

// //====================================

// // let x = 10;

// // let y =20;

// // const xi =30;

// // x = 50

// // var res = x + y;

// // alert(res)

// //========================================

// //CONST (é constante não pode mudar a variavel )

// // let x = 10;

// // let y =20;

// // const xi =30;

// // x = 50

// // var res = x + y;

// // alert(res)

// //=====================================

// // var x = 10;

// // for(var i = 0; i <x; i++){
// //     // alert("Oi!!");
// //     console.log("Oi");
// // }

// //=========================================

// // var x = 10;

// // for(var i = 0; i <x; i++){

// //     window.onload()

// //     document.write('Oi '+i)
// // }

// //=======================

// // var x = 10;

// // for(var i = 0; i <x; i++){

// //     document.write("<br> Oi: "+i);
// // }

// //==========================================================

// // var n1 = parseFloat(prompt("Digite N1: "));

// // var n2 = parseFloat(prompt("Digite N2: "));

// // var n3 = parseInt(prompt("Digite N3"));


// // var res = n1 + n2 * n3;

// // console.log("Resultado = " +res)

// //================================================================

// // javascript é uma linguagem funcional de eventos


// // 

// const forms = document.getElementById("formulario");
// console.log(forms)

// // function func1(){
// //     var input_nome = document.getElementById("nome").value;
// //     // console.log(input_nome);
// //     // alert("HELLLLOOOOOOO!!!!");

// //     // var text_span = document.getElementById("texto");
// //     // console.log(text_span);

// //     // document.getElementById("texto").innerText(input_nome)
// //     document.getElementById("meuElemento").innerText = "Novo texto";


// // }

// function func1() {
//     // var valor = document.getElementById("texto").value;
//     // document.getElementById("mensagem").innerText = "Você digitou: " + valor;
//     let minhadiv = document.getElementById("header")

//     console.log(minhadiv)
//     minhadiv.style.backgroundColor = '#FFFFFF'


// }

// function func2(){
//     // alert("HELLLLOOOOOOO!!!!");

//     let minhadiv = document.getElementById("header")

//     console.log(minhadiv)
//     minhadiv.style.backgroundColor = '#c1c1c1'

// }

// function func3(){
//     let my_span = document.getElementById("texto")
//     let input_nome = document.getElementById("nome").value;
    
//     my_span.innerText = input_nome;

// }

// function funcEncima(){
//     alert("HELLLLOOOOOOO!!!!");

//     function hello(){
//         alert("HELLLLOOOOOOO!!!!");
//     }
// }

// function receba(x){
//     alert(x);

// }

// function valida(event){ // e = event

//     event.preventDefault(); // segura o form, não 

//     const form = document.getElementById("formulario");
//     // console.log(form)

//     let login = form.email.value
//     let senha = form.senha.value
//     let conf = form.confsenha.value
//     console.log(login)
//     console.log(senha)
//     console.log(conf)

//     if(login.length < 5){
//         alert(" Abençoado !!!! DIGITE UM EMAIL VÁLIDO!!!!")
//         // login.focus()
//         return false 

//     }

//     if(senha.length < 8){
//         alert("A SENHA DEVE CONTER NO MÍNIMO 8 CARACTERES!!!")
//     }
//     if(senha != conf){
//         alert("AS SENHAS NÃO CONFERE SEU ANIMAL!!!!")
//         return false
//     }else{
//         alert("ANIMAL CADASTRADO COM SUCESSO !!!!!")
//     }
// }

// // @import 'test.js';


// ===========================================

// var lista = [33,44,55,67,68,90,111]

// console.log( lista.length )

// if(lista.length < 10){
//     alert("Lista de compar pequena não ir no mercado")
// }else{

// }
// for(var i = 0; i <lista.length, i++){
//     console.log(lista[i])
// }

// ===========================================

// Cria um objeto js

// var pessoa = {
//     "nome" : "Eliandro",
//     "sobrenome" : "silva",
//     "idade" : "47",
//     "email" : "eliandro@com.com",
//     "fone" : null,
//     // "hobies" : function tomarUma(v){ console.log("Eliandro", v)}
//     "hobies" : function tomarUma(){ avert}
// }

// console.log(pessoa.nome, pessoa.idade)

// var breja = pessoa.hobies.tomarUma("Heinekenn !!!")

// console.log(breja)
// *****************************

// var pessoa = {
//     "nome": "Eliandro",
//     "sobrenome": "Silva",
//     "idade": 47,
//     "email": "eliandro@com.com",
//     "fone": null,
//     "hobies": function (v) {
//         console.log("Eliandro está bebendo:", v);
//         return "Saúde!";
//     }
// };

// console.log(pessoa.nome, pessoa.idade);

// var breja = pessoa.hobies("Heineken !!!");
// console.log(breja);


// =============================================

// var pessoa = {
//     "nome" : "Eliandro",
//     "sobrenome" : "silva",
//     "idade" : "47",
//     "email" : "eliandro@com.com",
//     "fone" : null,
//     // "hobies" : function tomarUma(v){ console.log("Eliandro", v)}
//     "hobies" : function tomarUma(){ avert}
// }

// console.log(pessoa.nome, pessoa.idade)

// console.log(pessoa.fone)

// pessoa.fone = "67 9999-9999"
// console.log(pessoa.fone)

// var pes2 ={}

// pes2.nome = "Fred"
// pes2.idade = 18
// pes2.email = "fred@com.com"

// console.log(pes2.nome, pes2.idade + " = Pq andou de pneu mucho ..." + pes2.email )


// ======================================================

// pes3 = {
//     "nome" : "Eliandro",
//     "hobbie" : function(value){
//         return this.nome + " Curte " + value
//     }
// }

// var resultado = pes3.hobbie(" Heineken ")
// console.log(resultado)

// =====================================

// var pessoa = {
//     "nome" : "Eliandro",
//     "sobrenome" : "silva",
//     "idade" : 47,
//     "email" : "eliandro@com.com",
//     "fone" : null,
//     "addFone" : function(v){
//         this.fone = v
//         console.log("Telefone adicionado com sucessa!!! "+ this.fone)
//     },
//     "getDados" : function(){ 
//         return this.nome + this.sobrenome + " tem " + this.idade + " Contato: " + this.email
//     }
// }

// console.log(pessoa.fone)

// novoFone = prompt("Digite o telefone: ")

// // var reultado = pessoa.getDados()

// // console.log(reultado)


// pessoa.addFone(novoFone)

// console.log(pessoa.fone)

// novoFone = prompt("Digite o novo  telefone: ")
// pessoa.addFone(novoFone)
// console.log(pessoa.fone)




// ===================================

// CRIAR UM OBJETO CARRO 
// COM OS SEGUINTES ATRIBUTOS:

// MARCA,
// MODELO,
// PLACA,
// ANO,
// COR,
// PORTAS,
// TANQUE,

// Function LIGAR(), DESLIGAR(), ABASTECER(), ANDAR(),
// VERNIVEL(), GETDADOS()

// var carro = {
//     "marca" : null,
//     "modelo" : null,
//     "ano" : null,
//     "placa" : null,
//     "cor" : null,
//     "portas" : null,
//     "tanque" : null,

//     "addnovomarca" : function(v){
//         this.marca = v
//         console.log("Marca adicionado com sucessa!!! "+ this.marca)
//     },

//     "addnovomodelo" : function(v){
//         this.modelo = v
//         console.log("Modelo adicionado com sucessa!!! "+ this.modelo)
//     },

//     "addnovoano" : function(v){
//         this.ano = v
//         console.log("Ano adicionado com sucessa!!! "+ this.ano)
//     },

//     "addnovoplaca" : function(v){
//         this.placa = v
//         console.log("Placa adicionado com sucessa!!! "+ this.placa)
//     },

//     "addnovocor" : function(v){
//         this.cor = v
//         console.log("Cor adicionado com sucessa!!! "+ this.cor)
//     },

//     "addnovoportas" : function(v){
//         this.portas = v
//         console.log("Portas adicionado com sucessa!!! "+ this.portas)
//     },

//     "addnovotanque" : function(v){
//         this.tanque = v
//         console.log("A litragem do tanque adicionado com sucessa!!! "+ this.tanque)
//     },

//     "getDados" : function(){ 
//         return this.marca + this.modelo + " Ano: " + " Placa: " + this.cor + " Portas: " +  "tem litros: "
//     },
// }
// novomarca = prompt("Digite a Marca do carro: ")
// novomodelo = prompt("Digite o Modelo do carro: ")
// novoano = prompt("Digite o Ano do carro: ")
// novoplaca = prompt("Digite a Placa do carro: ")
// novocor = prompt("Digite a Cor do carro: ")
// novoportas = prompt("Digite quantas portas o tem carro: ")
// novotanque= prompt("Digite a litragem do tanque do carro: ")

// carro.addnovomarca(novomarca)
// console.log(carro.marca)

// carro.addnovomodelo(novomodelo)
// console.log(carro.modelo)

// carro.addnovoano(novoano)
// console.log(carro.ano)

// carro.addnovoplaca(novoplaca)
// console.log(carro.placa)

// carro.addnovocor(novocor)
// console.log(carro.cor)

// carro.addnovoportas(novoportas)
// console.log(carro.portas)

// carro.addnovotanque(novotanque)
// console.log(carro.tanque)

// 12km = 1L de gasolina
// O tempo gasto dirigido e a velocidade média do carro
// velocidade media = D / T
var distancia = parseFloat(prompt("Qual foi a distância percorrida ? ")); // 400KM

var tempoGasto = parseFloat(prompt("Qual foi o tempo gasto da viagem ? ")); // 50 horas

var vlcMedia = distancia / tempoGasto; // 200/30 = 8KM por hora

var gasolina = 0;
console.log("A distância percorrida foi: " + distancia + "km/h <br/>");

console.log("O tempo gasto foi: " + tempoGasto + "hr/s <br/>");

console.log("A velocidade média foi de: " + vlcMedia.toFixed(2) + "km/h <br/>");

for(contador = 1; contador < vlcMedia; contador++){
    gasolina+=vlcMedia;
    console.log("Na " + contador + " hora de viagem, Thiaguera gastou " + gasolina.toFixed(2) + "L<br/>");
}

// console.log("A distância foi: ",distancia)
// console.log("O tempo gasto foi: ",tempoGasto)
// console.log("Media de horas: ",vlcMedia)
// console.log("Gasolina consumida: ",gasolina)


// 45LT TANQUE ANDEI 80KM, QUANTO SOBRA NO TANQUE