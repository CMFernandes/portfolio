//make the header visible when leaving intro 
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


//create spans with animation delay
let index = 0;

function createSpansWithAnimationDelay(text,container){
    const letters = text.split("");

    letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        container.appendChild(span);
        span.style.animationDelay = `${index * 0.1}s`;  
        index++;
    });
};

const nameIntro = document.querySelector(".name-intro");
createSpansWithAnimationDelay("Cristiana Fernandes", nameIntro);

const introText = document.querySelector(".intro-text");
createSpansWithAnimationDelay("An aspiring Front-End Developer", introText);


//toggle theme 
const root = document.documentElement;
const themeToggles = document.querySelectorAll(".theme-toggle");


function toggleTheme(){
    themeToggles.forEach(button => {
        if (button.classList.contains("fa-moon")) {
            toggleClass("fa-moon", "fa-sun", button);
        } else {
            toggleClass("fa-sun", "fa-moon", button);
        }
    })
    
    root.classList.toggle('dark-theme');
}

themeToggles.forEach(button => {
    button.addEventListener('click', toggleTheme);
    button.addEventListener('touchstart', toggleTheme);
});

function toggleClass(remove,add,element){
    element.classList.remove(remove);
    element.classList.add(add);
}
