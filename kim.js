$(document).ready(function(){
    var estado = 'SP';
    fetch('https://kimdb.000webhostapp.com/estados/'+estado)
    .then(function (response) {
        // Caso a requisição tenha sucesso irá cair aqui
        return response.json();
    })
    .then(function (data) {
        //retornado no primeiro.
        console.log(data[0]);
    })
    .catch(function (error) {
        // Caso dê algum erro na request, irá cair aqui
        console.log(error);
    });
})

