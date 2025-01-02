const service = document.querySelector("#service");
const budget = document.querySelector("#budget");
const schadelure = document.querySelector("#schadelure");
const contract = document.querySelector("#contract");
const clients = document.querySelector("#clients");
const list = document.querySelector("#list");
const sidebarLines = document.getElementsByClassName("sidebar_line_item");
const corpo = document.querySelector("main");
const list_customer = document.querySelector("#list-customers");
const btnSeeAllCustomers = document.querySelector("#btn-see-all-customers")

let currentContent = null;

function removePreviousContent() {
    if (currentContent) {
        corpo.removeChild(currentContent);
        currentContent = null;
    }
}

for (let index = 0; index < sidebarLines.length; index++) {
    sidebarLines[index].addEventListener("click", (event) => {
        
        for (let i = 0; i < sidebarLines.length; i++) {
            sidebarLines[i].classList.remove("active");
        }
        
        sidebarLines[index].classList.add("active");

        removePreviousContent();

        switch (sidebarLines[index].id) {
            case 'service':
                create_service();
                break;
            case 'budget':
                create_budget();
                break;
            case 'schadelure':
                create_schadelure();
                break;
            case 'contract':
                create_contract();
                break;
            case 'clients':
                create_clients();
                break;
            case 'list':
                create_list();
                break;
            default:
                console.log("Item desconhecido clicado");
        }
    });
}

btnSeeAllCustomers.addEventListener("click", (event) =>{
    for (let i = 0; i < sidebarLines.length; i++) {
        sidebarLines[0].classList.remove("active");
        sidebarLines[1].classList.remove("active");
        sidebarLines[2].classList.remove("active");
        sidebarLines[3].classList.remove("active");
        sidebarLines[4].classList.add("active");   
    };
    removePreviousContent();
    create_clients();
});

