/* =====================================================
   SUPRAJA & LOGESH
   WEDDING INVITATION JAVASCRIPT
   ===================================================== */


/* =====================================================
   OPEN INVITATION
   ===================================================== */

const opening = document.getElementById("opening");
const openButton = document.getElementById("openButton");
const mainContent = document.getElementById("mainContent");


openButton.addEventListener("click", function () {

    // Start the opening animation
    opening.classList.add("opened");


    // Reveal the main invitation after the animation
    setTimeout(function () {

        mainContent.classList.add("visible");

        // Allow scrolling
        document.body.style.overflowY = "auto";

    }, 900);

});


/* =====================================================
   WEDDING COUNTDOWN
   ===================================================== */


/*
   Wedding:
   15 November 2026
   7:00 AM
   Chennai / India
*/

const weddingDate = new Date(
    "2026-11-15T07:00:00+05:30"
).getTime();


/* Countdown elements */

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


/* =====================================================
   UPDATE COUNTDOWN
   ===================================================== */

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    // Wedding date has arrived
    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    // Calculate days
    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


    // Calculate hours
    const hours = Math.floor(
        (difference %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    // Calculate minutes
    const minutes = Math.floor(
        (difference %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    // Calculate seconds
    const seconds = Math.floor(
        (difference %
            (1000 * 60))
        /
        1000
    );


    // Display countdown

    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


/* Run immediately */

updateCountdown();


/* Update every second */

setInterval(updateCountdown, 1000);
