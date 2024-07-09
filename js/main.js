// Start Navbar
let barsIcon = document.querySelector(".bars-icon");
let icon = document.querySelector(".bars-icon i");
let dropDown = document.querySelector(".dropdown-menu");


function barsIconClick (){
        dropDown.classList.toggle("animation");
    
        if(dropDown.classList.contains("animation")){
            icon.classList.replace("fa-bars", "fa-x");
        }else{
            icon.classList.replace("fa-x", "fa-bars")
        }
}
// End Navbar


let arr = JSON.parse(localStorage.getItem("products") || "[]");
const getData = () => {
    if (arr.length > 0) {
        return arr;
    } else {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                arr.push(...json);
                localStorage.setItem("products", JSON.stringify(arr));
            })
            .catch(error => console.error('Error fetching data:', error));
        }
    }
    
getData();

let cards = document.querySelector(".cards");

function createAllProducts (){
    cards.innerHTML = "";
    arr.map((el) =>{
        createCard(el.image, el.title, el.description,el.category , el.price);
        console.log(el);
    })
}

function createCard (image, title, description, category ,price){
    let card = `
    <div class="card border shadow-md p-2 bg-slate-50 rounded-lg md:mx-0 max-w-sm md:max-w-lg mx-auto">
        <div class="card-img">
            <img src="${image}" class="rounded-md h-[280px] mx-auto" alt="">
        </div>
        <div class="card-info mt-2 flex flex-col space-y-2">
            <h2 class="text-xl font-semibold">${title.slice(0,20)}</h2>
            <p class="text-sm text-gray-500">${description.slice(0,50)}...</p>
            <h4 class="text-gray-400 font-semibold">${category}</h4>
            <span class="text-red-400 font-semibold">${price} EGP</span>
        </div>
    </div>`;
    cards.innerHTML += card
}

createAllProducts();