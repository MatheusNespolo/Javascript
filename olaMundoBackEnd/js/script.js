
document.getElementById('fetchButton').addEventListener('click',function(){
    fetch('http://localhost:3000/api/mensagem')    
    .then(response => response.json())
    .then(data => {
            document.getElementById('mensagem').innerText = data.mensagem;
    })
    .catch(error => {
        console.error('Erro ao buscar a mensagem!',error);
    })
})