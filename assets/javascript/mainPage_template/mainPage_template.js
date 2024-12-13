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
    let servicinho = document.createElement("div");
    servicinho.id = "servicinho";
    divAllServices.appendChild(servicinho)
    let servicinhodois = document.createElement("div");
    servicinhodois.id = "servicinhodois";
    divAllServices.appendChild(servicinhodois)
    let servicinhotres = document.createElement("div");
    servicinhotres.id = "servicinhotres";
    divAllServices.appendChild(servicinhotres)
    let servicinhoquatro = document.createElement("div");
    servicinhoquatro.id = "servicinhoquatro";
    divAllServices.appendChild(servicinhoquatro)

    let parteEsquerdaDiv = document.createElement("div");
    parteEsquerdaDiv.id = "parteEsquerdaDiv";
    let parteDireitaDiv = document.createElement("div");
    parteDireitaDiv.id = "parteDireitaDiv";
    let tituloServico = document.createElement("div");
    tituloServico.id = "tituloServico";
    let titulo = document.createElement("h1");
    titulo.id = "titulo"
    let imagemDiv = document.createElement("div");
    imagemDiv.id = "imagemDiv";
    let imagem = document.createElement("img");
    imagem.id = "imagemBacana"
    let botaoContratarDiv = document.createElement("div");
    let botaoContratar = document.querySelector("button");
    botaoContratar.id = "botaoContratar";
    botaoContratar.textContent = "Contratar";
    botaoContratarDiv.id = "botaoContratarDiv";
    let textoDiv = document.createElement("div");
    textoDiv.id = "textoDiv"
    let texto = document.createElement("p")
    texto.id = "texto";

    servicinho.appendChild(parteEsquerdaDiv);
    servicinho.appendChild(parteDireitaDiv);
    parteEsquerdaDiv.appendChild(tituloServico);
    tituloServico.appendChild(titulo);
    parteEsquerdaDiv.appendChild(imagemDiv);
    imagemDiv.appendChild(imagem);
    parteEsquerdaDiv.appendChild(botaoContratarDiv);
    botaoContratarDiv.appendChild(botaoContratar);
    parteDireitaDiv.appendChild(textoDiv)
    textoDiv.appendChild(texto)
    
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
    h1.textContent = "CALENDÁRIO"; 
    divSchadelure.appendChild(h1);
    corpo.appendChild(divSchadelure);
    currentContent = divSchadelure; 
    const body = document.querySelector("main");

    body.style.margin = "0";
    body.style.fontFamily = "Arial, sans-serif";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.height = "100vh";
    body.style.backgroundColor = "#f0f0f0";

    const calendar = document.createElement("div");
    calendar.style.background = "#fff";
    calendar.style.padding = "100px";
    calendar.style.borderRadius = "8px";
    calendar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    body.appendChild(calendar);

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
    prevButton.addEventListener("mouseover", () => prevButton.style.background = "#0056b3");
    prevButton.addEventListener("mouseout", () => prevButton.style.background = "#007bff");
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
    nextButton.addEventListener("mouseover", () => nextButton.style.background = "#0056b3");
    nextButton.addEventListener("mouseout", () => nextButton.style.background = "#007bff");
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

    // Preencher dias anteriores
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }

    // Preencher dias do mês
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