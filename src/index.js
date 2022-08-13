import { appComponent } from "./app";
import { homeComponent } from "./homepage";
import "./styles.css";

let currentPage = null;

//initilize main structure
appComponent();

//default page on start up



function switchPages(input) {
    if (currentPage === input) return;

    clearMainContent();

    switch (parseInt(input.target.getAttribute("id"))) {
        //home
        case 0:
            homeComponent.initialize();
            currentPage = 0;
            break;

        //reservation
        case 1:
            currentPage = 1;
            break;
        //menu

        case 2:
        //contact us
            currentPage = 2;
            break;
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


