(function () {
    const bell = document.querySelector('.contact-bell');
    const tag  = document.querySelector('.contact-bell .contact-tag');
    const target = document.getElementById('contact');
    if (!bell || !tag || !target) return;

    let timer;

    bell.addEventListener('click', function (e) {
        // Chỉ xử lý kiểu tooltip ở mobile
        const isMobile = window.matchMedia('(max-width: 1024px)').matches;

        if (isMobile) {
            e.preventDefault(); // không nhảy hash ngay
            // Hiện tag
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(-50%) translateX(0)';

            clearTimeout(timer);
            timer = setTimeout(() => {
                // Ẩn tag
                tag.style.opacity = '0';
                tag.style.transform = 'translateY(-50%) translateX(10px)';

                // Cuộn mượt tới #contact (fallback nếu browser không hỗ trợ)
                if ('scrollIntoView' in target) {
                    try {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } catch (_) {
                        window.location.hash = '#contact';
                    }
                } else {
                    window.location.hash = '#contact';
                }
            }, 1200); // hiển thị 1.2s rồi cuộn
        }
        // Desktop: để mặc định <a href="#contact"> hoạt động bình thường
    }, { passive: false });
})();