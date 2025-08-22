document.addEventListener('DOMContentLoaded', function () {
    // ====== DATA ======
    const teachers = [
        { id: 1,  name: "Lê Phạm Hoàng Giang",   image: "assets/images/teacher/GV-Hoàng-Giang.jpg" },
        { id: 2,  name: "Hoàng Hồng Linh",       image: "assets/images/teacher/GV-Hồng-Linh.jpg" },
        { id: 3,  name: "Phạm Thị Kim Anh",      image: "assets/images/teacher/GV-Kim-Anh.jpg" },
        { id: 4,  name: "Tôn Nữ Minh Thư",       image: "assets/images/teacher/GV-Minh-Thư.jpg" },
        { id: 5,  name: "Lê Mỹ An",              image: "assets/images/teacher/GV-Mỹ-An.jpg" },
        { id: 6,  name: "Nguyễn Thị Ngọc Nghi",  image: "assets/images/teacher/GV-Ngọc-Nghi.jpg" },
        { id: 7,  name: "Nguyễn Thị Thơm",       image: "assets/images/teacher/GV-Thơm-Nguyễn.jpg" },
        { id: 8,  name: "Phạm Hồng Thiên Phúc",  image: "assets/images/teacher/GV-Thiên-Phúc.jpg" },
        { id: 9,  name: "Nguyễn Thị Thu Uyên",   image: "assets/images/teacher/GV-Thu-Uyên.jpg" },
        { id: 10, name: "Nguyễn Trà My",         image: "assets/images/teacher/GV-Trà-My.jpg" }
    ];

    // ====== DOM ======
    const stackContainer = document.querySelector('.teacher-stack');
    const thumbnailContainer = document.querySelector('.teacher-thumbnail-list');
    const nextBtn = document.querySelector('.stack-next');
    const prevBtn = document.querySelector('.stack-prev');

    // ====== STATE ======
    let currentIndex = 0;
    let autoSlideInterval = null;

    // ====== CONFIG / RESPONSIVE ======
    function getVisibleCount() {
        const w = window.innerWidth;
        if (w >= 1200) return 9;   // desktop
        if (w >= 992)  return 7;   // tablet lớn
        if (w >= 768)  return 5;   // tablet nhỏ
        return 3;                  // mobile
    }

    // ====== UTILS ======
    function getStartIndex() {
        return (currentIndex - Math.floor(getVisibleCount() / 2) + teachers.length) % teachers.length;
    }

    function clampVisibleCount(len) {
        return Math.min(len, getVisibleCount());
    }

    // ====== RENDER STACK (trên) ======
    function createStack() {
        if (!stackContainer) return;
        stackContainer.innerHTML = '';

        const displayCount = clampVisibleCount(teachers.length);
        const startIndex = getStartIndex();

        for (let i = 0; i < displayCount; i++) {
            const teacherIndex = (startIndex + i) % teachers.length;
            const t = teachers[teacherIndex];

            const item = document.createElement('div');
            item.className = 'teacher-stack-item';
            item.innerHTML = `
                    <div class="teacher-avatar">
                      <img src="${t.image}" alt="${t.name}">
                    </div>
                  `;
            stackContainer.appendChild(item);
        }

        renderThumbnailsWindow(); // khớp "cửa sổ" phía dưới
    }

    // ====== RENDER THUMBNAILS WINDOW (dưới) ======
    function renderThumbnailsWindow() {
        if (!thumbnailContainer) return;
        thumbnailContainer.innerHTML = '';

        const displayCount = clampVisibleCount(teachers.length);
        const startIndex = getStartIndex();

        for (let i = 0; i < displayCount; i++) {
            const teacherIndex = (startIndex + i) % teachers.length;
            const t = teachers[teacherIndex];

            const thumb = document.createElement('div');
            thumb.className = 'teacher-thumbnail text-center';
            thumb.dataset.index = teacherIndex;

            const isActive = teacherIndex === currentIndex;

            thumb.innerHTML = `
                  <img
                    src="${t.image}"
                    alt="${t.name}"
                    class="rounded-circle ${isActive ? 'is-active' : ''}"
                    style="width:70px;height:70px;object-fit:cover;"
                  >
                  <p style="font-size:13px;margin-top:5px;color:#4c5a8b;font-weight:600;">${t.name}</p>
                `;

            if (isActive) thumb.classList.add('active-thumb');

            thumb.addEventListener('click', () => {
                currentIndex = teacherIndex;   // nhảy đúng index thực
                createStack();
                resetAutoSlide();
            });

            thumbnailContainer.appendChild(thumb);
        }
    }

    // ====== NAVIGATION ======
    function nextTeacher() {
        currentIndex = (currentIndex + 1) % teachers.length;
        createStack();
    }

    function prevTeacher() {
        currentIndex = (currentIndex - 1 + teachers.length) % teachers.length;
        createStack();
    }

    // ====== AUTOSLIDE ======
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextTeacher, 4000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    function resetAutoSlide() {
        startAutoSlide();
    }

    // ====== EVENTS ======
    if (nextBtn) nextBtn.addEventListener('click', () => { nextTeacher(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevTeacher(); resetAutoSlide(); });

    // Hover để tạm dừng auto (desktop)
    if (stackContainer) {
        stackContainer.addEventListener('mouseenter', stopAutoSlide);
        stackContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // Vuốt (swipe) chuyển giáo viên (mobile)
    function bindSwipe(el) {
        if (!el) return;
        let startX = 0, endX = 0;

        el.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].clientX;
        }, { passive: true });

        el.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const dx = endX - startX;
            if (Math.abs(dx) > 40) {
                if (dx < 0) nextTeacher(); else prevTeacher();
                resetAutoSlide();
            }
        }, { passive: true });
    }
    bindSwipe(stackContainer);
    bindSwipe(thumbnailContainer);

    // Responsive: render lại khi đổi kích thước
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            createStack(); // re-render theo visible count mới
        }, 150);
    });

    // ====== SAFETY: set overflow hidden để che phần tràn (nếu CSS chưa có) ======
    if (stackContainer) {
        stackContainer.style.overflow = 'hidden';
        stackContainer.style.position = 'relative';
    }
    if (thumbnailContainer) {
        thumbnailContainer.style.overflow = 'hidden';
        thumbnailContainer.style.position = 'relative';
        thumbnailContainer.style.flexWrap = 'nowrap';
    }

    // ====== INIT ======
    createStack();
    startAutoSlide();
});