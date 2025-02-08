//Add Item modal
const modalItem = document.querySelector(".modal-add-item");
const modalItemContainer = document.querySelector(".modal-add-item-container");
const modalAddItemLever = 'modal-add-item-show';

//New Budget modal
const newBudget = document.querySelector(".modal-new-budget");
const newBudgetContainer = document.querySelector(".modal-new-budget-container");
const newBudgetLever = "modal-new-budget-show";

//Buttons
// - Add Item
const buttonAddItem = document.querySelector(".budget-button-add");
const buttonNewBudget = document.querySelector(".budget-button-new-budget")

// - New Budget
const buttonCancelNewBudget = document.querySelector(".new-budget-button-cancel");
const buttonConfirmNewBudget = document.querySelector(".new-budget-button-confirm");

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

    addItemToBudget(
        addItemName.value, 
        addItemDescription.value, 
        parseFloat(addItemPrice.value), 
        localStorage.getItem("actualBudget"));

    closeModal(modalItem, modalAddItemLever);

    location.reload();
});

cancelItemButton.addEventListener("click", (event) =>{

    closeModal(modalItem, modalAddItemLever);
});

/* New Budget Config */

buttonNewBudget.addEventListener("click", (event) =>{

    openModal(newBudget, newBudgetLever);
    
    console.log("Budget");
});

newBudget.addEventListener("click", (event) =>{

    if(newBudgetContainer.contains(event.target)){

        return;
    } else{

        closeModal(newBudget, newBudgetLever);
    }
});

buttonCancelNewBudget.addEventListener("click", (event) =>{

    closeModal(newBudget, newBudgetLever);
});

buttonConfirmNewBudget.addEventListener("click", (event) =>{

    createNewBudget(
        createNewBudgetEmailClient.value,
        createNewBudgetEmailSupplier.value
    );
    console.log("Confirmar novo orçamento.")
    location.reload();

});