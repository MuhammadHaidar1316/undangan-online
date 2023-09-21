// script.js
document.addEventListener("DOMContentLoaded", function () {
    const countdownDate = new Date("2023-10-10T14:00:00Z").getTime();

    simplyCountdown("#countdown", {
        year: 2023,
        month: 10,
        day: 10,
        hours: 14,
        minutes: 0,
        seconds: 0,
        words: {
            days: 'hari',
            hours: 'jam',
            minutes: 'menit',
            seconds: 'detik',
            pluralLetter: ''
        },
        plural: true,
        inline: false,
        inlineClass: 'simply-countdown-inline',
        // Enable this line to auto-update the countdown every 1 second.
        // refresh: 1000,
        sectionClass: 'simply-section',
        amountClass: 'simply-amount',
        wordClass: 'simply-word',
        zeroPad: false,
        countUp: false,
        countPos: 'before',
        countSpaces: false,
        goals: [],
        events: {},
        onComplete: function() {
            // Aksi yang ingin dilakukan setelah hitung mundur selesai
            console.log('Hitung mundur telah selesai!');
        },
    });
});