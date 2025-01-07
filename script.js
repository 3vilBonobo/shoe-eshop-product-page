
// Show/Hide mobile menu
let showSidebar=()=> {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
let hideSidebar=()=> {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//Search Products
let productList = [
  "Custom Converse Black",
  "Custom Converse Blue",
  "Custom Converse Green",
  "Custom Converse Red",
  "Custom Converse White",
  "Custom Converse Purple",
  "Custom Converse Yellow",
]
const resultBox = document.querySelector(".result-box")
const inputBox = document.getElementById('input-box');
const filterInput=()=>{
  let result = []
  let input = inputBox.value;
  if (input.length){
   result = productList.filter((keyword)=>{
    return keyword.toLowerCase().includes(input.toLowerCase())
    }) 
   }
   display(result) 
} 

const display = (result)=>{
  const resultList = result.map((list)=>{
    return `<li>${list}</li>`
  })
let content = resultList.join("")
  resultBox.innerHTML = `${content}`
}
inputBox.addEventListener('input',filterInput)


//Image Magnifier

let zoomContainer = document.querySelector(".img-showcase")
zoomContainer.addEventListener("mousemove", (e)=>{
let img = e.target
console.log(img.src)
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop
  img.style.transformOrigin = `${x}px ${y}px`
  img.style.transform = "scale(2)"
})
zoomContainer.addEventListener("mouseleave",(e)=>{
  let img = e.target
  img.style.transformOrigin = "center"
  img.style.transform = "scale(1)"
} )

//Add to cart
let cartValue = 0;
let cartNumber = document.querySelector(".cart-number");
let cartBtn = document.querySelectorAll(".cart-btn");
let addToCart = ()=>{
  cartValue ++ 
  cartNumber.innerText = cartValue;
}
cartBtn.forEach((btn)=>{ 
   btn.addEventListener('click', addToCart)})
 



// Main product slider
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

let slideImage=()=> {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}
window.addEventListener("resize", slideImage);



//Similar Products slider
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= {value}px
    100: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1000:{
      slidesPerView: 4,
      spaceBetween: 40
    },
    2000:{
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});