document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainer = document.querySelector(".bubble-container");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        
        // Random size for the bubble
        const size = Math.random() * 50 + 50; // Bubbles will be between 50px and 100px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        
        bubbleContainer.appendChild(bubble);

        // Remove bubble after animation completes to prevent overflow
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Create 7 bubbles initially
    for (let i = 0; i < 7; i++) {
        createBubble();
    }

    // Create new bubbles continuously
    setInterval(createBubble, 50000);
});
