$(document).ready(function() {
    $('#btnLogin').click(function() {
        
        let username = $('#usuario').val()
        let pass = $('#senha').val()

        console.log(username, pass)
        login(username, pass)
    })
})


function login(username, pass){
    $.ajax({
        url: 'https://contagemativabackend.azurewebsites.net/funcionario/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            usuario: username,
            senha: pass
        }),
        success: function(res){
            alert('passou')
        },
        error: function(xhr, status, error){
            alert('Erro ao fazer Login: ' + error)
        }
    })
}