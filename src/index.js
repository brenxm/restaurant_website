import  appComponent  from "./app";
import  homeComponent  from "./homepage";
import menuComponent from "./menupage";
import reservationComponent  from "./reservationpage";
import  contactUsComponent  from "./contactuspage";
import "./styles.css";

let currentPage = null;

webStartUp();

function switchPages(event) {
    const inputValue = parseInt(event.target.getAttribute("data-id"));
    
    if (currentPage === inputValue) return;

    navIconUpdater(event);
    
    const mainContent = document.querySelector(".main-content");

    switch (inputValue) {
        //home
        case 0:
            mainContent.innerHTML = homeComponent();
            currentPage = 0;
            break;
        //reservation
        case 1:
            currentPage = 1;
            mainContent.innerHTML = reservationComponent();
            break;
        //menu
        case 2:
            mainContent.innerHTML = menuComponent();
            currentPage = 2;
            break;
        //contact us
        case 3:
            mainContent.innerHTML = contactUsComponent();
            currentPage = 3;
            break;
    }

    function navIconUpdater() {
        const buttons = document.querySelectorAll(".nav-single-container");
        buttons.forEach(button => {
            button.setAttribute("id", "nav-button--unselected");
        })
        event.target.setAttribute("id", "nav-button--selected");
    }
}

function webStartUp(){
    document.querySelector("#content").innerHTML = appComponent();
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML = homeComponent();
    
    const buttons = document.querySelectorAll(".nav-single-container");
    buttons.forEach(button => button.addEventListener("click", switchPages));

    buttons.forEach(button => {
        if(button.getAttribute("data-id") == 0){
            button.setAttribute("id", "nav-button--selected");
        }
    })
}




