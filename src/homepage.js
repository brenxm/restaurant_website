import startIcon from "./asset/staricon.svg";
import knifeImage from "./asset/kitchenknife.png";
import webText from "./restaurant_content/webtext.json";

const homeComponent = (() => {
    function generateMainContainer(firstText = "Put history story here.", secondText = "Put paragraphs of history manifestation here.", knifeImage){
        const mainContent = document.querySelector(".main-content");

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

        mainContent.appendChild(mainContainer);
        mainContainer.appendChild(historyContainer);
        mainContainer.appendChild(knifeContainer);
        mainContainer.appendChild(manifestContainer);
    }

    function generateReviewsContainer(){
        const mainContent = document.querySelector(".main-content");

        const reviewsContainer = document.createElement("div");
        reviewsContainer.classList.add("reviews-container");
        mainContent.appendChild(reviewsContainer);

        //for each reviews in JSON file, we add it to our review container
        webText.reviews.forEach(review => {
            const name = document.createElement("h3");
            name.classList.add("review-name");
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
        const mainContent = document.querySelector(".main-content");

        const footContainer = document.createElement("div");
        footContainer.classList.add("foot-container");
        mainContent.appendChild(footContainer);

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
        generateMainContainer(webText.restaurantHistory, webText.manifestation, knifeImage);
        generateReviewsContainer();
        generateFootnote();
    }

    return { initialize };
})()

export { homeComponent };