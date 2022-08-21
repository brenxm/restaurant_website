import startIcon from "./asset/staricon.svg";
import knifeImage from "./asset/kitchenknife.png";
import webText from "./restaurant_content/webtext.json";

export default function homeComponent(firstText){
    return `
        <div class = "main-container">
            <div class = "history-container">
                ${webText.restaurantHistory}
            </div>
            <div class = "knife-container">
                <img class = "knife-img" src = ${knifeImage} alt = "knife background photo">
            </div>
            <div class = "manifest-container">
                ${webText.manifestation}
            </div>
        </div>
        ${reviewsComponent()}
        ${footerComponent()}
    `;

    function reviewsComponent(){
        let tempText = "";
        webText.reviews.forEach(review => {
            tempText += `
                    <div class = "single-review-container">
                        <h3 class = "review-name">
                            ${review.name}
                        </h3>
                        <blockquote>
                            <p>${review.comment}</p>
                        </blockquote>
                        <div class = "score-container">
                            ${generateStar(review.score)}
                        </div>
                    </div>
                `
        })

        function generateStar(score){
            let tempStr = ""
            for(let i = 0; i < score; i++){
                    tempStr+= `
                        <img src = ${startIcon} class="star-icon">
                    `
            };
            return tempStr;
        }
        return `
            <div class = "reviews-container">
                ${tempText}
            </div>
        `;
    }

    function footerComponent(){
        let tempStr = "";
        webText.footerNotes.forEach(parag =>
            {
                tempStr += `<p>${parag}</p>`
            })

        return `
            <div class = "foot-container">
                ${tempStr}
            </div>
        `
    }
}
