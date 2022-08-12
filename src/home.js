import startIcon from "./staricon.svg";
import knifeImage from "./kitchenknife.png";
import webText from "./webtext.json";
import placeHolderImg from "./placeholder.png";

const homeComponent = (() => {
    const parentContainer = document.querySelector("#content");

    function generateTitleContainer() {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("main-title");
        title.textContent = "Yves Ibyang";

        const subTitle = document.createElement("h2");
        subTitle.classList.add("sub-title");
        subTitle.textContent = "Ilocano Steak House"

        parentContainer.appendChild(titleContainer);
        titleContainer.appendChild(title);
        titleContainer.appendChild(subTitle);
    }

    function generateNavContainer(reservationLogo, menuLogo, contactLogo) {
        const navContainer = document.createElement("div");
        navContainer.classList.add("nav-container");
        parentContainer.appendChild(navContainer);

        //reservation
        const reserveLink = document.createElement("a");
        const reserveImg = document.createElement("img");
        reserveLink.classList.add("nav-link");
        reserveLink.setAttribute("href", "facebook.com");
        reserveLink.appendChild(reserveImg);
        reserveImg.classList.add("reserve-img");

        const reserveContainer = document.createElement("div");
        reserveContainer.classList.add("reserve-container");
        reserveImg.src = reservationLogo;
        reserveContainer.appendChild(reserveLink);
        navContainer.appendChild(reserveContainer);

        const reserveText = document.createElement("div");
        reserveText.textContent = "Reservation";
        reserveText.classList.add("nav-text");
        reserveContainer.appendChild(reserveText);

        //menu
        const menuLink = document.createElement("a");
        menuLink.classList.add("nav-link");
        menuLink.setAttribute("href", "fb.com");
        const menuImg = document.createElement("img");
        menuLink.appendChild(menuImg);

        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        menuImg.src = menuLogo;
        menuImg.classList.add("menu-img");
        menuContainer.appendChild(menuLink);
        navContainer.appendChild(menuContainer);

        const menuText = document.createElement("div");
        menuText.textContent = "Menu";
        menuText.classList.add("nav-text");
        menuContainer.appendChild(menuText);

        //contact us
        const contactLink = document.createElement("a");
        contactLink.classList.add("nav-link");
        contactLink.setAttribute("href", "fb.com");
        const contactImg = document.createElement("img");
        contactLink.appendChild(contactImg);

        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");
        contactImg.classList.add("contact-img");
        contactImg.src = contactLogo;
        contactContainer.appendChild(contactLink);
        navContainer.appendChild(contactContainer);

        const contactText = document.createElement("div");
        contactText.textContent = "Contact us";
        contactText.classList.add("nav-text");
        contactContainer.appendChild(contactText);
    }

    function generateMainContainer(firstText = "Put history story here.", secondText = "Put paragraphs of history manifestation here.", knifeImage){
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");

        const historyContainer = document.createElement("div");
        historyContainer.classList.add("history-container");
        historyContainer.textContent = firstText;

        const knifeContainer = document.createElement("div");
        knifeContainer.classList.add("knife-container");
        const knifeImg = document.createElement("img");
        knifeImg.src = knifeImage;
        knifeImg.classList.add("knife-img");
        knifeContainer.appendChild(knifeImg);

        const manifestContainer = document.createElement("div");
        manifestContainer.classList.add("manifest-container");
        manifestContainer.textContent = secondText;

        parentContainer.appendChild(mainContainer);
        mainContainer.appendChild(historyContainer);
        mainContainer.appendChild(knifeContainer);
        mainContainer.appendChild(manifestContainer);
    }

    function generateReviewsContainer(){
        const reviewsContainer = document.createElement("div");
        reviewsContainer.classList.add("reviews-container");
        parentContainer.appendChild(reviewsContainer);

        //for each reviews in JSON file, we add it to our review container
        webText.reviews.forEach(review => {
            const name = document.createElement("h3");
            name.textContent = review.name;

            const blockqoute = document.createElement("blockquote");
            const comment = document.createElement("p");
            blockqoute.appendChild(comment);
            comment.textContent = review.comment;
            const scoreContainer = document.createElement("div");

            scoreContainer.classList.add("score-container");
            for(let i = 0; i < review.score; i++){
                const icon = document.createElement("img");
                icon.classList.add("star-icon");
                icon.src = startIcon;
                scoreContainer.appendChild(icon);
            }

            const singleReviewContainer = document.createElement("div");
            singleReviewContainer.classList.add("single-review-container");
            singleReviewContainer.appendChild(name);
            singleReviewContainer.appendChild(blockqoute);
            singleReviewContainer.appendChild(scoreContainer);

            reviewsContainer.appendChild(singleReviewContainer);
        })
    }

    function generateFootnote(){
        const footContainer = document.createElement("div");
        footContainer.classList.add("foot-container");
        parentContainer.appendChild(footContainer);

        //for each notes in webtext.footernotes
            //create one p element for each single value in footerNotes array,
            //footContainer

        webText.footerNotes.forEach(note => {
            const text = document.createElement("p");
            text.textContent = note;
            footContainer.appendChild(text);
        })
    }

    function initialize(){
        generateTitleContainer();
        generateNavContainer(placeHolderImg, placeHolderImg, placeHolderImg);
        generateMainContainer(webText.restaurantHistory, webText.manifestation, knifeImage);
        generateReviewsContainer();
        generateFootnote();
    }

    return { initialize };
})()

export { homeComponent };