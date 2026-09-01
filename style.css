/* =====================================================
   SUPRAJA & LOGESH
   INTERACTIVE WEDDING INVITATION
   ===================================================== */


/* =====================================================
   COLOUR SYSTEM
   ===================================================== */

:root {

    --purple: #5B3A82;
    --deep-purple: #39234F;

    --beige: #F4EBDD;
    --soft-beige: #FBF7F0;

    --lavender: #C9B6D9;
    --light-lavender: #DED1E7;

    --white: #FFFFFF;
}


/* =====================================================
   RESET
   ===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    background: var(--beige);

    color: var(--deep-purple);

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    overflow-x: hidden;
}


/* =====================================================
   OPENING SCREEN
   ===================================================== */

.opening {

    min-height: 100vh;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    position: relative;

    overflow: hidden;

    background:
        radial-gradient(
            circle at center,
            #6C4A91 0%,
            var(--purple) 42%,
            var(--deep-purple) 100%
        );

    padding: 30px;
}


/* subtle decorative circle */

.opening::before {

    content: "";

    position: absolute;

    width: 650px;
    height: 650px;

    border: 1px solid rgba(201,182,217,0.18);

    border-radius: 50%;

    pointer-events: none;
}


.opening::after {

    content: "";

    position: absolute;

    width: 480px;
    height: 480px;

    border: 1px solid rgba(201,182,217,0.12);

    border-radius: 50%;

    pointer-events: none;
}


/* =====================================================
   INVITATION CARD
   ===================================================== */

.invitation-card {

    width: min(420px, 88vw);

    min-height: 600px;

    padding: 70px 35px;

    background: var(--beige);

    border: 1px solid rgba(255,255,255,0.35);

    position: relative;

    z-index: 2;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    box-shadow:
        0 35px 80px rgba(0,0,0,0.25);

    transition:
        transform 1.2s cubic-bezier(.77,0,.18,1),
        opacity 0.8s ease;
}


/* inner border */

.invitation-card::before {

    content: "";

    position: absolute;

    inset: 16px;

    border: 1px solid var(--lavender);

    pointer-events: none;
}


/* =====================================================
   CARD CONTENT
   ===================================================== */

.card-symbol {

    font-size: 22px;

    color: var(--purple);

    margin-bottom: 25px;
}


.eyebrow {

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: 4px;

    color: var(--purple);

    margin-bottom: 30px;
}


.initials {

    font-size: 32px;

    letter-spacing: 7px;

    color: var(--purple);

    margin-bottom: 30px;
}


.initials span {

    font-size: 16px;

    color: #9D86B1;

    margin: 0 5px;
}


.opening-names {

    display: flex;

    flex-direction: column;

    gap: 5px;

    font-size: 25px;

    letter-spacing: 4px;

    color: var(--deep-purple);
}


.opening-names small {

    font-size: 16px;

    color: var(--purple);
}


.card-line {

    width: 70px;

    height: 1px;

    background: var(--lavender);

    margin: 35px 0;
}


.opening-date {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 3px;

    color: var(--purple);

    margin-bottom: 40px;
}


/* =====================================================
   OPEN BUTTON
   ===================================================== */

.open-button {

    min-height: 48px;

    padding: 0 25px;

    border: 1px solid var(--purple);

    background: transparent;

    color: var(--purple);

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: 2px;

    cursor: pointer;

    display: flex;

    align-items: center;

    gap: 18px;

    transition:
        background 0.4s ease,
        color 0.4s ease,
        gap 0.4s ease;
}


.open-button i {

    font-style: normal;

    font-size: 14px;
}


.open-button:hover {

    background: var(--purple);

    color: var(--beige);

    gap: 25px;
}


/* =====================================================
   TAP HINT
   ===================================================== */

.tap-hint {

    position: absolute;

    bottom: 28px;

    color: var(--lavender);

    font-family: Arial, sans-serif;

    font-size: 8px;

    letter-spacing: 4px;

    z-index: 3;

    animation: breathe 2.5s infinite;
}


@keyframes breathe {

    0%,100% {
        opacity: 0.35;
    }

    50% {
        opacity: 1;
    }
}


/* =====================================================
   OPENING ANIMATION
   ===================================================== */

.opening.opened .invitation-card {

    transform:
        translateY(-120px)
        scale(1.08);

    opacity: 0;
}


.opening.opened {

    animation: fadeOpening 1.3s forwards;
}


@keyframes fadeOpening {

    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        visibility: hidden;
    }
}


/* =====================================================
   MAIN CONTENT
   ===================================================== */

.main-content {

    display: none;

    background: var(--beige);

    overflow: hidden;
}


.main-content.visible {

    display: block;

    animation: revealMain 1.2s ease forwards;
}


