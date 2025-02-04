document.addEventListener("DOMContentLoaded", () => {

    let clientArray = JSON.parse(localStorage.getItem("customersArray"));

    fetch(`http://localhost:8080/budget/${clientArray[0]}/${localStorage.getItem("ceremonialistId")}`, {
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
            const totalAmount = document.getElementById("total-amount");
            const clientName = document.getElementById("budget-client-name")
            const contract = document.getElementById("budget-contract-number")
            const eventDay = document.getElementById("budget-event-day")
            budgetList.innerHTML = ""; // Limpa a tabela antes de preencher

            localStorage.setItem("actualBudgetIndex", 0);
            
            data.forEach((budget) => {
                clientName.innerHTML = `Cliente: ${budget.client}` ;
                contract.innerHTML = `Contrato: ${budget.contract}`;
                eventDay.innerHTML = `Dia do Evento: ${budget.date}`;
              
                totalAmount.innerHTML = budget.totalAmount
                budget.items.forEach((item, index) => {
                   

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

                        //Background
                        inputTitleField.style.background = "#D9D9D9";
                        textAreaDescriptionField.style.background = "#D9D9D9";
                        inputPriceField.style.background = "#D9D9D9";

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

                        //Background
                        inputTitleField.style.background = "none";
                        textAreaDescriptionField.style.background = "none";
                        inputPriceField.style.background = "none";

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

                        //Background
                        inputTitleField.style.background = "none";
                        textAreaDescriptionField.style.background = "none";
                        inputPriceField.style.background = "none";

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
            alert("Nenhum orçamento encontrado para o cliente informado.");
        }
    })
    .catch((error) => {
        console.error("Erro ao buscar orçamentos:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
});

function tableContent(table) {
    
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

    let editButton = document.createElement("button");
    editButton.className = "table-button-edit";
    
    let iconEditButton = document.createElement("i");
    iconEditButton.className = "bi bi-pencil-fill";

    editButton.appendChild(iconEditButton);

    editButton.addEventListener("click", (event) =>{

        console.log("Editar cédula");
    });

    divButtons.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "table-button-delete";

    let iconDeleteButton = document.createElement("i");
    iconDeleteButton.className = "bi bi-trash3-fill";

    deleteButton.appendChild(iconDeleteButton);

    deleteButton.addEventListener("click", (event) =>{

        console.log("Excluir cédula");
    })

    divButtons.appendChild(deleteButton);

    tdButtons.appendChild(divButtons);

    tr.appendChild(tdIndex);
    tr.appendChild(tdTitle);
    tr.appendChild(tdPrice);
    tr.appendChild(tdButtons);

    budgetList.appendChild(tr);
}