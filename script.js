document.addEventListener("DOMContentLoaded", () => {
    const cat = document.getElementById("pixel-cat");

    // Optional: Make the cat bounce when clicked
    cat.addEventListener("click", () => {
        cat.style.animation = "bounce 0.5s ease-out";
        setTimeout(() => {
            cat.style.animation = "dance 1s infinite alternate";
        }, 500);
    });
});

// Bounce animation in JavaScript
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}`, styleSheet.cssRules.length);
