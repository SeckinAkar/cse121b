/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Seçkin Akar";                           //1
let currentYear = Date().getFullYear();                 //2
let profilePicture = "images/photo.jpg";                //3
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");    //1
const foodElement = document.getElementById("food");    //2
const yearElement = document.querySelector("#year");    //3
const imageElement = document.querySelector("img");     //4


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; //1 & 2
yearElement.textContent = currentYear;                  //3
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute(`"alt", "Profile image of ${fullName}"`);


/* Step 5 - Array */
let favFoods = ["Yogurt", "Cigkofte", "Doner", "Baklava", "Pineapple", "Mango", "Papaya", "Beans"]  //1
foodElement.textContent = favFoods;
//2 ???? I did not understand the instruction.
//document.querySelector("#food").textContent = favFoods;
let anotherFavFood = "Pineapple"                            //3
favFoods.push(anotherFavFood);                              //4
foodElement.innerHTML += `<br>${favFoods}`;                 //5
favFoods.shift();                                           //6
foodElement.innerHTML += `<br>${favFoods}`;                 //7
favFoods.pop();                                             //8
foodElement.innerHTML += `<br>${favFoods}`;                 //9