const service = document.querySelector("#service");
const budget = document.querySelector("#budget");
const schadelure = document.querySelector("#schadelure");
const contract = document.querySelector("#contract");
const clients = document.querySelector("#clients");
const list = document.querySelector("#list");
const sidebarLines = document.getElementsByClassName("sidebar_line_item");
const corpo = document.querySelector("main");
const list_customer = document.querySelector("#list-customers");

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
    let divButtonAddService = document.createElement("div");
    divButtonAddService.id = "divButtonAddService";
    let buttonAddService = document.createElement("button");
    buttonAddService.textContent = "Adicionar serviço";
    buttonAddService.id = "buttonAddService";
    divButtonAddService.appendChild(buttonAddService);
    divServices.appendChild(divButtonAddService);
    divAllContentService.appendChild(divServices);

    let divAllServices = document.createElement("div");
    divAllServices.id = "divAllServices";
    divServices.appendChild(divAllServices);

    corpo.appendChild(divAllContentService);
    currentContent = divAllContentService; 
}

function create_budget() {
    let divAllContentBudget = document.createElement("div");
    divAllContentBudget.id = "divAllContentBudget";
    let teste = document.createElement("h1");
    teste.textContent = "pinto";
    divAllContentBudget.appendChild(teste);
    corpo.appendChild(divAllContentBudget);
    currentContent = divAllContentBudget; 
}

function create_schadelure() {
    let divSchadelure = document.createElement("div");
    divSchadelure.id = "divSchadelure";
    let h1 = document.createElement("h1");
    h1.textContent = "Conteúdo de Schadelure"; 
    divSchadelure.appendChild(h1);
    corpo.appendChild(divSchadelure);
    currentContent = divSchadelure; 
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
    let divClients = document.createElement("div");
    divClients.id = "divClients";
    let h1 = document.createElement("h1");
    h1.textContent = "Conteúdo de Clientes"; 
    divClients.appendChild(h1);
    corpo.appendChild(divClients);
    currentContent = divClients; 
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
    let customer_txt = document.createElement("p");
    customer_txt.id = "customer_txt";
    customer_txt.textContent = "Paulo Porciuncula Davis Júnior";
    customer.appendChild(customer_txt);
    list_customer.appendChild(customer);
}

window.onload = () => {
    create_service(); 
    create_list_customer();
};