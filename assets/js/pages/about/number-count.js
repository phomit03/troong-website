document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat-number");

    const options = {
        threshold: 0.6 // khi 60% phần tử hiển thị thì bắt đầu chạy
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute("data-count"));
                let current = 0;
                const duration = 2000; // thời gian chạy (ms)
                const stepTime = Math.abs(Math.floor(duration / target));

                const timer = setInterval(() => {
                    current++;
                    counter.textContent = current.toLocaleString(); // format số đẹp
                    if (current >= target) {
                        clearInterval(timer);
                    }
                }, stepTime);

                observer.unobserve(counter); // chỉ chạy 1 lần
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});