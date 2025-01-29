function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    // Botão de criação de cliente
    const createClientButton = document.querySelector("#addButton");
    if (createClientButton) {
        createClientButton.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Captura os valores do formulário
            const name = document.getElementById("nameField").value.trim();
            const email = document.getElementById("emailField").value.trim();
            const password = document.getElementById("passwordField").value.trim();
            const confirmPassword = document.getElementById("confirmPasswordField").value.trim();
            const phone = document.getElementById("phoneNumber").value.trim();
            const cpf = document.getElementById("CpfOrCnpj").value.trim();
            const birthday = document.getElementById("birthdayField").value.trim();
            const cep = document.getElementById("cepField").value.trim();
            const houseNumber = document.getElementById("numberHouseField").value.trim();
            const ceremonialistEmail = document.getElementById("ceremonialistEmailField").value.trim();

            const alertArea = document.getElementById("title")
            // Função para exibir mensagens de erro
            const showError = (message) => {
                alertArea.textContent =  message;
                alertArea.style.color = "red";
            };

            // Validações
            if (!name) return showError("O nome é obrigatório.");
            if (!email && !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email))return showError("Email inválido.");
            if (!password && password.length < 8)return showError("A senha deve ter pelo menos 8 caracteres.");
            if (password !== confirmPassword)return showError("As senhas não coincidem.");
            if (!cpf && validateCPF(cpf))return showError("CPF inválido. Deve conter 11 dígitos.");
            if (!phone && !/^\+?[1-9][0-9]{1,14}$/.test(phone)) return showError("Número de telefone inválido.");
            if (!cep && !/^\d{8}$/.test(cep)) return showError("CEP inválido. Deve conter exatamente 8 dígitos.");
            if (!houseNumber && isNaN(houseNumber))return  showError("O número da residência deve ser válido.");
            if (!ceremonialistEmail)return showError("O email do cerimonialista é obrigatório.");

            // Objeto com os dados validados
            const requestData = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                cpf: cpf,
                birthday: birthday,
                cep: cep,
                houseNumber: houseNumber,
                ceremonialistEmail: ceremonialistEmail
            };

            // Envio ao backend
            fetch("http://localhost:8080/client", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        showError(err.message || "Erro ao processar a solicitação.");
                    });
                }
                location.reload()
            })
            .catch(error => {
                console.error("Erro ao enviar os dados:", error);
                showError("Erro ao cadastrar o cliente. Por favor, tente novamente.");
            });
        });
    }
    

});

