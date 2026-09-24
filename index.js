document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".home1-hero");

    if (!hero) return;

    requestAnimationFrame(function () {
        hero.classList.add("hero-loaded");
    });

});












document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MAGIC SECTION - SCROLL REVEAL
    ===================================================== */

    const magicElements =
        document.querySelectorAll(".magic-reveal");


    if (!magicElements.length) return;


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        magicElements.forEach((element) => {

            element.classList.add("magic-show");

        });

        return;
    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const magicObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "magic-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    /* OBSERVE ELEMENTS */

    magicElements.forEach((element) => {

        magicObserver.observe(element);

    });

});















/* =========================================================
   SECTION 03 - SPECIES SPOTLIGHT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SPECIES DATA
    ===================================================== */

    const speciesData = [

        {
            name: "Monarch Butterfly",

            scientific: "Danaus plexippus",

            description:
                "Famous for its vibrant orange and black wings, the Monarch butterfly is known for its incredible seasonal migration across thousands of miles.",

            wingspan: "8 – 10 cm",

            habitat: "Tropical Gardens",

            image:
                "./images/monarch-butterfly.webp",

            alt:
                "Monarch butterfly resting on flowers"
        },


        {
            name: "Blue Morpho",

            scientific: "Morpho menelaus",

            description:
                "Known for its brilliant blue wings, the Blue Morpho creates a spectacular flash of color as it glides through warm tropical forest habitats.",

            wingspan: "12 – 15 cm",

            habitat: "Rainforest Canopy",

            image:
                "./images/blue-morpho.webp",

            alt:
                "Blue Morpho butterfly"
        },


        {
            name: "Swallowtail",

            scientific: "Papilio polyxenes",

            description:
                "Elegant wing shapes and graceful flight make Swallowtails unforgettable visitors, often seen feeding on colorful nectar-rich garden flowers.",

            wingspan: "7 – 11 cm",

            habitat: "Flower Gardens",

            image:
                "./images/swallowtail.webp",

            alt:
                "Swallowtail butterfly resting on flowers"
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const mainImage =
        document.getElementById("speciesMainImage");

    const currentNumber =
        document.getElementById("speciesCurrentNumber");

    const speciesName =
        document.getElementById("speciesName");

    const scientific =
        document.getElementById("speciesScientific");

    const description =
        document.getElementById("speciesDescription");

    const wingspan =
        document.getElementById("speciesWingspan");

    const habitat =
        document.getElementById("speciesHabitat");

    const dynamicContent =
        document.getElementById("speciesDynamicContent");

    const previousButton =
        document.querySelector(".species-prev");

    const nextButton =
        document.querySelector(".species-next");

    const speciesOptions =
        document.querySelectorAll(".species-option");


    /* Stop if section doesn't exist */

    if (
        !mainImage ||
        !speciesName ||
        !dynamicContent
    ) {
        return;
    }


    let currentSpecies = 0;

    let isAnimating = false;


    /* =====================================================
       UPDATE SPECIES
    ===================================================== */

    function updateSpecies(index) {

        if (isAnimating) {
            return;
        }


        if (index < 0) {
            index =
                speciesData.length - 1;
        }


        if (
            index >=
            speciesData.length
        ) {
            index = 0;
        }


        if (
            index === currentSpecies &&
            mainImage.src.includes(
                speciesData[index].image
                    .split("/")
                    .pop()
            )
        ) {
            return;
        }


        isAnimating = true;


        const selectedSpecies =
            speciesData[index];


        /* Start transition */

        mainImage.classList.add(
            "species-changing"
        );

        dynamicContent.classList.add(
            "species-changing"
        );


        setTimeout(function () {

            /* Image */

            mainImage.src =
                selectedSpecies.image;

            mainImage.alt =
                selectedSpecies.alt;


            /* Counter */

            currentNumber.textContent =
                String(index + 1)
                    .padStart(2, "0");


            /* Text */

            speciesName.textContent =
                selectedSpecies.name;

            scientific.textContent =
                selectedSpecies.scientific;

            description.textContent =
                selectedSpecies.description;

            wingspan.textContent =
                selectedSpecies.wingspan;

            habitat.textContent =
                selectedSpecies.habitat;


            /* Active selector */

            speciesOptions.forEach(
                function (option) {

                    option.classList.remove(
                        "active"
                    );

                }
            );


            if (speciesOptions[index]) {

                speciesOptions[index]
                    .classList.add(
                        "active"
                    );

            }


            currentSpecies = index;


            /* End transition */

            requestAnimationFrame(
                function () {

                    mainImage.classList.remove(
                        "species-changing"
                    );

                    dynamicContent
                        .classList.remove(
                            "species-changing"
                        );

                }
            );


            setTimeout(function () {

                isAnimating = false;

            }, 350);


        }, 250);

    }


    /* =====================================================
       NEXT
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                updateSpecies(
                    currentSpecies + 1
                );

            }
        );

    }


    /* =====================================================
       PREVIOUS
    ===================================================== */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function () {

                updateSpecies(
                    currentSpecies - 1
                );

            }
        );

    }


    /* =====================================================
       CLICK SPECIES
    ===================================================== */

    speciesOptions.forEach(
        function (option) {

            option.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            this.dataset.species
                        );


                    if (
                        Number.isInteger(index)
                    ) {

                        updateSpecies(index);

                    }

                }
            );

        }
    );


    /* =====================================================
       KEYBOARD SUPPORT
    ===================================================== */

    const speciesSection =
        document.querySelector(
            ".species-section"
        );


    if (speciesSection) {

        speciesSection.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    updateSpecies(
                        currentSpecies + 1
                    );

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    updateSpecies(
                        currentSpecies - 1
                    );

                }

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".species-reveal"
        );


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "species-show"
                );

            }
        );

        return;

    }


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(

                function (
                    entries,
                    observerInstance
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList.add(
                                        "species-show"
                                    );


                                observerInstance
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }

            );


        revealElements.forEach(
            function (element) {

                observer.observe(
                    element
                );

            }
        );

    }

    else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "species-show"
                );

            }
        );

    }

});
























