let menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");
let count = 0;
import bruschetta from "../src/bruschetta.jpg";
import mushroom from "../src/mushroom.jpeg";
import calamari from "../src/calamari.jpeg";
import salmon from "../src/salmon.jpeg";
import alfredo from "../src/alfredo.jpeg";
import lasagna from "../src/lasagna.jpeg";
import steak from "../src/steak.jpeg";
import garlic from "../src/garlic.jpeg";
import fries from "../src/fries.jpeg";
import cheesecake from "../src/cake.jpeg";
import salad from "../src/salad.jpeg";
import lavacake from "../src/chococake.jpeg";

export function menuPage () {

    // add menu container
    menuContainer.classList.add("menu-container");
    let mainPage = document.querySelector("#content");
    
    menuContainer.style.display = "flex";
    menuContainer.style.flexWrap = "wrap";
    menuContainer.style.justifyContent = "center";
    menuContainer.style.alignItems = "center";
    menuContainer.style.gap = "30px";
    mainPage.appendChild(menuContainer);
    menuContainer.style.height = "100%";
    menuContainer.style.width = "100%";
    let classValue = 0;
    let titleClass = 0;
    let priceClass = 0;
    let pClass = 0;
    const Bruschetta = new Image();
    Bruschetta.src = bruschetta;
    const Mushroom = new Image();
    Mushroom.src = mushroom;
    const Calamari = new Image();
    Calamari.src = calamari;
    const Salmon = new Image();
    Salmon.src = salmon;
    const Alfredo = new Image();
    Alfredo.src = alfredo;
    const Lasagna = new Image();
    Lasagna.src = lasagna;
    const Steak = new Image();
    Steak.src = steak;
    const Garlic = new Image();
    Garlic.src = garlic;
    const Fries = new Image();
    Fries.src = fries;
    const Cheesecake = new Image();
    Cheesecake.src = cheesecake;
    const Salad = new Image();
    Salad.src = salad
    const Lavacake = new Image();
    Lavacake.src = lavacake;

    let images = [Bruschetta, Mushroom, Calamari, Salmon, Alfredo, Lasagna, Steak, Garlic,
        Fries, Cheesecake, Salad, Lavacake
    ]
    for (let i = 0; i < 12; i++) {
        let menuCards = document.createElement("div");
        menuContainer.appendChild(menuCards);
        menuCards.style.height = "400px";
        menuCards.style.width = "350px";
        menuCards.style.borderRadius = "20px";
        menuCards.classList.add(`menu-${classValue}`);
        menuCards.classList.add("menu");
        let titleDiv = document.createElement("h1");
        titleDiv.classList.add("title");
        titleDiv.classList.add(`title-${titleClass}`);
        ++titleClass;
        let info = document.createElement("p");
        info.classList.add("paragraph");
        info.style.height = "80px";
        info.classList.add(`info-${pClass}`);
    
        ++pClass;
        let price = document.createElement("h1");
        price.classList.add("price");
        price.classList.add(`price-${priceClass}`);
        price.style.display = "flex";
        price.style.justifyContent = "flex-end";
        ++priceClass;
        menuCards.append(titleDiv, info, images[i], price);
        ++classValue;

    }



    let firstTitle = document.querySelector(".title-0");
    firstTitle.textContent = "Bruschetta"; 
    let firstPara = document.querySelector(".info-0");
    firstPara.textContent = "Freshly toasted bread topped with a medley of diced tomatoes, garlic, basil, and a drizzle of balsamic glaze"
    let firstPrice = document.querySelector(".price-0");
    firstPrice.textContent = "$8";


    let secondTitle = document.querySelector(".title-1");
    secondTitle.textContent = "Stuffed Mushrooms"; 
    let secondPara = document.querySelector(".info-1");
    secondPara.textContent = "Plump mushrooms filled with a savory blend of cheese, garlic, and herbs, baked to golden perfection"
    let secondPrice = document.querySelector(".price-1");
    secondPrice.textContent = "$10";


    let thirdTitle = document.querySelector(".title-2");
    thirdTitle.textContent = "Calamari"; 
    let thirdPara = document.querySelector(".info-2");
    thirdPara.textContent = "Lightly breaded and fried calamari rings served with a zesty marinara dipping sauce"
    let thirdPrice = document.querySelector(".price-2");
    thirdPrice.textContent = "$12";


    let fourthTitle = document.querySelector(".title-3");
    fourthTitle.textContent = "Grilled Salmon"; 
    let fourthPara = document.querySelector(".info-3");
    fourthPara.textContent = "Succulent salmon fillet grilled to perfection, served with a side of steamed asparagus and wild rice"
    let fourthPrice = document.querySelector(".price-3");
    fourthPrice.textContent = "$20";


    let fifthTitle = document.querySelector(".title-4");
    fifthTitle.textContent = "Chicken Alfredo"; 
    let fifthPara = document.querySelector(".info-4");
    fifthPara.textContent = "Tender chicken breast pieces in a rich and creamy Alfredo sauce, served over fettuccine pasta"
    let fifthPrice = document.querySelector(".price-4");
    fifthPrice.textContent = "$18";


    let sixthTitle = document.querySelector(".title-5");
    sixthTitle.textContent = "Vegetarian Lasagna"; 
    let sixthPara = document.querySelector(".info-5");
    sixthPara.textContent = "Layers of pasta, spinach, ricotta cheese, and marinara sauce, baked to a bubbly finish"
    let sixthPrice = document.querySelector(".price-5");
    sixthPrice.textContent = "$16";

    let seventhTitle = document.querySelector(".title-6");
    seventhTitle.textContent = "Ribeye Steak"; 
    let seventhPara = document.querySelector(".info-6");
    seventhPara.textContent = "A juicy 12-ounce ribeye steak cooked to your preference, accompanied by garlic mashed potatoes and seasonal vegetables"
    let seventhPrice = document.querySelector(".price-6");
    seventhPrice.textContent = "$28";


    let eighthTitle = document.querySelector(".title-7");
    eighthTitle.textContent = "Garlic Bread"; 
    let eighthPara = document.querySelector(".info-7");
    eighthPara.textContent = "Warm and crispy bread infused with garlic butter and herbs"
    let eighthPrice = document.querySelector(".price-7");
    eighthPrice.textContent = "$5";


    let ninthTitle = document.querySelector(".title-8");
    ninthTitle.textContent = "Sweet Potato Fries"; 
    let ninthPara = document.querySelector(".info-8");
    ninthPara.textContent = "Crispy sweet potato fries served with a side of chipotle aioli"
    let ninthPrice = document.querySelector(".price-8");
    ninthPrice.textContent = "$6";

    let tenthTitle = document.querySelector(".title-9");
    tenthTitle.textContent = "Cheesecake"; 
    let tenthPara = document.querySelector(".info-9");
    tenthPara.textContent = "Classic New York-style cheesecake with a graham cracker crust, served with a strawberry compote"
    let tenthPrice = document.querySelector(".price-9");
    tenthPrice.textContent = "$7";

    let eleventhTitle = document.querySelector(".title-10");
    eleventhTitle.textContent = "Caesar Salad"; 
    let eleventhPara = document.querySelector(".info-10");
    eleventhPara.textContent = "Crisp romaine lettuce tossed with creamy Caesar dressing, croutons, and shaved Parmesan cheese"
    let eleventhPrice = document.querySelector(".price-10");
    eleventhPrice.textContent = "$9";

    let twelfthTitle = document.querySelector(".title-11");
    twelfthTitle.textContent = "Chocolate Lava Cake"; 
    let twelfthPara = document.querySelector(".info-11");
    twelfthPara.textContent = "Rich chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream"
    let twelfthPrice = document.querySelector(".price-11");
    twelfthPrice.textContent = "$8";



}

export function displayMenu (homeButton, menuButton, aboutButton) {
    if (homeButton.classList.contains("active")) {
        let homeContainer = document.querySelector(".home-container");
        homeContainer.style.display = "none";
        homeButton.classList.remove('active');
    }   else if (aboutButton.classList.contains("active")) {
        let aboutContainer = document.querySelector(".about-page");
        aboutContainer.style.display = "none";
        aboutButton.classList.remove("active");
    }
    if (!(menuButton.classList.contains("active"))) {
        menuButton.classList.add("active");
        if (count < 1) {
            menuPage();
            ++count;
        }   else {
            menuContainer.style.display = "flex";
        }
    }
}