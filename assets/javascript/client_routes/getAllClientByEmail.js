    // Botão para obter todos os clientes de um cerimonialista
    const getClientsButton = document.querySelector("#getClientsButton");
    if (getClientsButton) {
        getClientsButton.addEventListener("click", () => {
            const ceremonialistId = document.getElementById("ceremonialistIdField").value.trim();
            if (!ceremonialistId) {
                alert("O ID do cerimonialista é obrigatório.");
                return;
            }

            fetch(`http://localhost:8080/client/${ceremonialistId}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log("Clientes recebidos:", data);
                alert("Clientes carregados com sucesso! Confira o console para detalhes.");
            })
            .catch(error => {
                console.error("Erro ao carregar os clientes:", error);
                alert("Erro ao carregar os clientes.");
            });
        });
    }