function create_service() {
    let divAllContentService = document.createElement("div");
    divAllContentService.id = "divAllContentService";

    let divImg_user = document.createElement("div");
    divImg_user.id = "divImg_user";
    let img_user = document.createElement("img");
    img_user.id = "img_user";
    img_user.src = "../assets/images/user-icon-removebg-preview.svg";
    divImg_user.appendChild(img_user);
    let txt_user = document.createElement("h3");
    txt_user.id = "txt_user";
    txt_user.textContent = "Bem vindo, XXXXXX";
    divImg_user.appendChild(txt_user);
    divAllContentService.appendChild(divImg_user);

    let divBanner_service = document.createElement("div");
    divBanner_service.id = "divBanner_service";
    let banner_service = document.createElement("img");
    banner_service.id = "banner_service";
    banner_service.src = "../assets/images/frame 3.svg";
    divBanner_service.appendChild(banner_service);
    divAllContentService.appendChild(divBanner_service);

    let divServices = document.createElement("div");
    divServices.id = "divServices";
    let divButtonsService = document.createElement("div");
    divButtonsService.id = "divButtonsService";
    let buttonEditService = document.createElement("button");
    buttonEditService.className = "buttonService";
    buttonEditService.textContent = "Editar serviço";
    let buttonAddService = document.createElement("button");
    buttonAddService.textContent = "Adicionar serviço";
    buttonAddService.className = "buttonService";
    divButtonsService.appendChild(buttonEditService)
    divButtonsService.appendChild(buttonAddService);
    divServices.appendChild(divButtonsService);
    divAllContentService.appendChild(divServices);
    

    let divAllServices = document.createElement("div");
    divAllServices.id = "divAllServices";
    divServices.appendChild(divAllServices);

    

    let fade = document.createElement("div");
    fade.id = "fade";
    fade.className = "hide";

    let modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "hide";

    let modalHeaderDiv = document.createElement("div");
    modalHeaderDiv.id = "modalHeaderDiv";
    let titleNewService = document.createElement("h2");
    titleNewService.id = "titleNewService";
    titleNewService.textContent = "Novo serviço"

    let modalBodyDiv = document.createElement("div");
    modalBodyDiv.id = "modalBodyDiv";

    let titleImageDiv = document.createElement("div");
    titleImageDiv.id = "titleImageDiv";
    let titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";
    let titleInput = document.createElement("input");
    titleInput.id = "titleInput";
    titleInput.placeholder = "Digite o nome do serviço";
    let imageDiv = document.createElement("div");
    imageDiv.id = "imageDiv";
    let loadImageButtonDiv = document.createElement("input");
    loadImageButtonDiv.id = "files";
    loadImageButtonDiv.type = "file";
    let descriptionDiv = document.createElement("div");
    descriptionDiv.id = "descriptionDiv";
    let descriptionArea = document.createElement("textarea");
    descriptionArea.id = "descriptionArea";
    let buttonConfirmNewServiceDiv = document.createElement("div");
    buttonConfirmNewServiceDiv.id = "buttonConfirmNewServiceDiv";
    let buttonConfirmNewService = document.createElement("button");
    buttonConfirmNewService.id = "buttonConfirmNewService"
    buttonConfirmNewService.textContent = "Adicionar serviço";

    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle("hide"));
        
    };
    
    [buttonAddService, buttonConfirmNewService, fade].forEach((el) => {
        el.addEventListener("click", () => toggleModal())
    });

    buttonConfirmNewService.addEventListener("click", (event)=>{

    let individualServiceDiv = document.createElement("div");
    individualServiceDiv.className = "individualServiceDiv";

    let leftSideIndividualServiceDiv = document.createElement("div");
    leftSideIndividualServiceDiv.className = "leftSideIndividualServiceDiv";
    let rightSideIndividualServiceDiv = document.createElement("div");
    rightSideIndividualServiceDiv.className = "rightSideIndividualServiceDiv";

    let titleIndividualServiceInLeftSideDiv = document.createElement("div");
    titleIndividualServiceInLeftSideDiv.className = "titleIndividualServiceInLeftSideDiv";
    let titleIndividualServiceInLeftSide = document.createElement("h2");
    titleIndividualServiceInLeftSide.className = "titleIndividualServiceInLeftSide"
    titleIndividualServiceInLeftSide.textContent = titleInput.value;

    let imageIndividualServiceInLeftSideDiv = document.createElement("div");
    imageIndividualServiceInLeftSideDiv.className = "imageIndividualServiceInLeftSideDiv";
    let imageIndividualServiceInLeftSide = document.createElement("img");
    imageIndividualServiceInLeftSide.className = "imageIndividualServiceInLeftSide"

    const leitor = new FileReader()
    leitor.readAsDataURL(files.files[0])
    leitor.addEventListener("load", (event)=>{
        imageIndividualServiceInLeftSide.src=event.target.result;
    })

    let buttonHireIndividualServiceInLeftSideDiv = document.createElement("div");
    buttonHireIndividualServiceInLeftSideDiv.className = "buttonHireIndividualServiceInLeftSideDiv";
    let buttonHireIndividualServiceInLeftSide = document.querySelector("button");
    buttonHireIndividualServiceInLeftSide.id = "buttonHireIndividualServiceInLeftSide";
    buttonHireIndividualServiceInLeftSide.textContent = "Contratar";
    

    let textIndividualServiceInRightSideDiv = document.createElement("div");
    textIndividualServiceInRightSideDiv.className = "textIndividualServiceInRightSideDiv";
    let textIndividualServiceInRightSide = document.createElement("p");
    textIndividualServiceInRightSide.className = "textIndividualServiceInRightSide";
    textIndividualServiceInRightSide.textContent = descriptionArea.value;

    let knowMoreIndividualServiceInRightSideDiv = document.createElement("div");
    knowMoreIndividualServiceInRightSideDiv.className = "knowMoreIndividualServiceInRightSideDiv";
    let knowMoreIndividualServiceInRightSide = document.createElement("h3");
    knowMoreIndividualServiceInRightSide.className = "knowMoreIndividualServiceInRightSide";
    knowMoreIndividualServiceInRightSide.textContent = "Ler mais"

    divAllServices.appendChild(individualServiceDiv)
    individualServiceDiv.appendChild(leftSideIndividualServiceDiv);
    individualServiceDiv.appendChild(rightSideIndividualServiceDiv);
    leftSideIndividualServiceDiv.appendChild(titleIndividualServiceInLeftSideDiv);
    titleIndividualServiceInLeftSideDiv.appendChild(titleIndividualServiceInLeftSide);
    leftSideIndividualServiceDiv.appendChild(imageIndividualServiceInLeftSideDiv);
    imageIndividualServiceInLeftSideDiv.appendChild(imageIndividualServiceInLeftSide);
    leftSideIndividualServiceDiv.appendChild(buttonHireIndividualServiceInLeftSideDiv);
    buttonHireIndividualServiceInLeftSideDiv.appendChild(buttonHireIndividualServiceInLeftSide);
    rightSideIndividualServiceDiv.appendChild(textIndividualServiceInRightSideDiv);
    textIndividualServiceInRightSideDiv.appendChild(textIndividualServiceInRightSide);
    rightSideIndividualServiceDiv.appendChild(knowMoreIndividualServiceInRightSideDiv);
    knowMoreIndividualServiceInRightSideDiv.appendChild(knowMoreIndividualServiceInRightSide);

    });

    corpo.appendChild(divAllContentService);
    modalHeaderDiv.appendChild(titleNewService);
    modal.appendChild(modalHeaderDiv);
    titleDiv.appendChild(titleInput);
    titleImageDiv.appendChild(titleDiv);
    imageDiv.appendChild(loadImageButtonDiv);
    titleImageDiv.appendChild(imageDiv);
    modalBodyDiv.appendChild(titleImageDiv);
    modalBodyDiv.appendChild(descriptionDiv);
    descriptionDiv.appendChild(descriptionArea);
    modal.appendChild(modalBodyDiv);
    buttonConfirmNewServiceDiv.appendChild(buttonConfirmNewService);
    modal.appendChild(buttonConfirmNewServiceDiv);
    corpo.appendChild(fade);
    corpo.appendChild(modal);
    currentContent = divAllContentService; 
}

