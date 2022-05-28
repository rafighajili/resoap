/* ========== NAVBAR ========== */
//scrolled nav
window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("scrolled", window.scrollY>100)
});

//active tab
const navA = document.querySelectorAll("nav div ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current="";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - sectionHeight/10)){
            current = section.getAttribute("id");
        };
    });

    navA.forEach(a => {
        a.classList.remove("active");
        if(a.classList.contains(current)){
            a.classList.add("active");
        };
    });
});

//burger
const openBtn = document.querySelector("#openNav");
const closeBtn = document.querySelector("#closeNav");
const menu = document.querySelector("nav .container ul")

openBtn.addEventListener("click", () => {
    openBtn.classList.add("out");
    menu.classList.add("in", "active");
    setTimeout(() => {
        openBtn.classList.remove("active", "in", "out");
        closeBtn.classList.add("in", "active");
    }, 250);
});

closeBtn.addEventListener("click", () => {
    closeBtn.classList.add("out");
    menu.classList.add("out");
    setTimeout(() => {
        closeBtn.classList.remove("active", "in", "out");
        menu.classList.remove("active", "in", "out")
        openBtn.classList.add("in", "active");
    }, 250);
});
/* ========== END OF NAVBAR ========== */