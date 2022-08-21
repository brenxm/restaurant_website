import menu from "./restaurant_content/menu.json";

export default function menuComponent(){
    return `
        <div class = "menu-container">
            ${generateMenuCollection(menu)}
        </div>
    `

    function generateMenuCollection(prop){
        let tempStrMain = "";
        let itemCounter = 1;

        for(const subMenu in prop){
            console.log("called");
            tempStrMain += `
            <div class = "menu-sub-containers">
                <div class = "sub-menu-title-containers">
                    ${subMenu}
                </div>
                ${generateListOfItems(prop, subMenu)}
            </div>
        `
        };

        return tempStrMain;

        function generateListOfItems(prop, propName){
            let tempStr = "";
            prop[propName].forEach(item => {
                tempStr += `
                    <div class = "menu-item-container">
                        <div class = "menu_top-section">
                            <h3 class = "menu-number">${itemCounter}</h3>
                            <div class = "menu-item-name">${item.name}</div>
                        </div>
                        <div class = "menu_bottom-section">
                            <div class = "menu_item-description">${item.description}</div>
                            <div class = "menu_item-price">${item.price}</div>
                        </div>
                    </div>
                `
            })

            itemCounter++;

            return tempStr;
        }
    }
}