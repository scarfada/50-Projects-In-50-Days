const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input').value

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

function pesquisarGoogle(){

    const pesquisar = document.querySelector('.input').value;
    const botaum = document.querySelector('.btn').value;
   
    const pesquisando = pesquisar + botaum 

}

const goolge = addEventListener ('click','window.location.href', pesquisarGoogle);