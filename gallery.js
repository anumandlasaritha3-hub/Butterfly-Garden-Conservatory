document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HERO ENTRANCE
    ====================================================== */

    const hero =
        document.querySelector(".gallery-hero");

    if (hero) {

        requestAnimationFrame(() => {

            setTimeout(() => {
                hero.classList.add("gallery-loaded");
            }, 100);

        });

    }


    /* =====================================================
       REVEAL DIRECTIONS
    ====================================================== */

    const reveals =
        document.querySelectorAll(".gallery-reveal");

    reveals.forEach((element, index) => {

        const type = index % 3;

        if (type === 1) {
            element.classList.add("gallery-left");
        }

        if (type === 2) {
            element.classList.add("gallery-right");
        }

    });


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                (entries, revealObserver) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "gallery-visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: .12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }

            );


        reveals.forEach(element => {
            observer.observe(element);
        });

    } else {

        reveals.forEach(element => {
            element.classList.add("gallery-visible");
        });

    }


    /* =====================================================
       FILTERABLE GALLERY
    ====================================================== */

    const filters =
        document.querySelectorAll(".gallery-filter");

    const items =
        document.querySelectorAll(".gallery-item");


    filters.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            filters.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            items.forEach(item => {

                const category =
                    item.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.classList.remove(
                        "gallery-hidden"
                    );

                } else {

                    item.classList.add(
                        "gallery-hidden"
                    );

                }

            });

        });

    });


    /* =====================================================
       LIGHTBOX
    ====================================================== */

    const lightbox =
        document.querySelector(".gallery-lightbox");

    const lightboxImage =
        document.querySelector(".lightbox-image");

    const lightboxCategory =
        document.querySelector(
            ".lightbox-caption span"
        );

    const lightboxTitle =
        document.querySelector(
            ".lightbox-caption h3"
        );

    const closeButton =
        document.querySelector(".lightbox-close");

    const previousButton =
        document.querySelector(".lightbox-prev");

    const nextButton =
        document.querySelector(".lightbox-next");


    let currentIndex = 0;


    function visibleGalleryItems() {

        return Array.from(items).filter(
            item =>
                !item.classList.contains(
                    "gallery-hidden"
                )
        );

    }


    function openLightbox(item) {

        if (!lightbox) return;


        const visibleItems =
            visibleGalleryItems();


        currentIndex =
            visibleItems.indexOf(item);


        updateLightbox(
            visibleItems[currentIndex]
        );


        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    function updateLightbox(item) {

        if (!item) return;


        const image =
            item.querySelector("img");

        const category =
            item.querySelector(
                ".gallery-item-overlay > span"
            );

        const title =
            item.querySelector(
                ".gallery-item-overlay h3"
            );


        lightboxImage.src =
            image.src;


        lightboxImage.alt =
            image.alt;


        lightboxCategory.textContent =
            category
                ? category.textContent
                : "";


        lightboxTitle.textContent =
            title
                ? title.textContent
                : "";

    }


    function closeLightbox() {

        if (!lightbox) return;


        lightbox.classList.remove(
            "active"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    function nextImage() {

        const visibleItems =
            visibleGalleryItems();


        if (!visibleItems.length) return;


        currentIndex =
            (currentIndex + 1) %
            visibleItems.length;


        updateLightbox(
            visibleItems[currentIndex]
        );

    }


    function previousImage() {

        const visibleItems =
            visibleGalleryItems();


        if (!visibleItems.length) return;


        currentIndex =
            (
                currentIndex - 1 +
                visibleItems.length
            ) %
            visibleItems.length;


        updateLightbox(
            visibleItems[currentIndex]
        );

    }


    items.forEach(item => {

        const viewButton =
            item.querySelector(
                ".gallery-view-btn"
            );


        item.addEventListener(
            "click",
            () => openLightbox(item)
        );


        if (viewButton) {

            viewButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    openLightbox(item);

                }
            );

        }

    });


    if (closeButton) {
        closeButton.addEventListener(
            "click",
            closeLightbox
        );
    }


    if (nextButton) {
        nextButton.addEventListener(
            "click",
            nextImage
        );
    }


    if (previousButton) {
        previousButton.addEventListener(
            "click",
            previousImage
        );
    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (event.target === lightbox) {
                    closeLightbox();
                }

            }
        );

    }


    /* =====================================================
       KEYBOARD LIGHTBOX
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox ||
                !lightbox.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            if (event.key === "Escape") {
                closeLightbox();
            }


            if (event.key === "ArrowRight") {
                nextImage();
            }


            if (event.key === "ArrowLeft") {
                previousImage();
            }

        }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            '.gallery-page a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");


                if (!id || id === "#") {
                    return;
                }


                const target =
                    document.querySelector(id);


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

    });

});