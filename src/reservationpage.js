import restaurantImg from "./asset/restaurant.png"

export default function reservationComponent(){
    return `
        <div class = "reservation-container">
            <div class = "reservation_left-section">
                ${generateInputContainer("Name:", "reservation_name", "text", "reservation_name-input")}
                ${generateInputContainer("Number of guests:", "reservation_name", "text", "reservation_guest-input") }
                ${generateInputContainer("Time:", "reservation_name", "select", "reservation_time-input")}
                ${generateInputContainer("Phone number:", "reservation_name", "tel", "reservation_tel-input")}
                ${generateInputContainer("Email", "reservation_name", "email", "reservation_email-input")}
                <button class = "reservation_submit-button" type = "submit">SUBMIT</button>

                <div class = "reservation_disclaimer-container">
                    ${addDisclaimer("Culpa proident consectetur officia officia minim nostrud eu.") }
                    ${addDisclaimer("Qui et ad voluptate ex qui occaecat aute veniam laboris dolor reprehenderit.") }
                    ${addDisclaimer("Consequat duis ad duis minim labore nulla ut ex.") }
                    ${addDisclaimer("Laborum anim est sunt nostrud esse deserunt cupidatat voluptate duis fugiat nisi consectetur culpa.") }
                </div>
            </div>

            <div class = "reservation_right-section">
                <img src = ${restaurantImg} class = "reservation_img">
            </div>
        </div>
    `

    function addDisclaimer(str) {
        return `
            <p class = "reservation_disclaimer-text">${str}</p>
        `;
    };

    function generateInputContainer(title, titleClassName, inputType, inputClassName) {
        return `
            <div class = "reservation_input-container">
                    <div class = ${titleClassName}>${title}</div>
                    <input type = ${inputType} class = ${inputClassName}>
            </div>
        `
    };
}