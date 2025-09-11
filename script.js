const avanca=document.querySelectorA11('Btn-proximo');
const reiniciarBtn=document.getElementById('Btn-reiniciar');

avanca.forEach(button => {
button.addEventListener('click',function(){   
const atual = document.querySelector('.ativo');
const proximopasso='passo'+this.getAttribute('data-proximo');
atual.classList.remove('ativo');
const proximoElemento= document.getElementById('proximopasso');


if(proximoElemento){
    proximoElemento.classList.add('ativo');
    else{
        console.error(`elemento com id"$ {proximopasso}" não encontrado.`)
    }
}
} 

);
    