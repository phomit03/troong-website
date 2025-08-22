/* ===== DATA (giữ nguyên theo bạn) ===== */
const TEACHERS = [
    {
        id: 'le-pham-hoang-giang', name: 'Lê Phạm Hoàng Giang', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Hoàng-Giang.jpg',
        cover: '../assets/images/teacher/GV-Hoàng-Giang.jpg',
        tags: ['10 năm kinh nghiệm', 'Chuyên TOEIC/TCF'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Học vị', text: 'Thạc sĩ Ngôn ngữ Pháp - ĐH Sư Phạm Hà Nội'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Đào tạo hơn 500 học viên đạt TCF B2+'},
            {icon: 'fa-solid fa-language', title: 'Mảng dạy', text: 'Giao tiếp, luyện thi'},
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Phát âm & ngữ điệu tiếng Pháp'},
            {icon: 'fa-solid fa-book', title: 'Sách biên soạn', text: 'Giáo trình “Pháp ngữ giao tiếp nhanh”'},
            {icon: 'fa-solid fa-microphone-lines', title: 'Nghiên cứu', text: 'Ngữ âm & phương pháp giảng dạy hiện đại'},
            {icon: 'fa-solid fa-user-graduate', title: 'Cử nhân', text: 'Ngôn ngữ Pháp - ĐH Hà Nội'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: '7 năm giảng dạy luyện thi chứng chỉ'},
            {icon: 'fa-solid fa-school', title: 'Đại học', text: 'ĐH Lyon 2, ngành Ngôn ngữ học ứng dụng'},
            {icon: 'fa-solid fa-book-open', title: 'Chuyên môn', text: 'Kỹ năng giao tiếp & phỏng vấn du học'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Cố vấn học viên chuẩn bị hồ sơ du học'},
        ]
    },
    {
        id: 'hoang-hong-linh', name: 'Hoàng Hồng Linh', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Hồng-Linh.jpg',
        cover: '../assets/images/teacher/GV-Hồng-Linh.jpg',
        tags: ['DELF C1', 'Du học Pháp'],
        info: [
            {icon: 'fa-solid fa-user-graduate', title: 'Cử nhân', text: 'Ngôn ngữ & Văn hoá Pháp - ĐH Quốc Gia Hà Nội'},
            {icon: 'fa-solid fa-globe', title: 'Kinh nghiệm', text: '5 năm học tập & làm việc tại Paris'}
        ]
    },
    {
        id: 'pham-thi-kim-anh', name: 'Phạm Thị Kim Anh', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Kim-Anh.jpg',
        cover: '../assets/images/teacher/GV-Kim-Anh.jpg',
        tags: ['Giao tiếp thực hành', 'DELF B2'],
        info: [
            {icon: 'fa-solid fa-book-open', title: 'Chuyên môn', text: 'Kỹ năng giao tiếp & phỏng vấn du học'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Cố vấn học viên chuẩn bị hồ sơ du học'}
        ]
    },
    {
        id: 'ton-nu-minh-thu', name: 'Tôn Nữ Minh Thư', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Minh-Thư.jpg',
        cover: '../assets/images/teacher/GV-Minh-Thư.jpg',
        tags: ['IELTS 8.0 Overall', 'Song ngữ Việt – Pháp'],
        info: [
            {icon: 'fa-solid fa-award', title: 'Giải thưởng', text: 'Học bổng Erasmus Mundus'},
            {icon: 'fa-solid fa-graduation-cap', title: 'Bằng cấp', text: 'Cử nhân Sư phạm tiếng Pháp'}
        ]
    },
    {
        id: 'le-my-an', name: 'Lê Mỹ An', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Mỹ-An.jpg',
        cover: '../assets/images/teacher/GV-Mỹ-An.jpg',
        tags: ['Chuyên gia phát âm', '5 năm kinh nghiệm'],
        info: [
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Phát âm & ngữ điệu tiếng Pháp'},
            {icon: 'fa-solid fa-book', title: 'Sách biên soạn', text: 'Giáo trình “Pháp ngữ giao tiếp nhanh”'}
        ]
    },
    {
        id: 'nguyen-thi-ngoc-nghi', name: 'Nguyễn Thị Ngọc Nghi', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Ngọc-Nghi.jpg',
        cover: '../assets/images/teacher/GV-Ngọc-Nghi.jpg',
        tags: ['DELF C1', 'Chuyên luyện thi TCF/TEF'],
        info: [
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: '7 năm giảng dạy luyện thi chứng chỉ'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: '95% học viên đạt kết quả mong muốn'}
        ]
    },
    {
        id: 'nguyen-thi-thom', name: 'Nguyễn Thị Thơm', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Thơm-Nguyễn.jpg',
        cover: '../assets/images/teacher/GV-Thơm-Nguyễn.jpg',
        tags: ['Du học sinh Pháp', 'Giáo viên giao tiếp'],
        info: [
            {icon: 'fa-solid fa-school', title: 'Đại học', text: 'ĐH Lyon 2, ngành Ngôn ngữ học ứng dụng'},
            {icon: 'fa-solid fa-globe', title: 'Trải nghiệm', text: 'Từng làm việc tại tổ chức giáo dục quốc tế'}
        ]
    },
    {
        id: 'pham-hong-thien-phuc', name: 'Phạm Hồng Thiên Phúc', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Thiên-Phúc.jpg',
        cover: '../assets/images/teacher/GV-Thiên-Phúc.jpg',
        tags: ['Chuyên môn ngữ pháp', '8 năm giảng dạy'],
        info: [
            {icon: 'fa-solid fa-book', title: 'Giáo trình', text: 'Biên soạn hơn 200 tài liệu ôn luyện ngữ pháp'},
            {icon: 'fa-solid fa-award', title: 'Kinh nghiệm', text: 'Từng giảng dạy tại Alliance Française'}
        ]
    },
    {
        id: 'nguyen-thi-thu-uyen', name: 'Nguyễn Thị Thu Uyên', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Thu-Uyên.jpg',
        cover: '../assets/images/teacher/GV-Thu-Uyên.jpg',
        tags: ['Ngữ âm học', 'TCF Canada'],
        info: [
            {icon: 'fa-solid fa-microphone-lines', title: 'Nghiên cứu', text: 'Ngữ âm & phương pháp giảng dạy hiện đại'},
            {icon: 'fa-solid fa-user-graduate', title: 'Cử nhân', text: 'Ngôn ngữ Pháp - ĐH Hà Nội'}
        ]
    },
    {
        id: 'nguyen-tra-my', name: 'Nguyễn Trà My', role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar/Trà-My.jpg',
        cover: '../assets/images/teacher/GV-Trà-My.jpg',
        tags: ['Luyện thi TCF/TEF', 'Giao tiếp'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Bằng cấp', text: 'Thạc sĩ Ngôn ngữ học - Sorbonne Université'},
            {icon: 'fa-solid fa-globe', title: 'Kinh nghiệm', text: 'Giảng dạy 6 năm tại Việt Nam & Pháp'}
        ]
    }

];

