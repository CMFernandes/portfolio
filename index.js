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
