document.addEventListener("DOMContentLoaded", () => {

    fetch(`http://localhost:8080/budget/1`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message);
            });
        }
        return response.json();
    })
    .then((data) => {
        console.log("Orçamentos recebidos:", data);
        if (data.length > 0) {
            const budgetList = document.getElementById("budget-table");
            budgetList.innerHTML = ""; // Limpa a lista antes de preencher

            data.forEach((budget) => {

                const listItem = document.createElement("li");
                listItem.textContent = `Fornecedor: ${budget.items[0].title}, Cliente: ${budget.client}, Total: R$: ${budget.totalAmount}`;
                budgetList.appendChild(listItem);

                // buildTable(budgetMainContent, budget.items);

            });
        } else {
            alert("Nenhum orçamento encontrado para o cliente informado.");
        }
    })
    .catch((error) => {
        console.error("Erro ao buscar orçamentos:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
});
