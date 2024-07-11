let aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-page");
let clickCount = 0;
export function aboutPage () {
    let mainContainer = document.querySelector("#content");
    mainContainer.appendChild(aboutContainer);
    aboutContainer.style.display = "flex";
    aboutContainer.style.flexDirection = "column";
    aboutContainer.style.gap = "25px";
    aboutContainer.style.height = "100%";
    aboutContainer.style.width = "100%";
    let chefNote = document.createElement("div");
    chefNote.classList.add("intro");
    aboutContainer.appendChild(chefNote);
    let chefHeader = document.createElement("h1");
    chefHeader.textContent = "A message from the chef";
    chefNote.appendChild(chefHeader);

    let chefMessage = document.createElement("p");
    chefMessage.textContent = "Our team is dedicated to ensuring that your dining experience is nothing short of exceptional. We take pride in our culinary creations, from the first bite of our appetizers to the last taste of our desserts. Whether you’re here for a special occasion, a casual meal, or simply to enjoy good food, we are committed to making your visit extraordinary. Thank you for choosing Gourmet Delights. We hope you enjoy your time with us and look forward to serving you again and again. Bon appétit!";
    chefNote.appendChild(chefMessage);

    let contact = document.createElement("div");
    contact.classList.add("intro");
    aboutContainer.appendChild(contact);
    let contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact";
    let phone = document.createElement("p");
    phone.textContent = "Phone:  0553002058";
    let email = document.createElement("p");
    email.textContent = "Email:  totallyreal@gmail.com";
    contact.append(contactHeader, phone, email);

    let location = document.createElement("div");
    location.classList.add("intro");
    aboutContainer.appendChild(location);
    let locationHeader = document.createElement("h1");
    locationHeader.textContent = "location";
    location.appendChild(locationHeader);

    let street = document.createElement("p");
    street.textContent = "123 Culinary Avenue";
    let mall = document.createElement("p");
    mall.textContent = "Ajman City Center";
    let country = document.createElement("p");
    country.textContent = "Ajman, United Arab Emirates";
    location.append(street, mall, country);



}

export function displayAbout (homeButton, menuButton, aboutButton) {
    if (menuButton.classList.contains("active")) {
        let menuContainer = document.querySelector(".menu-container");
        menuContainer.style.display = "none";
        menuButton.classList.remove("active");
    }   else if (homeButton.classList.contains("active")) {
        let homeContainer = document.querySelector(".home-container");
        homeContainer.style.display = "none";
        homeButton.classList.remove("active");
    }
    if (!(aboutButton.classList.contains("active"))) {
        aboutButton.classList.add("active");
        if (clickCount < 1) {
            aboutPage();
            ++clickCount;
        }   else {
            aboutContainer.style.display = "flex";
        }
    }
}