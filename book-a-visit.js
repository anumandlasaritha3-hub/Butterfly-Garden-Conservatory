document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const rtlToggle = document.getElementById("rtlToggle");

    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */
    const savedTheme = localStorage.getItem("wingBloomTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeIcon) themeIcon.className = "fa-regular fa-sun";
    } else {
        document.body.classList.remove("dark-theme");
        if (themeIcon) themeIcon.className = "fa-regular fa-moon";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const darkMode = document.body.classList.contains("dark-theme");

            if (themeIcon) {
                themeIcon.className = darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon";
            }

            localStorage.setItem("wingBloomTheme", darkMode ? "dark" : "light");
        });
    }

    /* =====================================================
       RTL / LTR MODE
    ===================================================== */
    const savedDirection = localStorage.getItem("wingBloomDirection");
    document.documentElement.setAttribute("dir", savedDirection === "rtl" ? "rtl" : "ltr");

    if (rtlToggle) {
        rtlToggle.addEventListener("click", () => {
            const currentDirection = document.documentElement.getAttribute("dir");
            const next = currentDirection === "rtl" ? "ltr" : "rtl";

            document.documentElement.setAttribute("dir", next);
            localStorage.setItem("wingBloomDirection", next);
        });
    }

    /* =====================================================
       FORM SUBMIT (placeholder — wire up to your backend)
    ===================================================== */
    const form = document.querySelector(".visit-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks! Your visit request has been noted. We'll be in touch soon.");
            form.reset();
        });
    }

});
