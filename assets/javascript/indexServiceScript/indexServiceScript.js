const corpo = document.querySelector("main");

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
txt_user.textContent = `Bem vindo, ${localStorage.getItem("ceremonialistName")}`;
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
let buttonAddService = document.createElement("button");
buttonAddService.textContent = "Novo serviço";
buttonAddService.className = "buttonService";
divButtonsService.appendChild(buttonAddService);
divServices.appendChild(divButtonsService);
divAllContentService.appendChild(divServices);

let divAllServices = document.createElement("div");
divAllServices.id = "divAllServices";
divServices.appendChild(divAllServices);

// Modal para adicionar
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
titleNewService.textContent = "Novo serviço";

let modalBodyDiv = document.createElement("div");
modalBodyDiv.id = "modalBodyDiv";

let titleImageDiv = document.createElement("div");
titleImageDiv.id = "titleImageDiv";
let titleDiv = document.createElement("div");
titleDiv.id = "titleDiv";
let titleInput = document.createElement("input");
titleInput.className = "inputInformation";
titleInput.id = "titleInput";
titleInput.placeholder = "Digite o nome do serviço";

let emailInput = document.createElement("input");
emailInput.className = "inputInformation";
emailInput.id = "emailInput";
emailInput.placeholder = "Digite o email";

let cnpjInput = document.createElement("input");
cnpjInput.className = "inputInformation";
cnpjInput.id = "cnpjInput";
cnpjInput.placeholder = "Digite o CNPJ";

let phoneInput = document.createElement("input");
phoneInput.className = "inputInformation";
phoneInput.id = "phoneInput";
phoneInput.placeholder = "Digite o telefone";

let cepInput = document.createElement("input");
cepInput.className = "inputInformation";
cepInput.id = "cepInput";
cepInput.placeholder = "Digite a rua";

let houseNumberInput = document.createElement("input");
houseNumberInput.className = "inputInformation";
houseNumberInput.id = "houseNumberInput";
houseNumberInput.placeholder = "Digite o número da casa";

let cerimonialistEmailInput = document.createElement("input");
cerimonialistEmailInput.className = "inputInformation";
cerimonialistEmailInput.id = "cerimonialistEmailInput";
cerimonialistEmailInput.placeholder = "Digite o Email do cerimonialista";

let typeServiceInput = document.createElement("input");
typeServiceInput.className = "inputInformation";
typeServiceInput.id = "typeServiceInput";
typeServiceInput.placeholder = "Digite o tipo de serviço";

let imageDiv = document.createElement("div");
imageDiv.id = "imageDiv";
let loadImageButtonDiv = document.createElement("input");
loadImageButtonDiv.id = "files";
loadImageButtonDiv.type = "file";

let descriptionDiv = document.createElement("div");
descriptionDiv.id = "descriptionDiv";
let descriptionArea = document.createElement("textarea");
descriptionArea.id = "descriptionArea";
descriptionArea.placeholder = "Insira uma descrição...";
descriptionArea.maxLength = 150;

let alertArea = document.createElement("p");
alertArea.id = "alert";

let buttonConfirmNewServiceDiv = document.createElement("div");
buttonConfirmNewServiceDiv.id = "buttonConfirmNewServiceDiv";
let buttonConfirmNewService = document.createElement("button");
buttonConfirmNewService.id = "buttonConfirmNewService";
buttonConfirmNewService.textContent = "Adicionar serviço";

