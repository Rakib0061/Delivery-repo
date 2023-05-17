function go() {
    
    //  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    let Y = window.scrollY;
    navbar.classList.toggle("sticky",Y>0);
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Sticky Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Button Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

let location_input = document.getElementById("location_input");
let location_input_btn = document.getElementById("location_input_btn");

location_input_btn.addEventListener("mouseenter", ()=>{
    if (location_input.style.width != 670) {
        location_input.style.width = 670 + "px";
        location_input_btn.style.transform = `translateX(297%)`;
    }
});

location_input.addEventListener("mouseleave", ()=>{
    if (location_input.style.width != 170) {
        location_input.style.width = 170 + "px";
        location_input_btn.style.transform = `translateX(1%)`;
    }
});

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Button Effect @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


}

go();