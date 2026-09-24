document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.getElementById("siteHeader");

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    const dropdown = document.querySelector(".has-dropdown");
    const dropdownLink = document.querySelector(".dropdown-link");

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const rtlToggle = document.getElementById("rtlToggle");
    const directionText = document.getElementById("directionText");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isActive =
                mainNav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isActive
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isActive ? "true" : "false"
            );

        });

    }


    /* =====================================================
       MOBILE HOME DROPDOWN
    ===================================================== */

    if (dropdown && dropdownLink) {

        dropdownLink.addEventListener("click", (e) => {

            if (window.innerWidth <= 1100) {

                e.preventDefault();

                dropdown.classList.toggle("open");

            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER NAV LINK CLICK
    ===================================================== */

    document.querySelectorAll(
        ".main-nav a:not(.dropdown-link)"
    ).forEach((link) => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 1100) {

                if (mainNav) {
                    mainNav.classList.remove("active");
                }

                if (menuToggle) {

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

                if (dropdown) {
                    dropdown.classList.remove("open");
                }

            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", (e) => {

        if (
            window.innerWidth <= 1100 &&
            mainNav &&
            menuToggle
        ) {

            const clickedInsideNav =
                mainNav.contains(e.target);

            const clickedMenuButton =
                menuToggle.contains(e.target);


            if (
                !clickedInsideNav &&
                !clickedMenuButton
            ) {

                mainNav.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                if (dropdown) {
                    dropdown.classList.remove("open");
                }

            }

        }

    });


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const savedTheme =
        localStorage.getItem("wingBloomTheme");


    /* Load saved theme */

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        if (themeIcon) {

            themeIcon.className =
                "fa-regular fa-sun";

        }

    } else {

        document.body.classList.remove("dark-theme");

        if (themeIcon) {

            themeIcon.className =
                "fa-regular fa-moon";

        }

    }


    /* Theme button */

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle(
                "dark-theme"
            );


            const darkMode =
                document.body.classList.contains(
                    "dark-theme"
                );


            if (themeIcon) {

                themeIcon.className =
                    darkMode
                        ? "fa-regular fa-sun"
                        : "fa-regular fa-moon";

            }


            localStorage.setItem(
                "wingBloomTheme",
                darkMode ? "dark" : "light"
            );

        });

    }


    /* =====================================================
       RTL / LTR MODE
    ===================================================== */

    const savedDirection =
        localStorage.getItem(
            "wingBloomDirection"
        );


    /* Load saved direction */

    if (savedDirection === "rtl") {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

        if (directionText) {

            directionText.textContent = "LTR";

        }

    } else {

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

        if (directionText) {

            directionText.textContent = "RTL";

        }

    }


    /* RTL button */

    if (rtlToggle) {

        rtlToggle.addEventListener("click", () => {

            const currentDirection =
                document.documentElement.getAttribute(
                    "dir"
                );


            if (currentDirection === "rtl") {

                /* Change to LTR */

                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );


                if (directionText) {

                    directionText.textContent =
                        "RTL";

                }


                localStorage.setItem(
                    "wingBloomDirection",
                    "ltr"
                );

            } else {

                /* Change to RTL */

                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );


                if (directionText) {

                    directionText.textContent =
                        "LTR";

                }


                localStorage.setItem(
                    "wingBloomDirection",
                    "rtl"
                );

            }

        });

    }


    /* =====================================================
       STICKY HEADER
       ALWAYS VISIBLE
       NO SCROLL HIDE / SHOW
    ===================================================== */

    if (header) {

        /*
           Keep sticky class permanently.

           We DO NOT add/remove this class while scrolling.
           This prevents the header from jumping when the
           page crosses 100px scroll position.
        */

        header.classList.add("sticky");

    }


    /* =====================================================
       WINDOW RESIZE
    ===================================================== */

    window.addEventListener("resize", () => {

        /*
           Desktop
        */

        if (window.innerWidth > 1100) {

            if (mainNav) {

                mainNav.classList.remove(
                    "active"
                );

            }


            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            if (dropdown) {

                dropdown.classList.remove(
                    "open"
                );

            }

        }

    });


    /* =====================================================
       ESC KEY - CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", (e) => {

        if (e.key !== "Escape") return;


        if (mainNav) {

            mainNav.classList.remove(
                "active"
            );

        }


        if (menuToggle) {

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (dropdown) {

            dropdown.classList.remove(
                "open"
            );

        }

    });

});