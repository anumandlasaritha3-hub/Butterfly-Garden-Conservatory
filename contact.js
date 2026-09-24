document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".contact-reveal");


    revealElements.forEach((element, index) => {

        if (index % 3 === 1) {
            element.classList.add("from-left");
        }

        if (index % 3 === 2) {
            element.classList.add("from-right");
        }

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                (entries, revealObserver) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },

                {
                    threshold: 0.1,
                    rootMargin:
                        "0px 0px -40px 0px"
                }

            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("visible");

        });

    }


    /* =====================================================
       FAQ ACCORDION
    ====================================================== */

    const faqItems =
        document.querySelectorAll(
            ".contact-faq-item"
        );


    faqItems.forEach(item => {

        const button =
            item.querySelector(
                ".contact-faq-question"
            );


        if (!button) return;


        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains(
                        "active"
                    );


                faqItems.forEach(faq => {

                    faq.classList.remove(
                        "active"
                    );

                });


                if (!isOpen) {

                    item.classList.add(
                        "active"
                    );

                }

            }
        );

    });


    /* =====================================================
       CHARACTER COUNTER
    ====================================================== */

    const message =
        document.getElementById(
            "contactMessage"
        );

    const messageCount =
        document.getElementById(
            "messageCount"
        );


    if (message && messageCount) {

        const updateCounter = () => {

            messageCount.textContent =
                message.value.length;

        };


        message.addEventListener(
            "input",
            updateCounter
        );


        updateCounter();

    }


    /* =====================================================
       FORM VALIDATION
    ====================================================== */

    const form =
        document.getElementById(
            "wingContactForm"
        );

    const formStatus =
        document.getElementById(
            "contactFormStatus"
        );


    function showError(field, message) {

        const wrapper =
            field.closest(
                ".contact-field"
            );


        if (!wrapper) return;


        wrapper.classList.add(
            "has-error"
        );


        const error =
            wrapper.querySelector(
                ".contact-error"
            );


        if (error) {

            error.textContent =
                message;

        }

    }


    function clearError(field) {

        const wrapper =
            field.closest(
                ".contact-field"
            );


        if (!wrapper) return;


        wrapper.classList.remove(
            "has-error"
        );


        const error =
            wrapper.querySelector(
                ".contact-error"
            );


        if (error) {

            error.textContent = "";

        }

    }


    function validateEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email);

    }


    if (form) {

        const requiredFields =
            form.querySelectorAll(
                "[required]"
            );


        requiredFields.forEach(field => {

            field.addEventListener(
                "input",
                () => clearError(field)
            );


            field.addEventListener(
                "change",
                () => clearError(field)
            );

        });


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "contactName"
                    );

                const email =
                    document.getElementById(
                        "contactEmail"
                    );

                const subject =
                    document.getElementById(
                        "contactSubject"
                    );

                const userMessage =
                    document.getElementById(
                        "contactMessage"
                    );


                let valid = true;


                requiredFields.forEach(field => {

                    clearError(field);

                });


                /* NAME */

                if (
                    !name.value.trim()
                ) {

                    showError(
                        name,
                        "Please enter your name."
                    );

                    valid = false;

                }


                /* EMAIL */

                if (
                    !email.value.trim()
                ) {

                    showError(
                        email,
                        "Please enter your email address."
                    );

                    valid = false;

                }

                else if (
                    !validateEmail(
                        email.value.trim()
                    )
                ) {

                    showError(
                        email,
                        "Please enter a valid email address."
                    );

                    valid = false;

                }


                /* SUBJECT */

                if (!subject.value) {

                    showError(
                        subject,
                        "Please select an enquiry type."
                    );

                    valid = false;

                }


                /* MESSAGE */

                if (
                    !userMessage.value.trim()
                ) {

                    showError(
                        userMessage,
                        "Please enter your message."
                    );

                    valid = false;

                }

                else if (
                    userMessage.value
                        .trim()
                        .length < 10
                ) {

                    showError(
                        userMessage,
                        "Please add a little more detail."
                    );

                    valid = false;

                }


                /* INVALID */

                if (!valid) {

                    if (formStatus) {

                        formStatus.className =
                            "contact-form-status error";


                        formStatus.textContent =
                            "Please check the highlighted fields and try again.";

                    }


                    const firstError =
                        form.querySelector(
                            ".contact-field.has-error"
                        );


                    if (firstError) {

                        firstError.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }


                    return;

                }


                /* =================================================
                   FRONT-END SUCCESS DEMO

                   Replace this block with your API / backend
                   submission when connecting the real form.
                ================================================== */

                if (formStatus) {

                    formStatus.className =
                        "contact-form-status success";


                    formStatus.textContent =
                        "Thank you! Your message has been prepared successfully.";

                }


                form.reset();


                if (messageCount) {

                    messageCount.textContent =
                        "0";

                }

            }
        );

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            '.contact-page a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        href
                    );


                if (!target) return;


                event.preventDefault();


                const offset = 105;


                const position =
                    target
                        .getBoundingClientRect()
                        .top +
                    window.pageYOffset -
                    offset;


                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            }
        );

    });

});