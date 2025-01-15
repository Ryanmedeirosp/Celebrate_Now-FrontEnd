const body = document.querySelector("main");

let divAllContentBudget = document.createElement("div");
divAllContentBudget.id = "divAllContentBudget";
let teste = document.createElement("h1");
teste.textContent = "Orçamentos";
divAllContentBudget.appendChild(teste);
corpo.appendChild(divAllContentBudget);
currentContent = divAllContentBudget;


document.addEventListener("DOMContentLoaded", () => {
    // Criar orçamento
    createBudgetForm.addEventListener("click", (event) => {
        event.preventDefault();

        const clientEmail = document.getElementById("clientEmail").value.trim();
        const supplierCnpj = document.getElementById("supplierCnpj").value.trim();

        if (!clientEmail || !supplierCnpj) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        const requestData = {
            clientEmail: clientEmail,
            supplierCnpj: supplierCnpj,
        };

        fetch("http://localhost:8080/budget", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
        .then(response => {
            if (!response.ok) {
                // Captura os erros retornados pelo backend
                return response.json().then(err => {
                    throw new Error(err.message);
                });
            }
            return response.json();
        })
            .then((data) => {
                alert(`Orçamento criado com sucesso! ID: ${data}`);
            })
            .catch((error) => {
                console.error("Erro ao criar orçamento:", error);
                alert(error.message || "Erro ao criar orçamento.");
            });
    });
});
