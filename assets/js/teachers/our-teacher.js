// ======= DATA =======
window.TEACHERS = [
    {
        id: "le-pham-hoang-giang",
        name: "Lê Phạm Hoàng Giang",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/2.png",
        badges: [
            "Thạc sĩ sư phạm tiếng Pháp",
            "Trình độ ngôn ngữ Pháp C1",
            "Biên dịch tự do cho công ty Pháp"
        ]
    },
    {
        id: "hoang-hong-linh",
        name: "Hoàng Hồng Linh",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/6.png",
        badges: [
            "Cử nhân Ngôn ngữ tiếng Pháp tại Đại học Hà Nội",
            "Trình độ ngôn ngữ Pháp DELF B2",
            "Đạt chứng chỉ HANU Test C1 tiếng Pháp"
        ]
    },
    {
        id: "pham-thi-kim-anh",
        name: "Phạm Thị Kim Anh",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/1.png",
        badges: [
            "Tiến sĩ ngành Luật quốc tế",
            "Cựu giảng viên tiếng Pháp"
        ]
    },
    {
        id: "ton-nu-minh-thu",
        name: "Tôn Nữ Minh Thư",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/10.png",
        badges: [
            "Có nhiều kinh nghiệm luyện thi và giảng dạy",
            "Trình độ ngôn ngữ Pháp DELF B2"
        ]
    },
    {
        id: "le-my-an",
        name: "Lê Mỹ An",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/4.png",
        badges: [
            "Cử nhân ngành Digital Marketing, Entrepreunariat et E-Commerce",
            "Trình độ ngôn ngữ Pháp DELF B2",
            "Đạt Thủ khoa và Giải Nhất cuộc thi HSG cấp tỉnh tiếng Pháp"
        ]
    },
    {
        id: "nguyen-thi-ngoc-nghi",
        name: "Nguyễn Thị Ngọc Nghi",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/8.png",
        badges: [
            "Thạc sĩ khoa xã hội - nhân văn tại Đại học Strasbourg (Pháp)",
            "Sở hữu bằng DALF C1",
            "Từng giảng dạy tại các trường tiểu học của Pháp"
        ]
    },
    {
        id: "pham-hong-thien-phuc",
        name: "Phạm Hồng Thiên Phúc",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/3.png",
        badges: [
            "Thạc sĩ Tài chính tại Đại học Công nghệ Sydney",
            "Accent tiếng Pháp cực kỳ mê",
            "Cử nhân Kinh tế và Quản lý tại Đại học Lumiere Lyon 2"
        ]

    },
    {
        id: "pham-ba-tung",
        name: "Phạm Bá Tùng",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/11.png",
        badges: [
            "Thạc sĩ cơ học và xây dựng tại Viện Nghiên cứu Khoa học ứng dụng Quốc gia tại Rennes (Pháp)",
            "Trình độ ngôn ngữ Pháp B2"
        ]
    },
    {
        id: "nguyen-tra-my",
        name: "Nguyễn Trà My",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/5.png",
        badges: [
            "Thạc sĩ FLE",
            "Trình độ tiếng Pháp DALF C1 và TCF C1"
        ]
    },
    {
        id: "nguyen-thi-thom",
        name: "Nguyễn Thị Thơm",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/9.png",
        badges: [
            "Cử nhân và hiện đang theo học Thạc sĩ chuyên ngành Ngôn ngữ Pháp tại Đại học Hà Nội",
            "Trình độ chuyên môn vững"
        ]
    },
    {
        id: "nguyen-thi-hong-van",
        name: "Nguyễn Thị Hồng Vân",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/7.png",
        badges: [
            "Thạc sĩ khoa xã hội - nhân văn tại Đại học Strasbourg (Pháp)",
            "Sở hữu bằng DALF C1",
            "Từng giảng dạy tại các trường tiểu học của Pháp"
        ]
    }
];

