/* ===== DATA (giữ nguyên theo bạn) ===== */
const TEACHERS = [
    {
        id: 'le-pham-hoang-giang',
        name: 'Lê Phạm Hoàng Giang',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/2.png',
        cover: '../assets/images/teacher/2.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp', 'Ôn thi TCF'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Tốt nghiệp Thạc sĩ sư phạm tiếng Pháp tại Đại học Sư phạm TP Hồ Chí Minh'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Biên dịch từ do cho các công ty Pháp (Bouygues Construction IT, Hiventy Asia) và các tập đoàn Pháp (TV5monde, Spotting, Netflix,...)'},
            {icon: 'fa-solid fa-language', title: 'Mảng dạy', text: 'Giao tiếp, ôn thi tiếng Pháp TCF'},
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Trình độ ngôn ngữ Pháp C1'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Đã có nhiều năm kinh nghiệm trong giảng dạy các lớp giao tiếp và ôn thi tiếng Pháp TCF tại các trung tâm tiếng Pháp'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'hoang-hong-linh',
        name: 'Hoàng Hồng Linh',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/6.png',
        cover: '../assets/images/teacher/9.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp', 'Ôn thi DELF'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Tốt nghiệp tại Đại học Hà Nội'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Cử nhân Ngôn ngữ tiếng Pháp tại Đại học Hà Nội loại giỏi. Đạt chứng chỉ HANU Test C1 tiếng Pháp. Đạt giải Nhất cuộc thi “Concours Parlons français ensemble”'},
            {icon: 'fa-solid fa-language', title: 'Mảng dạy', text: 'Dạy giao tiếp A1-B1, hỗ trợ ôn thi DELF'},
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Trình độ ngôn ngữ Pháp DELF B2'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Có nhiều kinh nghiệm dạy giao tiếp từ A1-B1, hỗ trợ ôn thi DELF'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'pham-thi-kim-anh',
        name: 'Phạm Thị Kim Anh',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/1.png',
        cover: '../assets/images/teacher/1.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp', 'Luyện thi'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Tiến sĩ ngành Luật quốc tế tư nhân tại Trường Đại học Luật Hà Nội'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Đạt học bổng Tiến sĩ của Chính phủ Pháp. Master 2 ngành Luật Thương mại quốc tế tại Đại học Francois Rabelais (Tours, Pháp). Cựu giảng viên tiếng Pháp tại Đại học Hà Nội, Đại học Bách khoa, Đại học Dược Hà Nội, Đại học Luật và nhiều trường đại học khác'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Đã có rất nhiều năm kinh nghiệm luyện thi TCF/TEFAQ B1-C2, DELF A1-B1-B2 và DALF C1. Giám khảo kỳ thi DELF B1/B2 - DALF'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'ton-nu-minh-thu',
        name: 'Tôn Nữ Minh Thư',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/10.png',
        cover: '../assets/images/teacher/8.png',
        tags: ['Nhiều năm kinh nghiệm', 'Luyện thi DELF A1, A2', 'Dạy giao tiếp'],
        info: [
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Trình độ ngôn ngữ Pháp DELF B2. Hot-face của các lớp sơ cấp với giọng nói nhẹ nhàng, truyền cảm hứng'},
            {icon: 'fa-solid fa-award', title: 'Kinh nghiệm', text: 'Đã có kinh nghiệm luyện thi DELF A1, A2; có trình độ ôn thi TCF từ A1 đến B2 và giảng dạy các lớp giao tiếp các trình độ Sơ cấp, Trung cấp và Nâng cao'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'le-my-an',
        name: 'Lê Mỹ An',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/4.png',
        cover: '../assets/images/teacher/4.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp A1-B2'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Cử nhân ngành Digital Marketing, Entrepreneuriat et E-Commerce'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Đạt Thủ khoa và Giải Nhất cuộc thi HSG cấp tỉnh tiếng Pháp'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Trình độ ngôn ngữ Pháp DELF B2. Có nhiều kinh nghiệm luyện giao tiếp từ A1-B2'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'nguyen-thi-ngoc-nghi',
        name: 'Nguyễn Thị Ngọc Nghi',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/8.png',
        cover: '../assets/images/teacher/6.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp', 'Ôn thi TCF'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Tốt nghiệp Thạc sĩ sư phạm tiếng Pháp tại Đại học Cần Thơ'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Giáo viên tiếng Pháp tại trường trung học Huỳnh Thúc Kháng và các trung tâm tiếng Pháp'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Trình độ ngôn ngữ Pháp C1. Hơn 6 năm kinh nghiệm giảng dạy các lớp giao tiếp và ôn thi tiếng Pháp TCF (trình độ Sơ cấp, Trung cấp và Nâng cao)'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'nguyen-thi-thom',
        name: 'Nguyễn Thị Thơm',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/9.png',
        cover: '../assets/images/teacher/7.png',
        tags: ['Nhiều kinh nghiệm', 'A1', 'B2', 'Hỗ trợ ôn thi'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Cử nhân và hiện đang theo học Thạc sĩ chuyên ngành Ngôn ngữ Pháp tại Đại học Hà Nội'},
            {icon: 'fa-solid fa-award', title: 'Kinh nghiệm', text: 'Có nhiều kinh nghiệm dạy tiếng Pháp (trình độ A1 đến B2) với trình độ chuyên môn vững'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'pham-hong-thien-phuc',
        name: 'Phạm Hồng Thiên Phúc',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/3.png',
        cover: '../assets/images/teacher/3.png',
        tags: ['Nhiều kinh nghiệm', 'Dạy giao tiếp', 'Hỗ trợ ôn thi'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Thạc sĩ Tài chính tại Đại học Công nghệ Sydney (Úc). Cử nhân Kinh tế và Quản lý tại Đại học Lumiere Lyon 2 (Pháp)'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Từng là Phó Chủ tịch Hội sinh viên Việt Nam tại Lyon'},
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Trình độ ngôn ngữ Pháp DELF B2, tiếng Anh IELTS 7.0. Accent tiếng Pháp cực kỳ mê'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    },
    {
        id: 'pham-ba-tung',
        name: 'Phạm Bá Tùng',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/11.png',
        cover: '../assets/images/teacher/10.png',
        tags: ['Cơ học & Xây dựng', 'Nghiên cứu', 'Giảng viên đại học'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Thạc sĩ Cơ học và Xây dựng tại Viện Nghiên cứu Khoa học Ứng dụng Quốc gia Rennes (INSA de Rennes, Pháp)'},
            {icon: 'fa-solid fa-user-graduate', title: 'Học vị', text: 'Tiến sĩ Xây dựng tại Trường Đại học Cergy-Pontoise, Pháp'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm giảng dạy', text: 'Giảng viên tại Đại học Công nghệ TP. Hồ Chí Minh'},
            {icon: 'fa-solid fa-microscope', title: 'Nghiên cứu', text: 'Nghiên cứu sinh sau Tiến sĩ tại Đại học Hồ Nam, Trung Quốc'},
            {icon: 'fa-solid fa-language', title: 'Ngoại ngữ', text: 'Giáo viên IELTS tại Trung tâm ngoại ngữ Passion'}
        ]
    },
    {
        id: 'nguyen-tra-my',
        name: 'Nguyễn Trà My',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/5.png',
        cover: '../assets/images/teacher/5.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp', 'Luyện thi'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Thạc sĩ FLE: Nghiên cứu tiếng Pháp và Pháp ngữ (EZF). Thạc sĩ FLE: Học và giảng dạy tiếng Pháp (ADFLE)'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Đạt 2 bằng cấp chứng nhận trình độ tiếng Pháp DALF C1 và TCF C1, được công nhận bởi Bộ giáo dục Pháp'},
            {icon: 'fa-solid fa-microphone', title: 'Kỹ năng', text: 'Trình độ tiếng Pháp DALF C1 và TCF C1. Hiện đang sinh sống tại Pháp và sử dụng tiếng Pháp với accent cực mê'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Quản lý Phòng đào tạo & sản phẩm của trung tâm Pháp ngữ Troong'},
        ]
    },
    {
        id: 'nguyen-thi-hong-van',
        name: 'Nguyễn Thị Hồng Vân',
        role: 'Giáo viên',
        avatar: '../assets/images/teacher-avatar2/7.png',
        cover: '../assets/images/teacher/11.png',
        tags: ['Nhiều năm kinh nghiệm', 'Dạy giao tiếp A1-B2', 'Luyện thi TEF', 'Luyện thi DELF A2-B1', 'Luyện thi TCF'],
        info: [
            {icon: 'fa-solid fa-graduation-cap', title: 'Trình độ chuyên môn', text: 'Thạc sĩ Khoa xã hội - Nhân văn tại Đại học Strasbourg (Pháp)'},
            {icon: 'fa-solid fa-award', title: 'Thành tích', text: 'Sở hữu bằng DALF C1. Từng giảng dạy tại các trường tiểu học của Pháp'},
            {icon: 'fa-solid fa-chalkboard-user', title: 'Kinh nghiệm', text: 'Có nhiều năm kinh nghiệm luyện thi TCF/TEF/DELF A2-B1 và các lớp giao tiếp từ A1 đến B2'},
            {icon: 'fa-solid fa-user-tie', title: 'Vai trò', text: 'Giáo viên'},
        ]
    }
];

/* ===== RENDER / STATE ===== */
const PER_PAGE = 8;
let currentPage = 1;
let currentActiveId = null;

const $grid   = document.getElementById('teacherGrid');
const $detail = document.getElementById('teacherDetail');
const $pages  = document.getElementById('pageNumbers');
const $prev   = document.getElementById('prevPage');
const $next   = document.getElementById('nextPage');

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

function paginate(arr, size, page) {
    const start = (page - 1) * size;
    return arr.slice(start, start + size);
}

/* ===== URL helpers ===== */
function getURLTeacher() {
    const url = new URL(window.location.href);
    const raw = url.searchParams.get('teacher');
    if (!raw) return null;
    const q = decodeURIComponent(raw).trim().toLowerCase();
    return (
        TEACHERS.find(t => t.id.toLowerCase() === q) ||
        TEACHERS.find(t => t.name.trim().toLowerCase() === q) ||
        null
    );
}
function setURLTeacher(t, {push = false} = {}) {
    const url = new URL(window.location.href);
    url.searchParams.set('teacher', t.id);  // ưu tiên id gọn gàng
    url.hash = 'teachers';
    if (push) history.pushState({teacher: t.id}, '', url);
    else history.replaceState({teacher: t.id}, '', url);
}

/* ===== view ===== */
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

    // click chọn giáo viên -> cập nhật URL + hash + cuộn
    $grid.querySelectorAll('.tcard').forEach(card => {
        card.onclick = () => {
            const id = card.getAttribute('data-id');
            selectTeacher(id, {push: true, scroll: true, updateUrl: true});
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

/* ===== chọn giáo viên (1 chỗ dùng chung) ===== */
function selectTeacher(idOrObj, {push = false, scroll = false, updateUrl = true} = {}) {
    const t = typeof idOrObj === 'string'
        ? (TEACHERS.find(x => x.id === idOrObj) || TEACHERS[0])
        : idOrObj;

    currentActiveId = t.id;
    renderDetail(t.id);

    // cập nhật active card
    $grid.querySelectorAll('.tcard').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-id') === t.id);
    });

    // cập nhật URL nếu cần
    if (updateUrl) setURLTeacher(t, {push});

    // scroll tới phần chi tiết nếu cần
    if (scroll) {
        document.getElementById('teachers')
            ?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
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

/* ===== URL -> UI (Back/Forward) ===== */
window.addEventListener('popstate', () => {
    // đọc lại teacher từ URL và hiển thị, KHÔNG thêm lịch sử hay cuộn
    const t = getURLTeacher();
    if (t) {
        selectTeacher(t, {push: false, scroll: false, updateUrl: false});
    }
});

/* Init */
(function init() {
    renderList();

    const tFromURL = getURLTeacher();
    if (tFromURL) {
        // Có tham số -> render & cuộn; KHÔNG ghi lại URL để tránh thêm lịch sử
        selectTeacher(tFromURL, {push: false, scroll: true, updateUrl: false});
        return;
    }

    // Không có tham số -> chỉ render người đầu, KHÔNG cuộn, KHÔNG set hash/URL
    const firstId = TEACHERS[0]?.id;
    if (firstId) {
        currentActiveId = firstId;
        renderDetail(firstId);
        document.querySelector(`.tcard[data-id="${firstId}"]`)?.classList.add('active');
        // (bỏ setURLTeacher mặc định để nút "Xem thêm..." không bị cuộn)
    }
})();
