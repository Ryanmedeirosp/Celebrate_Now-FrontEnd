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


                    // // Criação da linha para cada item
                    // const row = document.createElement("tr");

                    // row.innerHTML = `
    
                    //     <tr>
                    //         <td>${index + 1}.</td>
                    //         <td>
                    //             <input type="text" value="${item.title}" class="table-content-title" readonly>
                    //             <textarea name="" id="" readonly>${item.description}</textarea>
                    //         </td>
                    //         <td>
                    //             <input type="text" value="${item.price.toFixed(2)}" readonly>
                    //         </td>
                    //         <td>
                    //             <div class="table-button-field">
                    //                 <button class="table-button-edit"><i class="bi bi-pencil-fill"></i></button>                                   
                    //                 <button class="table-button-delete"><i class="bi bi-trash3-fill"></i></button>                                                                       
                    //             </div>
                    //         </td>
                    //     </tr>
                
                    // `;

                    // budgetList.appendChild(row);

                    // Linha da Tabela
                    let tr = document.createElement("tr");

                    // Cédula do Index
                    let tdIndex = document.createElement("td");
                    tdIndex.textContent = `${index + 1}.`;

                    // Cédula do Título
                    let tdTitle = document.createElement("td");
                    let inputTitleField = document.createElement("input");

                    inputTitleField.type = "text";
                    inputTitleField.value = `${item.title}`;
                    inputTitleField.className = "table-content-title";
                    inputTitleField.readOnly = true;

                    tdTitle.appendChild(inputTitleField);

                    // Cédula do Descriçao
                    let textAreaDescriptionField = document.createElement("textarea");
                    
                    textAreaDescriptionField.readOnly = true;
                    textAreaDescriptionField.textContent = `${item.description}`;

                    tdTitle.appendChild(textAreaDescriptionField);

                    // Célula do Preço
                    let tdPrice = document.createElement("td");
                    let inputPriceField = document.createElement("input");

                    inputPriceField.type = "text";
                    inputPriceField.value = `${item.price.toFixed(2)}`;
                    inputPriceField.readOnly = true;

                    tdPrice.appendChild(inputPriceField);

                    // Cédula dos botões
                    let tdButtons = document.createElement("td");

                    let divButtons = document.createElement("div");
                    divButtons.className = "table-button-field";

                    divButtons.className = "table-button-field";

                    //Edit
                    let editButton = document.createElement("button");
                    editButton.className = "table-button-edit";
                    
                    let iconEditButton = document.createElement("i");
                    iconEditButton.className = "bi bi-pencil-fill";

                    editButton.appendChild(iconEditButton);

                    editButton.addEventListener("click", (event) =>{

                        //Ativação dos campos de texto
                        inputTitleField.readOnly = false;
                        textAreaDescriptionField.readOnly = false;
                        inputPriceField.readOnly = false;

                        //Ativação dos botões
                        confirmEditButton.style.display = "block";
                        cancelEditButton.style.display = "block";

                        //Desativando os botões
                        editButton.style.display = "none";
                        deleteButton.style.display = "none";

                        console.log("Editar cédula");
                    });

                    divButtons.appendChild(editButton);

                    //Delete
                    let deleteButton = document.createElement("button");
                    deleteButton.className = "table-button-delete";

                    let iconDeleteButton = document.createElement("i");
                    iconDeleteButton.className = "bi bi-trash3-fill";

                    deleteButton.appendChild(iconDeleteButton);

                    deleteButton.addEventListener("click", (event) =>{

                        budgetList.innerHTML = "";

                        console.log("Excluir cédula");
                    })

                    divButtons.appendChild(deleteButton);

                    //Inserção dos botões de Confirmação e Cancelamento

                    //Confirm
                    let confirmEditButton = document.createElement("button");
                    confirmEditButton.className = "table-button-edit-confirm";

                    confirmEditButton.style.display = "none";

                    let confirmEditButtonIcon = document.createElement("i");
                    confirmEditButtonIcon.className = "bi bi-check2";

                    confirmEditButton.addEventListener("click", (event) =>{

                        //Desativação dos campos de texto
                        inputTitleField.readOnly = true;
                        textAreaDescriptionField.readOnly = true;
                        inputPriceField.readOnly = true;

                        //Ativação dos botões
                        editButton.style.display = "block";
                        deleteButton.style.display = "block";

                        //Desativando os botões
                        confirmEditButton.style.display = "none";
                        cancelEditButton.style.display = "none";
                        
                        console.log("Confirmar edição");
                    });

                    confirmEditButton.appendChild(confirmEditButtonIcon);

                    //Cancel
                    let cancelEditButton = document.createElement("button");
                    cancelEditButton.className = "table-button-edit-cancel";

                    cancelEditButton.style.display = "none";

                    let cancelEditButtonIcon = document.createElement("i");
                    cancelEditButtonIcon.className = "bi bi-x-circle";

                    cancelEditButton.addEventListener("click", (event) =>{

                        //Desativação dos campos de texto
                        inputTitleField.readOnly = true;
                        textAreaDescriptionField.readOnly = true;
                        inputPriceField.readOnly = true;

                        //Ativação dos botões
                        editButton.style.display = "block";
                        deleteButton.style.display = "block";

                        //Desativando os botões
                        confirmEditButton.style.display = "none";
                        cancelEditButton.style.display = "none";

                        console.log("Cancelar edição");
                    });

                    cancelEditButton.appendChild(cancelEditButtonIcon);

                    divButtons.appendChild(confirmEditButton);
                    divButtons.appendChild(cancelEditButton);

                    //Adicionar

                    tdButtons.appendChild(divButtons);

                    tr.appendChild(tdIndex);
                    tr.appendChild(tdTitle);
                    tr.appendChild(tdPrice);
                    tr.appendChild(tdButtons);

                    budgetList.appendChild(tr);


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