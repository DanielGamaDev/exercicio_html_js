const form = document.getElementById('form-numeros');
const primeiro = document.getElementById('p-numero');

function validaNumeros(n1, n2){
    const numer1 = n1;
    const numer2 = n2;
    return (numer2 > numer1);
}

form.addEventListener('submit', function(e) {     /* A letra "e" significa "evento", serve para cancelar o evento padrão do botão que reinicia a página*/
    let formEValido = false;
    e.preventDefault();

    const segundo = document.getElementById('s-numero');
    const mensagemSucesso = `Sucesso! O primeiro número fornecido (<b>${primeiro.value}</b>) é menor que o segundo (<b>${segundo.value}</b>).`;

    formEValido = validaNumeros(primeiro.value, segundo.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        primeiro.value = '';
        segundo.value = '';

        primeiro.style.border = 'none';
        primeiro.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    } else {
        primeiro.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block'
    }
});

primeiro.addEventListener('change', function(e){
    console.log(e);
    formEValido = validaNumeros(e.target.value);

    if (!formEValido){
        primeiro.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        primeiro.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});