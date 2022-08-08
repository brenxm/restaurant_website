function homeComponent(){
    const parentContainer = document.querySelector("#content");
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

export { homeComponent };