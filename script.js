// ===================================================
/**
 * 
 * SB_Gal a simple javascript library for show image
 * 
 * Developed: SouravBishai
 * 
 * github: https://github.com/techCodeSB
 * 
 * portfollio: https://bishai.netlify.app
 * 
 */
// ===================================================


const pointerTag = document.querySelector("#sbGal");
const options = pointerTag.getAttribute('sbOPt');
const displayScreen = document.createElement("div");
const displayImg = document.createElement("img");
const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");
const imgCount = document.createElement("p");
const bodyTag = document.querySelector("body");
const imgs = pointerTag.querySelectorAll("#sbGal img");
const imgLen = imgs.length;
let displayImgIndex;


leftArrow.innerHTML = "‹";
rightArrow.innerHTML = "›";
displayImg.src = imgs[0].src;

//`If imgs length is greter 1 then show arrow buttons`;
if (imgs.length > 1) displayScreen.appendChild(leftArrow);
displayScreen.appendChild(displayImg);
if (imgs.length > 1) displayScreen.appendChild(rightArrow);

// Add class
leftArrow.classList.add("sbGal-leftarr");
rightArrow.classList.add('sbGal-rightarr');
imgCount.classList.add("sbGal-counter")
displayImg.classList.add("sbGal-img")

bodyTag.appendChild(displayScreen)
displayScreen.appendChild(imgCount)


// Apply Style
// =============================
displayScreen.setAttribute(
  'style',
  `width:100%; height:100vh; background-color:rgba(0, 0, 0, 0.900);user-select:none;
  position:fixed; top:0; display:none; align-items:center; justify-content:center; color: white;
  z-index:9999999999;
  `
)

displayImg.setAttribute(
  'style',
  `height:350px; border-radius:10px;
  `
)

leftArrow.setAttribute(
  'style',
  `font-size:60px; cursor:pointer; position:absolute; top:40%; left:20px;
  `
)

rightArrow.setAttribute(
  'style',
  `font-size:60px; cursor:pointer; position:absolute; top:40%; right:20px;
  `
)

imgCount.setAttribute(
  'style',
  `position:absolute;top:14px; left:20px;display:none;
  `
)


// button and display Logics
// ==========================

// When user click img;
const displayImgWindow = (img, index) => {
  displayImgIndex = index;
  displayScreen.style.display = 'flex';
  displayImg.src = img.src;
  imgCount.innerHTML = `${imgLen}/${displayImgIndex + 1}`

}
imgs.forEach((img, index) => img.addEventListener('click', () => displayImgWindow(img, index)));

displayScreen.addEventListener("click", function () {
  this.style.display = 'none';
})

displayImg.addEventListener("click", (e) => {
  // `stopPropagation`: used for disable parent click event;
  e.stopPropagation();

})


// Left Arrow click
leftArrow.addEventListener("click", (e) => {
  e.stopPropagation();

  if (displayImgIndex > 0) {
    displayImgIndex -= 1;
    displayImg.src = imgs[displayImgIndex].src;
    imgCount.innerHTML = `${imgLen}/${displayImgIndex + 1}`

  }

})

// Right Arrow click
rightArrow.addEventListener("click", (e) => {
  e.stopPropagation();

  if (displayImgIndex < imgLen - 1) {
    displayImgIndex += 1;
    displayImg.src = imgs[displayImgIndex].src;
    imgCount.innerHTML = `${imgLen}/${displayImgIndex + 1}`
  }

})



// Parse option and work
// ============================
/**
 * arrows: true | false
 * 
 * rightArrow: HTML element
 * 
 * leftArrow: HTML element
 * 
 * counter: true | false
 * 
 */
let parseOption = options.replace(/[{}]/g, '').trim().split(',');

parseOption.forEach((opt, _) => {
  let parseOpt = opt.trim();
  let [userOpt, value] = parseOpt.split(':');
  let userOption = userOpt?.trim()
  const userValue = value?.trim()


  if (userOption === "arrows") {
    if (userValue === "true") {
      leftArrow.style.display = 'block';
      rightArrow.style.display = 'block'
    } else {
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'none';
    }
  }

  if (userOption === "rightArrow") {
    rightArrow.innerHTML = userValue;
  }

  if (userOption === 'leftArrow') {
    leftArrow.innerHTML = userValue;
  }

  // counter check
  if (userOption === "counter" && userValue === "true") {
    imgCount.style.display = 'block'
  }

})