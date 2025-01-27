const prevPaginationButton = document.querySelector("#prev-page");
const nextPaginationButton = document.querySelector("#next-page");

const clientNotFoundMessage = document.querySelector(".client-not-found-message");

const mainContentDiv = document.querySelector(".budget-main-content");

const clientNotFoundDiv = "client-not-found-div-config";

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

            mainContentDiv.classList.remove(clientNotFoundDiv);

            const table = document.querySelector("table");
            table.style.display = "table";

            clientNotFoundMessage.style.display = "none";

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
    
                        <tr>
                            <td>${index + 1}.</td>
                            <td>
                                <input type="text" value="${item.title}" class="table-content-title" readonly>
                                <textarea name="" id="" readonly>${item.description}</textarea>
                            </td>
                            <td>
                                <input type="text" value="${item.price.toFixed(2)}" readonly>
                            </td>
                            <td>
                                <div class="table-button-field">
                                    <button class="table-button-delete"><i class="bi bi-pencil-fill"></i></button>
                                    <button class="table-button-edit"><i class="bi bi-trash3-fill"></i></button>                                                                       
                                </div>
                            </td>
                        </tr>
                
                    `;

                    budgetList.appendChild(row);
                });
            });

        } else {
            mainContentDiv.classList.add(clientNotFoundDiv);

            const table = document.querySelector("table");
            table.style.display = "none";

            clientNotFoundMessage.style.display = "grid";
        }

    })
    .catch((error) => {
        console.error("Erro ao buscar orçamentos:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
}

window.addEventListener("load", (event) =>{

    console.log(localStorage.getItem("actualBudgetIndex"));
});

prevPaginationButton.addEventListener("click", (event) =>{

    let index = parseInt(localStorage.getItem("actualBudgetIndex")) - 1;

    if (index > 0) {

        fillTableByIndex(index);  
    }
})

nextPaginationButton.addEventListener("click", (event) =>{

    let index = parseInt(localStorage.getItem("actualBudgetIndex")) + 1;

    fillTableByIndex(index);
})