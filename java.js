let form = document.getElementById('formulario');

let dados = [];

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = document.getElementById('idade').value;
    let peso = document.getElementById('peso').value;
    let tipo_Sanguineo = document.getElementById('tipo_sangue').value;
    let telefone = document.getElementById('telefone').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;


    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroPeso').textContent = '';
    document.getElementById('erroTipo_sanguineo').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroEstado').textContent = '';


    if (!nome.includes(" ")) {

        document.getElementById('erroNome').textContent = 'Nome inválido,deve conter o nome completo';
        valido = false;
    }

    if (!email.includes('@') || !email.includes('.')) {

        document.getElementById('erroEmail').textContent = 'Email inválido';
        valido = false;
    }

    if (Number(idade) < 16) {

        document.getElementById('erroIdade').textContent = 'Idade insuficiente, deve ser pelo menos 16 anos ';
        valido = false;
    }

    if (telefone.length < 8) {

        document.getElementById('erroTelefone').textContent = 'Telefone inválido, deve ter pelo menos 8 caracteres';
        valido = false;
    }

    if (Number(peso) < 50) {

        document.getElementById('erroPeso').textContent = 'Deve ter pelo menos 50kg para doar sangue';
        valido = false;

    }



    if (valido) {

        let usuario = {
            nome: nome,
            email: email,
            idade: idade,
            peso: peso,
            tipo_Sanguineo: tipo_Sanguineo,
            telefone: telefone,
            cidade: cidade,
            estado: estado
        };

        dados.push(usuario);

        console.log(dados);

        alert('Formulário enviado com sucesso!');

        form.reset();
    }


})