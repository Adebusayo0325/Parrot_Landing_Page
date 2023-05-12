const first = document.querySelector(".v");

const second = document.querySelector(".w");

const third = document.querySelector(".x");

const fourth = document.querySelector(".y");

const current = document.querySelector(".backro");
const currentX = document.querySelector(".backrox");
const currentY = document.querySelector(".backroy");
first.addEventListener("click", function() {
    // alert("working");
    // if(current === " "){
    //     alert('working')
    //     current.classList.remove('.backro');
    // current.innerHTML = `<img class="backro" src="parrot-4622786_960_720.jpg" alt="Background" />`;
    // }
    
    // else{
    //     current.classList.remove('.v');
    // }

current.style.display = "flex";
currentX.style.display = "none"
currentY.style.display = "none"

});

second.addEventListener("click", function() {
    // alert("working");
    // if(current === " "){
    //     alert('working')
    //     current.classList.remove('.backro');
    // current.innerHTML = `<img class="backro" src="parrot-4622786_960_720.jpg" alt="Background" />`;
    // }
    
    // else{
    //     current.classList.remove('.v');
    // }

current.style.display = "none";
currentX.style.display = "flex"
currentY.style.display = "none"


});

third.addEventListener("click", function() {
    // alert("working");
    // if(current === " "){
    //     alert('working')
    //     current.classList.remove('.backro');
    // current.innerHTML = `<img class="backro" src="parrot-4622786_960_720.jpg" alt="Background" />`;
    // }
    
    // else{
    //     current.classList.remove('.v');
    // }

current.style.display = "none";
currentX.style.display = "none"
currentY.style.display = "flex"
});