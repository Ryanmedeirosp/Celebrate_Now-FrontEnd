document.addEventListener("DOMContentLoaded", () => {

    const corpo = document.querySelector("main");
    console.log(localStorage.getItem("ceremonialistEmail"));
    
    fetch(`http://localhost:8080/supplier/${localStorage.getItem("ceremonialistId")}`, {
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
        console.log(data);

        data.forEach((service) => {
        let individualServiceDiv = document.createElement("div");
        individualServiceDiv.className = "individualServiceDiv";

        let leftSideIndividualServiceDiv = document.createElement("div");
        leftSideIndividualServiceDiv.className = "leftSideIndividualServiceDiv";
        let rightSideIndividualServiceDiv = document.createElement("div");
        rightSideIndividualServiceDiv.className = "rightSideIndividualServiceDiv";

        let titleIndividualServiceInLeftSideDiv = document.createElement("div");
        titleIndividualServiceInLeftSideDiv.className = "titleIndividualServiceInLeftSideDiv";
        let titleIndividualServiceInLeftSide = document.createElement("h2");
        titleIndividualServiceInLeftSide.className = "titleIndividualServiceInLeftSide";
        titleIndividualServiceInLeftSide.textContent = service.name;

        let imageIndividualServiceInLeftSideDiv = document.createElement("div");
        imageIndividualServiceInLeftSideDiv.className = "imageIndividualServiceInLeftSideDiv";
        let imageIndividualServiceInLeftSide = document.createElement("img");
        imageIndividualServiceInLeftSide.className = "imageIndividualServiceInLeftSide";
        imageIndividualServiceInLeftSide.src = service.imageUrl;

        let buttonHireIndividualServiceInLeftSideDiv = document.createElement("div");
        buttonHireIndividualServiceInLeftSideDiv.className = "buttonHireIndividualServiceInLeftSideDiv";
        let buttonHireIndividualServiceInLeftSide = document.createElement("button");
        buttonHireIndividualServiceInLeftSide.id = "buttonHireIndividualServiceInLeftSide";
        buttonHireIndividualServiceInLeftSide.textContent = "Contratar";

        let imageEditIndividualServiceInRightSideDiv = document.createElement("div");
        imageEditIndividualServiceInRightSideDiv.id = "imageEditIndividualServiceInRightSideDiv";
        let imageEditIndividualServiceInRightSide = document.createElement("img");
        imageEditIndividualServiceInRightSide.id = "imageEditIndividualServiceInRightSide";
        imageEditIndividualServiceInRightSide.src = "../assets/images/botao-editar.png";

        let imageRemoveIndividualServiceInRightSide = document.createElement("img");
        imageRemoveIndividualServiceInRightSide.id = "imageRemoveIndividualServiceInRightSide";
        imageRemoveIndividualServiceInRightSide.src = "../assets/images/remover.png";

        let textIndividualServiceInRightSideDiv = document.createElement("div");
        textIndividualServiceInRightSideDiv.className = "textIndividualServiceInRightSideDiv";
        let textIndividualServiceInRightSide = document.createElement("p");
        textIndividualServiceInRightSide.id = "texts";
        textIndividualServiceInRightSide.className = "textIndividualServiceInRightSide";
        textIndividualServiceInRightSide.textContent = service.description;

        let knowMoreIndividualServiceInRightSideDiv = document.createElement("div");
        knowMoreIndividualServiceInRightSideDiv.className = "knowMoreIndividualServiceInRightSideDiv";
        let knowMoreIndividualServiceInRightSide = document.createElement("h3");
        knowMoreIndividualServiceInRightSide.className = "knowMoreIndividualServiceInRightSide";
        knowMoreIndividualServiceInRightSide.textContent = "Ler mais";

        divAllServices.appendChild(individualServiceDiv);
        individualServiceDiv.appendChild(leftSideIndividualServiceDiv);
        individualServiceDiv.appendChild(rightSideIndividualServiceDiv);
        leftSideIndividualServiceDiv.appendChild(titleIndividualServiceInLeftSideDiv);
        titleIndividualServiceInLeftSideDiv.appendChild(titleIndividualServiceInLeftSide);
        leftSideIndividualServiceDiv.appendChild(imageIndividualServiceInLeftSideDiv);
        imageIndividualServiceInLeftSideDiv.appendChild(imageIndividualServiceInLeftSide);
        leftSideIndividualServiceDiv.appendChild(buttonHireIndividualServiceInLeftSideDiv);
        buttonHireIndividualServiceInLeftSideDiv.appendChild(buttonHireIndividualServiceInLeftSide);
        rightSideIndividualServiceDiv.appendChild(imageEditIndividualServiceInRightSideDiv);
        imageEditIndividualServiceInRightSideDiv.appendChild(imageEditIndividualServiceInRightSide);

        imageEditIndividualServiceInRightSideDiv.appendChild(imageRemoveIndividualServiceInRightSide);

        rightSideIndividualServiceDiv.appendChild(textIndividualServiceInRightSideDiv);
        textIndividualServiceInRightSideDiv.appendChild(textIndividualServiceInRightSide);
        rightSideIndividualServiceDiv.appendChild(knowMoreIndividualServiceInRightSideDiv);
        knowMoreIndividualServiceInRightSideDiv.appendChild(knowMoreIndividualServiceInRightSide);
        corpo.appendChild(divAllContentService);
        // Função para criar um input com imagem de edição
        function createEditableInput(placeholder, value, id, type) {
            const inputDiv = document.createElement("div");
            inputDiv.className = "align";
            inputDiv.id = `${id}Div`;

            const inputImg = document.createElement("img");
            inputImg.className = "sizeImgEdit";
            inputImg.src = "../assets/images/botao-editar.png";

            const input = document.createElement("input");
            input.className = "inputInformation";
            input.id = id;
            input.placeholder = placeholder;
            input.value = value;
            input.type = type;

            // Integra a função para liberar o input ao clicar na imagem
            enableInputOnImageClick(input, inputImg);

            inputDiv.appendChild(input);
            inputDiv.appendChild(inputImg);

            return inputDiv;
        }

        // Função para liberar o input ao clicar na imagem
        function enableInputOnImageClick(inputElement, imageElement) {
            imageElement.addEventListener("click", (event) => {
                inputElement.disabled = false; // Habilita o input
                inputElement.focus(); // Coloca o foco no input para facilitar a edição
            });
        }

        // Criação dos elementos principais
        let editFade = document.createElement("div");
        editFade.id = "editFade";
        editFade.className = "hideTwo";

        let editModal = document.createElement("div");
        editModal.id = "editModal";
        editModal.className = "hideTwo";

        let editModalHeaderDiv = document.createElement("div");
        editModalHeaderDiv.id = "editModalHeaderDiv";
        let editTitleNewService = document.createElement("h2");
        editTitleNewService.id = "editTitleNewService";
        editTitleNewService.textContent = "Editar serviço";

        let editModalBodyDiv = document.createElement("div");
        editModalBodyDiv.id = "editModalBodyDiv";

        let editTitleDiv = document.createElement("div");
        editTitleDiv.id = "editTitleDiv";

        // Criação dos inputs editáveis
        const inputs = [
            { placeholder: service.name, value: service.name, id: "editTitleInput", type:'text' },
            { placeholder: service.email, value: service.email, id: "editEmailInput", type: "email" },
            { placeholder: service.cnpj, value: service.cnpj, id: "editCnpjInput", type:'text' },
            { placeholder: service.phone, value: service.phone, id: "editPhoneInput", type: "tel" },
            { placeholder: service.cep, value: service.cep, id: "editCepInput", type:'text'},
            { placeholder: service.number, value: service.number, id: "editHouseNumberInput", type: "number" },
            { placeholder: service.serviceType, value: service.serviceType, id: "editTypeServiceInput", type:'text' },
            { placeholder: service.imageUrl, value: service.imageUrl, id: "editImageUrl", type:'text' }
        ];

        inputs.forEach(inputConfig => {
            const inputDiv = createEditableInput(inputConfig.placeholder, inputConfig.value, inputConfig.id, inputConfig.type);
            editTitleDiv.appendChild(inputDiv);
        });

        // Criação da área de descrição
        let editDescriptionDiv = document.createElement("div");
        editDescriptionDiv.id = "editDescriptionDiv";
        editDescriptionDiv.className = "align";
        let editDescriptionImg = document.createElement("img");
        editDescriptionImg.id = "editDescriptionImg";
        editDescriptionImg.className = "sizeImgEdit";
        editDescriptionImg.src = "../assets/images/botao-editar.png";
        let editDescriptionArea = document.createElement("textarea");
        editDescriptionArea.id = "editDescriptionArea";
        editDescriptionArea.placeholder = service.description;
        editDescriptionArea.value = service.description;
        editDescriptionArea.maxLength = 150;

        // Integra a função para liberar o textarea ao clicar na imagem
        enableInputOnImageClick(editDescriptionArea, editDescriptionImg);

        editDescriptionDiv.appendChild(editDescriptionArea);
        editDescriptionDiv.appendChild(editDescriptionImg);

        // Criação do botão de confirmação
        let alertArea2 = document.createElement("p");
        alertArea2.id = "alert2";

        let editButtonConfirmNewServiceDiv = document.createElement("div");
        editButtonConfirmNewServiceDiv.id = "editButtonConfirmNewServiceDiv";
        let editButtonConfirmNewService = document.createElement("button");
        editButtonConfirmNewService.id = "editButtonConfirmNewService";
        editButtonConfirmNewService.textContent = "Editar serviço";

        // Função para alternar a visibilidade do modal
        const editToggleModal = () => {
            [editModal, editFade].forEach((el) => el.classList.toggle("hideTwo"));
        };

        // Event listeners para abrir e fechar o modal
        imageEditIndividualServiceInRightSide.addEventListener("click", (event) => {
            editToggleModal();
        });

        editFade.addEventListener("click", () => editToggleModal());

        // Event listener para o botão de confirmação
        editButtonConfirmNewService.addEventListener("click", (event) => {
            console.log(document.getElementById("editEmailInput").value)
            console.log(document.getElementById("editCepInput").value)
            const showError = (message) => {
                alertArea2.textContent = message;
                alertArea2.style.color = "red";
            };

            const showSuccess = (message) => {
                alertArea2.textContent = message;
                alertArea2.style.color = "green";
            };

            // Validação dos campos
            if (!document.getElementById("editTitleInput").value) {
                return showError("O nome é obrigatório.");
            }
            if (!document.getElementById("editEmailInput").value || !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(document.getElementById("editEmailInput").value)) {
                return showError("Email inválido.");
            }
            if (!document.getElementById("editCnpjInput").value || document.getElementById("editCnpjInput").value.length !== 14) {
                return showError("Documento inválido. Deve conter 14 caracteres. Somente números.");
            }
            if (!document.getElementById("editCepInput").value || !/^\d{8}$/.test(document.getElementById("editCepInput").value)) {
                return showError("CEP inválido. Deve conter exatamente 8 dígitos. Somente números.");
            }
            if (!document.getElementById("editTypeServiceInput").value) {
                return showError("O serviço é obrigatório.");
            }
            if (!document.getElementById("editPhoneInput").value || !/^\+?[1-9][0-9]{1,14}$/.test(document.getElementById("editPhoneInput").value)) {
                return showError("Número de telefone inválido.");
            }
            if (!document.getElementById("editHouseNumberInput").value || isNaN(document.getElementById("editHouseNumberInput").value)) {
                return showError("O número da residência deve ser válido.");
            }
            if (!editDescriptionArea.value) {
                return showError("A descrição é obrigatória.");
            }

            // Objeto com os dados validados
            const requestData = {
                name: document.getElementById("editTitleInput").value,
                email: document.getElementById("editEmailInput").value,
                cnpj: document.getElementById("editCnpjInput").value,
                phone: document.getElementById("editPhoneInput").value,
                cep: document.getElementById("editCepInput").value,
                houseNumber: document.getElementById("editHouseNumberInput").value ,
                serviceType: document.getElementById("editTypeServiceInput").value,
                description: editDescriptionArea.value,
                imageUrl: document.getElementById("editImageUrl").value,
                ceremonialistEmail: localStorage.getItem("ceremonialistEmail")
            };

            // Envio dos dados
            fetch("http://localhost:8080/supplier/" + service.id, {
                method: "PUT",
                body: JSON.stringify(requestData),
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
            })
            .then((data) => {
                showSuccess("Cadastro realizado com sucesso!");
                location.reload();
            })
            .catch((error) => {
                console.error("Erro ao enviar os dados:", error);
                showError(error.message);
            });
});

// Montagem do modal
editModalHeaderDiv.appendChild(editTitleNewService);
editModalHeaderDiv.appendChild(editTitleDiv);
editModal.appendChild(editModalHeaderDiv);

editModalBodyDiv.appendChild(editDescriptionDiv);
editModalBodyDiv.appendChild(alertArea2);
editModal.appendChild(editModalBodyDiv);

editButtonConfirmNewServiceDiv.appendChild(editButtonConfirmNewService);
editModal.appendChild(editButtonConfirmNewServiceDiv);

corpo.appendChild(editFade);
corpo.appendChild(editModal);

        knowMoreIndividualServiceInRightSide.addEventListener("click", (event) => {

            let showFade = document.createElement("div");
            showFade.id = "showFade";
            showFade.className = "hideThree";

            let showModal = document.createElement("div");
            showModal.id = "showModal";
            showModal.className = "hideThree";

            const showToggleModal = () => {
                // Apenas alterna a visibilidade do modal e fade
                [showModal, showFade].forEach((el) => el.classList.toggle("hideThree"));
            };

            showToggleModal();

            let showTitleDiv = document.createElement("div");
            showTitleDiv.id = "showTitleDiv";
            let showTitleService = document.createElement("h2");
            showTitleService.id = "showTitleService";
            showTitleService.textContent = service.name;

            let showImageAndDescriptionDiv = document.createElement("div");
            showImageAndDescriptionDiv.id = "showImageAndDescriptionDiv";
            let showImage = document.createElement("img");
            showImage.id = "showImage";
            showImage.src = service.imageUrl;
            let showDescriptionDiv = document.createElement("div");
            showDescriptionDiv.id = "showDescriptionDiv";
            let showDescription = document.createElement("p");
            showDescription.id = "showDescription";
            showDescription.textContent = service.description;

            let showInformationsDiv = document.createElement("div");
            showInformationsDiv.id = "showInformationsDiv";

            let showInformationsSectionOneDiv = document.createElement("div");
            showInformationsSectionOneDiv.id = "showInformationsSectionOneDiv";
            let showInformationsSectionTwoDiv = document.createElement("div");
            showInformationsSectionTwoDiv.id = "showInformationsSectionTwoDiv";
            
            let showTypeOfService = document.createElement("h4");
            showTypeOfService.id = "showTypeOfService";
            showTypeOfService.className = "informationAboutService";
            showTypeOfService.textContent = "Tipo de serviço:" + " " + service.serviceType;

            let showEmail = document.createElement("h4");
            showEmail.id = "showEmail";
            showEmail.className = "informationAboutService";
            showEmail.textContent = "Email contato:" + " " + service.email;

            let showEmailCerimonialist = document.createElement("h4");
            showEmailCerimonialist.id = "showEmailCerimonialist";
            showEmailCerimonialist.className = "informationAboutService";
            showEmailCerimonialist.textContent = "Email do cerimonialista:" + " " + "emailvalidodois@gmail.com";

            let showCNPJ = document.createElement("h4");
            showCNPJ.id = "showCNPJ";
            showCNPJ.className = "informationAboutService";
            showCNPJ.textContent = "Número do CNPJ:" + " " + service.cnpj;

            let showPhone = document.createElement("h4");
            showPhone.id = "showPhone";
            showPhone.className = "informationAboutService";
            showPhone.textContent = "Número do contato:" + " " + service.phone;

            let showStreet = document.createElement("h4");
            showStreet.id = "showCEP";
            showStreet.className = "informationAboutService";
            showStreet.textContent = "Rua:" + " " + service.street;

            let showNumberHouse = document.createElement("h4");
            showNumberHouse.id = "showNumberHouse";
            showNumberHouse.className = "informationAboutService";
            showNumberHouse.textContent = "Número da casa:" + " " + service.number;

            showModal.appendChild(showTitleDiv);
            showTitleDiv.appendChild(showTitleService);

            showModal.appendChild(showImageAndDescriptionDiv);
            showImageAndDescriptionDiv.appendChild(showImage);
            showImageAndDescriptionDiv.appendChild(showDescriptionDiv);
            showDescriptionDiv.appendChild(showDescription);

            showModal.appendChild(showInformationsDiv);
            showInformationsSectionOneDiv.appendChild(showTypeOfService);
            showInformationsSectionOneDiv.appendChild(showCNPJ);
            showInformationsSectionOneDiv.appendChild(showStreet);
            showInformationsSectionOneDiv.appendChild(showNumberHouse);
            showInformationsSectionTwoDiv.appendChild(showEmail);
            showInformationsSectionTwoDiv.appendChild(showPhone);
            showInformationsDiv.appendChild(showInformationsSectionOneDiv);
            showInformationsDiv.appendChild(showInformationsSectionTwoDiv);

            corpo.appendChild(showFade);
            corpo.appendChild(showModal);
    
            showFade.addEventListener("click", () => showToggleModal());
                
            });
        })
    })
    .catch((error) => {
        console.error("Erro ao buscar serviços:", error);
        alert(error.message || "Erro ao buscar orçamentos.");
    });
});

const sidebarList = document.querySelector("#sidebar-right #list-customers");
fetch(`http://localhost:8080/client/${localStorage.getItem("ceremonialistId")}`, {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
})
    .then((response) => {
        if (!response.ok) {
            return response.json().then((err) => {
                throw new Error(err.message);
            });
        }                           
        return response.json();
    })
    .then((data) => {
        // Limpa o conteúdo existente da sidebar
        sidebarList.innerHTML = "";

        // Verifica se os dados são um array ou um único objeto
        const customers = Array.isArray(data) ? data : [data];

        // Popula os dados na sidebar
        customers.forEach((customer) => {
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
    })
    .catch((error) => {
        console.error("Erro ao carregar os clientes:", error);
        alert("Erro ao carregar os clientes.");
    });

    function populateCustomerList(customers) {
        sidebarList.innerHTML = ""; // Limpa o conteúdo existente
        customers.forEach((customer) => {
            // Cria o contêiner do cliente
           
            console.log(populateCustomerList)
        });
    }