const toggleModal = () => {
    // Apenas alterna a visibilidade do modal e fade
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// Função para limpar o conteúdo do modal
const resetModalContent = () => {
    // Limpar campos de entrada de texto
    titleInput.value = '';
    emailInput.value = '';
    cnpjInput.value = '';
    phoneInput.value = '';
    cepInput.value = '';
    houseNumberInput.value = '';
    cerimonialistEmailInput.value = '';
    typeServiceInput.value = '';
    descriptionArea.value = '';
    // Limpar a imagem carregada (se houver uma imagem carregada)
    loadImageButtonDiv.value = '';
};

// Adicionar event listener apenas uma vez para "Novo serviço"
buttonAddService.addEventListener("click", () => {
    // Limpar o modal sempre que abrir para um novo serviço
    resetModalContent();
    toggleModal();
});

// Evento de confirmação para adicionar o novo serviço
buttonConfirmNewService.addEventListener("click", (event) => {
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
    titleIndividualServiceInLeftSide.textContent = titleInput.value;

    let imageIndividualServiceInLeftSideDiv = document.createElement("div");
    imageIndividualServiceInLeftSideDiv.className = "imageIndividualServiceInLeftSideDiv";
    let imageIndividualServiceInLeftSide = document.createElement("img");
    imageIndividualServiceInLeftSide.className = "imageIndividualServiceInLeftSide";

    const leitor = new FileReader();
    leitor.readAsDataURL(loadImageButtonDiv.files[0]);
    leitor.addEventListener("load", (event) => {
        imageIndividualServiceInLeftSide.src = event.target.result;
    });

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
    textIndividualServiceInRightSide.textContent = descriptionArea.value;

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
        showTitleService.textContent = titleIndividualServiceInLeftSide.textContent;

        let showImageAndDescriptionDiv = document.createElement("div");
        showImageAndDescriptionDiv.id = "showImageAndDescriptionDiv";
        let showImage = document.createElement("img");
        showImage.id = "showImage";
        showImage.src = "assets/images/caraTranquilo.jpg";
        let showDescriptionDiv = document.createElement("div");
        showDescriptionDiv.id = "showDescriptionDiv";
        let showDescription = document.createElement("p");
        showDescription.id = "showDescription";
        showDescription.textContent = textIndividualServiceInRightSide.textContent;

        let showInformationsDiv = document.createElement("div");
        showInformationsDiv.id = "showInformationsDiv";

        let showInformationsSectionOneDiv = document.createElement("div");
        showInformationsSectionOneDiv.id = "showInformationsSectionOneDiv";
        let showInformationsSectionTwoDiv = document.createElement("div");
        showInformationsSectionTwoDiv.id = "showInformationsSectionTwoDiv";
        
        let showTypeOfService = document.createElement("h4");
        showTypeOfService.id = "showTypeOfService";
        showTypeOfService.className = "informationAboutService";
        showTypeOfService.textContent = "Tipo de serviço:" + " " + "Flores para o casamento";

        let showEmail = document.createElement("h4");
        showEmail.id = "showEmail";
        showEmail.className = "informationAboutService";
        showEmail.textContent = "Email contato:" + " " + "emailvalido@gmail.com";

        let showEmailCerimonialist = document.createElement("h4");
        showEmailCerimonialist.id = "showEmailCerimonialist";
        showEmailCerimonialist.className = "informationAboutService";
        showEmailCerimonialist.textContent = "Email do cerimonialista:" + " " + "emailvalidodois@gmail.com";

        let showCNPJ = document.createElement("h4");
        showCNPJ.id = "showCNPJ";
        showCNPJ.className = "informationAboutService";
        showCNPJ.textContent = "Número do CNPJ:" + " " + "11111111111111";

        let showPhone = document.createElement("h4");
        showPhone.id = "showPhone";
        showPhone.className = "informationAboutService";
        showPhone.textContent = "Número do contato:" + " " + "82996016299";

        let showCEP = document.createElement("h4");
        showCEP.id = "showCEP";
        showCEP.className = "informationAboutService";
        showCEP.textContent = "Número do CEP:" + " " + "5557555";

        let showNumberHouse = document.createElement("h4");
        showNumberHouse.id = "showNumberHouse";
        showNumberHouse.className = "informationAboutService";
        showNumberHouse.textContent = "Número da casa:" + " " + "330";

        showModal.appendChild(showTitleDiv);
        showTitleDiv.appendChild(showTitleService);

        showModal.appendChild(showImageAndDescriptionDiv);
        showImageAndDescriptionDiv.appendChild(showImage);
        showImageAndDescriptionDiv.appendChild(showDescriptionDiv);
        showDescriptionDiv.appendChild(showDescription);

        showModal.appendChild(showInformationsDiv);
        showInformationsSectionOneDiv.appendChild(showTypeOfService);
        showInformationsSectionOneDiv.appendChild(showCNPJ);
        showInformationsSectionOneDiv.appendChild(showCEP);
        showInformationsSectionOneDiv.appendChild(showNumberHouse);
        showInformationsSectionTwoDiv.appendChild(showEmail);
        showInformationsSectionTwoDiv.appendChild(showEmailCerimonialist);
        showInformationsSectionTwoDiv.appendChild(showPhone);
        showInformationsDiv.appendChild(showInformationsSectionOneDiv);
        showInformationsDiv.appendChild(showInformationsSectionTwoDiv);

        corpo.appendChild(showFade);
        corpo.appendChild(showModal);
   
        showFade.addEventListener("click", () => showToggleModal());
    });

    // Modal para editar

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

    let editTitleImageDiv = document.createElement("div");
    editTitleImageDiv.id = "editTitleImageDiv";
    let editTitleDiv = document.createElement("div");
    editTitleDiv.id = "editTitleDiv";
    let editTitleInput = document.createElement("input");
    editTitleInput.className = "inputInformation";
    editTitleInput.id = "editTitleInput";
    editTitleInput.placeholder = "Digite o nome do serviço";

    let editEmailInput = document.createElement("input");
    editEmailInput.className = "inputInformation";
    editEmailInput.id = "emailInput";
    editEmailInput.placeholder = "Digite o email";

    let editCnpjInput = document.createElement("input");
    editCnpjInput.className = "inputInformation";
    editCnpjInput.id = "editCnpjInput";
    editCnpjInput.placeholder = "Digite o CNPJ";

    let editPhoneInput = document.createElement("input");
    editPhoneInput.className = "inputInformation";
    editPhoneInput.id = "editPhoneInput";
    editPhoneInput.placeholder = "Digite o telefone";

    let editCepInput = document.createElement("input");
    editCepInput.className = "inputInformation";
    editCepInput.id = "editCepInput";
    editCepInput.placeholder = "Digite o CEP";

    let editHouseNumberInput = document.createElement("input");
    editHouseNumberInput.className = "inputInformation";
    editHouseNumberInput.id = "editHouseNumberInput";
    editHouseNumberInput.placeholder = "Digite o número da casa";

    let editCerimonialistEmailInput = document.createElement("input");
    editCerimonialistEmailInput.className = "inputInformation";
    editCerimonialistEmailInput.id = "editCerimonialistEmailInput";
    editCerimonialistEmailInput.placeholder = "Digite o Email do cerimonialista";

    let editTypeServiceInput = document.createElement("input");
    editTypeServiceInput.className = "inputInformation";
    editTypeServiceInput.id = "editTypeServiceInput";
    editTypeServiceInput.placeholder = "Digite o tipo de serviço";

    let editImageDiv = document.createElement("div");
    editImageDiv.id = "editImageDiv";
    let editLoadImageButtonDiv = document.createElement("input");
    editLoadImageButtonDiv.id = "filesTwo";
    editLoadImageButtonDiv.type = "file";

    let editDescriptionDiv = document.createElement("div");
    editDescriptionDiv.id = "editDescriptionDiv";
    let editDescriptionArea = document.createElement("textarea");
    editDescriptionArea.id = "editDescriptionArea";
    editDescriptionArea.placeholder = "Insira uma descrição...";
    editDescriptionArea.maxLength = 150;

    let editButtonConfirmNewServiceDiv = document.createElement("div");
    editButtonConfirmNewServiceDiv.id = "editButtonConfirmNewServiceDiv";
    let editButtonConfirmNewService = document.createElement("button");
    editButtonConfirmNewService.id = "editButtonConfirmNewService";
    editButtonConfirmNewService.textContent = "Editar serviço";

    const editToggleModal = () => {
        // Apenas alterna a visibilidade do modal e fade
        [editModal, editFade].forEach((el) => el.classList.toggle("hideTwo"));
    };

    imageEditIndividualServiceInRightSide.addEventListener("click", (event) => {
        editToggleModal();
    });

    editFade.addEventListener("click", () => editToggleModal());

    const resetEditModalContent = () => {
        // Limpar campos de entrada de texto
        editTitleInput.value = '';
        editEmailInput.value = '';
        editCnpjInput.value = '';
        editPhoneInput.value = '';
        editCepInput.value = '';
        editHouseNumberInput.value = '';
        editCerimonialistEmailInput.value = '';
        editTypeServiceInput.value = '';
        editDescriptionArea.value = '';
        // Limpar a imagem carregada (se houver uma imagem carregada)
        editLoadImageButtonDiv.value = '';
    };

    editButtonConfirmNewService.addEventListener("click", (event) => {
        const leitor = new FileReader();
        leitor.readAsDataURL(editLoadImageButtonDiv.files[0]);
        leitor.addEventListener("load", (event) => {
            imageIndividualServiceInLeftSide.src = event.target.result;
        });
        titleIndividualServiceInLeftSide.textContent = editTitleInput.value;
        textIndividualServiceInRightSide.textContent = editDescriptionArea.value;
        editToggleModal();
        resetEditModalContent();
    });

    imageRemoveIndividualServiceInRightSide.addEventListener("click", (event) => {
        divAllServices.removeChild(individualServiceDiv);
    });
    
    // Fechar o modal após adicionar o serviço
    toggleModal();

    // Limpar o conteúdo do modal após adicionar o serviço
    resetModalContent();

    editModalHeaderDiv.appendChild(editTitleNewService);
    editModalHeaderDiv.appendChild(editTitleDiv);
    editModal.appendChild(editModalHeaderDiv);
    editTitleDiv.appendChild(editTitleInput);
    editTitleDiv.appendChild(editTypeServiceInput);
    editTitleDiv.appendChild(editEmailInput);
    editTitleDiv.appendChild(editCerimonialistEmailInput);
    editTitleDiv.appendChild(editCnpjInput);
    editTitleDiv.appendChild(editPhoneInput);
    editTitleDiv.appendChild(editCepInput);
    editTitleDiv.appendChild(editHouseNumberInput);
    editImageDiv.appendChild(editLoadImageButtonDiv);
    editTitleImageDiv.appendChild(editImageDiv);
    editModalBodyDiv.appendChild(editTitleImageDiv);
    editModalBodyDiv.appendChild(editDescriptionDiv);
    editDescriptionDiv.appendChild(editDescriptionArea);
    editModal.appendChild(editModalBodyDiv);
    editButtonConfirmNewServiceDiv.appendChild(editButtonConfirmNewService);
    editModal.appendChild(editButtonConfirmNewServiceDiv);
    corpo.appendChild(editFade);
    corpo.appendChild(editModal);
});

// Fechar o modal quando o fade for clicado
fade.addEventListener("click", () => toggleModal());

// Inicialização do conteúdo
corpo.appendChild(divAllContentService);
modalHeaderDiv.appendChild(titleNewService);
modalHeaderDiv.appendChild(titleDiv);
modal.appendChild(modalHeaderDiv);
titleDiv.appendChild(titleInput);
titleDiv.appendChild(typeServiceInput);
titleDiv.appendChild(emailInput);
titleDiv.appendChild(cerimonialistEmailInput);
titleDiv.appendChild(cnpjInput);
titleDiv.appendChild(phoneInput);
titleDiv.appendChild(cepInput);
titleDiv.appendChild(houseNumberInput);
titleDiv.appendChild(alertArea);
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


