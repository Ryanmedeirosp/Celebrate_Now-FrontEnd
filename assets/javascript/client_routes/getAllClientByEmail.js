    // Botão para obter todos os clientes de um cerimonialista
    const getClientsButton = document.querySelector("#getClientsButton");
    if (getClientsButton) {
        getClientsButton.addEventListener("click", () => {
            const ceremonialistId = document.getElementById("ceremonialistIdField").value.trim();
            if (!ceremonialistId) {
                alert("O ID do cerimonialista é obrigatório.");
                return;
            }

        });
    }