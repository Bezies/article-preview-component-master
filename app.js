let button = document.querySelector("button");
const box = document.querySelector(".RS");
const michelle = document.querySelector(".michelle");


button.addEventListener("click", () => {
    if (window.matchMedia("(min-width: 700px").matches) {
        box.classList.toggle("RS-off");
    } else {
        box.classList.toggle("RS-off");
        michelle.classList.toggle("michelle-off");
    }
        
})


const button2 = document.querySelector("#icon-share-phone")
    button2.addEventListener("click", () => {
    if ((window.matchMedia("(max-width: 700px").matches)){
        michelle.classList.toggle("michelle-off");
        box.classList.toggle("RS-off");
    }
})
           
