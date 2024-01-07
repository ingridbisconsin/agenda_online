const form = document.getElementById('form-contato')
const contato = []
const numero = []

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    handleSubmit(e);
})

function adicionaLinha (){
    const inputNomeContato = document.getElementById('contact-name')
    const inputNumeroContato = document.getElementById('contact-number')

    if (contato.includes(inputNomeContato.value)) {
        alert(`Esse contato: ${inputNomeContato.value} já foi inserido.`)
    } else {
        contato.push(inputNomeContato.value)
        numero.push(inputNumeroContato.value)
    

    let linha = `<tr>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`
    linhas += linha
    }
    inputNomeContato.value = ''
    inputNumeroContato.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function handleSubmit(e) {
    e.preventDefault()
}