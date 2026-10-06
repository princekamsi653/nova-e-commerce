document.addEventListener("DOMContentLoaded", function() {

    const counters = document.querySelectorAll(".counter");

    const animateCounter = function(counter) {

        const target = Number(counter.dataset.target);
        const isDecimal = counter.dataset.decimal === "true";
        const duration = 1600;
        const startTime = performance.now();

        const updateCounter = function(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = target * easedProgress;

            if (isDecimal) {
                counter.textContent = currentValue.toFixed(1);
            } else {
                counter.textContent = Math.floor(currentValue);
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = isDecimal ? target.toFixed(1) : target;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) {
        return;
    }

    let hasAnimated = false;

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting && !hasAnimated) {

                hasAnimated = true;

                counters.forEach(function(counter, index) {
                    setTimeout(function() {
                        animateCounter(counter);
                    }, index * 150);
                });

                observer.unobserve(statsSection);
            }
        });

    }, {
        threshold: 0.35
    });

    observer.observe(statsSection);

});