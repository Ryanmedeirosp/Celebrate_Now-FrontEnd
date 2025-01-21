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
let buttonAddService = document.createElement("button");
buttonAddService.textContent = "Novo serviço";
buttonAddService.className = "buttonService";
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
cepInput.placeholder = "Digite o CEP";

let houseNumberInput = document.createElement("input");
houseNumberInput.className = "inputInformation";
houseNumberInput.id = "houseNumberInput";
houseNumberInput.placeholder = "Número da casa";

let cerimonialistEmailInput = document.createElement("input");
cerimonialistEmailInput.className = "inputInformation";
cerimonialistEmailInput.id = "cerimonialistEmailInput";
cerimonialistEmailInput.placeholder = "Email do cerimonialista";

let typeServiceInput = document.createElement("input");
typeServiceInput.className = "inputInformation";
typeServiceInput.id = "typeServiceInput";
typeServiceInput.placeholder = "Tipo de serviço";

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
    rightSideIndividualServiceDiv.appendChild(textIndividualServiceInRightSideDiv);
    textIndividualServiceInRightSideDiv.appendChild(textIndividualServiceInRightSide);
    rightSideIndividualServiceDiv.appendChild(knowMoreIndividualServiceInRightSideDiv);
    knowMoreIndividualServiceInRightSideDiv.appendChild(knowMoreIndividualServiceInRightSide);

    imageEditIndividualServiceInRightSide.addEventListener("click", (event) => {

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
        rightSideIndividualServiceDiv.appendChild(textIndividualServiceInRightSideDiv);
        textIndividualServiceInRightSideDiv.appendChild(textIndividualServiceInRightSide);
        rightSideIndividualServiceDiv.appendChild(knowMoreIndividualServiceInRightSideDiv);
        knowMoreIndividualServiceInRightSideDiv.appendChild(knowMoreIndividualServiceInRightSide);

    });

    // Fechar o modal após adicionar o serviço
    toggleModal();

    // Limpar o conteúdo do modal após adicionar o serviço
    resetModalContent();
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
