document.addEventListener("DOMContentLoaded", () => {

    /* HERO */
    const hero = document.querySelector(".blog-hero");

    if (hero) {
        setTimeout(() => {
            hero.classList.add("loaded");
        }, 100);
    }


    /* SCROLL ANIMATION */
    const reveals =
        document.querySelectorAll(".blog-reveal");

    reveals.forEach((item, index) => {

        if (index % 3 === 1) {
            item.classList.add("from-left");
        }

        if (index % 3 === 2) {
            item.classList.add("from-right");
        }

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        obs.unobserve(entry.target);

                    }

                });

            }, {
                threshold: .12,
                rootMargin: "0px 0px -40px 0px"
            });


        reveals.forEach(item => {
            observer.observe(item);
        });

    } else {

        reveals.forEach(item => {
            item.classList.add("visible");
        });

    }


    /* BLOG FILTER */
    const filters =
        document.querySelectorAll(".blog-filter");

    const cards =
        document.querySelectorAll(".blog-card");


    filters.forEach(button => {

        button.addEventListener("click", () => {

            const category =
                button.dataset.filter;


            filters.forEach(filter => {
                filter.classList.remove("active");
            });


            button.classList.add("active");


            cards.forEach(card => {

                if (
                    category === "all" ||
                    card.dataset.category === category
                ) {

                    card.classList.remove("blog-hidden");

                } else {

                    card.classList.add("blog-hidden");

                }

            });

        });

    });

});