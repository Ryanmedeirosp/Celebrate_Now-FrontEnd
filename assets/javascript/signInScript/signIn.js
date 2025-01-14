document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.querySelector("#divButtonSignIn button");

    signInButton.addEventListener("click", (event) => {
        event.preventDefault();

        // Captura os valores do formulário
        const name = document.getElementById("nameField").value.trim();
        const email = document.getElementById("emailField").value.trim();
        const password = document.getElementById("passwordField").value.trim();
        const confirmPassword = document.getElementById("confirmPasswordField").value.trim();
        const phone = document.getElementById("phoneNumber").value.trim(); // Telefone
        const documentNumber = document.getElementById("CpfOrCnpj").value.trim(); // CPF ou CNPJ
        const birthday = document.getElementById("birthdayField").value.trim()
        const cep = document.getElementById("cepField").value.trim();
        const number = document.getElementById("numberHouseField").value.trim();

        // Função para exibir mensagens de erro
        const showError = (message) => {
            alert(message);
            throw new Error(message);
        };

        // Validações
        if (!name) {
            showError("O nome é obrigatório.");
        }

        if (!email || !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email)) {
            showError("Email inválido.");
        }

        if (!password || password.length < 8) {
            showError("A senha deve ter pelo menos 8 caracteres.");
        }

        if (password !== confirmPassword) {
            showError("As senhas não coincidem.");
        }

        if (!documentNumber || documentNumber.length !== 11) {
            showError("Documento inválido. Deve conter 11 caracteres.");
        }

        if (!phone || !/^\+?[1-9][0-9]{1,14}$/.test(phone)) {
            showError("Número de telefone inválido.");
        }

        if (!cep || !/^\d{8}$/.test(cep)) {
            showError("CEP inválido. Deve conter exatamente 8 dígitos.");
        }

        if (!number || isNaN(number)) {
            showError("O número da residência deve ser válido.");
        }

        // Objeto com os dados validados
        const requestData = {
            name: name,
            email: email,
            password: password,
            document: documentNumber,
            birthday: birthday,
            phone: phone,
            cep: cep,
            houseNumber: number
            
        };

        // Envio ao backend
        fetch("http://localhost:8080/ceremonialist", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(... response => {
            console.log(response)
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || "Erro ao processar a solicitação.");
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Cadastro realizado com sucesso:", data);
            alert("Cadastro realizado com sucesso!");
            // Opcional: Redirecionar o usuário após o sucesso
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
            alert(error.message || "Erro ao cadastrar. Por favor, tente novamente.");
        });
    });
});
