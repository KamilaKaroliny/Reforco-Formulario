function valida() {

    //Pegar os dados

    const nome = document.getElementById('nome_maquinista').value.trim();
    const cpf = document.getElementById('cpf_maquinista').value.trim();
    const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);

    //Processar os dados

    if (!nome) {
        alert('Por favor, preencha o nome');
        return;
    } else {
        console.log(nome);
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 digitos');
        return;
    } else {
        console.log(cpf);
    }

    if (isNaN(idade) || idade < 21) {
        alert('A idade deve ser um número maior que trinta');
        return;
    } else {
        console.log(idade);
    }

    if (isNaN(experiencia) || experiencia < 3) {
        alert('Os anos de experiência devem ser maior que três ou igual');
        return;
    } else {
        console.log(experiencia);
    }

    //Devolver

    alert('Formulario enviado com sucesso');

}