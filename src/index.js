import { appComponent } from "./app";
import { homeComponent } from "./homepage";
import { displayMenuPage } from "./menupage";
import { displayReservationPage } from "./reservationpage";
import "./styles.css";

let currentPage = null;

//initilize main structure
appComponent();

//default page on start up
homeComponent.initialize();

function switchPages(input) {
    const inputValue = parseInt(input.target.getAttribute("id"));
    
    if (currentPage === inputValue) return;

    clearMainContent();

    switch (inputValue) {
        //home
        case 0:
            homeComponent.initialize();
            currentPage = 0;
            break;
        //reservation
        case 1:
            currentPage = 1;
            displayReservationPage();
            break;
        //menu
        case 2:
            displayMenuPage();
            currentPage = 2;
            break;
        //contact us
        case 3:
            currentPage = 3;
            break;
    }

    function clearMainContent(){
        const mainContent = document.querySelector(".main-content");
        console.log("called");
        while(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild);
        }
    }
}

const buttons = document.querySelectorAll(".nav-single-container");

buttons.forEach(button => button.addEventListener("click", switchPages));


