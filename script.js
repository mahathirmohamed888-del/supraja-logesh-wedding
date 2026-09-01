/* =====================================================
   SUPRAJA & LOGESH
   WEDDING INVITATION
   ===================================================== */


/* =====================================================
   ELEMENTS
   ===================================================== */

const knot =
    document.getElementById("knot");

const threadTail =
    document.getElementById("threadTail");

const opening =
    document.getElementById("opening");

const weddingContent =
    document.getElementById("weddingContent");


/* =====================================================
   DRAG VARIABLES
   ===================================================== */

let dragging = false;

let startX = 0;

let distance = 0;


/*
   Distance required to
   release the knot.
*/

const pullDistance = 120;


/* =====================================================
   START DRAGGING
   ===================================================== */

knot.addEventListener(
    "pointerdown",
    function(event) {

        dragging = true;

        startX = event.clientX;

        knot.setPointerCapture(
            event.pointerId
        );

        knot.style.cursor =
            "grabbing";

    }
);


/* =====================================================
   MOVE KNOT
   ===================================================== */

knot.addEventListener(
    "pointermove",
    function(event) {

        if (!dragging) {
            return;
        }


        distance =
            event.clientX - startX;


        if (distance < 0) {
            distance = 0;
        }


        if (distance > pullDistance) {
            distance = pullDistance;
        }


        knot.style.transform =
            `translateX(${distance}px) scale(1.05)`;


        threadTail.style.transform =
            `translateX(${distance}px) rotate(35deg)`;

    }
);


/* =====================================================
   RELEASE KNOT
   ===================================================== */

knot.addEventListener(
    "pointerup",
    function() {

        if (!dragging) {
            return;
        }


        dragging = false;


        knot.style.cursor =
            "grab";


        /*
           If pulled enough,
           release the invitation.
        */

        if (
            distance >=
            pullDistance * 0.7
        ) {

            revealInvitation();

        }

        else {

            resetKnot();

        }

    }
);


/* =====================================================
   RESET
   ===================================================== */

function resetKnot() {

    knot.style.transition =
        "transform 0.5s ease";


    knot.style.transform =
        "translateX(0) scale(1)";


    threadTail.style.transition =
        "transform 0.5s ease";


    threadTail.style.transform =
        "rotate(35deg)";


    distance = 0;

}


/* =====================================================
   REVEAL INVITATION
   ===================================================== */

function revealInvitation() {

    knot.style.pointerEvents =
        "none";


    /*
       Knot flies away.
    */

    knot.style.transition =
        "transform 0.8s ease, opacity 0.8s ease";


    knot.style.transform =
        "translateX(200px) rotate(30deg) scale(0.7)";


    knot.style.opacity =
        "0";


    /*
       Thread follows.
    */

    threadTail.style.transition =
        "transform 1s ease, opacity 1s ease";


    threadTail.style.transform =
        "translateX(230px) rotate(35deg)";


    threadTail.style.opacity =
        "0";


    /*
       Fade instructions.
    */

    document.querySelector(
        ".instruction"
    ).style.opacity = "0";


    document.querySelector(
        ".hint"
    ).style.opacity = "0";


    /*
       Start the reveal.
    */

    setTimeout(
        showWeddingInvitation,
        900
    );

}


/* =====================================================
   SHOW WEDDING CONTENT
   ===================================================== */

function showWeddingInvitation() {

    /*
       Fade the opening away.
    */

    opening.style.transition =
        "opacity 1.2s ease";


    opening.style.opacity =
        "0";


    /*
       Bring the wedding invitation in.
    */

    setTimeout(
        function() {

            opening.style.display =
                "none";


            weddingContent.classList.add(
                "visible"
            );


            document.body.style.overflowY =
                "auto";


            /*
               Start countdown.
            */

            updateCountdown();

        },
        1000
    );

}


/* =====================================================
   WEDDING COUNTDOWN
   ===================================================== */


/*
   Wedding:

   15 November 2026
   7:00 AM
   Chennai, India

   IST = UTC +05:30
*/

const weddingDate =
    new Date(
        "2026-11-15T07:00:00+05:30"
    ).getTime();


const days =
    document.getElementById("days");


const hours =
    document.getElementById("hours");


const minutes =
    document.getElementById("minutes");


const seconds =
    document.getElementById("seconds");


/* =====================================================
   UPDATE COUNTDOWN
   ===================================================== */

function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    /*
       Wedding has arrived.
    */

    if (difference <= 0) {

        days.textContent = "00";

        hours.textContent = "00";

        minutes.textContent = "00";

        seconds.textContent = "00";

        return;

    }


    const dayValue =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hourValue =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            )
            /
            (1000 * 60 * 60)
        );


    const minuteValue =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            )
            /
            (1000 * 60)
        );


    const secondValue =
        Math.floor(
            (
                difference %
                (1000 * 60)
            )
            /
            1000
        );


    days.textContent =
        String(dayValue)
        .padStart(2, "0");


    hours.textContent =
        String(hourValue)
        .padStart(2, "0");


    minutes.textContent =
        String(minuteValue)
        .padStart(2, "0");


    seconds.textContent =
        String(secondValue)
        .padStart(2, "0");

}


/* =====================================================
   COUNTDOWN TIMER
   ===================================================== */

setInterval(
    updateCountdown,
    1000
);
