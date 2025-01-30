const corpo = document.querySelector("main");
const list_customer = document.createElement("div");
list_customer.id = "list-customers";
list_customer.innerHTML = "<h2>Lista de Clientes</h2>";
corpo.appendChild(list_customer);

// Referência para a lista na sidebar
const sidebarList = document.querySelector("#sidebar-right #list-customers");

// Array para armazenar os clientes localmente (em memória)
const customers = [];

// Função para criar o modal de adição de cliente
function createClientModal() {
    const modal = document.createElement("div");
    modal.id = "clientAddModal";
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeButton = document.createElement("button");
    closeButton.id = "close";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => (modal.style.display = "none");

    const title = document.createElement("h2");
    title.id =  "title";
    title.textContent = "";

    // Campos de entrada
    const fields = [
        { label: "Nome", id: "nameField", type: "text" },
        { label: "Email", id: "emailField", type: "text" },
        { label: "Senha", id: "passwordField", type: "password" },
        { label: "Confirmar senha", id: "confirmPasswordField", type: "password" },
        { label: "CEP", id: "cepField", type: "text" },
        { label: "Número", id: "numberHouseField", type: "text" },
        { label: "Número de Telefone", id: "phoneNumber", type: "text" },
        { label: "CPF", id: "CpfOrCnpj", type: "text" },
        { label: "Data de Nascimento", id: "birthdayField", type: "date" },
        { label: "Email da Ceremonialista", id: "ceremonialistEmailField", type: "text" },
    ];

    const errorMessages = {}; // Objeto para mensagens de erro

    fields.forEach((field) => {
        const fieldDiv = document.createElement("div");
        fieldDiv.className = "fieldToFill";

        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.className = "field";

        // Contêiner de mensagens de erro
        const errorMessage = document.createElement("small");
        errorMessage.id = `${field.id}Error`;
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.display = "none"; // Oculto por padrão

        errorMessages[field.id] = errorMessage;

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        fieldDiv.appendChild(errorMessage);
        modalContent.appendChild(fieldDiv);
    });

    const addButton = document.createElement("button");
    addButton.id  = "addButton";

    addButton.textContent = "Adicionar Cliente";

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(addButton);
    modal.appendChild(modalContent);
    corpo.appendChild(modal);
}

// Função para popular as listas de clientes



function populateCustomerList(customers) {
    // Atualiza a lista principal
    list_customer.innerHTML = "<h2>Lista de Clientes</h2>";
    customers.forEach((customer) => {
        const customerDiv = document.createElement("div");
        customerDiv.id = "clients-dados";
        
        const nameElement = document.createElement("p");
        nameElement.textContent = `Nome: ${customer.name}`;
        
        const emailElement = document.createElement("p");
        emailElement.textContent = `Email: ${customer.email}`;
        const telefoneElement = document.createElement("p");
        telefoneElement.textContent = `telefone: ${customer.phone}`;
        
        customerDiv.appendChild(telefoneElement);
        customerDiv.appendChild(nameElement);
        customerDiv.appendChild(emailElement);
        
        list_customer.appendChild(customerDiv);
    });

    // Atualiza a lista na sidebar
    sidebarList.innerHTML = ""; // Limpa o conteúdo existente
    customers.forEach((customer) => {
        // Cria o contêiner do cliente
        let clienteSidebarDiv = document.createElement("div");
        clienteSidebarDiv.className = "customer";

        // Foto do cliente
        let photoCustomerDiv = document.createElement("div");
        photoCustomerDiv.className = "photoCustomerDiv";
        let photoCustomer = document.createElement("img");
        photoCustomer.className = "photoCustomer";
        photoCustomer.src = "../assets/images/user-icon-removebg-preview.svg";

        // Informações do cliente
        let informationsCustomerDiv = document.createElement("div");
        informationsCustomerDiv.className = "informationsCustomerDiv";

        let nameInformationCustomer = document.createElement("p");
        nameInformationCustomer.className = "nameInformationCustomer";
        nameInformationCustomer.textContent = `Nome: ${customer.name}`;

        let contractNumberInformationCustomer = document.createElement("p");
        contractNumberInformationCustomer.className = "contractNumberInformationCustomer";
        contractNumberInformationCustomer.textContent = `Email: ${customer.email}`;

        let eventDateInformationCustomer = document.createElement("p");
        eventDateInformationCustomer.className = "eventDateInformationCustomer";
        eventDateInformationCustomer.textContent = `Telefone: ${customer.phone || "N/A"}`; // Exemplo adicional

        // Agrupa as informações e foto
        informationsCustomerDiv.appendChild(nameInformationCustomer);
        informationsCustomerDiv.appendChild(contractNumberInformationCustomer);
        informationsCustomerDiv.appendChild(eventDateInformationCustomer);

        photoCustomerDiv.appendChild(photoCustomer);

        // Agrupa tudo no contêiner principal
        clienteSidebarDiv.appendChild(photoCustomerDiv);
        clienteSidebarDiv.appendChild(informationsCustomerDiv);

        // Adiciona o cliente à lista da sidebar
        sidebarList.appendChild(clienteSidebarDiv);
    });
}

// Botão para abrir o modal
const btnAddClients = document.createElement("button");
btnAddClients.id = "btnAddClients";
btnAddClients.textContent = "Adicionar Cliente";
btnAddClients.onclick = () => {
    const modal = document.getElementById("clientAddModal");
    modal.style.display = "flex"; // Exibe o modal
};

corpo.appendChild(btnAddClients); // Adiciona o botão ao conteúdo principal
corpo.appendChild(list_customer); // Garante que a lista esteja abaixo do botão

// Inicializa o modal
createClientModal();
fetch(`http://localhost:8080/client/${localStorage.getItem("ceremonialistId")}`, {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
.then(response => {
    if (!response.ok) {
        return response.json().then(err => {
            throw new Error(err.message);
        });
    }
    return response.json();
})
.then(data => {
    console.log(data);
        // Chama a função para popular as listas de clientes
    populateCustomerList(data);
   
})
.catch(error => {
    console.error("Erro ao carregar os clientes:", error);
    alert("Erro ao carregar os clientes.");
});