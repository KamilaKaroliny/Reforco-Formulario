function validadono() {

    //Pegar os dados

    const nome = document.getElementById('primeiroNome_dono').value.trim();
    const sobrenome = document.getElementById('sobrenome_dono').value.trim();
    const cpf = document.getElementById('cpf_dono').value.trim();
    //telefone
    //email
    //senha
    //confirmação de senha
    //radio genero
    //data
    //hora
    const nomeP = document.getElementById('nomeP_dono').value.trim();
    const nomeM = document.getElementById('nomeM_dono').value.trim();
    const idade = parseInt(document.getElementById('idade_dono').value, 10);
    //cor 
    const animal = document.getElementById('tipoPet_dono').value.trim();
    //foto do animal

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
    //telefone
    //email
    //senha
    //confirmação de senhra
    //radio genero
    //data
    //hora
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
    //cor
    if (!animal) {
        alert('Por favor, preencha o seu tipo de animal');
        return;
    } else {
        console.log(animal);
    }
    //foto do animal

    //Devolver

    alert('Formulario enviado com sucesso');

}

function validapet() {

    //Pegar os dados

    const nome = document.getElementById('primeiroNome_pet').value.trim();
    const sobrenome = document.getElementById('sobrenome_pet').value.trim();
    const raca = document.getElementById('raca_pet').value.trim();
    //radio vacina
    //data
    //hora
    const racaP = document.getElementById('racaP_pet').value.trim();
    const racaM = document.getElementById('racaM_pet').value.trim();
    const idade = parseInt(document.getElementById('idade_pet').value, 10);
    //radio F ou M
    //cor 
    //opção
    //radio bravo
    //range carrinho
    const alimentacao = document.getElementById('alimentacao_pet').value.trim();

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

    if (!raca) {
        alert('Por favor, preencha a raça do seu animal');
        return;
    } else {
        console.log(raca);
    }
    //radio vacina
    //data
    //hora
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
    //radio F ou M
    //cor 
    //opção
    //radio bravo
    //range carrinho
    if (!alimentacao) {
        alert('Por favor, preencha o seu tipo de alimentação do seu animal');
        return;
    } else {
        console.log(alimentacao);
    }

    //Devolver

    alert('Formulario enviado com sucesso');

}