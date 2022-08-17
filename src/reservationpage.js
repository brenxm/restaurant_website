import restaurantImg from "./restaurant.png"

function generateReservationContainer(){
    const reservationContainer = document.createElement("div");
    reservationContainer.classList.add("reservation-container");

    const leftSection = document.createElement("div");
    leftSection.classList.add("reservation_left-section");

    const rightSection = document.createElement("div");
    rightSection.classList.add("reservation_right-section");

    reservationContainer.appendChild(leftSection);
    reservationContainer.appendChild(rightSection);

    const mainContainer = document.querySelector(".main-content");
    mainContainer.appendChild(reservationContainer);
}

function leftSectionComponent(){
    
    generateInputContainer("Name:", "reservation_name", "text", "reservation_name-input");
    generateInputContainer("Number of guests:", "reservation_name", "text", "reservation_guest-input");
    generateInputContainer("Time:", "reservation_name", "select", "reservation_time-input");
    generateInputContainer("Phone number:", "reservation_name", "tel", "reservation_tel-input");
    generateInputContainer("Email", "reservation_name", "email", "reservation_email-input");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("reservation_input-container");

    const submitButton = document.createElement("button");
    submitButton.classList.add("reservation_submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "SUBMIT";

    buttonContainer.appendChild(submitButton);

    const leftSectionContainer = document.querySelector(".reservation_left-section");
    leftSectionContainer.appendChild(buttonContainer);

    const disclaimerContainer = document.createElement("div");
    disclaimerContainer.classList.add("reservation_disclaimer-container");
    leftSectionContainer.appendChild(disclaimerContainer);

    addDisclaimer("Culpa proident consectetur officia officia minim nostrud eu.");
    addDisclaimer("Qui et ad voluptate ex qui occaecat aute veniam laboris dolor reprehenderit.");
    addDisclaimer("Consequat duis ad duis minim labore nulla ut ex.");
    addDisclaimer("Laborum anim est sunt nostrud esse deserunt cupidatat voluptate duis fugiat nisi consectetur culpa.");


    function addDisclaimer(str){
        const text = document.createElement("p");
        text.classList.add("reservation_disclaimer-text");
        text.textContent = str;

        const disclaimerContainer = document.querySelector(".reservation_disclaimer-container");
        disclaimerContainer.append(text);
    }


    function generateInputContainer(title, titleClassName, inputType, inputClassName ){
        const container = document.createElement("div");
        container.classList.add("reservation_input-container");
        const name = document.createElement("div");
        name.textContent = title;
        name.classList.add(titleClassName);

        const input = document.createElement("input");
        input.classList.add(inputClassName);
        input.setAttribute("type", inputType);

        container.appendChild(name);
        container.appendChild(input);
        
        const leftSectionCOntainer = document.querySelector(".reservation_left-section");
        leftSectionCOntainer.appendChild(container);
    }
}

function rightSectionComponent(){
    const rightSectionContainer = document.querySelector(".reservation_right-section");
    const img = document.createElement("img");
    img.classList.add("reservation_img");
    img.src = restaurantImg;

    rightSectionContainer.appendChild(img);
}


function displayReservationPage(){
    generateReservationContainer();
    leftSectionComponent();
    rightSectionComponent();
}

export { displayReservationPage };