function create_budget() {
    let divAllContentBudget = document.createElement("div");
    divAllContentBudget.id = "divAllContentBudget";
    let teste = document.createElement("h1");
    teste.textContent = "Orçamentos";
    divAllContentBudget.appendChild(teste);
    corpo.appendChild(divAllContentBudget);
    currentContent = divAllContentBudget;


}

function create_schadelure() {
    removePreviousContent(); // Garante que o conteúdo anterior seja removido

    let divSchadelure = document.createElement("div");
    divSchadelure.id = "divSchadelure";
    let h1 = document.createElement("h1");
    h1.textContent = "CALENDÁRIO"; 
    divSchadelure.appendChild(h1);

    divSchadelure.style.margin = "0 auto";
    divSchadelure.style.fontFamily = "Arial, sans-serif";
    divSchadelure.style.display = "flex";
    divSchadelure.style.flexDirection = "column";
    divSchadelure.style.justifyContent = "center";
    divSchadelure.style.alignItems = "center";
    divSchadelure.style.height = "100vh";
    divSchadelure.style.backgroundColor = "#white";

    const calendar = document.createElement("div");
    calendar.style.background = "#fff";
    calendar.style.padding = "100px";
    calendar.style.borderRadius = "8px";
    calendar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    divSchadelure.appendChild(calendar);

    const calendarHeader = document.createElement("div");
    calendarHeader.style.display = "flex";
    calendarHeader.style.justifyContent = "space-between";
    calendarHeader.style.alignItems = "center";
    calendarHeader.style.marginBottom = "20px";
    calendar.appendChild(calendarHeader);

    const prevButton = document.createElement("button");
    prevButton.textContent = "← Anterior";
    prevButton.style.background = "#007bff";
    prevButton.style.color = "white";
    prevButton.style.border = "none";
    prevButton.style.padding = "5px 10px";
    prevButton.style.borderRadius = "4px";
    prevButton.style.cursor = "pointer";
    prevButton.style.outline = "none";
    prevButton.addEventListener("mouseover", () => (prevButton.style.background = "#0056b3"));
    prevButton.addEventListener("mouseout", () => (prevButton.style.background = "#007bff"));
    calendarHeader.appendChild(prevButton);

    const monthYear = document.createElement("h3");
    calendarHeader.appendChild(monthYear);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Próximo →";
    nextButton.style.background = "#007bff";
    nextButton.style.color = "white";
    nextButton.style.border = "none";
    nextButton.style.padding = "5px 10px";
    nextButton.style.borderRadius = "4px";
    nextButton.style.cursor = "pointer";
    nextButton.style.outline = "none";
    nextButton.addEventListener("mouseover", () => (nextButton.style.background = "#0056b3"));
    nextButton.addEventListener("mouseout", () => (nextButton.style.background = "#007bff"));
    calendarHeader.appendChild(nextButton);

    const daysContainer = document.createElement("div");
    daysContainer.style.display = "grid";
    daysContainer.style.gridTemplateColumns = "repeat(7, 1fr)";
    daysContainer.style.gap = "20px";
    calendar.appendChild(daysContainer);

    const currentDate = new Date();
    let selectedDate = null;

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        monthYear.textContent = date.toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric",
        });

        daysContainer.innerHTML = "";

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            daysContainer.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = day;
            dayDiv.style.padding = "10px";
            dayDiv.style.textAlign = "center";
            dayDiv.style.cursor = "pointer";
            dayDiv.style.borderRadius = "4px";
            dayDiv.style.background = "#e9ecef";

            dayDiv.addEventListener("mouseover", () => {
                dayDiv.style.background = "#007bff";
                dayDiv.style.color = "white";
            });

            dayDiv.addEventListener("mouseout", () => {
                if (!dayDiv.classList.contains("selected")) {
                    dayDiv.style.background = "#e9ecef";
                    dayDiv.style.color = "black";
                }
            });

            dayDiv.addEventListener("click", () => {
                if (selectedDate) {
                    selectedDate.classList.remove("selected");
                    selectedDate.style.background = "#e9ecef";
                    selectedDate.style.color = "black";
                }
                dayDiv.classList.add("selected");
                dayDiv.style.background = "#28a745";
                dayDiv.style.color = "white";
                selectedDate = dayDiv;
            });

            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);

    corpo.appendChild(divSchadelure);
    currentContent = divSchadelure; // Atualiza o conteúdo atual

}


