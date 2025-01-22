const corpo = document.querySelector("main");
const list_customer = document.createElement("div");
list_customer.id = "list-customers";
list_customer.innerHTML = "<h2>Lista de Clientes</h2>";
corpo.appendChild(list_customer);

// Referência para a lista na sidebar
const sidebarList = document.querySelector("#sidebar-right #list-customers");

// Array para armazenar os clientes localmente (em memória)
const customers = [];

// Function to create the modal for adding a client
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
    title.textContent = "Adicionar Cliente";

    // Create input fields without a form
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
    ];

    const errorMessages = {}; // Object to hold error messages for validation

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

        // Error message container
        const errorMessage = document.createElement("small");
        errorMessage.id = `${field.id}Error`;
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.display = "none"; // Hidden by default

        errorMessages[field.id] = errorMessage;

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        fieldDiv.appendChild(errorMessage);
        modalContent.appendChild(fieldDiv);
    });

    const addButton = document.createElement("button");
    addButton.textContent = "Adicionar Cliente";
    addButton.onclick = () => {
        // Validation
        let isValid = true;

        // Clear all previous error messages
        Object.values(errorMessages).forEach((error) => {
            error.style.display = "none";
        });

        // Check required fields
        if (!document.getElementById("nameField").value.trim()) {
            errorMessages["nameField"].textContent = "O nome é obrigatório.";
            errorMessages["nameField"].style.display = "block";
            isValid = false;
        }
        if (!document.getElementById("emailField").value.trim()) {
            errorMessages["emailField"].textContent = "O email é obrigatório.";
            errorMessages["emailField"].style.display = "block";
            isValid = false;
        }
        if (
            document.getElementById("passwordField").value !==
            document.getElementById("confirmPasswordField").value
        ) {
            errorMessages["confirmPasswordField"].textContent =
                "As senhas não coincidem.";
            errorMessages["confirmPasswordField"].style.display = "block";
            isValid = false;
        }

        // If validation fails, stop here
        if (!isValid) return;

        // Gather form data
        const newCustomer = {
            name: document.getElementById("nameField").value,
            email: document.getElementById("emailField").value,
            cep: document.getElementById("cepField").value,
            number: document.getElementById("numberHouseField").value,
            phoneNumber: document.getElementById("phoneNumber").value,
            cpfOrCnpj: document.getElementById("CpfOrCnpj").value,
            birthday: document.getElementById("birthdayField").value,
        };

        // Add the new customer to the list
        customers.push(newCustomer);

        // Populate the customer lists
        populateCustomerList(customers);

        // Clear the input fields
        fields.forEach((field) => {
            document.getElementById(field.id).value = ""; // Clear each input
        });

        // Close the modal
        modal.style.display = "none";
    };

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(addButton);
    modal.appendChild(modalContent);
    corpo.appendChild(modal);
}

// Function to populate the customer list in both main and sidebar
function populateCustomerList(customers) {
    // Update main list
    list_customer.innerHTML = "<h2>Lista de Clientes</h2>";
    customers.forEach((customer) => {
        const customerDiv = document.createElement("span");
        customerDiv.id="clients-dados"
        
        customerDiv.textContent = `Nome: ${customer.name},  Email: ${customer.email}`;
        list_customer.appendChild(customerDiv);
    });

    // Update sidebar list
    sidebarList.innerHTML = ""; // Clear existing content
    customers.forEach((customer) => {
        const sidebarCustomerDiv = document.createElement("span");
        sidebarCustomerDiv.id="sidebar-dados"
        sidebarCustomerDiv.textContent = customer.name; // Display only the name in the sidebar
        sidebarList.appendChild(sidebarCustomerDiv);
    });
}

// Add event listener for the button to open the modal
const btnAddClients = document.createElement("button");
btnAddClients.id = "btnAddClients";
btnAddClients.textContent = "Adicionar Cliente";
btnAddClients.onclick = () => {
    const modal = document.getElementById("clientAddModal");
    modal.style.display = "flex"; // Show the modal
};

corpo.appendChild(btnAddClients); // Append the button to the main content
corpo.appendChild(list_customer); // Ensure list_customer is below the button

// Initialize the modal
createClientModal();
