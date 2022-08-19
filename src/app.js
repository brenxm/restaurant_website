import homeImg from "./asset/home.png";
import reservationImg from "./asset/reservation.png";
import menuImg from "./asset/menu.png";
import contactusImg from "./asset/contactus.png";

export default function appComponent(){
    return `
        ${titleComponent("Yves Ibyang", "VEGETARIAN STEAK HOUSE")}
        ${generateNavContainer()}
        <div class = "main-content">
        </div>
    `
    
    function titleComponent(pageTitle, pageSubTitle) {
        return `
        <div class = "title-container">
            <h1 class = "main-title">${pageTitle}</h1>
            <h2 class = "sub-title">${pageSubTitle}</h2>
        </div>
       `
    }

    function generateNavContainer() {
        return `
            <div class = "nav-container">
                ${createTabButton("Home", homeImg, "0")}
                ${createTabButton("Reservation", reservationImg, "1")}
                ${createTabButton("Menu", menuImg, "2")}
                ${createTabButton("Contact Us", contactusImg, "3")}
            </div>
        `
    }

    function createTabButton(text, iconImage, dataAttribute) {
        return `
            <div class = "nav-single-container" id = "nav-button--unselected" data-id = ${dataAttribute}>
                <img src = ${iconImage} class = "nav-icons" alt = "nav icons">
                <div class = "nav-text">${text}</div>
            </div>
        `
    }
}
