function limpar()
{
    document.getElementById("resposta").value='';
}

function mostrar(valor)
{
    var num = document.getElementById("resposta").value +=valor;
}

function calcular()
{
    var res = 0;
    res = document.getElementById("resposta").value;
    document.getElementById("resposta").value="";
    document.getElementById("resposta").value=eval(res);
    if(document.getElementById("resposta").value=="undefined")
    {
        document.getElementById("resposta").value="";
    }
}

function press(key)
{
    document.getElementById("resposta").focus();
    if(key==13){
        calcular();
     }
}
