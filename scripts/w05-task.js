/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    templeList.forEach(temple => {
        const articleElement = document.createElement("article");
        const nameH3Element = document.createElement('h3'); 
        nameH3Element.textContent = temple.templeName;
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(nameH3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok)
    {
        templeList = await response.json();
    
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = function() {
    templesElement.articleElement = ""
}
/* sortBy Function */
const sortBy = function (temples) {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temp => temp.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temp => !temp.location.includes("Utah")));
        case "older":
            displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples)
        default:
            console.log("Invalid filter option");
    }
}




/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});


getTemples();

