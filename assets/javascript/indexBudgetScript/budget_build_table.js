const editTableButton = document.querySelector(".table-button-edit");
const deleteTableButton = document.querySelector(".table-button-delete");

function buildTable(table, data){

    //Corpo
    let tbody = document.createElement("tbody");

    //Cabeçalho
    let thead = document.createElement("thead");
    let trHead = document.createElement("tr");

    //Linha do Cabeçalho
    let thNumber = document.createElement("th");
    thNumber.innerHTML = "&#8470";

    let thDescription = document.createElement("th");
    thDescription.innerHTML = "Descrição do produto";

    let thUnit = document.createElement("th");
    thUnit.innerHTML = "Unidade";

    let thPrice = document.createElement("th");
    thPrice.innerHTML = "Preço";

    let thButtons = document.createElement("th");
    thButtons.innerHTML = "";

    trHead.appendChild(thNumber);
    trHead.appendChild(thDescription);
    trHead.appendChild(thUnit);
    trHead.appendChild(thPrice);
    trHead.appendChild(thButtons);

    thead.appendChild(trHead);

    table.appendChild(thead);

    for (let index = 0; index < items.length; index++) {
        
        let tr = document.createElement("tr");

        let tdIndex = document.createElement("td");
        let tdTitleDescription = document.createElement("td");
        let tdUnit = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdButtons = document.createElement("td");

        //Numeração ou Index do Item
        tdIndex.innerHTML = index;

        //Título e Descrição do Item
        let title = document.createElement("p");
        let titleEmphasized = document.createElement("em");

        titleEmphasized.innerHTML = items[index].title;
        
        title.appendChild(titleEmphasized);

        tdTitleDescription.appendChild(title);

        let description = document.createElement("p");
        
        description.innerHTML = items[index].description;

        tdTitleDescription.appendChild(description);

        //Unidade do Item
        tdUnit.innerHTML = "Z";

        //Preço do Item
        tdPrice.innerHTML = "R$";
        
        let price = document.createElement("span");
        price.innerHTML = items[index].price;

        tdPrice.appendChild(price);

        //Botões
        let divButtons = document.createElement("div");
        divButtons.className = "table-button-field";

        let deleteButton = document.createElement("button");
        deleteButton.className = "table-button-delete";

        let iconDeleteButton = document.createElement("i");
        iconDeleteButton.className = "bi bi-trash3-fill";

        deleteButton.addEventListener("click", (event) =>{

            tbody.innerHTML = "";
        });

        deleteButton.appendChild(iconDeleteButton);

        let editButton = document.createElement("button");
        editButton.className = "table-button-edit";

        let iconEditButton = document.createElement("i");
        iconEditButton.className = "bi bi-pencil-fill";

        editButton.addEventListener("click", (event) =>{

            //Salvar os dados em variáveis para depois trocar os campos por Inputs.
        });

        editButton.appendChild(iconEditButton);

        divButtons.appendChild(editButton);
        divButtons.appendChild(deleteButton);

        tdButtons.appendChild(divButtons);
        
        //Adicionando ao Tr

        tr.appendChild(tdIndex);
        tr.appendChild(tdTitleDescription);
        tr.appendChild(tdUnit);
        tr.appendChild(tdPrice);
        tr.appendChild(tdButtons);
    }

    table.appendChild(tbody);
}

editTableButton.addEventListener("click", (event) =>{

    console.log("Edit");
});

deleteTableButton.addEventListener("click", (event) =>{

    console.log("Delete");
});

// function tableContent(table) {
    
//     // Linha da Tabela
//     let tr = document.createElement("tr");

//     // Cédula do Index
//     let tdIndex = document.createElement("td");
//     tdIndex.textContent = `${index + 1}.`;

//     // Cédula do Título
//     let tdTitle = document.createElement("td");
//     let inputTitleField = document.createElement("input");

//     inputTitleField.type = "text";
//     inputTitleField.value = `${item.title}`;
//     inputTitleField.className = "table-content-title";
//     inputTitleField.readOnly = true;

//     tdTitle.appendChild(inputTitleField);

//     // Cédula do Descriçao
//     let textAreaDescriptionField = document.createElement("textarea");
    
//     textAreaDescriptionField.readOnly = true;
//     textAreaDescriptionField.textContent = `${item.description}`;

//     tdTitle.appendChild(textAreaDescriptionField);

//     // Célula do Preço
//     let tdPrice = document.createElement("td");
//     let inputPriceField = document.createElement("input");

//     inputPriceField.type = "text";
//     inputPriceField.value = `${item.price.toFixed(2)}`;
//     inputPriceField.readOnly = true;

//     tdPrice.appendChild(inputPriceField);

//     // Cédula dos botões
//     let tdButtons = document.createElement("td");

//     let divButtons = document.createElement("div");
//     divButtons.className = "table-button-field";

//     divButtons.className = "table-button-field";

//     let editButton = document.createElement("button");
//     editButton.className = "table-button-edit";
    
//     let iconEditButton = document.createElement("i");
//     iconEditButton.className = "bi bi-pencil-fill";

//     editButton.appendChild(iconEditButton);

//     editButton.addEventListener("click", (event) =>{

//         console.log("Editar cédula");
//     });

//     divButtons.appendChild(editButton);

//     let deleteButton = document.createElement("button");
//     deleteButton.className = "table-button-delete";

//     let iconDeleteButton = document.createElement("i");
//     iconDeleteButton.className = "bi bi-trash3-fill";

//     deleteButton.appendChild(iconDeleteButton);

//     deleteButton.addEventListener("click", (event) =>{

//         console.log("Excluir cédula");
//     })

//     divButtons.appendChild(deleteButton);

//     tdButtons.appendChild(divButtons);

//     tr.appendChild(tdIndex);
//     tr.appendChild(tdTitle);
//     tr.appendChild(tdPrice);
//     tr.appendChild(tdButtons);

//     table.appendChild(tr);
// }