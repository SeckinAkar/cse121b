/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Seckin Akar",
    photo: "images/myphoto.jpg",
    favoriteFoods: [
        "Pasta",
        "Beans",
        "Avocado",
        "Cigkofte",
        "Kebap"
    ],
    hobbies: [
        "Tennis",
        "Video Games",
        "History",
        "Languages"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Tekirdağ, TR",
        length: "18 years"
    },
    {
        place: "Canakkale, TR",
        length: "5 years"
    },
    {
        place: "Sanliurfa, TR",
        length: "2 years"
    },
    
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let liH = document.createElement("li");
    liH.textContent = hobby;
    document.querySelector("#hobbies").appendChild(liH);
})

/* Places Lived DataList */


function placesLivedLayout(placesLivedArray) {
    const placesLength = placesLivedArray.map(pL => 
        `<dt><b>${pL.place}</b></dt>
        <dd><sup>${pL.length}</sup></dd>`
    );
    document.querySelector('#places-lived').innerHTML = placesLength.join("");
};

placesLivedLayout(myProfile.placesLived);
