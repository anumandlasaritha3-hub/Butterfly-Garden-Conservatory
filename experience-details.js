document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       EXPERIENCE DATA
    ========================================================= */

    const experiences = {

        /* =====================================================
           01 BUTTERFLY ENCOUNTER
        ====================================================== */

        "butterfly-encounter": {

            number: "01",

            category: "SIGNATURE EXPERIENCE",

            title: "Butterfly",

            accent: "Encounter",

            image: "./images/butterfly-encounter.webp",

            description:
                "Wander among free-flying butterflies and experience the conservatory at its most magical.",

            duration: "Self-Paced",

            audience: "All Visitors",

            location: "Main Conservatory",

            overviewTitle:
                "Step Into A World|Alive With Wings",

            lead:
                "Butterfly Encounter is the signature Wing & Bloom experience — an immersive journey through a tropical environment alive with free-flying butterflies, colourful flowers and lush foliage.",

            textOne:
                "Instead of observing butterflies from behind glass, you enter their living environment. Walk along peaceful pathways while butterflies feed from flowers, glide above the garden and rest naturally among tropical leaves.",

            textTwo:
                "No two visits feel exactly the same. Butterfly activity changes throughout the day, creating quiet moments of discovery whenever you slow down and look carefully.",

            caption:
                "A Living World Around You",

            highlights: [

                {
                    icon: "fa-solid fa-feather",
                    title: "Free-Flying Butterflies",
                    text:
                        "Observe butterflies flying, feeding and resting naturally throughout the conservatory."
                },

                {
                    icon: "fa-solid fa-seedling",
                    title: "Tropical Garden",
                    text:
                        "Explore lush foliage, flowering plants and a carefully maintained living habitat."
                },

                {
                    icon: "fa-solid fa-eye",
                    title: "Closer Observation",
                    text:
                        "Notice delicate wing patterns, feeding behaviour and small natural details."
                },

                {
                    icon: "fa-solid fa-camera",
                    title: "Beautiful Moments",
                    text:
                        "Discover memorable opportunities for respectful nature photography."
                }

            ],

            journey: [

                {
                    icon: "fa-solid fa-door-open",
                    title: "Enter",
                    text:
                        "Step away from the outside world and into the warmth and colour of the conservatory."
                },

                {
                    icon: "fa-solid fa-leaf",
                    title: "Wander",
                    text:
                        "Follow tropical pathways and explore the living garden at your own comfortable pace."
                },

                {
                    icon: "fa-solid fa-magnifying-glass",
                    title: "Notice",
                    text:
                        "Look closer at butterflies, flowers and subtle details that are easy to miss."
                }

            ],

            know: [

                {
                    icon: "fa-solid fa-temperature-half",
                    title: "Expect Tropical Warmth",
                    text:
                        "The conservatory remains warm and humid to support butterflies and tropical plants."
                },

                {
                    icon: "fa-solid fa-shirt",
                    title: "Dress Comfortably",
                    text:
                        "Light clothing and comfortable walking shoes are recommended."
                },

                {
                    icon: "fa-solid fa-camera",
                    title: "Bring Your Camera",
                    text:
                        "Personal photography is welcome when it does not disturb the habitat."
                },

                {
                    icon: "fa-solid fa-clock",
                    title: "Take Your Time",
                    text:
                        "The experience is self-paced, so slow down and allow natural moments to happen."
                }

            ],

            included: [
                "Main Conservatory Access",
                "Free-Flying Butterfly Encounter",
                "Tropical Garden Exploration",
                "Interpretive Learning Displays"
            ],

            faqs: [

                {
                    q: "Can butterflies land on visitors?",
                    a:
                        "Yes, butterflies may occasionally land on visitors naturally. Stay still and allow them to leave on their own."
                },

                {
                    q: "Can I touch the butterflies?",
                    a:
                        "No. Butterfly wings are extremely delicate, so visitors should observe without touching or handling them."
                },

                {
                    q: "Is photography allowed?",
                    a:
                        "Yes. Personal photography is welcome as long as butterflies, plants and pathways are respected."
                },

                {
                    q: "How long can I stay?",
                    a:
                        "The experience is self-paced, allowing you to explore comfortably within normal visitor hours."
                }

            ]

        },


        /* =====================================================
           02 DISCOVERY TOUR
        ====================================================== */

        "discovery-tour": {

            number: "02",

            category: "GUIDED EXPERIENCE",

            title: "Conservatory",

            accent: "Discovery Tour",

            image: "./images/guided-tour.webp",

            description:
                "Explore with a guide and discover the stories behind butterflies, plants and habitats.",

            duration: "60 Minutes",

            audience: "Families & Curious Visitors",

            location: "Main Conservatory",

            overviewTitle:
                "Discover The Stories|Behind The Garden",

            lead:
                "The Conservatory Discovery Tour transforms a peaceful garden walk into a guided exploration of butterflies, tropical plants and the relationships that connect them.",

            textOne:
                "Follow one of our knowledgeable guides through the conservatory while discovering butterfly species, feeding habits, life cycles and the plants that support them.",

            textTwo:
                "The experience is relaxed and conversational, giving you plenty of opportunities to ask questions and notice fascinating details that are easy to overlook when exploring independently.",

            caption:
                "See The Conservatory Differently",

            highlights: [

                {
                    icon: "fa-solid fa-person-chalkboard",
                    title: "Expert Guidance",
                    text:
                        "Explore alongside a knowledgeable guide who brings the conservatory's stories to life."
                },

                {
                    icon: "fa-solid fa-feather",
                    title: "Butterfly Discovery",
                    text:
                        "Learn about species, behaviour, colour patterns and natural adaptations."
                },

                {
                    icon: "fa-solid fa-leaf",
                    title: "Plant Connections",
                    text:
                        "Discover how tropical plants provide food, shelter and habitat."
                },

                {
                    icon: "fa-solid fa-comments",
                    title: "Ask Questions",
                    text:
                        "Enjoy a conversational experience with plenty of time for curiosity."
                }

            ],

            journey: [

                {
                    icon: "fa-solid fa-user",
                    title: "Meet",
                    text:
                        "Meet your guide and begin with a short introduction to Wing & Bloom."
                },

                {
                    icon: "fa-solid fa-person-walking",
                    title: "Explore",
                    text:
                        "Walk through the conservatory while discovering butterflies, plants and hidden details."
                },

                {
                    icon: "fa-solid fa-lightbulb",
                    title: "Understand",
                    text:
                        "Finish your visit with a deeper understanding of the living environment around you."
                }

            ],

            know: [

                {
                    icon: "fa-solid fa-clock",
                    title: "Arrive Early",
                    text:
                        "Please arrive a little before your scheduled tour so the group can begin together."
                },

                {
                    icon: "fa-solid fa-shirt",
                    title: "Dress Comfortably",
                    text:
                        "The conservatory is warm, so lightweight clothing is recommended."
                },

                {
                    icon: "fa-solid fa-circle-question",
                    title: "Bring Questions",
                    text:
                        "Curiosity is encouraged. Your guide is happy to answer questions."
                },

                {
                    icon: "fa-solid fa-users",
                    title: "Stay Together",
                    text:
                        "Remaining with your guide helps you enjoy the complete experience."
                }

            ],

            included: [
                "Conservatory Admission",
                "60-Minute Guided Tour",
                "Butterfly Interpretation",
                "Plant & Habitat Discovery"
            ],

            faqs: [

                {
                    q: "How long is the Discovery Tour?",
                    a:
                        "The guided experience lasts approximately 60 minutes."
                },

                {
                    q: "Is the tour suitable for families?",
                    a:
                        "Yes. The tour is designed for families and curious visitors of different ages."
                },

                {
                    q: "Can we ask questions during the tour?",
                    a:
                        "Absolutely. Questions and conversation are encouraged throughout the experience."
                },

                {
                    q: "Can I take photographs?",
                    a:
                        "Yes, provided photography does not disturb wildlife or delay the group."
                }

            ]

        },


        /* =====================================================
           03 NATURE PHOTOGRAPHY
        ====================================================== */

        "photography": {

            number: "03",

            category: "CREATIVE EXPERIENCE",

            title: "Nature",

            accent: "Photography",

            image: "./images/photography.webp",

            description:
                "Slow down, find the light and capture the colours and details of the conservatory.",

            duration: "90 Minutes",

            audience: "Photographers",

            location: "Conservatory",

            overviewTitle:
                "Capture Nature|In A Different Light",

            lead:
                "Nature Photography invites you to slow down and experience Wing & Bloom through colour, movement, texture and natural light.",

            textOne:
                "Butterflies are constantly moving, making them both challenging and rewarding subjects. By watching their behaviour, you can begin to recognise the moments when they are most likely to pause on flowers or foliage.",

            textTwo:
                "Beyond butterflies, the conservatory offers tropical leaves, flowers, reflections, textures and changing light — giving photographers endless opportunities to find their own perspective.",

            caption:
                "Colour, Movement & Natural Light",

            highlights: [

                {
                    icon: "fa-solid fa-camera",
                    title: "Butterfly Photography",
                    text:
                        "Capture butterflies feeding, resting and moving naturally through the habitat."
                },

                {
                    icon: "fa-solid fa-sun",
                    title: "Natural Light",
                    text:
                        "Explore changing light and how it transforms colour and atmosphere."
                },

                {
                    icon: "fa-solid fa-magnifying-glass",
                    title: "Tiny Details",
                    text:
                        "Focus on wing patterns, flowers, leaves and beautiful natural textures."
                },

                {
                    icon: "fa-regular fa-image",
                    title: "Creative Composition",
                    text:
                        "Experiment with framing, perspective and visual storytelling."
                }

            ],

            journey: [

                {
                    icon: "fa-solid fa-eye",
                    title: "Observe",
                    text:
                        "Watch butterfly behaviour and notice where natural light falls before taking your first photograph."
                },

                {
                    icon: "fa-solid fa-camera-retro",
                    title: "Frame",
                    text:
                        "Explore different compositions using flowers, foliage and the surrounding habitat."
                },

                {
                    icon: "fa-solid fa-camera",
                    title: "Capture",
                    text:
                        "Wait patiently for authentic natural moments rather than chasing the subject."
                }

            ],

            know: [

                {
                    icon: "fa-solid fa-battery-full",
                    title: "Prepare Your Camera",
                    text:
                        "Charge batteries and make sure you have enough storage space."
                },

                {
                    icon: "fa-solid fa-bag-shopping",
                    title: "Travel Light",
                    text:
                        "Bring equipment that you can comfortably carry through the conservatory."
                },

                {
                    icon: "fa-solid fa-leaf",
                    title: "Respect Nature",
                    text:
                        "Never move plants or disturb butterflies to create a photograph."
                },

                {
                    icon: "fa-solid fa-hourglass-half",
                    title: "Be Patient",
                    text:
                        "The best wildlife moments often happen when you slow down and wait."
                }

            ],

            included: [
                "Conservatory Access",
                "Dedicated Photography Time",
                "Butterfly & Garden Subjects",
                "Creative Exploration"
            ],

            faqs: [

                {
                    q: "Do I need a professional camera?",
                    a:
                        "No. The experience can be enjoyed with a dedicated camera or smartphone."
                },

                {
                    q: "Can beginners participate?",
                    a:
                        "Yes. Anyone interested in observing and photographing nature can enjoy the experience."
                },

                {
                    q: "Can I move plants for a photograph?",
                    a:
                        "No. Plants and wildlife should remain undisturbed at all times."
                },

                {
                    q: "Are specific butterfly photographs guaranteed?",
                    a:
                        "No. Butterfly behaviour is natural and unpredictable, which is part of the experience."
                }

            ]

        },


        /* =====================================================
           04 SCHOOL FIELD TRIPS
        ====================================================== */

        "school-trip": {

            number: "04",

            category: "EDUCATIONAL EXPERIENCE",

            title: "School",

            accent: "Field Trips",

            image: "./images/school-trip.webp",

            description:
                "Turn curiosity into discovery with a memorable nature-based learning experience.",

            duration: "2 Hours",

            audience: "School Groups",

            location: "Learning & Conservatory Areas",

            overviewTitle:
                "Turn Curiosity Into|Living Learning",

            lead:
                "School Field Trips bring classroom topics to life by giving students the opportunity to explore butterflies, life cycles, habitats and plant relationships in a living environment.",

            textOne:
                "Students observe real butterflies while learning about their development, behaviour and dependence on healthy plant habitats.",

            textTwo:
                "Guided observation encourages students to ask questions, compare what they see and connect their discoveries with concepts they have encountered in the classroom.",

            caption:
                "Learning That Comes Alive",

            highlights: [

                {
                    icon: "fa-solid fa-graduation-cap",
                    title: "Curriculum Connections",
                    text:
                        "Connect classroom learning with real plants, butterflies and living habitats."
                },

                {
                    icon: "fa-solid fa-magnifying-glass",
                    title: "Guided Observation",
                    text:
                        "Encourage students to notice, compare, question and discuss their discoveries."
                },

                {
                    icon: "fa-solid fa-arrows-rotate",
                    title: "Life Cycle Learning",
                    text:
                        "Explore the remarkable transformation from egg and caterpillar to adult butterfly."
                },

                {
                    icon: "fa-solid fa-leaf",
                    title: "Habitat Awareness",
                    text:
                        "Understand why plants, climate and healthy habitats matter to butterfly survival."
                }

            ],

            journey: [

                {
                    icon: "fa-solid fa-door-open",
                    title: "Welcome",
                    text:
                        "Students begin with an introduction to the conservatory and respectful observation."
                },

                {
                    icon: "fa-solid fa-graduation-cap",
                    title: "Learn",
                    text:
                        "Explore butterfly biology, life cycles, habitats and plant relationships."
                },

                {
                    icon: "fa-solid fa-magnifying-glass",
                    title: "Discover",
                    text:
                        "Observe independently, ask questions and connect discoveries with classroom learning."
                }

            ],

            know: [

                {
                    icon: "fa-solid fa-users",
                    title: "Confirm Group Numbers",
                    text:
                        "Provide final student and accompanying adult numbers before your visit."
                },

                {
                    icon: "fa-solid fa-book-open",
                    title: "Prepare Students",
                    text:
                        "Review respectful behaviour and observation guidelines before arriving."
                },

                {
                    icon: "fa-solid fa-shoe-prints",
                    title: "Comfortable Footwear",
                    text:
                        "Students will spend time walking and exploring the conservatory."
                },

                {
                    icon: "fa-solid fa-clipboard",
                    title: "Learning Materials",
                    text:
                        "Approved notebooks or worksheets may be used during observation activities."
                }

            ],

            included: [
                "Conservatory Admission",
                "Guided Educational Session",
                "Life Cycle Learning",
                "Student Exploration Time"
            ],

            faqs: [

                {
                    q: "How long does the school experience last?",
                    a:
                        "The standard School Field Trip experience lasts approximately two hours."
                },

                {
                    q: "Do teachers remain with students?",
                    a:
                        "Yes. Teachers and accompanying adults remain responsible for supervising their students."
                },

                {
                    q: "Can students take notes?",
                    a:
                        "Yes. Approved notebooks and worksheets may be used during learning activities."
                },

                {
                    q: "Should school visits be booked in advance?",
                    a:
                        "Yes. Advance planning allows the Wing & Bloom team to prepare for your group."
                }

            ]

        },


        /* =====================================================
           05 PRIVATE & GROUP VISITS
        ====================================================== */

        "group-visit": {

            number: "05",

            category: "TOGETHER",

            title: "Private &",

            accent: "Group Visits",

            image: "./images/group-visit.webp",

            description:
                "Share Wing & Bloom with friends, clubs, organisations or special groups.",

            duration: "Flexible",

            audience: "Private & Organised Groups",

            location: "Wing & Bloom Conservatory",

            overviewTitle:
                "Better Moments Are|Shared Together",

            lead:
                "Private & Group Visits offer a relaxed way for friends, clubs, community groups and organisations to experience Wing & Bloom together.",

            textOne:
                "Your visit can be shaped around the interests and schedule of your group, whether you prefer independent exploration, shared discovery or a more structured visit.",

            textTwo:
                "Our team can help coordinate practical details before arrival so your group can focus on enjoying butterflies, tropical gardens and meaningful time together.",

            caption:
                "Nature Connects Us",

            highlights: [

                {
                    icon: "fa-solid fa-users",
                    title: "Shared Exploration",
                    text:
                        "Enjoy the conservatory together while still having freedom to explore naturally."
                },

                {
                    icon: "fa-solid fa-calendar-check",
                    title: "Flexible Planning",
                    text:
                        "Plan the timing and structure of your visit around your group's needs."
                },

                {
                    icon: "fa-solid fa-camera",
                    title: "Shared Memories",
                    text:
                        "Create memorable photographs and moments surrounded by living nature."
                },

                {
                    icon: "fa-solid fa-headset",
                    title: "Planning Support",
                    text:
                        "Our team can help organise practical details before your group arrives."
                }

            ],

            journey: [

                {
                    icon: "fa-solid fa-calendar-check",
                    title: "Plan",
                    text:
                        "Coordinate group size, timing and any specific visit requirements with our team."
                },

                {
                    icon: "fa-solid fa-people-group",
                    title: "Explore",
                    text:
                        "Enjoy butterflies, tropical plants and peaceful spaces together."
                },

                {
                    icon: "fa-solid fa-heart",
                    title: "Remember",
                    text:
                        "Leave with shared discoveries, photographs and a story your group experienced together."
                }

            ],

            know: [

                {
                    icon: "fa-solid fa-users",
                    title: "Confirm Attendance",
                    text:
                        "Provide your expected group size before your scheduled visit."
                },

                {
                    icon: "fa-solid fa-clock",
                    title: "Plan Your Arrival",
                    text:
                        "Allow enough time for your group to gather and check in together."
                },

                {
                    icon: "fa-solid fa-circle-info",
                    title: "Share Guidelines",
                    text:
                        "Make sure group members understand conservatory guidance before entering."
                },

                {
                    icon: "fa-solid fa-universal-access",
                    title: "Tell Us Your Needs",
                    text:
                        "Contact our team beforehand if your group has specific requirements."
                }

            ],

            included: [
                "Group Conservatory Access",
                "Pre-Visit Planning Support",
                "Flexible Exploration Time",
                "Shared Garden Experience"
            ],

            faqs: [

                {
                    q: "What kinds of groups can visit?",
                    a:
                        "Private groups, community organisations, clubs and other organised groups can arrange a visit."
                },

                {
                    q: "Is there a fixed duration?",
                    a:
                        "Group Visits are flexible and can be planned around the needs of your group."
                },

                {
                    q: "Should we book in advance?",
                    a:
                        "Yes. Advance planning is recommended, particularly for larger groups."
                },

                {
                    q: "Can you help with special requirements?",
                    a:
                        "Yes. Contact the Wing & Bloom team before your visit to discuss specific requirements."
                }

            ]

        }

    };


    /* =========================================================
       GET EXPERIENCE FROM URL
    ========================================================= */

    const params =
        new URLSearchParams(window.location.search);

    const experienceKey =
        params.get("experience") || "butterfly-encounter";

    const experience =
        experiences[experienceKey] ||
        experiences["butterfly-encounter"];


    /* =========================================================
       HELPERS
    ========================================================= */

    const $ = (id) =>
        document.getElementById(id);

    const setText = (id, value) => {

        const element = $(id);

        if (element) {
            element.textContent = value;
        }

    };


    /* =========================================================
       BASIC CONTENT
    ========================================================= */

    setText("detailNumber", experience.number);
    setText("detailImageNumber", experience.number);

    setText(
        "detailCategory",
        experience.category
    );

    setText(
        "detailTitle",
        experience.title
    );

    setText(
        "detailAccent",
        experience.accent
    );

    setText(
        "detailHeroDescription",
        experience.description
    );

    setText(
        "detailDuration",
        experience.duration
    );

    setText(
        "detailAudience",
        experience.audience
    );

    setText(
        "detailLocation",
        experience.location
    );

    setText(
        "overviewLead",
        experience.lead
    );

    setText(
        "overviewTextOne",
        experience.textOne
    );

    setText(
        "overviewTextTwo",
        experience.textTwo
    );

    setText(
        "detailImageCaption",
        experience.caption
    );


    /* =========================================================
       IMAGES — SAME IMAGES AS EXPERIENCES PAGE
    ========================================================= */

    const heroImage =
        $("detailHeroImage");

    const mainImage =
        $("detailMainImage");

    if (heroImage) {

        heroImage.src =
            experience.image;

        heroImage.alt =
            `${experience.title} ${experience.accent}`;

    }

    if (mainImage) {

        mainImage.src =
            experience.image;

        mainImage.alt =
            `${experience.title} ${experience.accent}`;

    }


    /* =========================================================
       OVERVIEW TITLE
    ========================================================= */

    const overviewTitle =
        $("overviewTitle");

    if (overviewTitle) {

        const parts =
            experience.overviewTitle.split("|");

        overviewTitle.innerHTML =
            `${parts[0]} <em>${parts[1]}</em>`;

    }


    /* =========================================================
       HIGHLIGHTS
    ========================================================= */

    const highlightGrid =
        $("highlightGrid");

    if (highlightGrid) {

        highlightGrid.innerHTML =
            experience.highlights
                .map((item, index) => {

                    return `
                        <article class="detail-highlight-card detail-reveal">

                            <span class="detail-highlight-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <div class="detail-highlight-icon">
                                <i class="${item.icon}"></i>
                            </div>

                            <h3>${item.title}</h3>

                            <p>${item.text}</p>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       JOURNEY
    ========================================================= */

    const journeyList =
        $("journeyList");

    if (journeyList) {

        journeyList.innerHTML =
            experience.journey
                .map((item, index) => {

                    return `
                        <article class="detail-journey-card detail-reveal">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <i class="${item.icon}"></i>

                            <h3>${item.title}</h3>

                            <p>${item.text}</p>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       GOOD TO KNOW
    ========================================================= */

    const knowList =
        $("knowList");

    if (knowList) {

        knowList.innerHTML =
            experience.know
                .map((item, index) => {

                    return `
                        <article class="detail-know-item detail-reveal">

                            <i class="${item.icon}"></i>

                            <div>

                                <h3>${item.title}</h3>

                                <p>${item.text}</p>

                            </div>

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       INCLUDED
    ========================================================= */

    const includedGrid =
        $("includedGrid");

    if (includedGrid) {

        includedGrid.innerHTML =
            experience.included
                .map((item) => {

                    return `
                        <article class="detail-included-card detail-reveal">

                            <i class="fa-solid fa-check"></i>

                            <h3>${item}</h3>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       FAQ
    ========================================================= */

    const faqList =
        $("faqList");

    if (faqList) {

        faqList.innerHTML =
            experience.faqs
                .map((item, index) => {

                    return `
                        <article class="detail-faq-item detail-reveal ${index === 0 ? "active" : ""}">

                            <button
                                class="detail-faq-question"
                                type="button"
                            >

                                <span>${item.q}</span>

                                <i class="fa-solid fa-plus"></i>

                            </button>

                            <div class="detail-faq-answer">

                                <div>

                                    <p>${item.a}</p>

                                </div>

                            </div>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       OTHER EXPERIENCES
       SAME IMAGE + SAME NAME AS EXPERIENCES PAGE
    ========================================================= */

    const otherExperiences =
        $("otherExperiences");

    if (otherExperiences) {

        const otherItems =
            Object.entries(experiences)
                .filter(
                    ([key]) =>
                        key !== experienceKey
                );

        otherExperiences.innerHTML =
            otherItems
                .map(([key, item]) => {

                    return `
                        <article class="detail-other-card detail-reveal">

                            <img
                                src="${item.image}"
                                alt="${item.title} ${item.accent}"
                            >

                            <div class="detail-other-content">

                                <span>
                                    ${item.category}
                                </span>

                                <h3>
                                    ${item.title}
                                    ${item.accent}
                                </h3>

                                <a href="experience-details.html?experience=${key}">

                                    View Experience

                                    <i class="fa-solid fa-arrow-right"></i>

                                </a>

                            </div>

                        </article>
                    `;

                })
                .join("");

    }


    /* =========================================================
       FAQ INTERACTION
    ========================================================= */

    document
        .querySelectorAll(".detail-faq-question")
        .forEach((button) => {

            button.addEventListener(
                "click",
                function () {

                    const currentItem =
                        this.closest(".detail-faq-item");

                    const isOpen =
                        currentItem.classList.contains("active");

                    document
                        .querySelectorAll(".detail-faq-item")
                        .forEach((item) => {

                            item.classList.remove("active");

                        });

                    if (!isOpen) {

                        currentItem.classList.add("active");

                    }

                }
            );

        });


    /* =========================================================
       REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(".detail-reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target
                                .classList
                                .add("detail-visible");

                            observerInstance
                                .unobserve(entry.target);

                        }

                    });

                },

                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }

            );

        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("detail-visible");

        });

    }


    /* =========================================================
       PAGE TITLE
    ========================================================= */

    document.title =
        `${experience.title} ${experience.accent} | Wing & Bloom Conservatory`;

});