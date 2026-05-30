document.addEventListener("DOMContentLoaded", () => {

    // Typing Effect
    const roles = [
        "Java Developer",
        "UI/UX Designer",
        "Spring Boot Learner",
        "AI Enthusiast"
    ];

    let index = 0;
    let charIndex = 0;

    function type() {

        const typingElement = document.getElementById("typing");

        if (!typingElement) return;

        const text = roles[index];

        typingElement.textContent =
            text.substring(0, charIndex);

        charIndex++;

        if (charIndex > text.length) {

            setTimeout(() => {

                charIndex = 0;
                index = (index + 1) % roles.length;

            }, 1000);

        }

        setTimeout(type, 150);
    }

    type();

    // Dark / Light Mode
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeBtn.textContent = "☀️";
            } else {
                themeBtn.textContent = "🌙";
            }

        });

    }

});