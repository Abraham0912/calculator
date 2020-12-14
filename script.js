document.write('index.html ESTA CONECTADO con script.js ');
let operador = '';
    let numeroUno = 0;
    let numeroDos = 0;
//NUMEROS
    document.getElementById('1').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '1';
        document.getElementById("input2").innerHTML.valueOf += '1';
    });
    document.getElementById('2').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '2';
    });
    document.getElementById('3').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '3';
    });
    document.getElementById('4').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '4';
    });
    document.getElementById('5').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '5';
    });
    document.getElementById('6').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '6';
    });
    document.getElementById('7').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '7';
    });
    document.getElementById('8').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '8';
    });
    document.getElementById('9').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '9';
    });
    document.getElementById('0').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '0';
    });
//OTROS
    document.getElementById('.').addEventListener('click',function(){
        document.getElementById("input").innerHTML += '.';
    });

    document.getElementById('clear').addEventListener('click', function(){
        document.getElementById('input').innerHTML = '';
    })
//OPERADORES

    document.getElementById('+').addEventListener('click', function(){
        numeroUno = parseInt(document.getElementById('input').innerHTML);
        operador = '+';
        document.getElementById("input").innerHTML = '';
    });

    document.getElementById('-').addEventListener('click', function(){
        numeroUno = parseInt(document.getElementById('input').innerHTML);
        operador = '-';
        document.getElementById("input").innerHTML = '';
    });

    document.getElementById('*').addEventListener('click', function(){
        numeroUno = parseInt(document.getElementById('input').innerHTML);
        operador = '*';
        document.getElementById("input").innerHTML = '';
    })

    document.getElementById('/').addEventListener('click', function(){
        numeroUno = parseInt(document.getElementById('input').innerHTML);
        operador = '/';
        document.getElementById("input").innerHTML = '';
    });
//RESULTADO
    function resultado(a,b){
        if (operador ==='+'){
            return a+b;
        }if (operador ==='-'){
            return a-b;
        }if (operador ==='*'){
            return a*b;
        }if (operador ==='/'){
            return a+b;
        }else{
            return alert('Error al intentar seleccionar el oparador aritmetico');
        }
    }


    document.getElementById('resul').addEventListener('click', function(){
        numeroDos = parseInt(document.getElementById('input').innerHTML);
        document.getElementById("input").innerHTML = '';
        //alert(numeroUno+' '+ operador + '' +numeroDos);
        document.getElementById("input").innerHTML = (resultado(numeroUno,numeroDos));
    });
    document.write('index.html ESTA CONECTADO con script.js ');