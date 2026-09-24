document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".notify-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks! We'll email you the moment we launch.");
            form.reset();
        });
    }
});