/* =========================================================
   SECTION 04 - LIFE CYCLE ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const lifeSection =
        document.querySelector(".life-section");

    const lifeElements =
        document.querySelectorAll(".life-reveal");


    if (!lifeSection || !lifeElements.length) {
        return;
    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        lifeElements.forEach(function (element) {

            element.classList.add("life-show");

        });


        lifeSection.classList.add("life-active");

        return;
    }


    /* =====================================================
       SECTION OBSERVER
       Draw connecting line
    ===================================================== */

    const sectionObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        lifeSection.classList.add(
                            "life-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    sectionObserver.observe(lifeSection);


    /* =====================================================
       REVEAL OBSERVER
       fade-up
       fade-down
       fade-left
       fade-right
    ===================================================== */

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "life-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    lifeElements.forEach(function (element) {

        revealObserver.observe(element);

    });

});






/* =========================================================
   SECTION 05 - PLAN YOUR VISIT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const visitSection =
        document.querySelector(".visit-section");

    if (!visitSection) return;


    const revealElements =
        visitSection.querySelectorAll(".visit-reveal");


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        revealElements.forEach(function (element) {

            element.classList.add("visit-show");

        });

        return;
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const visitObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visit-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -45px 0px"
            }

        );


    revealElements.forEach(function (element) {

        visitObserver.observe(element);

    });


    /* =====================================================
       TICKET MOUSE MOVEMENT
       Desktop only
    ===================================================== */

    const ticket =
        visitSection.querySelector(".visit-pass");


    const ticketWrapper =
        visitSection.querySelector(".visit-pass-wrap");


    const desktopHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    if (
        ticket &&
        ticketWrapper &&
        desktopHover
    ) {

        ticketWrapper.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    ticketWrapper.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (x - centerX) / 55;


                const rotateX =
                    (centerY - y) / 55;


                ticket.style.transform =
                    "perspective(900px) " +
                    "rotateX(" +
                    rotateX +
                    "deg) " +
                    "rotateY(" +
                    rotateY +
                    "deg) " +
                    "translateY(-5px)";

            }
        );


        ticketWrapper.addEventListener(
            "mouseleave",
            function () {

                ticket.style.transform = "";

            }
        );

    }

});









/* =========================================================
   SECTION 06 - SCHOOL FIELD TRIPS ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const schoolSection =
        document.querySelector(".school-section");

    if (!schoolSection) return;


    const revealElements =
        schoolSection.querySelectorAll(".school-reveal");


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        revealElements.forEach(function (element) {
            element.classList.add("school-show");
        });

        return;
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const schoolObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "school-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -45px 0px"
            }

        );


    revealElements.forEach(function (element) {

        schoolObserver.observe(element);

    });


    /* =====================================================
       CARD MOUSE EFFECT
       Desktop only
    ===================================================== */

    const schoolCards =
        schoolSection.querySelectorAll(".school-card");


    if (
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches
    ) {

        schoolCards.forEach(function (card) {

            card.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateY =
                        (x - centerX) / 35;

                    const rotateX =
                        (centerY - y) / 35;


                    card.style.transform =
                        "translateY(-7px) " +
                        "perspective(800px) " +
                        "rotateX(" +
                        rotateX +
                        "deg) rotateY(" +
                        rotateY +
                        "deg)";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.style.transform = "";

                }
            );

        });

    }

});



















/* =========================================================
   SECTION 07 - GARDEN MOMENTS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const gardenSection =
        document.querySelector(".garden-moments-section");

    if (!gardenSection) return;


    const revealElements =
        gardenSection.querySelectorAll(".gm-reveal");


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        revealElements.forEach(function (element) {

            element.classList.add("gm-show");

        });

        return;
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const gardenObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "gm-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(function (element) {

        gardenObserver.observe(element);

    });


    /* =====================================================
       GALLERY IMAGE MOUSE MOVEMENT
       DESKTOP ONLY
    ===================================================== */

    const photos =
        gardenSection.querySelectorAll(".gm-photo");


    const desktopHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    if (desktopHover) {

        photos.forEach(function (photo) {

            const image =
                photo.querySelector("img");

            if (!image) return;


            photo.addEventListener(
                "mousemove",
                function (event) {

                    const rect =
                        photo.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height;


                    const moveX =
                        (x - 0.5) * 10;


                    const moveY =
                        (y - 0.5) * 10;


                    image.style.transform =
                        "scale(1.07) " +
                        "translate(" +
                        moveX +
                        "px, " +
                        moveY +
                        "px)";

                }
            );


            photo.addEventListener(
                "mouseleave",
                function () {

                    image.style.transform = "";

                }
            );

        });

    }

});













/* =========================================================
   FINAL CTA SCROLL ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const ctaCard =
        document.querySelector(".wb-cta-card");

    if (!ctaCard) return;


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {

        ctaCard.classList.add("wb-cta-show");
        return;

    }


    const ctaObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "wb-cta-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.2,
                rootMargin: "0px 0px -30px 0px"
            }

        );


    ctaObserver.observe(ctaCard);

});