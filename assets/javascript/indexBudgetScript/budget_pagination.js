const prevPaginationButton = document.querySelector("#prev-page");
const nextPaginationButton = document.querySelector("#next-page");

async function fillTableByIndex(id) {

    id = id.toString();

    fetch(`http://localhost:8080/budget/${id}`, {
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

            const table = document.querySelector("table");
            table.style.display = "table";

            //NOTA: Montar a TABELA novamente para evitar erros pois a DIV está sendo limpada para montar a mensagem de erro.

            // const budgetMainContent = document.querySelector(".budget-main-content");
            // budgetMainContent.innerHTML = "";

            const budgetList = document.getElementById("budget-table");
            const totalAmount = document.getElementById("total-amount");
            budgetList.innerHTML = ""; // Limpa a tabela antes de preencher

            localStorage.setItem("actualBudgetIndex", id);
            
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

            const table = document.querySelector("table");
            table.style.display = "none";

            const notFoundClass = "client-not-found";

            const budgetMainContent = document.querySelector(".budget-main-content");

            budgetMainContent.innerHTML = `
                <div class="client-not-found-message">
                    <p>Nenhum orçamento encontrado para o cliente informado.</p>
                </div>
            `;

            budgetMainContent.classList.add(notFoundClass);

            alert("Nenhum orçamento encontrado para o cliente informado.");
        }

    })
    .catch((error) => {
        console.error("Erro ao buscar orçamentos:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
}

window.addEventListener("load", (event) =>{

    console.log(localStorage.getItem("actualBudgetIndex"));
    console.log("PEIXE");
});

prevPaginationButton.addEventListener("click", (event) =>{

    let index = parseInt(localStorage.getItem("actualBudgetIndex")) - 1;

    if (index > 0) {

        fillTableByIndex(index);  
        console.log("Barracuda PREV ", index);
    }
})

nextPaginationButton.addEventListener("click", (event) =>{

    let index = parseInt(localStorage.getItem("actualBudgetIndex")) + 1;

    fillTableByIndex(index);

    console.log("Pirarucu NEXT ", index);
})