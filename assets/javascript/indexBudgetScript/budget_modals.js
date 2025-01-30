//Add Item modal
const modalItem = document.querySelector(".modal-add-item");
const modalItemContainer = document.querySelector(".modal-add-item-container");
const modalAddItemLever = 'modal-add-item-show';

//New Budget modal

const newBudget = document.querySelector(".modal-new-budget");
const newBudgetContainer = document.querySelector(".modal-new-budget-container");
const newBudgetLever = "modal-new-budget-show";

//Buttons
const buttonAddItem = document.querySelector(".budget-button-add");
const buttonNewBudget = document.querySelector(".budget-button-new-budget")

//Add Item Div 
const confirmItemButton = document.querySelector(".add-item-button-confirm");
const cancelItemButton = document.querySelector(".add-item-button-cancel");

function openModal(name, lever){

    name.classList.add(lever);
}

function closeModal(name, lever){

    name.classList.remove(lever);
}

/* Add Item Config */

buttonAddItem.addEventListener("click", (event) =>{

    openModal(modalItem, modalAddItemLever);
});

modalItem.addEventListener("click",(event) =>{

    if (modalItemContainer.contains(event.target)) {
        
        return;
    } else{

        closeModal(modalItem, modalAddItemLever);
    };
});

confirmItemButton.addEventListener("click", (event) =>{

    console.log("Confirm");
});

cancelItemButton.addEventListener("click", (event) =>{

    closeModal(modalItem, modalAddItemLever);
});

/* New Budget Config */

buttonNewBudget.addEventListener("click", (event) =>{

    openModal(newBudget, newBudgetLever);
    console.log("Budget");
});

newBudget.addEventListener("click", (lever) =>{

    if(newBudgetContainer.contains(event.target)){

        return;
    } else{

        closeModal(newBudget, newBudgetLever);
    }
});
