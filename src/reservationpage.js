//create parentContainer,

//create two sections left and right

//left section 
    //the form
        //name
        //how many guest
        //time slot
        //phonenumber

        //submit button

//right section
    //photo

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


function displayReservationPage(){
    generateReservationContainer();
    leftSectionComponent();
}

export { displayReservationPage };