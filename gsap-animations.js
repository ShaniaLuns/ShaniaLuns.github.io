// Add GSAP animations to the title and subtitle

const color = () => gsap.to(".color", {
    backgroundPosition: "200% 0%",
    repeat: -1,
    duration: 5,
    ease: "sine.inOut",
    yoyo: true
});

const bounce = () => gsap.from(".bounce", {
    y: -200,
    duration: 2,
    ease: "bounce"
});

const fade = () => gsap.from(".fade", {
    opacity: 0,
    duration: 2,
    ease: "power2.in"
});

const links = Array.from(document.getElementsByTagName("a")).filter(link => link.classList.contains("color-hover"));
console.log(links);
for (const link of links) {
    link.addEventListener("mouseover", (event) => {
        console.log(event);
        event.target.classList.add("color");
        color();
    });

    link.addEventListener("mouseout", (event) => {
        gsap.killTweensOf(event.target)
        event.target.classList = Array.from(event.target.classList).filter(cls => cls !== "color");
    });
}

document.addEventListener("DOMContentLoaded", () => {    
    color();
    bounce();
    fade();
});