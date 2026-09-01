const knot = document.getElementById("knot");
const threadTail = document.getElementById("threadTail");
const opening = document.getElementById("opening");

let dragging = false;
let startX = 0;
let distance = 0;

const pullDistance = 120;


/* ================================
   START DRAG
================================ */

knot.addEventListener("pointerdown", function (event) {

    dragging = true;

    startX = event.clientX;

    knot.setPointerCapture(event.pointerId);

    knot.style.cursor = "grabbing";
});


/* ================================
   DRAG
================================ */

knot.addEventListener("pointermove", function (event) {

    if (!dragging) {
        return;
    }

    distance = event.clientX - startX;

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

});


/* ================================
   RELEASE
================================ */

knot.addEventListener("pointerup", function () {

    dragging = false;

    knot.style.cursor = "grab";


    if (distance >= pullDistance * 0.7) {

        openInvitation();

    } else {

        resetKnot();

    }

});


/* ================================
   RESET
================================ */

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


/* ================================
   OPEN INVITATION
================================ */

function openInvitation() {

    knot.style.pointerEvents = "none";


    knot.style.transition =
        "transform 0.8s ease, opacity 0.8s ease";

    knot.style.transform =
        "translateX(200px) rotate(30deg) scale(0.7)";

    knot.style.opacity = "0";


    threadTail.style.transition =
        "transform 1s ease, opacity 1s ease";

    threadTail.style.transform =
        "translateX(230px) rotate(35deg)";

    threadTail.style.opacity = "0";


    setTimeout(function () {

        showReveal();

    }, 900);

}


/* ================================
   REVEAL
================================ */

function showReveal() {

    const reveal = document.createElement("div");

    reveal.className = "reveal-message";

    reveal.innerHTML = `
        <div class="reveal-symbol">✦</div>

        <p>WITH LOVE</p>

        <h1>
            SUPRAJA
            <span>&</span>
            LOGESH
        </h1>

        <div class="reveal-date">
            15 NOVEMBER 2026
        </div>
    `;

    opening.appendChild(reveal);


    setTimeout(function () {

        reveal.style.opacity = "0";

        setTimeout(function () {

            reveal.remove();

        }, 1200);

    }, 3000);

}
