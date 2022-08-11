const homeComponent = (() => {
    const parentContainer = document.querySelector("#content");

    function generateTitleContainer() {
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");

        const title = document.createElement("h1");
        title.classList.add("main-title");
        title.textContent = "Lorem Ipsum";

        const subTitle = document.createElement("h2");
        subTitle.classList.add("sub-title");
        subTitle.textContent = "Contemporary Steak House"

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
        const reserveContainer = document.createElement("div");
        reserveContainer.classList.add("reserve-container");
        const reserveImg = document.createElement("img");
        reserveImg.src = reservationLogo;
        reserveImg.classList.add("reserve-img");
        reserveContainer.appendChild(reserveImg);
        navContainer.appendChild(reserveContainer);

        const reserveText = document.createElement("div");
        reserveText.textContent = "Reservation";
        reserveText.classList.add("nav-text");
        reserveContainer.appendChild(reserveText);

        //menu
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        const menuImg = document.createElement("img");
        menuImg.src = menuLogo;
        menuImg.classList.add("menu-img");
        menuContainer.appendChild(menuImg);
        navContainer.appendChild(menuContainer);


        const menuText = document.createElement("div");
        menuText.textContent = "Menu";
        menuText.classList.add("nav-text");
        menuContainer.appendChild(menuText);

        //contact us
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");
        const contactImg = document.createElement("img");
        contactImg.classList.add("contact-img");
        contactImg.src = contactLogo;
        contactContainer.appendChild(contactImg);
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
    }

    function generateFootnote(){
        const footContainer = document.createElement("div");
        footContainer.classList.add("foot-container");

        parentContainer.appendChild(footContainer);
    }

    function initialize(firstText, secondText, knifeImage, reservationLogo, menuLogo, contactLogo){
        generateTitleContainer();
        generateNavContainer(reservationLogo, menuLogo, contactLogo);
        generateMainContainer(firstText, secondText, knifeImage);
        generateReviewsContainer();
        generateFootnote();
    }

    return { initialize };
})()




export { homeComponent };