@keyframes revealMain {

    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* =====================================================
   COMMON LABELS
   ===================================================== */

.section-label {

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: 4px;

    color: var(--purple);

    margin-bottom: 22px;
}


/* =====================================================
   HERO
   ===================================================== */

.hero {

    min-height: 100vh;

    padding:
        90px 25px
        80px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    position: relative;

    background: var(--beige);
}


.ornament {

    color: var(--purple);

    font-size: 22px;

    margin-bottom: 35px;
}


.hero h1 {

    font-size: clamp(55px, 14vw, 105px);

    font-weight: normal;

    line-height: 0.95;

    color: var(--deep-purple);

    letter-spacing: -2px;

    margin-bottom: 35px;
}


.hero h1 span {

    display: block;

    font-size: 28px;

    color: var(--purple);

    margin: 12px 0;
}


.hero-message {

    font-size: 15px;

    line-height: 1.9;

    color: #725F7D;

    margin-bottom: 50px;
}


/* =====================================================
   HERO DATE
   ===================================================== */

.hero-date {

    display: flex;

    align-items: center;

    gap: 15px;

    color: var(--purple);
}


.hero-date > span {

    font-size: 55px;

    line-height: 1;

    border-right: 1px solid var(--lavender);

    padding-right: 15px;
}


.hero-date > div {

    text-align: left;

    font-family: Arial, sans-serif;

    font-size: 11px;

    letter-spacing: 3px;
}


.hero-date small {

    display: block;

    font-size: 9px;

    margin-top: 7px;

    color: #927CA3;
}


/* =====================================================
   COUNTDOWN
   ===================================================== */

.countdown-section {

    background: var(--purple);

    color: var(--beige);

    padding:
        100px 20px;

    text-align: center;
}


.countdown-section .section-label {

    color: var(--lavender);
}


.countdown-section h2 {

    font-size: clamp(30px, 7vw, 48px);

    font-weight: normal;

    margin-bottom: 55px;
}


.countdown {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: clamp(8px, 3vw, 28px);

    flex-wrap: wrap;
}


.time-box {

    min-width: 60px;

    display: flex;

    flex-direction: column;

    align-items: center;
}


.time-box strong {

    font-family: Arial, sans-serif;

    font-size: clamp(28px, 7vw, 52px);

    font-weight: 300;

    letter-spacing: 1px;
}


.time-box span {

    margin-top: 10px;

    font-family: Arial, sans-serif;

    font-size: 7px;

    letter-spacing: 2px;

    color: var(--lavender);
}


.time-separator {

    color: var(--lavender);

    font-size: 25px;

    padding-bottom: 18px;
}


/* =====================================================
   EVENT SECTIONS
   ===================================================== */

.event-section {

    min-height: 80vh;

    padding:
        110px 25px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    position: relative;

    background: var(--soft-beige);
}


.event-section:nth-of-type(4) {

    background: var(--beige);
}


.event-number {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 3px;

    color: #A48BB3;

    margin-bottom: 25px;
}


.event-section h2 {

    font-size: clamp(50px, 12vw, 85px);

    font-weight: normal;

    color: var(--deep-purple);

    margin-bottom: 35px;
}


.event-date {

    font-family: Arial, sans-serif;

    font-size: 11px;

    letter-spacing: 3px;

    color: var(--purple);

    margin-bottom: 12px;
}


.event-time {

    font-size: 16px;

    color: #725F7D;
}


.event-divider {

    width: 45px;

    height: 1px;

    background: var(--lavender);

    margin: 35px 0;
}


.venue-name {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 2px;

    color: var(--deep-purple);
}


.venue-location {

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: 3px;

    color: #9B87A5;

    margin-top: 9px;
}


/* =====================================================
   WEDDING SECTION
   ===================================================== */

.wedding-section {

    background: var(--purple);

    color: var(--beige);
}


.wedding-section .section-label {

    color: var(--lavender);
}


.wedding-section h2 {

    color: var(--beige);
}


.wedding-section .event-number {

    color: var(--lavender);
}


.wedding-section .event-date {

    color: var(--lavender);
}


.wedding-section .event-time {

    color: #E5D9EA;
}


.wedding-section .event-divider {

    background: var(--lavender);
}


.wedding-section .venue-name {

    color: var(--beige);
}


.wedding-section .venue-location {

    color: var(--lavender);
}


/* =====================================================
   CLOSING
   ===================================================== */

.closing {

    min-height: 70vh;

    padding: 90px 25px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    background: var(--deep-purple);

    color: var(--beige);
}


.closing-symbol {

    font-size: 22px;

    color: var(--lavender);

    margin-bottom: 35px;
}


.closing p {

    font-family: Arial, sans-serif;

    font-size: 9px;

    line-height: 2;

    letter-spacing: 3px;

    color: var(--lavender);

    margin-bottom: 35px;
}


.closing h2 {

    font-size: clamp(38px, 9vw, 65px);

    font-weight: normal;

    margin-bottom: 30px;
}


.closing h2 span {

    color: var(--lavender);
}


.closing-date {

    font-family: Arial, sans-serif;

    font-size: 10px;

    letter-spacing: 5px;

    color: var(--lavender);
}


/* =====================================================
   MOBILE
   ===================================================== */

@media (max-width: 600px) {

    .opening {
        padding: 20px;
    }


    .invitation-card {

        min-height: 560px;

        padding: 60px 25px;
    }


    .hero {

        min-height: 90vh;

        padding: 70px 20px;
    }


    .hero h1 {

        font-size: 62px;
    }


    .countdown {

        gap: 8px;
    }


    .time-box {

        min-width: 55px;
    }


    .time-separator {

        font-size: 18px;
    }


    .event-section {

        min-height: 75vh;
    }

}


/* =====================================================
   REDUCED MOTION
   ===================================================== */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {

        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;

        scroll-behavior: auto !important;

        transition-duration: 0.01ms !important;
    }

}
