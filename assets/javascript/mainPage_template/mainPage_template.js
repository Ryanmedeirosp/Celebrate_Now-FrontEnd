// id="sidebar_line_item" sidebar.classList.toggle("active");

const sidebarLines = document.getElementsByClassName("sidebar_line_item");

window.onload = () => {

    console.log(sidebarLines);
};

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