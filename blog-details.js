document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const article =
        document.querySelector(".bd-article");

    const revealElements =
        document.querySelectorAll(".bd-reveal");

    const tocLinks =
        document.querySelectorAll(".bd-toc-link");

    const articleSections =
        document.querySelectorAll(
            ".bd-content-block[id]"
        );

    const progressBar =
        document.getElementById("bdProgressBar");

    const progressText =
        document.getElementById("bdProgressText");

    const copyButton =
        document.querySelector(".bd-copy-link");

    const backTopButton =
        document.querySelector(".bd-back-top");

    const searchForm =
        document.querySelector(".bd-search-form");

    const isRTL =
        document.documentElement.dir === "rtl";


    /* =====================================================
       REVEAL DIRECTIONS
    ====================================================== */

    revealElements.forEach((element, index) => {

        /*
           Keeps animations varied without making
           every section use the same movement.
        */

        if (index % 4 === 1) {

            element.classList.add(
                isRTL
                    ? "bd-from-right"
                    : "bd-from-left"
            );

        }

        else if (index % 4 === 3) {

            element.classList.add(
                isRTL
                    ? "bd-from-left"
                    : "bd-from-right"
            );

        }

    });


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "bd-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.1,
                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    }

    else {

        revealElements.forEach(element => {

            element.classList.add(
                "bd-visible"
            );

        });

    }


    /* =====================================================
       SMOOTH TABLE OF CONTENTS
    ====================================================== */

    tocLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const selector =
                    link.getAttribute("href");

                if (
                    !selector ||
                    !selector.startsWith("#")
                ) {
                    return;
                }

                const target =
                    document.querySelector(selector);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerOffset = 110;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       ACTIVE TABLE OF CONTENTS SECTION
    ====================================================== */

    function updateActiveSection() {

        if (!articleSections.length) {
            return;
        }

        const scrollPosition =
            window.scrollY + 170;

        let activeId =
            articleSections[0].id;


        articleSections.forEach(section => {

            if (
                section.offsetTop <=
                scrollPosition
            ) {

                activeId =
                    section.id;

            }

        });


        tocLinks.forEach(link => {

            const target =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                target === `#${activeId}`
            );

        });

    }


    /* =====================================================
       READING PROGRESS
    ====================================================== */

    function updateReadingProgress() {

        if (
            !article ||
            !progressBar ||
            !progressText
        ) {
            return;
        }


        const articleTop =
            article.offsetTop;

        const articleHeight =
            article.offsetHeight;

        const viewportHeight =
            window.innerHeight;

        const scrollY =
            window.scrollY;


        const readableDistance =
            Math.max(
                articleHeight -
                viewportHeight,
                1
            );


        const current =
            scrollY -
            articleTop +
            150;


        let percentage =
            (current / readableDistance) *
            100;


        percentage =
            Math.max(
                0,
                Math.min(100, percentage)
            );


        progressBar.style.width =
            `${percentage}%`;


        progressText.textContent =
            `${Math.round(percentage)}%`;

    }


    /* =====================================================
       OPTIMIZED SCROLL LISTENER
    ====================================================== */

    let ticking = false;


    function handleScroll() {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                updateActiveSection();

                updateReadingProgress();

                ticking = false;

            });

            ticking = true;

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );


    updateActiveSection();
    updateReadingProgress();


    /* =====================================================
       COPY ARTICLE LINK
    ====================================================== */

    if (copyButton) {

        copyButton.addEventListener(
            "click",
            async () => {

                try {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );


                    copyButton.classList.add(
                        "copied"
                    );


                    const icon =
                        copyButton.querySelector("i");


                    if (icon) {

                        icon.className =
                            "fa-solid fa-check";

                    }


                    setTimeout(() => {

                        copyButton.classList.remove(
                            "copied"
                        );


                        if (icon) {

                            icon.className =
                                "fa-solid fa-link";

                        }

                    }, 1800);

                }

                catch (error) {

                    /*
                       Fallback for browsers where
                       clipboard API isn't available.
                    */

                    const temporaryInput =
                        document.createElement(
                            "textarea"
                        );


                    temporaryInput.value =
                        window.location.href;


                    document.body.appendChild(
                        temporaryInput
                    );


                    temporaryInput.select();


                    document.execCommand(
                        "copy"
                    );


                    temporaryInput.remove();

                }

            }
        );

    }


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    if (backTopButton) {

        backTopButton.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       SIDEBAR SEARCH
    ====================================================== */

    if (searchForm) {

        searchForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const input =
                    searchForm.querySelector(
                        'input[type="search"]'
                    );


                if (!input) {
                    return;
                }


                const query =
                    input.value
                        .trim()
                        .toLowerCase();


                if (!query) {
                    return;
                }


                /*
                   Search this article first.
                */

                const blocks =
                    Array.from(
                        articleSections
                    );


                const match =
                    blocks.find(block => {

                        return block
                            .textContent
                            .toLowerCase()
                            .includes(query);

                    });


                if (match) {

                    const headerOffset =
                        110;


                    const position =
                        match
                            .getBoundingClientRect()
                            .top +
                        window.pageYOffset -
                        headerOffset;


                    window.scrollTo({
                        top: position,
                        behavior: "smooth"
                    });


                    /*
                       Small temporary highlight.
                    */

                    match.animate(

                        [
                            {
                                backgroundColor:
                                    "rgba(244,156,171,0)"
                            },

                            {
                                backgroundColor:
                                    "rgba(244,156,171,.12)"
                            },

                            {
                                backgroundColor:
                                    "rgba(244,156,171,0)"
                            }
                        ],

                        {
                            duration: 1400,
                            easing: "ease"
                        }

                    );

                }

            }
        );

    }


    /* =====================================================
       UPDATE AFTER RESIZE
    ====================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(() => {

                    updateActiveSection();

                    updateReadingProgress();

                }, 150);

        }
    );

});