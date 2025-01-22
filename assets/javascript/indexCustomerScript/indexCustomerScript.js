const corpo = document.querySelector("main");
const list_customer = document.querySelector("#list-customers");
const btnSeeAllCustomers = document.querySelector("#btn-see-all-customers");

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
    closeButton.onclick = () => modal.style.display = "none";

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

    fields.forEach(field => {
        const fieldDiv = document.createElement("div");
        fieldDiv.className = "fieldToFill";

        const label = document.createElement("label");
        label.setAttribute("for", field.id);
        label.textContent = field.label;

        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.className = "field";

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);
        modalContent.appendChild(fieldDiv);
    });

    const addButton = document.createElement("button");
    addButton.textContent = "Adicionar Cliente";
    addButton.onclick = () => {
        // Gather form data
        const newCustomer = {
            name: document.getElementById("nameField").value,
            email: document.getElementById("emailField").value,
            // Add other fields as necessary
        };

        // Add the new customer to the list
        const customers = JSON.parse(localStorage.getItem("customers")) || [];
        customers.push(newCustomer);
        localStorage.setItem("customers", JSON.stringify(customers));

        // Populate the customer list
        populateCustomerList(customers);

        // Clear the input fields
        fields.forEach(field => {
            document.getElementById(field.id).value = ""; // Clear each input
        });
    };

    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(addButton);
    modal.appendChild(modalContent);
    corpo.appendChild(modal);
}

// Function to populate the customer list in both main and sidebar
function populateCustomerList(customers) {
    list_customer.innerHTML = ""; // Clear existing content
    customers.forEach(customer => {
        const customerDiv = document.createElement("div");
        customerDiv.textContent = customer.name; // Assuming customer object has a name property
        list_customer.appendChild(customerDiv);
    });

    // Update the sidebar as well
    const sidebarList = document.querySelector("#sidebar-right #list-customers");
    sidebarList.innerHTML = ""; // Clear existing content
    customers.forEach(customer => {
        const sidebarCustomerDiv = document.createElement("div");
        sidebarCustomerDiv.textContent = customer.name; // Assuming customer object has a name property
        sidebarList.appendChild(sidebarCustomerDiv);
    });
}

// Event listener for the "Ver todos" button
btnSeeAllCustomers.addEventListener("click", () => {
    // Fetch and display all customers (this is a placeholder, implement actual fetching logic)
    const customers = JSON.parse(localStorage.getItem("customers")) || []; // Example data
    populateCustomerList(customers);
});

// Add event listener for the button to open the modal
const btnAddClients = document.createElement("button");
btnAddClients.id = "btnAddClients";
btnAddClients.textContent = "Adicionar Cliente";
btnAddClients.onclick = () => {
    const modal = document.getElementById("clientAddModal");
    modal.style.display = "flex"; // Show the modal
};

corpo.appendChild(btnAddClients); // Append the button to the main content

// Initialize the modal
createClientModal();
