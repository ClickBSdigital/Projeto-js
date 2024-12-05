// alert("Bem Vindo!")
//================================
//DECLARAÇÃO DE VARIAVEIS
// EXISTE 3 MODOS DE DECLARAR VARIÁVEL

// VAR , LET, CONST
// input -> Python = PRONPT ->
// 3 FORMAS DE PRINTAR RESULTADOS : console.log(), documento.write(), alert()
//=====================================================

// VAR (consigo sobrescrever a variavel basicamente trocar todo o conteudo)

// var x = 10;

// var y =20;

// var x =30;

// var res = x + y;

// alert(res)

//LET NÃO PODE CRIAR OUTRA VARIAVEL COM O MESMO NOME

//====================================

// let x = 10;

// let y =20;

// const xi =30;

// x = 50

// var res = x + y;

// alert(res)

//========================================

//CONST (é constante não pode mudar a variavel )

// let x = 10;

// let y =20;

// const xi =30;

// x = 50

// var res = x + y;

// alert(res)

//=====================================

// var x = 10;

// for(var i = 0; i <x; i++){
//     // alert("Oi!!");
//     console.log("Oi");
// }

//=========================================

// var x = 10;

// for(var i = 0; i <x; i++){

//     window.onload()

//     document.write('Oi '+i)
// }

//=======================

// var x = 10;

// for(var i = 0; i <x; i++){

//     document.write("<br> Oi: "+i);
// }

//==========================================================

// var n1 = parseFloat(prompt("Digite N1: "));

// var n2 = parseFloat(prompt("Digite N2: "));

// var n3 = parseInt(prompt("Digite N3"));


// var res = n1 + n2 * n3;

// console.log("Resultado = " +res)

//================================================================

// javascript é uma linguagem funcional de eventos


// 

const forms = document.getElementById("formulario");
console.log(forms)

// function func1(){
//     var input_nome = document.getElementById("nome").value;
//     // console.log(input_nome);
//     // alert("HELLLLOOOOOOO!!!!");

//     // var text_span = document.getElementById("texto");
//     // console.log(text_span);

//     // document.getElementById("texto").innerText(input_nome)
//     document.getElementById("meuElemento").innerText = "Novo texto";


// }

function func1() {
    // var valor = document.getElementById("texto").value;
    // document.getElementById("mensagem").innerText = "Você digitou: " + valor;
    let minhadiv = document.getElementById("header")

    console.log(minhadiv)
    minhadiv.style.backgroundColor = '#FFFFFF'


}

function func2(){
    // alert("HELLLLOOOOOOO!!!!");

    let minhadiv = document.getElementById("header")

    console.log(minhadiv)
    minhadiv.style.backgroundColor = '#c1c1c1'

}

function func3(){
    let my_span = document.getElementById("texto")
    let input_nome = document.getElementById("nome").value;
    
    my_span.innerText = input_nome;

}

function funcEncima(){
    alert("HELLLLOOOOOOO!!!!");

    function hello(){
        alert("HELLLLOOOOOOO!!!!");
    }
}

function receba(x){
    alert(x);

}

function valida(event){ // e = event

    event.preventDefault(); // segura o form, não 

    const form = document.getElementById("formulario");
    // console.log(form)

    let login = form.email.value
    let senha = form.senha.value
    let conf = form.confsenha.value
    console.log(login)
    console.log(senha)
    console.log(conf)

    if(login.length < 5){
        alert(" Abençoado !!!! DIGITE UM EMAIL VÁLIDO!!!!")
        // login.focus()
        return false 

    }

    if(senha.length < 8){
        alert("A SENHA DEVE CONTER NO MÍNIMO 8 CARACTERES!!!")
    }
    if(senha != conf){
        alert("AS SENHAS NÃO CONFERE SEU ANIMAL!!!!")
        return false
    }else{
        alert("ANIMAL CADASTRADO COM SUCESSO !!!!!")
    }
}