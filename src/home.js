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

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    parentContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    titleContainer.appendChild(subTitle);
    parentContainer.appendChild(mainContainer);

    const historyContainer = document.createElement("div");
    historyContainer.classList.add("history-container");
    historyContainer.textContent = "Eiusmod voluptate occaecat exercitation anim culpa. Laborum ad veniam cillum laborum magna officia deserunt esse sunt laborum cillum. Culpa voluptate pariatur deserunt magna excepteur adipisicing commodo. Quis ipsum velit quis enim proident et ut deserunt voluptate cupidatat sunt quis. Excepteur laborum consequat nulla ex dolor sunt est nisi mollit irure ex officia. Eiusmod labore pariatur magna minim est eiusmod eiusmod cillum cillum commodo elit.";

    const knifeImg = document.createElement("img");
    mainContainer.appendChild(historyContainer);
}

export { homeComponent };