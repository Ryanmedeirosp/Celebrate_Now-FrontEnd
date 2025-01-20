const service = document.querySelector("#service");
const budget = document.querySelector("#budget");
const schadelure = document.querySelector("#schadelure");
const contract = document.querySelector("#contract");
const clients = document.querySelector("#clients");
const list = document.querySelector("#list");
const sidebarLines = document.getElementsByClassName("sidebar_line_item");
const corpo = document.querySelector("main");
const list_customer = document.querySelector("#list-customers");
const btnSeeAllCustomers = document.querySelector("#btn-see-all-customers");

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); // Obtém o nome da página atual
    const menuItems = document.querySelectorAll('.sidebar_content li');

    menuItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href');
        if (link === currentPage) {
            item.classList.add('active');
        }
    });
});

let currentContent = null;

function removePreviousContent() {
    if (currentContent) {
        corpo.removeChild(currentContent);
        currentContent = null;
    }
}

btnSeeAllCustomers.addEventListener("click", (event) => {
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

// Função para adicionar evento ao calendário
function adicionarEventoAoCalendario(dataEvento) {
    const diasContainer = document.querySelector("#divSchadelure div div:nth-child(3)"); // Seleciona o container dos dias
    const dias = diasContainer.children;

    for (let i = 0; i < dias.length; i++) {
        const diaDiv = dias[i];
        const dia = parseInt(diaDiv.textContent);

        // Verifica se o dia corresponde à data do evento
        if (dia === dataEvento.getDate() && 
            new Date(dataEvento).getMonth() === new Date().getMonth() && 
            new Date(dataEvento).getFullYear() === new Date().getFullYear()) {
            diaDiv.style.background = "#28a745"; // Marca o dia com uma cor verde
            diaDiv.style.color = "white"; // Muda a cor do texto para branco
            diaDiv.classList.add("evento"); // Adiciona uma classe para referência futura
        }
    }
}

window.onload = () => {
    create_schadelure()
};