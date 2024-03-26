const header = document.querySelector(".header");
const intro = document.getElementById("intro");

function toggleHeaderVisibility(){
    if(window.scrollY > intro.getBoundingClientRect().height){
        header.classList.remove("hide");
    } else {
        header.classList.add("hide");
    }
}

window.addEventListener('scroll', toggleHeaderVisibility);
window.addEventListener('touchmove', toggleHeaderVisibility);

toggleHeaderVisibility()


const nameIntro = document.querySelector(".name-intro");
const letters = nameIntro.textContent.split("");

nameIntro.textContent = "";

letters.forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    nameIntro.appendChild(span);
});

const spans = nameIntro.querySelectorAll('span');
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`; 
});

