document.addEventListener("DOMContentLoaded", async () => {

    console.log(localStorage.getItem("ceremonialistId"));
    
    const clientArray = JSON.parse(localStorage.getItem("clientsArray"));
    const ceremonialistId = localStorage.getItem("ceremonialistId");
    let budgetsArray = JSON.parse(localStorage.getItem("budgetsArray")) || [];

    //Index atual da paginação
    localStorage.setItem("actualBudgetIndex", 0);

    console.log("getAllBudget --> localStorage: ", budgetsArray);

    if (!clientArray || !ceremonialistId) {
        alert("Erro: Cliente ou Cerimonialista não encontrados.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/budget/${budgetsArray[0]}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        const data = await response.json();
        console.log("getAllBudget --> Orçamento recebido:", data);

        if (data.length === 0) {
            alert("Nenhum orçamento encontrado.");
            return;
        }

        const budgetList = document.getElementById("budget-table");
        const totalAmount = document.getElementById("total-amount");
        const clientName = document.getElementById("budget-client-name");
        const eventDay = document.getElementById("budget-event-day");

        budgetList.innerHTML = ""; // Limpa a tabela antes de preencher

        localStorage.setItem("actualBudget", data.budgetId);

        // Apenas exibe cliente e data do evento do primeiro orçamento (evita repetição)
        
        clientName.innerHTML = `Cliente: ${data.client}`;
        eventDay.innerHTML = `Dia do Evento: ${data.date}`;
        

        totalAmount.innerHTML = data.totalAmount;

        data.items.forEach((item, index) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${index + 1}.</td>
                <td>
                    <input type="text" value="${item.title}" class="table-content-title" readonly>
                    <textarea readonly>${item.description}</textarea>
                </td>
                <td>
                    <input type="text" value="${item.price.toFixed(2)}" readonly>
                </td>
                <td class="table-button-field">
                    <button class="table-button-edit"><i class="bi bi-pencil-fill"></i></button>
                    <button class="table-button-delete"><i class="bi bi-trash3-fill"></i></button>
                    <button class="table-button-edit-confirm" style="display: none;"><i class="bi bi-check2"></i></button>
                    <button class="table-button-edit-cancel" style="display: none;"><i class="bi bi-x-circle"></i></button>
                </td>
            `;

            const inputTitle = tr.querySelector(".table-content-title");
            const inputDescription = tr.querySelector("textarea");
            const inputPrice = tr.querySelector("td:nth-child(3) input");

            const editButton = tr.querySelector(".table-button-edit");
            const deleteButton = tr.querySelector(".table-button-delete");
            const confirmButton = tr.querySelector(".table-button-edit-confirm");
            const cancelButton = tr.querySelector(".table-button-edit-cancel");

            editButton.addEventListener("click", () => {
                inputTitle.readOnly = false;
                inputDescription.readOnly = false;
                inputPrice.readOnly = false;
                inputTitle.style.background = "#D9D9D9";
                inputDescription.style.background = "#D9D9D9";
                inputPrice.style.background = "#D9D9D9";

                confirmButton.style.display = "block";
                cancelButton.style.display = "block";
                editButton.style.display = "none";
                deleteButton.style.display = "none";
            });

            confirmButton.addEventListener("click", () => {
                inputTitle.readOnly = true;
                inputDescription.readOnly = true;
                inputPrice.readOnly = true;
                inputTitle.style.background = "none";
                inputDescription.style.background = "none";
                inputPrice.style.background = "none";

                editButton.style.display = "block";
                deleteButton.style.display = "block";
                confirmButton.style.display = "none";
                cancelButton.style.display = "none";
            });

            cancelButton.addEventListener("click", () => {
                inputTitle.readOnly = true;
                inputDescription.readOnly = true;
                inputPrice.readOnly = true;
                inputTitle.style.background = "none";
                inputDescription.style.background = "none";
                inputPrice.style.background = "none";

                editButton.style.display = "block";
                deleteButton.style.display = "block";
                confirmButton.style.display = "none";
                cancelButton.style.display = "none";
            });

            deleteButton.addEventListener("click", () => {
                budgetList.removeChild(tr);
            });

            budgetList.appendChild(tr);
        });

    } catch (error) {
        console.error("Erro ao buscar orçamentos:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    }
});
