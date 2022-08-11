import { homeComponent, addReview, addFooterText } from "./home";
import "./styles.css";
import knife from "./kitchenknife.png";
import placeHolderImg from "./placeholder.png";

//edit your restaurant paragraphs here
const restaurantHistory = "Laboris nostrud pariatur Lorem consequat mollit dolore tempor. Commodo cillum sit voluptate laboris do. Ea ipsum id sint qui. Et ullamco labore laboris anim proident cupidatat. Sunt aliquip Lorem quis dolore sunt do elit proident aliqua ut ea minim labore ipsum. Magna eiusmod in veniam velit eu. Nisi sint magna est dolor non quis voluptate Lorem anim. Laboris nostrud pariatur Lorem consequat mollit dolore tempor. Commodo cillum sit voluptate laboris do. Ea ipsum id sint qui. Et ullamco labore laboris anim proident cupidatat. Sunt aliquip Lorem quis dolore sunt do elit proident aliqua ut ea minim labore ipsum. Magna eiusmod in veniam velit eu. Nisi sint magna est dolor non quis voluptate Lorem anim.";

const manifestation = "Eu do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla. u do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla. u do nulla amet reprehenderit veniam amet. Cillum pariatur cillum fugiat quis anim do dolore ad consectetur nisi magna id commodo excepteur. Amet laboris culpa sunt id ipsum aliquip anim nostrud minim sunt. Labore sunt magna veniam sit nulla nulla.";

homeComponent.initialize(restaurantHistory, manifestation, knife, placeHolderImg, placeHolderImg, placeHolderImg);

addReview("BozzFed", "Lorem ipsum ask holers", 5);
addReview("Houston Times", "Est quis et quis aute excepteur velit aute cillum commodo ipsum. Dolor nostrud labore adipisicing eiusmod duis veniam veniam. dolor.", 5);
addReview("Meatery", "Proident eiusmod eiusmod est deserunt officia. Ea laboris eu qui laboris sit eiusmod id dolore pariatur.", 5);

addFooterText("Nisi enim ex ipsum id.");
addFooterText("Nisi enim ex Eu proident excepteur commodo aliqua eu enim veniam veniam magna sunt esse nostrud labore.");
addFooterText(" aliqua eu enim veniam veniam magna sunt esse nostrud labore.");