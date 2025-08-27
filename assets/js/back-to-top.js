const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/******** tag *******/

(function(){
    const btn = document.getElementById('backToTop');
    const tag = btn.querySelector('.btp-tag');
    if (!btn || !tag) return;

    // Hiện/ẩn nút khi cuộn
    const toggleBtn = () => {
        if (window.scrollY > 300) btn.classList.add('show');
        else {
            btn.classList.remove('show');
            btn.classList.remove('show-tag');
        }
    };
    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();

    // Click: hiện tag 2s rồi ẩn, đồng thời cuộn lên đầu
    btn.addEventListener('click', () => {
        btn.classList.add('show-tag');
        setTimeout(() => btn.classList.remove('show-tag'), 2000);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();