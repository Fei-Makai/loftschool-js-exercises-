const leftBtn = document.querySelector('#arrow-left');
const rightBtn = document.querySelector("#arrow-right");
const sliderList = document.querySelector("#slider-list");
const computedStyles = getComputedStyle(sliderList);
const itemsNumber = document.querySelectorAll(".item")

const minRight = 0;
const itemWidth = getComputedStyle(itemsNumber[0]).width;
const step = parseInt(itemWidth)
const preShownItems = 300 / step;
const maxRight = (itemsNumber.length -3) * step;
let currentRight = 0;

sliderList.style.right = currentRight;

rightBtn.addEventListener("click", e => {
e.preventDefault();

if (currentRight < maxRight) {
  currentRight += step;
  sliderList.style.right = `${currentRight}px`;
}
})

leftBtn.addEventListener("click", e => {
  e.preventDefault();
  
  if (currentRight > minRight) {
    currentRight -= step;
    sliderList.style.right = `${currentRight}px`;
  }
  })