function create_contract() {
    let divContract = document.createElement("div");
    divContract.id = "divContract";
    let h1 = document.createElement("h1");
    h1.textContent = "Conteúdo do Contrato"; 
    divContract.appendChild(h1);
    corpo.appendChild(divContract);
    currentContent = divContract; 
}

function create_clients() {
    removePreviousContent(); // Remove o conteúdo anterior

    let divClients = document.createElement("div");
    divClients.id = "divClients";



    // Contêiner superior com botão de adicionar cliente
    let divSuperior = document.createElement("div");
    divSuperior.id = "divSuperior-clients";

    let divClientsImg = document.createElement("div");
    divClientsImg.id = "divClientsImg";
    let imgCustomer = document.createElement("img");
    imgCustomer.id = "imgCustomer";
    imgCustomer.src = "../assets/images/users-group.svg";
    divClientsImg.appendChild(imgCustomer);

    let clientstxt = document.createElement("h3");
    clientstxt.textContent = "Lista de Clientes";
    divClientsImg.appendChild(clientstxt);
    divSuperior.appendChild(divClientsImg);

    let btnAddClients = document.createElement("button");
    btnAddClients.textContent = "Adicionar Cliente";
    btnAddClients.id = "btnAddClients";

    btnAddClients.addEventListener("click", (event) =>{

        modal.style.display = "flex";
    });

    divSuperior.appendChild(btnAddClients);

    divClients.appendChild(divSuperior);
    

    // Contêiner da lista de clientes
    let divListaClients = document.createElement("div");
    divListaClients.id = "divListaClients";
    divClients.appendChild(divListaClients);
    
    // Modal para adicionar cliente
    let modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modal hidden";
    // modal.style.display = "none"


    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    let modalHeader = document.createElement("h2");
    modalHeader.textContent = "Adicionar Cliente";
    modalContent.appendChild(modalHeader);

    let inputNome = document.createElement("input");
    inputNome.type = "text";
    inputNome.placeholder = "Nome do Cliente";
    inputNome.id = "inputNome";
    modalContent.appendChild(inputNome);

    let inputContrato = document.createElement("input");
    inputContrato.type = "text";
    inputContrato.placeholder = "Número do Contrato";
    inputContrato.id = "inputContrato";
    modalContent.appendChild(inputContrato);

    let datatxt = document.createElement("p")
    datatxt.textContent = "Data do casamento:";
    modalContent.appendChild(datatxt);

    let inputEvento = document.createElement("input");
    inputEvento.type = "date";
    inputEvento.id = "inputEvento";
    modalContent.appendChild(inputEvento);

    let btnSalvar = document.createElement("button");
    btnSalvar.textContent = "Salvar";
    btnSalvar.id = "btnSalvar";
    modalContent.appendChild(btnSalvar);

    let btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.id = "btnCancelar";

    btnCancelar.addEventListener("click", (event) =>{

        modal.style.display = "none";
    })

    modalContent.appendChild(btnCancelar);

    modal.appendChild(modalContent);
    divClients.appendChild(modal);

    // Exibir modal ao clicar no botão de adicionar cliente
    btnAddClients.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Esconder modal ao clicar no botão de cancelar
    btnCancelar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Adicionar cliente ao clicar em "Salvar"
    btnSalvar.addEventListener("click", () => {
        let clienteNome = inputNome.value.trim();
        let clienteContrato = inputContrato.value.trim();
        let clienteEvento = inputEvento.value;

        if (clienteNome && clienteContrato && clienteEvento) {
            adicionarCliente(clienteNome, clienteContrato, clienteEvento);
            modal.classList.add("hidden");
            inputNome.value = "";
            inputContrato.value = "";
            inputEvento.value = "";
        } else {
            alert("Por favor, preencha todos os campos!");
        }
    });

    // Função para adicionar cliente à lista
    function adicionarCliente(nome, contrato, evento) {
        let clienteDiv = document.createElement("div");
        clienteDiv.className = "clienteDiv";

        let clienteInfo = document.createElement("div");
        clienteInfo.className = "clienteInfo";

        let nomeCliente = document.createElement("p");
        nomeCliente.className = "nomeCliente";
        nomeCliente.textContent = `Nome: ${nome}`;

        let contratoCliente = document.createElement("p");
        contratoCliente.className = "contratoCliente";
        contratoCliente.textContent = `Contrato: ${contrato}`;

        let eventoCliente = document.createElement("p");
        eventoCliente.className = "eventoCliente";
        eventoCliente.textContent = `Evento: ${evento}`;

        clienteInfo.appendChild(nomeCliente);
        clienteInfo.appendChild(contratoCliente);
        clienteInfo.appendChild(eventoCliente);

        let removerClienteBtn = document.createElement("button");
        removerClienteBtn.textContent = "Remover";
        removerClienteBtn.className = "btnRemoverCliente";
        removerClienteBtn.addEventListener("click", () => {
            divListaClients.removeChild(clienteDiv);
        });

        clienteDiv.appendChild(clienteInfo);
        clienteDiv.appendChild(removerClienteBtn);

        divListaClients.appendChild(clienteDiv);
    }
    
    corpo.appendChild(divClients);
    currentContent = divClients; // Atualiza o conteúdo atual
}



