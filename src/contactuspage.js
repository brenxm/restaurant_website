
function generateAddressContext(nameraw, address, number, email){
    const container = document.createElement("div");
    container.classList.add("contactus_single-container");

    const name = document.createElement("div");
    name.classList.add("contactus_title");
    name.textContent = nameraw;

    const location = document.createElement("div");
    location.classList.add("contactus_location");
    location.textContent = address;

    const tel = document.createElement("div");
    tel.classList.add("contactus_tel");
    tel.textContent = number;

    const emailTx = document.createElement("div");
    emailTx.classList.add("contactus_email");
    emailTx.textContent = email;

    container.appendChild(name);
    container.appendChild(location);
    container.appendChild(tel);
    container.appendChild(emailTx);

    const contactUsContainer = document.querySelector(".contactus-container");
    contactUsContainer.appendChild(container);
}

function generateSubscribeInput(){
    const subscribeContainer = document.createElement("div");
    subscribeContainer.classList.add("contactus_subscribe-container");

    const title = document.createElement("div");
    title.classList.add("contactus_subscriber-name");
    title.textContent = "Subscribe for news and promos.";

    const textInput = document.createElement("input");
    textInput.classList.add("contactus_subscribe-input");

    subscribeContainer.appendChild(title);
    subscribeContainer.appendChild(textInput);

    const button = document.createElement("button");
    button.classList.add("contactus_subscribe-button");
    button.textContent = "subscribe";

    subscribeContainer.appendChild(button);


    const contactUsContainer = document.querySelector(".contactus-container");
    contactUsContainer.appendChild(subscribeContainer);
}

function displayContactUsPage(){
    const mainContainer = document.querySelector(".main-content");
    const contactUsContainer = document.createElement("div");
    contactUsContainer.classList.add("contactus-container");
    mainContainer.appendChild(contactUsContainer);

    generateAddressContext("Yves Resto New York City", "2299 West Albert, New York City, 22092", "(212) 234 4421", "yvesibyang@restorant.ingnore");
    generateAddressContext("Yves Resto Signapore", "4299 Okatokat, Singapore City, 22092", "(2222) 234 4421", "yvesibyangsingapore@restorant.ingnore");
    generateAddressContext("Yves Resto Phillipines", "399 Okatokat, Rizal City, 2214", "(932) 234 4421", "yvesibyangphilippines@restorant.ingnore");

    generateSubscribeInput();


}

export { displayContactUsPage };