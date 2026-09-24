document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target
                                    .classList
                                    .add("show");

                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );
                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(element);

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add("show");

            }
        );

    }



    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    const scrollLinks =
        document.querySelectorAll(
            '.home2 a[href^="#"]'
        );


    scrollLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        this.getAttribute("href");


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
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



    /* =====================================================
       BLOOM CALENDAR
    ====================================================== */

    const bloomData = {

        spring: {

            number: "01",

            word: "SPRING",

            small:
                "SPRING IN THE GARDEN",

            title:
                "Fresh Colour Returns",

            description:
                "New growth and nectar-rich flowers bring fresh colour throughout the conservatory, creating beautiful feeding spaces for butterflies.",

            image:
                "./images/spring.webp"

        },


        summer: {

            number: "02",

            word: "SUMMER",

            small:
                "SUMMER IN THE GARDEN",

            title:
                "The Garden Comes Alive",

            description:
                "Warm days bring vivid blooms, lush tropical foliage and increased butterfly movement throughout the conservatory.",

            image:
                "./images/summer.webp"

        },


        monsoon: {

            number: "03",

            word: "MONSOON",

            small:
                "MONSOON IN THE GARDEN",

            title:
                "Green Takes Centre Stage",

            description:
                "Fresh moisture transforms the conservatory into layers of rich tropical green, creating a calm and beautifully renewed garden.",

            image:
                "./images/monsoon.webp"

        },


        winter: {

            number: "04",

            word: "WINTER",

            small:
                "WINTER IN THE GARDEN",

            title:
                "A Softer Kind of Beauty",

            description:
                "Gentler seasonal light brings a peaceful atmosphere while carefully maintained flowers continue adding colour throughout the garden.",

            image:
                "./images/winter.webp"

        }

    };


    const bloomTabs =
        document.querySelectorAll(
            ".bloom-tab"
        );


    const bloomImage =
        document.getElementById(
            "bloomMainImage"
        );


    const bloomNumber =
        document.getElementById(
            "bloomNumber"
        );


    const bloomWord =
        document.getElementById(
            "bloomWord"
        );


    const bloomSmall =
        document.getElementById(
            "bloomSmall"
        );


    const bloomTitle =
        document.getElementById(
            "bloomTitle"
        );


    const bloomDescription =
        document.getElementById(
            "bloomDescription"
        );



    bloomTabs.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const season =
                        this.dataset.season;


                    const data =
                        bloomData[season];


                    if (!data) {
                        return;
                    }


                    /* REMOVE OLD ACTIVE */

                    bloomTabs.forEach(
                        function (tab) {

                            tab.classList
                                .remove("active");

                        }
                    );


                    /* CURRENT ACTIVE */

                    this.classList.add(
                        "active"
                    );


                    /* UPDATE TEXT */

                    if (bloomNumber) {
                        bloomNumber.textContent =
                            data.number;
                    }


                    if (bloomWord) {
                        bloomWord.textContent =
                            data.word;
                    }


                    if (bloomSmall) {
                        bloomSmall.textContent =
                            data.small;
                    }


                    if (bloomTitle) {
                        bloomTitle.textContent =
                            data.title;
                    }


                    if (bloomDescription) {
                        bloomDescription.textContent =
                            data.description;
                    }


                    /* UPDATE IMAGE */

                    if (bloomImage) {

                        bloomImage.style.opacity =
                            "0";


                        setTimeout(
                            function () {

                                bloomImage.src =
                                    data.image;


                                bloomImage.alt =
                                    data.word +
                                    " garden at Wing & Bloom Conservatory";


                                bloomImage.style.opacity =
                                    "1";

                            },
                            200
                        );

                    }

                }
            );

        }
    );


});