function create_list() {
    let divList = document.createElement("div");
    divList.id = "divList";
    let h1 = document.createElement("h1");
    h1.textContent = "Conteúdo de Lista"; 
    divList.appendChild(h1);
    corpo.appendChild(divList);
    currentContent = divList; 
}

function create_list_customer() {
    let customer = document.createElement("div");
    customer.id = "customer";
    
    let photoCustomerDiv = document.createElement("div");
    photoCustomerDiv.className = "photoCustomerDiv";
    let photoCustomer = document.createElement("img");
    photoCustomer.className = "photoCustomer";
    photoCustomer.src = "../assets/images/user-icon-removebg-preview.svg";

    let informationsCustomerDiv = document.createElement("div");
    informationsCustomerDiv.className = "informationsCustomerDiv";
    let nameInformationCustomer = document.createElement("p");
    nameInformationCustomer.className = "nameInformationCustomer";
    nameInformationCustomer.textContent = "Paulo Porciuncula Davis Júnior";
    let contractNumberInformationCustomer = document.createElement("p");
    contractNumberInformationCustomer.className = "contractNumberInformationCustomer";
    contractNumberInformationCustomer.textContent = "Contrato:00001";
    let eventDateInformationCustomer = document.createElement("p");
    eventDateInformationCustomer.className = "eventDateInformationCustomer";
    eventDateInformationCustomer.textContent = "Evento:XX/XX/XXXX";
    let divPhotoInformations = document.createElement("div");
    divPhotoInformations.className = "divPhotoInformations";

    let chatImageCustomerDiv = document.createElement("div");
    chatImageCustomerDiv.className = "chatImageCustomerDiv";
    let chatImageCustomer = document.createElement("img");
    chatImageCustomer.className = "chatImageCustomer";
    chatImageCustomer.src = "../assets/images/o-email.png"

    chatImageCustomerDiv.appendChild(chatImageCustomer);
    informationsCustomerDiv.appendChild(nameInformationCustomer);
    informationsCustomerDiv.appendChild(contractNumberInformationCustomer);
    informationsCustomerDiv.appendChild(eventDateInformationCustomer);
    photoCustomerDiv.appendChild(photoCustomer);
    divPhotoInformations.appendChild(photoCustomerDiv);
    divPhotoInformations.appendChild(informationsCustomerDiv);
    customer.appendChild(divPhotoInformations);
    customer.appendChild(chatImageCustomerDiv);
    list_customer.appendChild(customer);
    
}

window.onload = () => {
    create_service(); 
    create_list_customer();
};