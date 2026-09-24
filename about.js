/* =========================================================
   WING & BLOOM CONSERVATORY
   ABOUT PAGE - COMPLETE JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       01. HERO ENTRANCE
    ====================================================== */

    const hero =
        document.querySelector(".about-hero");


    if (hero) {

        requestAnimationFrame(() => {

            setTimeout(() => {

                hero.classList.add(
                    "about-hero-loaded"
                );

            }, 100);

        });

    }


    /* =====================================================
       02. ASSIGN REVEAL DIRECTIONS
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-reveal"
        );


    revealElements.forEach(
        (element, index) => {

            /*
               Pattern:
               1 = fade up
               2 = fade left
               3 = fade right
            */

            const position =
                index % 3;


            if (position === 0) {

                element.classList.add(
                    "fade-up"
                );

            } else if (position === 1) {

                element.classList.add(
                    "fade-left"
                );

            } else {

                element.classList.add(
                    "fade-right"
                );

            }

        }
    );


    /* =====================================================
       03. SCROLL REVEAL
    ====================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "about-visible"
                                    );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "about-visible"
                );

            }
        );

    }


    /* =====================================================
       04. IMPACT COUNTER
    ====================================================== */

    const counters =
        document.querySelectorAll(
            ".impact-count"
        );


    const impactSection =
        document.querySelector(
            ".impact-section"
        );


    let countersStarted = false;


    function startCounters() {

        if (countersStarted) {
            return;
        }


        countersStarted = true;


        counters.forEach(
            (counter) => {

                const target =
                    parseInt(
                        counter.dataset.target,
                        10
                    );


                if (isNaN(target)) {
                    return;
                }


                const duration = 1700;

                const start =
                    performance.now();


                function updateCounter(time) {

                    const elapsed =
                        time - start;


                    const progress =
                        Math.min(
                            elapsed / duration,
                            1
                        );


                    /*
                       Smooth ease-out
                    */

                    const ease =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    const current =
                        Math.floor(
                            target * ease
                        );


                    counter.textContent =
                        current.toLocaleString();


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target.toLocaleString();

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );

            }
        );

    }


    if (
        impactSection &&
        counters.length &&
        "IntersectionObserver" in window
    ) {

        const counterObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                startCounters();

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.3
                }

            );


        counterObserver.observe(
            impactSection
        );

    } else if (counters.length) {

        startCounters();

    }


    /* =====================================================
       05. PURPOSE CARD MOUSE EFFECT
       DESKTOP ONLY
    ====================================================== */

    const purposeCards =
        document.querySelectorAll(
            ".purpose-item"
        );


    const canHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    if (canHover) {

        purposeCards.forEach(
            (card) => {

                const icon =
                    card.querySelector(
                        ".purpose-icon"
                    );


                card.addEventListener(
                    "mousemove",
                    (event) => {

                        if (!icon) return;


                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const moveX =
                            (
                                x -
                                rect.width / 2
                            ) / 30;


                        const moveY =
                            (
                                y -
                                rect.height / 2
                            ) / 30;


                        icon.style.transform =
                            `translate(${moveX}px, ${moveY - 6}px)
                             rotate(-8deg)
                             scale(1.08)`;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        if (!icon) return;

                        icon.style.transform = "";

                    }
                );

            }
        );

    }


    /* =====================================================
       06. SMOOTH ABOUT ANCHOR LINKS
    ====================================================== */

    const aboutLinks =
        document.querySelectorAll(
            '.about-page a[href^="#"]'
        );


    aboutLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );

});