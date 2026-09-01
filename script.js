/* =========================================================
   KNOT RELEASE REVEAL
   ========================================================= */

.reveal-message {

    position: absolute;

    inset: 0;

    z-index: 20;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    background: var(--purple);

    color: var(--beige);

    opacity: 0;

    animation:
        revealMessage
        2s
        cubic-bezier(.22,1,.36,1)
        forwards;

    padding: 30px;
}


.reveal-symbol {

    font-size: 24px;

    color: var(--lavender);

    margin-bottom: 25px;

    animation:
        revealSymbol
        1.5s
        ease
        forwards;
}


.reveal-message p {

    font-family: Arial, sans-serif;

    font-size: 8px;

    letter-spacing: 4px;

    color: var(--lavender);

    margin-bottom: 30px;
}


.reveal-message h1 {

    font-size:
        clamp(
            48px,
            13vw,
            90px
        );

    font-weight: normal;

    line-height: 0.95;

    letter-spacing: 1px;

    margin-bottom: 35px;
}


.reveal-message h1 span {

    display: block;

    font-size: 25px;

    color: var(--lavender);

    margin: 10px 0;
}


.reveal-date {

    font-family: Arial, sans-serif;

    font-size: 9px;

    letter-spacing: 4px;

    color: var(--lavender);
}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

@keyframes revealMessage {

    from {

        opacity: 0;

        transform:
            scale(1.08);
    }

    to {

        opacity: 1;

        transform:
            scale(1);
    }
}


@keyframes revealSymbol {

    from {

        opacity: 0;

        transform:
            translateY(15px)
            rotate(-20deg);
    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            rotate(0);
    }
}
