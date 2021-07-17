var a = document.getElementById('val')



function input(d){
    a.value += d;
    console.log(a.value);     
}

function equal(){
a.value = eval(a.value);
}

function del(){
    a.value = '';
}