import burger from "../src/burger.png";
let homeContainer = document.createElement("div");
export function loadInitial () {
    // appending title and image
    let homePage = document.querySelector("#content");
    homeContainer.style.display = "flex";
    homeContainer.style.flexDirection = "column";
    homeContainer.style.alignItems = "center";
    homeContainer.style.gap = "25px";
    homeContainer.classList.add("home-container");
    homePage.appendChild(homeContainer);
    let title = document.createElement("h1");
    homeContainer.appendChild(title);
    title.textContent = "Welcome to Gourmet Delights!";
    title.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";
    title.classList.add("intro");
    title.classList.add("title-text");
    title.style.fontSize = "28px";
    const myIcon = new Image();
    myIcon.src = burger;
    myIcon.classList.add("burger");
    homeContainer.appendChild(myIcon);

    // appending intro

    let intro = document.createElement("div");
    intro.classList.add("intro");
    homeContainer.appendChild(intro);
    let introTitle = document.createElement("h1");
    introTitle.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";
    introTitle.style.fontSize = "28px";
    introTitle.textContent = "What We Offer";
    introTitle.classList.add("title-text");
    intro.appendChild(introTitle);

    let introText = document.createElement("p");
    introText.textContent = "At Gourmet Delights, we believe in the magic of great food and exceptional service. Nestled in the heart of Ajman, Our menu features a curated selection of delectable dishes, from fresh and vibrant salads to hearty and flavorful main courses. Each plate is crafted with the finest ingredients, sourced locally whenever possible, to ensure every bite is a celebration of taste. Whether you're joining us for a leisurely lunch, a romantic dinner, or a special occasion, our cozy and inviting atmosphere sets the perfect stage for unforgettable dining experiences. Our passionate team is dedicated to providing warm hospitality";
    intro.appendChild(introText);


    // append timings

    let timings = document.createElement("div");
    timings.classList.add("intro");
    homeContainer.appendChild(timings);
    let timingTitle = document.createElement("h1");
    timings.appendChild(timingTitle);
    timingTitle.textContent = "Our Work hours";
    timingTitle.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";
    timingTitle.style.fontSize = "28px";

    let hours = document.createElement("div");
    hours.style.display = "flex";
    hours.style.flexDirection = "column";
    hours.style.gap = "5px";
    hours.style.width = "100%";
    timings.appendChild(hours);
    let classNumber = 0;
    let time = `08:00 - 22:30`
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < 7; i++) {
        if (i > 3) {
            time = `10:00 - 23:30`;
        }
        let weekDayName = document.createElement("div");
        weekDayName.textContent = `${weekDay[i]}: `;
        let openingTime = document.createElement("div");
        let weekDiv = document.createElement("div");
        weekDiv.style.display = "flex";
        weekDiv.style.width = "100%";
        openingTime.textContent = ` ${time}`;
        openingTime.style.fontFamily = "source_sans_proextralight, sans-serif";
        openingTime.style.fontWeight = "700"
        hours.appendChild(weekDiv);
        weekDiv.appendChild(weekDayName);
        weekDiv.appendChild(openingTime);
        weekDiv.classList.add(`number-${classNumber}`);
        weekDiv.style.justifyContent = "center";
        weekDiv.style.gap = "15px";
        weekDayName.style.width = "8em";
        weekDayName.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";
        weekDayName.style.fontSize = "15px"
        ++classNumber;
    }

    
}

export function displayHome (homeButton, menuButton, aboutButton) {
    if (menuButton.classList.contains("active")) {
        let menuContainer = document.querySelector(".menu-container");
        menuContainer.style.display = "none";
        menuButton.classList.remove("active");
    }   else if (aboutButton.classList.contains("active")) {
        let aboutContainer = document.querySelector(".about-page");
        aboutContainer.style.display = "none";
        aboutButton.classList.remove("active");
    }
    if (!(homeButton.classList.contains("active"))) {
        homeButton.classList.add("active");
    }
    homeContainer.style.display = "flex";
}