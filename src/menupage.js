import menu from "./menu.json";

function generateMenuContainer(){
    const mainContent = document.querySelector(".main-content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    mainContent.append(menuContainer);
}

function generateSubContainer(prop){

    let itemCounter = 1;

    for(const subMenu in prop){
        const container = document.createElement("div");
        container.classList.add("menu-sub-containers");

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("sub-menu-title-containers");
        titleContainer.textContent = subMenu;
        container.appendChild(titleContainer);

        prop[subMenu].forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("menu-item-container");

            const topSection = document.createElement("div");
            topSection.classList.add("menu_top-section");

            const menuNumber = document.createElement("h3");
            menuNumber.classList.add("menu-number");
            menuNumber.textContent = itemCounter;
            itemCounter++;

            const itemName = document.createElement("div");
            itemName.classList.add("menu-item-name");
            itemName.textContent = item.name;

            topSection.appendChild(menuNumber);
            topSection.appendChild(itemName);

            const bottomSection = document.createElement("div");
            bottomSection.classList.add("menu_bottom-section");

            const itemDescription = document.createElement("div");
            itemDescription.classList.add("menu_item-description");
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement("div");
            itemPrice.classList.add("menu_item-price");
            itemPrice.textContent = item.price;

            bottomSection.appendChild(itemDescription);
            bottomSection.appendChild(itemPrice);

            itemContainer.appendChild(topSection);
            itemContainer.appendChild(bottomSection);

            container.appendChild(itemContainer);
        })

        const parentContainer = document.querySelector(".menu-container");
        parentContainer.appendChild(container);
    }
}

function displayMenuPage(){
    generateMenuContainer();
    generateSubContainer(menu);
}

export { displayMenuPage };