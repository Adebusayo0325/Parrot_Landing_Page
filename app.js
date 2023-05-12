const body = document.body;
let backmatch = document.querySelector(".backmatch");
const circe = document.querySelector(".center-circle");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const design = document.querySelector('.paled');
 const buttonns = document.querySelectorAll('.backchange');
 const locates = document.querySelectorAll('.pop');

let backTop;
let centerTop;
let centerLeft;
let backLeft;

const imagesArr = [
  "images/parrot-4651351_1920.jpg",
  "images/parrot-4622786_960_720.jpg",
  "images/wildlife-4771010_1920.jpg",
];
const arrx = [
  {
    bacTop: "-13.4vh",
    centerTop: "13%",
paleTop: "60%",

    backLeft: "-33.2vw",
    centerLeft: "33%",
    paleLeft: "52%",
  },
  {
    centerTop: "10%",
    bacTop: "-10.3vh",
    paleTop: "56%",

    backLeft: "-50.2vw",
    centerLeft: "50%",
     paleLeft: "70%",
  },

  {
    centerTop: "10%",
    bacTop: "-10.3vh",
    paleTop: "60%",

    backLeft: "-62.1vw",
    centerLeft: "62%",
     paleLeft: "80%",
  },
];



btn1.addEventListener("click", function (e) {
  document.querySelector(".backmatch").style.backgroundImage =
    "url('images/parrot-4651351_1920.jpg')";
  backmatch.style.top = " -13.4vh";
  backmatch.style.left = "-33.2vw";
  circe.style.left = " 33%";
  circe.style.top = " 13%";
  // circe.style.top = " %";
 design.style.top = " 60%"
    design.style.left = "52%";
    removeActiveClasses()
    e.target.classList.add('show')

 
  setBgImage();
});

btn2.addEventListener("click", function () {
  document.querySelector(".backmatch").style.backgroundImage =
    "url('images/parrot-4622786_960_720 (1).jpg')";
  backmatch.style.top = " -10.3vh";
  backmatch.style.left = "-50.2vw";
  circe.style.left = " 50%";
  circe.style.top = " 10%";
 design.style.top = " 56%"
    design.style.left = "70%";

  removeActiveClasses()
    btn2.classList.add('show')
  setBgImage();
});

btn3.addEventListener("click", function () {
  document.querySelector(".backmatch").style.backgroundImage =
    "url('images/wildlife-4771010_1920.jpg')";
  backmatch.style.top = " -10.3vh";
  backmatch.style.left = "-62.1vw";
  circe.style.left = " 62%";
  circe.style.top = " 10%";
  design.style.top = " 60%"
    design.style.left = "80%";
removeActiveClasses()
    btn3.classList.add('show')

  setBgImage();
});
console.log(arrx);

function setBgImage() {
  document.body.style.backgroundImage =
    document.querySelector(".backmatch").style.backgroundImage;
}

let current = 0;

let interval = setInterval(run, 5000);

function run() {
 

  
  if (current > arrx.length - 1 ) {
     current = arrx.length - (arrx.length + 1);
    
    
  } 
  else {
      console.log(arrx[current]);
          document.querySelector(
      ".backmatch"
    ).style.backgroundImage = "url(" + imagesArr[current] + ")";
    console.log(current)
    backmatch.style.top = arrx[current].bacTop ;
    backmatch.style.left = arrx[current].backLeft ;
    circe.style.left = arrx[current].centerLeft ;
    circe.style.top = arrx[current].centerTop  ;
    design.style.top = arrx[current].paleTop;
    design.style.left = arrx[current].paleLeft;
    footer()
    changebackmatch();
  }

  console.log(imagesArr[current])
  setBgImage();
  
 current++;
}
console.log(arrx.length)
console.log(arrx.length - (arrx.length + 1))




function footer(){

  
removeActiveClasses();
  locates[current].classList.add('show')


  }
  
function removeActiveClasses() {
locates.forEach(locate => {
  locate.classList.remove('show')
})
 
  }


 
  
  function changebackmatch(){

  
removeCurrentClasses();
 buttonns[current].classList.add('current')

  }

function removeCurrentClasses() {
buttonns.forEach(button => {
  button.classList.remove('current')
})
 
  }