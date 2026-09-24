document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SECTION REVEAL ANIMATION
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".exp-reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "exp-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.1,
                    rootMargin: "0px 0px -35px 0px"
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "exp-visible"
            );

        });

    }


    /* =====================================================
       SMOOTH INTERNAL SCROLL
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            '.experiences-page a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute("href");


                if (!href || href === "#") {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerOffset = 105;


                const position =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerOffset;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       SERVICE CARD HOVER FOCUS SUPPORT
    ====================================================== */

    const serviceCards =
        document.querySelectorAll(
            ".exp-service-card"
        );


    serviceCards.forEach(card => {

        const link =
            card.querySelector(
                ".exp-service-link"
            );


        if (!link) return;


        link.addEventListener(
            "focus",
            () => {

                card.classList.add(
                    "exp-card-focus"
                );

            }
        );


        link.addEventListener(
            "blur",
            () => {

                card.classList.remove(
                    "exp-card-focus"
                );

            }
        );

    });

});