/* ===== RENDER ===== */
const PER_PAGE = 8;
let currentPage = 1;
let currentActiveId = null;

const $grid = document.getElementById('teacherGrid');
const $detail = document.getElementById('teacherDetail');
const $pages = document.getElementById('pageNumbers');
const $prev = document.getElementById('prevPage');
const $next = document.getElementById('nextPage');

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

function paginate(arr, size, page) {
    const start = (page - 1) * size;
    return arr.slice(start, start + size);
}

function renderPages() {
    const totalPages = Math.ceil(TEACHERS.length / PER_PAGE);
    $pages.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const b = document.createElement('button');
        b.className = 'pag-num' + (i === currentPage ? ' active' : '');
        b.textContent = i;
        b.onclick = () => {
            currentPage = i;
            renderList();
        };
        $pages.appendChild(b);
    }
    $prev.disabled = currentPage === 1;
    $next.disabled = currentPage === totalPages;
}

function renderList() {
    const items = isMobile() ? TEACHERS.slice() : paginate(TEACHERS, PER_PAGE, currentPage);

    $grid.innerHTML = items.map(t => `
    <article class="tcard ${t.id === currentActiveId ? 'active' : ''}" data-id="${t.id}">
      <div class="tcard-thumb"><img src="${t.avatar}" alt="${t.name}"></div>
      <div class="tcard-body">
        <div class="tcard-name">${t.name}</div>
        <div class="tcard-role">${t.role || ''}</div>
      </div>
    </article>
  `).join('');

    // click chọn giáo viên
    $grid.querySelectorAll('.tcard').forEach(card => {
        card.onclick = () => {
            currentActiveId = card.getAttribute('data-id');
            renderDetail(currentActiveId);
            $grid.querySelectorAll('.tcard').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            if (isMobile()) {
                document.getElementById('teacherDetail').scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        };
    });

    if (isMobile()) {
        // mobile: không hiển thị số trang, 2 nút để cuộn ngang
        $pages.innerHTML = '';
        $prev.style.display = 'inline-block';
        $next.style.display = 'inline-block';
    } else {
        renderPages();
        $prev.style.display = 'inline-block';
        $next.style.display = 'inline-block';
    }
}

function renderDetail(id) {
    const t = TEACHERS.find(x => x.id === id) || TEACHERS[0];
    $detail.innerHTML = `
    <div class="td-cover">${t.cover ? `<img src="${t.cover}" alt="${t.name}">` : ''}</div>
    <h3 class="td-name">${t.name}</h3>
    <div class="td-role">${t.role || ''}</div>
    ${t.tags?.length ? `<div class="td-tags">${t.tags.map(x => `<span class="tag">${x}</span>`).join('')}</div>` : ''}
    <div class="td-info">
      ${(t.info || []).map(it => `
        <div class="item">
          <i class="${it.icon}"></i>
          <div><b>${it.title}</b><span>${it.text}</span></div>
        </div>`).join('')}
    </div>
  `;
}

/* Nút điều hướng:
   - Mobile: cuộn ngang theo bề rộng 1 card
   - Desktop: đổi trang */
$prev.onclick = () => {
    if (isMobile()) {
        const card = $grid.querySelector('.tcard');
        const step = card ? card.offsetWidth + 12 : $grid.clientWidth * 0.7;
        $grid.scrollBy({left: -step, behavior: 'smooth'});
    } else if (currentPage > 1) {
        currentPage--;
        renderList();
    }
};

$next.onclick = () => {
    if (isMobile()) {
        const card = $grid.querySelector('.tcard');
        const step = card ? card.offsetWidth + 12 : $grid.clientWidth * 0.7;
        $grid.scrollBy({left: step, behavior: 'smooth'});
    } else {
        const total = Math.ceil(TEACHERS.length / PER_PAGE);
        if (currentPage < total) {
            currentPage++;
            renderList();
        }
    }
};

/* Re-render khi vượt ngưỡng 768px để luôn đúng số item */
let lastIsMobile = isMobile();
window.addEventListener('resize', () => {
    const now = isMobile();
    if (now !== lastIsMobile) {
        lastIsMobile = now;
        renderList();
        // chọn lại card đầu danh sách
        const firstId = (now ? TEACHERS : paginate(TEACHERS, PER_PAGE, currentPage))[0]?.id;
        if (firstId) {
            currentActiveId = firstId;
            renderDetail(firstId);
        }
    }
});

/* Init */
(function init() {
    renderList();
    // luôn chọn giáo viên 1 (TEACHERS[0]) làm active mặc định
    const firstId = TEACHERS[0]?.id;
    if (firstId) {
        currentActiveId = firstId;
        renderDetail(firstId);

        // gắn class active cho card đầu tiên
        const firstCard = document.querySelector('.tcard[data-id="' + firstId + '"]');
        if (firstCard) firstCard.classList.add('active');
    }
})();