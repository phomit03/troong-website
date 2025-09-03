
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
(function(){
    const rail     = document.getElementById('teacherRail');
    const btnL     = document.getElementById('tPrev');
    const btnR     = document.getElementById('tNext');
    const viewport = document.querySelector('.teacher-viewport');
    const data     = (window.TEACHERS || []);

    function iconFor(bText) {
        const t = (bText || "")
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        // ===== Bằng cấp =====
        if (t.includes('tiến sĩ') || t.includes('phd') || t.includes('doctor'))
            return 'fa-user-graduate';
        if (t.includes('thạc sĩ') || t.includes('master') || t.includes('french fle'))
            return 'fa-graduation-cap';
        if (t.includes('cử nhân') || t.includes('bachelor'))
            return 'fa-user';

        // ===== Trình độ ngôn ngữ =====
        if (t.includes('delf') || t.includes('dalf') || t.includes('tcf') || t.includes('tef'))
            return 'fa-language';
        if (t.includes('trình độ') || t.match(/\bc1\b|\bb2\b|\bb1\b|\ba1\b/))
            return 'fa-language';

        // ===== Kinh nghiệm giảng dạy =====
        if (t.includes('giảng dạy') || t.includes('luyện thi') || t.includes('teaching') || t.includes('giáo viên'))
            return 'fa-chalkboard-user';
        if (t.includes('cựu giảng viên'))
            return 'fa-chalkboard';

        // ===== Giải thưởng, thành tích =====
        if (t.includes('giải') || t.includes('thủ khoa') || t.includes('chứng chỉ') || t.includes('award'))
            return 'fa-award';

        // ===== Đặc điểm khác =====
        if (t.includes('accent') || t.includes('hot-face') || t.includes('truyền cảm hứng'))
            return 'fa-microphone';
        if (t.includes('biên dịch') || t.includes('dịch'))
            return 'fa-book';

        // fallback
        return 'fa-certificate';
    }

    // render card
    function cardHtml(t){
        const badgeHtml = (t.badges||[]).map(b=>{
            const icon = iconFor(b);
            return `<li><i class="fa ${icon}" aria-hidden="true"></i><span>${b}</span></li>`;
        }).join("");
        return `
      <article class="teacher-card">
        <div class="teacher-photo">
          <img src="${t.image}" alt="${t.name}">
          <div class="teacher-overlay">
            <ul class="teacher-badges">${badgeHtml}</ul>
          </div>
        </div>
        <div class="teacher-meta">
          <div class="teacher-name">${t.name}</div>
          <div class="teacher-role">${t.role||""}</div>
        </div>
      </article>`;
    }

    rail.innerHTML = data.map(cardHtml).join("");

    // Deep-link: click 1 giáo viên -> sang about-us và mang theo tham số ?teacher=
    rail.querySelectorAll('.teacher-card').forEach((card, i) => {
        const t = data[i]; // chính là teacher object
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `pages/about-us.html?teacher=${t.id}#teachers`;
        });
    });

    /* ===== kéo chuột + momentum ===== */
    let isDown=false, startX=0, startLeft=0, lastX=0, velocity=0, rAF;
    const startDrag = (x)=>{ isDown=true; rail.classList.add('grabbing'); startX=x; startLeft=rail.scrollLeft; lastX=x; cancelMomentum(); };
    const onMove = (x)=>{ if(!isDown) return; const dx=x-startX; rail.scrollLeft = startLeft - dx; velocity = x - lastX; lastX = x; };
    const endDrag = ()=>{ if(!isDown) return; isDown=false; rail.classList.remove('grabbing'); momentum(); };

    rail.addEventListener('mousedown', e=> startDrag(e.clientX));
    window.addEventListener('mousemove', e=> onMove(e.clientX));
    window.addEventListener('mouseup',   endDrag);
    rail.addEventListener('mouseleave',  endDrag);

    rail.addEventListener('touchstart', e=> startDrag(e.touches[0].clientX), {passive:true});
    rail.addEventListener('touchmove',  e=> onMove(e.touches[0].clientX), {passive:true});
    rail.addEventListener('touchend',   endDrag, {passive:true});

    function momentum(){
        const decay = 0.95;
        const step = ()=>{
            rail.scrollLeft -= velocity;
            velocity *= decay;
            if (Math.abs(velocity) > 0.5) rAF = requestAnimationFrame(step);
        };
        rAF = requestAnimationFrame(step);
    }
    function cancelMomentum(){ if(rAF) cancelAnimationFrame(rAF); }

    /* ===== bước cuộn theo 1 card (ổn định cho 4/3/2/1 cột) ===== */
    const stepBy = ()=> {
        const card = rail.querySelector('.teacher-card');
        if(!card) return 300;
        const gap = parseFloat(getComputedStyle(rail).gap || 16);
        return card.getBoundingClientRect().width + gap;
    };

    /* ===== wrap-around (vòng tròn) ===== */
    const atStart = ()=> rail.scrollLeft <= 1;
    const atEnd   = ()=> (rail.scrollLeft + rail.clientWidth) >= (rail.scrollWidth - 1);

    btnL?.addEventListener('click', ()=>{
        if(atStart()){
            rail.scrollLeft = rail.scrollWidth - rail.clientWidth; // từ đầu -> nhảy cuối
        } else {
            rail.scrollBy({left:-stepBy(), behavior:'smooth'});
        }
    });

    btnR?.addEventListener('click', ()=>{
        if(atEnd()){
            rail.scrollLeft = 0; // từ cuối -> nhảy đầu
        } else {
            rail.scrollBy({left:+stepBy(), behavior:'smooth'});
        }
    });

    /* ===== auto-play 4s, dừng khi hover viewport ===== */
    let timer;
    const startAuto = ()=> { timer = setInterval(()=> btnR?.click(), 3000); };
    const stopAuto  = ()=> { if(timer) clearInterval(timer); };
    startAuto();
    viewport?.addEventListener('mouseenter', stopAuto, {passive:true});
    viewport?.addEventListener('mouseleave', startAuto, {passive:true});
})();
