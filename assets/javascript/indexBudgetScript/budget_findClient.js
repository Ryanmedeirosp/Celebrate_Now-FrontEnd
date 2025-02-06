async function findClient() {

    fetch(`http://localhost:8080/client/${localStorage.getItem("ceremonialistId")}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
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
        // console.log("Clientes", data);

        const customers = Array.isArray(data) ? data : [data];

        let customersArray = JSON.parse(localStorage.getItem("customersArray")) || [];

        customers.forEach((customer) => {

            if (!customersArray.includes(customer.clientId)){ 

                customersArray.push(customer.clientId);
            }
        });

        customersArray.sort();
        
        localStorage.setItem("customersArray", JSON.stringify(customersArray));
        console.log("IDs armazenados:", customersArray);
    })

    .catch((error) => {
        console.error("Erro ao buscar clientes:", error);
        alert(error.message || "Erro ao buscar clientes.");
    });
}

window.addEventListener("load", (event) =>{

    findClient();
});