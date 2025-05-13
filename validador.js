function validadono() {

    //Pegar os dados

    const nome = document.getElementById('primeiroNome_dono').value.trim();
    const sobrenome = document.getElementById('sobrenome_dono').value.trim();
    const cpf = document.getElementById('cpf_dono').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confsenha = document.getElementById('confsenha').value;
    const genero = document.getElementById('genero_dono').value.trim();
    const data = document.getElementById('Data_dono').value;
    const horaNa = document.getElementById('horaNa_dono').value;
    const nomeP = document.getElementById('nomeP_dono').value.trim();
    const nomeM = document.getElementById('nomeM').value.trim();
    const idade = parseInt(document.getElementById('idade_dono').value, 10);
    const favcor = document.getElementById('favcor').value;
    const animal = document.getElementById('tipoPet_dono').value.trim();
    const myfile = document.getElementById('myfile').files[0];

    //Processar os dados

    if (!nome) {
        alert('Por favor, preencha o nome');
        return;
    } else {
        console.log(nome);
    }

    if (!sobrenome) {
        alert('Por favor, preencha o sobrenome');
        return;
    } else {
        console.log(sobrenome);
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 digitos');
        return;
    } else {
        console.log(cpf);
    }

    if (!phone) {
        alert('Por favor, preencha o telefone.');
        return;
    } else {
        console.log(phone);
    }
    
    if (!email) {
        alert('Por favor, preencha o e-mail');
        return;
    } else {
        console.log(email);
    }
    
    if (!senha || senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres');
        return;
    } else {
        console.log(senha);
    }

    if (senha !== confsenha) {
        alert('As senhas não estão iguais');
        return;
    } else {
        console.log(confsenha);
    }

    if (!genero) {
        alert('Por favor, informe o seu gênero');
        return;
    } else {
        console.log(genero.value);
    }
    
    if (!data) {
        alert('Por favor, preencha a data de nascimento');
        return;
    } else {
        console.log(data);
    }

    if (!horaNa) {
        alert('Por favor, selecione o horário do seu nascimento');
        return;
    } else {
        console.log(horaNa);
    }
    
    if (!nomeP) {
        alert('Por favor, preencha o nome do seu pai');
        return;
    } else {
        console.log(animal);
    }

    if (!nomeM) {
        alert('Por favor, preencha o nome da sua mãe');
        return;
    } else {
        console.log(animal);
    }
    
    if (isNaN(idade) || idade < 0) {
        alert('A idade deve ser um número maior que 0');
        return;
    } else {
        console.log(idade);
    }

    if (!favcor) {
        alert('Por favor, selecione a sua cor favorita.');
        return;
    } else {
        console.log(favcor);
    }

    if (!animal) {
        alert('Por favor, preencha o seu tipo de animal');
        return;
    } else {
        console.log(animal);
    }

    if (!myfile) {
        alert('Por favor, envie uma foto do seu pet.');
        return;
    } else {
        console.log(myfile);
    }

    //Devolver

    alert('Formulario enviado com sucesso');

}

function validapet() {

    //Pegar os dados

    const nome = document.getElementById('primeiroNome_pet').value.trim();
    const sobrenome = document.getElementById('sobrenome_pet').value.trim();
    const raca = document.getElementById('raca_pet').value.trim();
    const vacina_pet = document.querySelector('input[name="vacina_pet"]:checked');
    const data = document.getElementById('Data_pet').value;
    const horaNa = document.getElementById('horana_pet').value;
    const racaP = document.getElementById('racaP_pet').value.trim();
    const racaM = document.getElementById('racaM_pet').value.trim();
    const idade = parseInt(document.getElementById('idade_pet').value, 10);
    const sexo = document.getElementById('sexo_pet').value.trim();
    const olhocor = document.getElementById('olhocor').value;
    const sono = document.getElementById('sono_pet').value;
    const bravo_pet = document.querySelector('input[name="bravo_pet"]:checked');
    const carrinho = document.getElementById('carrinho_pet').value;
    const alimentacao = document.getElementById('alimentacao_pet').value.trim();

    //Processar os dados

    if (!nome) {
        alert('Por favor, preencha o nome do seu animal');
        return;
    } else {
        console.log(nome);
    }

    if (!sobrenome) {
        alert('Por favor, preencha o sobrenome');
        return;
    } else {
        console.log(sobrenome);
    }

    if (!raca) {
        alert('Por favor, preencha a raça do seu animal');
        return;
    } else {
        console.log(raca);
    }

    if (!vacina_pet ) {
        alert('Por favor, informe se seu animal já é vacinado');
        return;
    } else {
        console.log('vacinação pet:', vacina_pet .value);
    }

    if (!data) {
        alert('Por favor, preencha a data de nascimento');
        return;
    } else {
        console.log(data);
    }

    if (!horaNa) {
        alert('Por favor, selecione o horário do seu nascimento');
        return;
    } else {
        console.log(horaNa);
    }
    if (!racaP) {
        alert('Por favor, preencha a raça do pai do seu animal');
        return;
    } else {
        console.log(racaP);
    }

    if (!racaM) {
        alert('Por favor, preencha a raça da mãe do seu animal');
        return;
    } else {
        console.log(racaM);
    }
    
    if (isNaN(idade) || idade < 0) {
        alert('A idade deve ser um número maior que 0');
        return;
    } else {
        console.log(idade);
    }

    if (!sexo) {
        alert('Por favor, selecione o sexo do seu animal');
        return;
    } else {
        console.log(sexo);
    }


    if (!olhocor) {
        alert('Por favor, selecione a cor dos olhos do seu animal');
        return;
    } else {
        console.log(olhocor);
    }

    if (sono === '' || sono < 0 || sono > 10) {
        alert('Por favor, informe um nível de sono');
        return;
    } else {
        console.log('Nível de sono:', sono);
    }

    if (!bravo_pet) {
        alert('Por favor, informe se seu animal é bravo');
        return;
    } else {
        console.log('O animal é bravo:', bravo_pet.value);
    }

    if (carrinho === '' || carrinho < 0 || carrinho > 10) {
        alert('Por favor, informe um nível de carrinho');
        return;
    } else {
        console.log('Nível de carrinho:', carrinho);
    }

    if (!alimentacao) {
        alert('Por favor, preencha o seu tipo de alimentação do seu animal');
        return;
    } else {
        console.log(alimentacao);
    }

    //Devolver

    alert('Formulario enviado com sucesso');

}