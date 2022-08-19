export default function contactUsComponent(){
    return `
        <div class = "contactus-container">
            ${generateAddressContext("Yves Resto New York City", "2299 West Albert, New York City, 22092", "(212) 234 4421", "yvesibyang@restorant.ingnore") }
            ${generateAddressContext("Yves Resto Signapore", "4299 Okatokat, Singapore City, 22092", "(2222) 234 4421", "yvesibyangsingapore@restorant.ingnore") }
            ${generateAddressContext("Yves Resto Phillipines", "399 Okatokat, Rizal City, 2214", "(932) 234 4421", "yvesibyangphilippines@restorant.ingnore") }
            ${generateSubscribeInput()}
        </div>
    `;

    function generateAddressContext(title, address, number, email) {
        return `
        <div class = "contactus_single-container">
            <div class = "contactus_title">${title}</div>
            <div class = "contactus_location">${address}</div>
            <div class = "contactus_tel">${number}</div>
            <div class = "contactus_email">${email}</div>
        </div>
    `
    };

    function generateSubscribeInput() {
        return `
        <div class = "contactus_subscribe-container">
            <div class = "contactus_subscriber-name">Subscribe for news and promos.</div>
            <input class = "contactus_subscribe-input"></input>
            <button class = "contactus_subscribe-button">subscribe</button> 
        </div>
    `
    }
}


