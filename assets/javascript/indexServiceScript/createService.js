document.addEventListener("DOMContentLoaded", () => {
    const buttonConfirmNewService = document.querySelector("#buttonConfirmNewService");

    buttonConfirmNewService.addEventListener("click", (event) => {
        event.preventDefault();

        // Captura os valores do formulário
        const name = document.getElementById("titleInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const phone = document.getElementById("phoneInput").value.trim(); // Telefone
        const documentNumber = document.getElementById("cnpjInput").value.trim(); // CPF ou CNPJ
        const cep = document.getElementById("cepInput").value.trim();
        const number = document.getElementById("houseNumberInput").value.trim();
        const serviceType = document.getElementById("typeServiceInput").value.trim();
        const descriptionArea = document.getElementById("descriptionArea").value.trim();
        const imageUrl = document.getElementById("files").value.trim();
        const alert = document.getElementById("alert");

        // Função para exibir mensagens de erro
        const showError = (message) => {
            alert.textContent = message;
            alert.style.color = "red";
        };

        // Função para exibir mensagem de sucesso
        const showSuccess = (message) => {
            alert.textContent = message;
            alert.style.color = "green";
        };

        // Validações
        if (!name) {
            return showError("O nome é obrigatório.");
        }

        if (!email || !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(email)) {
            return showError("Email inválido.");
        }
        if (!documentNumber || documentNumber.length !== 14) {
            return showError("Documento inválido. Deve conter 14 caracteres. Somente números.");
        }
        if (!cep || !/^\d{8}$/.test(cep)) {
            return showError("CEP inválido. Deve conter exatamente 8 dígitos. Somente números.");
        }
        if (!serviceType) {
            return showError("O serviço é obrigatório.");
        }
        if (!phone || !/^\+?[1-9][0-9]{1,14}$/.test(phone)) {
            return showError("Número de telefone inválido.");
        }
        if (!number || isNaN(number)) {
            return showError("O número da residência deve ser válido.");
        }
        if (!imageUrl) {
            return showError("A imagem é obrigatória.");
        }
        if (!descriptionArea) {
            return showError("A descrição é obrigatório.");
        }
        // Objeto com os dados validados
        const requestData = {
            name: name,
            email: email,
            cnpj: documentNumber,
            phone: phone,
            cep: cep,
            houseNumber: number,
            serviceType: serviceType,
            description: descriptionArea,
            imageUrl: imageUrl,
            ceremonialistEmail: localStorage.getItem("ceremonialistEmail")
        };

        // Envio ao backend
        fetch("http://localhost:8080/supplier", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (!response.ok) {
                    // Captura os erros retornados pelo backend
                    return response.json().then(err => {
                        throw new Error(err.message);
                    });
                }
                
            })
            .then(data => {
                showSuccess("Cadastro realizado com sucesso!");
                location.reload()
            })
            .catch(error => {
                console.error("Erro ao enviar os dados:", error);
                showError(error.message || "Erro ao cadastrar. Por favor, tente novamente.");
            });
    });
});
function logout() {
    // Limpa todo o localStorage
    localStorage.clear();

    // Redireciona para a página landingPage.html
    window.location.href = 'landingPage.html';
}  