// ======= VIEW/LOGIC =======
(function () {
    const grid = document.getElementById('teacherGrid');
    if (!grid) return;

    const data = (window.TEACHERS || []); // từ data-teachers.js

    function iconFor(bText) {
        const t = (bText || "")
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        // Học vị / văn bằng
        if (/\b(phd|doctor)\b/.test(t) || t.includes('tien si')) return 'fa-user-graduate';
        if (t.includes('thac si') || t.includes('master') || /\bfle\b/.test(t)) return 'fa-graduation-cap';
        if (t.includes('cu nhan') || t.includes('bachelor')) return 'fa-user';

        // Trình độ / chứng chỉ ngôn ngữ
        if (t.includes('delf') || t.includes('dalf') || t.includes('tcf') || t.includes('tef')) return 'fa-language';
        if (t.includes('trinh do') || /\b(a1|a2|b1|b2|c1|c2)\b/.test(t)) return 'fa-language';

        // Kinh nghiệm / giảng dạy
        if (t.includes('giang day') || t.includes('luyen thi') || t.includes('teaching') || t.includes('giao vien'))
            return 'fa-chalkboard-user';
        if (t.includes('cuu giang vien')) return 'fa-chalkboard';

        // Thành tích / giải thưởng
        if (t.includes('giai') || t.includes('thu khoa') || t.includes('chung chi') || t.includes('award') || t.includes('hanu'))
            return 'fa-award';

        // Dịch thuật / đặc điểm
        if (t.includes('bien dich') || /\bdich\b/.test(t)) return 'fa-book';
        if (t.includes('accent') || t.includes('truyen cam hung') || t.includes('hot-face')) return 'fa-microphone';

        // Học/Làm ở Pháp (địa danh)
        if (t.includes('phap') || t.includes('paris') || t.includes('lyon') || t.includes('rennes') || t.includes('strasbourg'))
            return 'fa-globe';

        return 'fa-certificate';
    }

    function badgeListHtml(badges) {
        return (badges || []).map(b => {
            const icon = iconFor(b);
            // thêm title để hover vẫn xem full text
            return `<li class="pf-badge"><i class="fa ${icon}" aria-hidden="true"></i><span title="${b}">${b}</span></li>`;
        }).join('');
    }

    function itemHtml(t) {
        return `
      <div class="item">
        <a href="#" class="teacher-link">
          <div class="teacher-item v2" data-id="${t.id}">
            <div class="thumb">
              <img src="${t.image}" alt="${t.name}">
              <span class="pf-ring"></span>
              <div class="pf-overlay">
                <ul class="pf-badges">
                  ${badgeListHtml(t.badges)}
                </ul>
              </div>
            </div>
            <div class="down-content">
              <h4>${t.name}</h4>
              <span>${t.role || ''}</span>
            </div>
          </div>
        </a>
      </div>
    `;
    }

    // Render danh sách
    grid.innerHTML = data.map(itemHtml).join('');

    // CLICK: đi tới About với tham số ?teacher={id}#teachers (giống data-teacher)
    grid.querySelectorAll('.teacher-item').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.getAttribute('data-id');
            if (id) window.location.href = `pages/about-us.html?teacher=${id}#teachers`;
        });
    });

    // OWL: dừng autoplay khi hover, chạy lại khi rời chuột
    if (typeof jQuery !== 'undefined' && jQuery.fn && jQuery.fn.owlCarousel) {
        // Nếu carousel đang được init ở #teacherGrid hoặc wrapper .owl-carousel
        const $owl = jQuery(grid).hasClass('owl-carousel')
            ? jQuery(grid)
            : jQuery(grid).closest('.owl-carousel').length
                ? jQuery(grid).closest('.owl-carousel')
                : jQuery(grid);

        // Nếu đã init -> bật autoplayHoverPause + bind hover stop/play
        if ($owl.data('owl.carousel')) {
            const inst = $owl.data('owl.carousel');
            inst.settings.autoplayHoverPause = true;

            $owl.trigger('refresh.owl.carousel');

            $owl.on('mouseenter', '.item, .teacher-item, .thumb, .pf-overlay', function () {
                $owl.trigger('stop.owl.autoplay');
            });
            $owl.on('mouseleave', '.item, .teacher-item, .thumb, .pf-overlay', function () {
                $owl.trigger('play.owl.autoplay', [3000]);
            });
        } else {
            // $owl.owlCarousel({ items: 4, margin: 30, loop: true, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true, responsive:{0:{items:1},768:{items:2},1200:{items:4}} });
        }
    }
})();