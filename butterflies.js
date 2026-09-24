document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".bf-reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "bf-visible"
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
            element.classList.add("bf-visible");
        });

    }


    /* =====================================================
       SPECIES FILTER
    ====================================================== */

    const filterButtons =
        document.querySelectorAll(".bf-filter-btn");

    const speciesCards =
        document.querySelectorAll(".bf-species-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            speciesCards.forEach(card => {

                const categories =
                    card.dataset.category
                        .split(" ");


                if (
                    filter === "all" ||
                    categories.includes(filter)
                ) {

                    card.classList.remove(
                        "bf-hidden"
                    );

                } else {

                    card.classList.add(
                        "bf-hidden"
                    );

                }

            });

        });

    });


    /* =====================================================
       SMOOTH INTERNAL SCROLL
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            '.butterflies-page a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

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

        });

    });

});