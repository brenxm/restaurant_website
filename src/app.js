import imgPlaceHolder from "./placeholder.png";

function appComponent(){
    const contentContainer = document.querySelector("#content");
    //create title
    function generateTitleContainer() {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("main-title");
        title.textContent = "Yves Ibyang";

        const subTitle = document.createElement("h2");
        subTitle.classList.add("sub-title");
        subTitle.textContent = "Vegetarian Steak House"

        contentContainer.appendChild(titleContainer);
        titleContainer.appendChild(title);
        titleContainer.appendChild(subTitle);
    }

    //create nav bar
    function generateNavContainer() {
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav-container");
        contentContainer.appendChild(navContainer);

        createTabButton("Home", imgPlaceHolder, "0" );
        createTabButton("Reservation", imgPlaceHolder, "1");
        createTabButton("Menu", imgPlaceHolder, "2");
        createTabButton("Contact Us", imgPlaceHolder, "3");
    }

    function generateMainContainer(){
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-content");
        contentContainer.appendChild(mainContainer);
    }

    function createTabButton(text, iconImage, idAttribute) {
        const icon = document.createElement("img");
        icon.src = iconImage;
        icon.classList.add("nav-icons");

        const title = document.createElement("div");
        title.textContent = text;
        title.classList.add("nav-text");

        const singleContainer = document.createElement("div");
        singleContainer.classList.add("nav-single-container");
        singleContainer.setAttribute("id", idAttribute);
        singleContainer.appendChild(icon);
        singleContainer.appendChild(title);

        const navContainer = document.querySelector(".nav-container");
        navContainer.appendChild(singleContainer);
    }

    generateTitleContainer();
    generateNavContainer();
    generateMainContainer();
}

export { appComponent };