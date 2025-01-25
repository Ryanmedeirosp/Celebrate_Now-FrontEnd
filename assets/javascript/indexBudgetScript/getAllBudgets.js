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
            const totalAmount = document.getElementById("total-amount")
            budgetList.innerHTML = ""; // Limpa a tabela antes de preencher

            localStorage.setItem("actualBudgetIndex", 1);
            
            data.forEach((budget) => {
                totalAmount.innerHTML = budget.totalAmount
                budget.items.forEach((item, index) => {
                    // Criação da linha para cada item
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${index + 1}.</td>
                        <td>
                            <p><em>${item.title}</em></p>
                            <p>${item.description}</p>
                        </td>
                        <td>R$<span>${item.price.toFixed(2)}</span></td>
                        <td>
                            <div class="table-button-field">
                                <button class="table-button-delete"><i class="bi bi-pencil-fill"></i></button>
                                <button class="table-button-edit"><i class="bi bi-trash3-fill"></i></button>                                                                       
                            </div>
                        </td>
                
                    `;

                    budgetList.appendChild(row);
                });
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
