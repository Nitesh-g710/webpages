let slide = document.querySelector(".slider");

let check1 =document.querySelector("#slide1");
let check2 =document.querySelector("#slide2");
let check3 =document.querySelector("#slide3");
let check4 =document.querySelector("#slide4");

let arr = new Array(check1,check2,check3,check4);

check1.addEventListener("click",()=>{
    slide.style.transform =`translate(0%)`
});
check2.addEventListener("click",()=>{
    slide.style.transform =`translate(-25%)`
});
check3.addEventListener("click",()=>{
    slide.style.transform =`translate(-50%)`
});
check4.addEventListener("click",()=>{
    slide.style.transform =`translate(-75%)`
});