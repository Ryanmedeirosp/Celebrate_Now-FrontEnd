fetch(`https://deploy-back-1.onrender.com/contract/1`, {
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
    data.forEach(contract => {
        
        localStorage.setItem("currentContractIndex", 0);

    });
    

})
.catch((error) => {
    console.error( error);
}); 

function logout() {
    // Limpa todo o localStorage
    localStorage.clear();

    // Redireciona para a página landingPage.html
    window.location.href = 'landingPage.html';
}  