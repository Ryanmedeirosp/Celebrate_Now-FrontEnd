// id="sidebar_line_item" sidebar.classList.toggle("active");
const service = document.querySelector("#service");
const budget = document.querySelector("#budget");
const schadelure = document.querySelector("#schadelure");
const contract = document.querySelector("#contract");
const clients = document.querySelector("#clients");
const list = document.querySelector("#list");
const sidebarLines = document.getElementsByClassName("sidebar_line_item");
const corpo = document.querySelector("main");

for (let index = 0; index < sidebarLines.length; index++) {
    
    sidebarLines[index].addEventListener("click", (event) =>{

        for (let index = 0; index < sidebarLines.length; index++) {
            
            if (sidebarLines[index].classList.contains("active")) {
                
                sidebarLines[index].classList.toggle("active");
            }  
        }
        sidebarLines[index].classList.toggle("active");
    });
};

window.onload=()=>{
    create_service()
    create_list_customer()
}

service.addEventListener("click", (event) => {
    create_service()
});

budget.addEventListener("click", (event) => {
    create_budget()
});

schadelure.addEventListener("click", (event) => {
    create_schadelure()
});

contract.addEventListener("click", (event) => {
    create_contract()
});

clients.addEventListener("click", (event) => {
    create_clients()
});

list.addEventListener("click", (event) => {
    create_contract()
});

const list_customer = document.querySelector("#list-customers")

function create_list_customer() {
    let customer = document.createElement("div")
    customer.id = "customer"
    let customer_txt = document.createElement("p")
    customer_txt.id = customer_txt
    customer_txt.innerHTML = "Paulo Porciuncula Davis Júnior"
    customer.appendChild(customer_txt)
    list_customer.appendChild(customer)
    console.log(customer_txt)
}

function create_service(){
    let divImg_user = document.createElement("div")
    divImg_user.id = "divImg_user"
    let img_user = document.createElement("img")
    img_user.id= "img_user"
    img_user.src = "../assets/images/user-icon-removebg-preview.svg"
    divImg_user.appendChild(img_user)
    let txt_user = document.createElement("h3")
    txt_user.id = "txt_user"
    txt_user.textContent = "Bem vindo" + " XXXXXX"
    divImg_user.appendChild(txt_user)
    corpo.appendChild(divImg_user)

    let divBanner_service = document.createElement("div")
    divBanner_service.id = "divBanner_service"
    let banner_service = document.createElement("img")
    banner_service.id = "banner_service"
    banner_service.src = "../assets/images/frame 3.svg"
    divBanner_service.appendChild(banner_service)
    corpo.appendChild(divBanner_service)

    let divServices = document.createElement("div");
    divServices.id = "divServices";
    

    let divButtonAddService = document.createElement("div");
    divButtonAddService.id = "divButtonAddService";

    let buttonAddService = document.createElement("button");
    buttonAddService.textContent = "Adicionar serviço";
    buttonAddService.id = "buttonAddService";

    divButtonAddService.appendChild(buttonAddService);
    divServices.appendChild(divButtonAddService);
    corpo.appendChild(divServices)
};

function create_budget(){

};

function create_schadelure(){

};

function create_contract(){

};

function create_clients(){

}

function create_list(){

}