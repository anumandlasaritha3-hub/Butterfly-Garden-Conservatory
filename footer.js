/* =========================================================
   WING & BLOOM CONSERVATORY
   FOOTER JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       AUTOMATIC CURRENT YEAR
    ===================================================== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});