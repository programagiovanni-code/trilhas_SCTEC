document.addEventListener('DOMContentLoaded', function() {

    const formContato = document.querySelector('.formulario-contato form');
    if (formContato) {
        
        formContato.addEventListener('submit', function(event) {
            

            event.preventDefault();
            

            alert("Formulário ainda em teste, tente entrar em contato através dos dados fornecidos no rodapé! Atenciosamente: Giovanni");
            

            formContato.reset();
        });
    }

});