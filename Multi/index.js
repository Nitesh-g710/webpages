let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slider = document.querySelector("#slider");

slide1.addEventListener("click", ()=>{
    slider.style.transform= `translateX(0)`;
});

slide2.addEventListener("click", ()=>{
    slider.style.transform= `translateX(-33.3%)`;
});

slide3.addEventListener("click", ()=>{
    slider.style.transform= `translateX(-66.6%)`;
});