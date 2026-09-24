document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const rtlToggle = document.getElementById("rtlToggle");
    const directionText = document.getElementById("directionText");

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

    if (savedDirection === "rtl") {
        document.documentElement.setAttribute("dir", "rtl");
        if (directionText) directionText.textContent = "LTR";
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        if (directionText) directionText.textContent = "RTL";
    }

    if (rtlToggle) {
        rtlToggle.addEventListener("click", () => {
            const currentDirection = document.documentElement.getAttribute("dir");

            if (currentDirection === "rtl") {
                document.documentElement.setAttribute("dir", "ltr");
                if (directionText) directionText.textContent = "RTL";
                localStorage.setItem("wingBloomDirection", "ltr");
            } else {
                document.documentElement.setAttribute("dir", "rtl");
                if (directionText) directionText.textContent = "LTR";
                localStorage.setItem("wingBloomDirection", "rtl");
            }
        });
    }

});
