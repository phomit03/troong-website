// assets/js/data-teachers.js

// ======= DATA (ví dụ) =======
window.TEACHERS = [
    {
        id: 1,
        name: "Lê Phạm Hoàng Giang",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/2.png",
        badges: ["8.5 IELTS Overall", "Thạc sĩ Giảng dạy tiếng Anh", "Á khoa Ngôn ngữ Anh"]
    },
    {
        id: 2,
        name: "Hoàng Hồng Linh",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/6.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 3,
        name: "Phạm Thị Kim Anh",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/1.png",
        badges: ["8.5 IELTS Overall", "Thạc sĩ Giảng dạy tiếng Anh", "Á khoa Ngôn ngữ Anh"]
    },
    {
        id: 4,
        name: "Tôn Nữ Minh Thư",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/10.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 5,
        name: "Lê Mỹ An",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/4.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 6,
        name: "Nguyễn Thị Ngọc Nghi",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/8.png",
        badges: ["8.5 IELTS Overall", "Thạc sĩ Giảng dạy tiếng Anh", "Á khoa Ngôn ngữ Anh"]
    },
    {
        id: 7,
        name: "Phạm Hồng Thiên Phúc",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/3.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 8,
        name: "Phạm Bá Tùng",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/11.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 9,
        name: "Nguyễn Trà My",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/5.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 10,
        name: "Nguyễn Thị Thơm",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/9.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    },
    {
        id: 11,
        name: "Nguyễn Thị Hồng Vân",
        role: "Giáo viên tại Pháp Ngữ Troong",
        image: "assets/images/teacher-avatar2/7.png",
        badges: ["9.0 IELTS Overall", "8.5 IELTS Speaking"]
    }
];

// ======= VIEW/LOGIC =======
(function(){
    const rail     = document.getElementById('teacherRail');
    const btnL     = document.getElementById('tPrev');
    const btnR     = document.getElementById('tNext');
    const viewport = document.querySelector('.teacher-viewport');
    const data     = (window.TEACHERS || []);

    // Chọn icon theo nội dung badge
    function iconFor(bText) {
        const t = (bText || "").toLowerCase();
        if (t.includes('ielts')) return 'fa-language';           // IELTS
        if (t.includes('thạc sĩ') || t.includes('master')) return 'fa-graduation-cap'; // MSc/Master
        if (t.includes('cử nhân') || t.includes('bachelor')) return 'fa-user-graduate';
        if (t.includes('giảng dạy') || t.includes('teaching')) return 'fa-chalkboard-teacher';
        if (t.includes('giải') || t.includes('award')) return 'fa-award';
        if (t.match(/\b(8|8\.5|9|9\.0)\b/)) return 'fa-star';    // điểm số nổi bật
        return 'fa-certificate';                                  // mặc định
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
    const startAuto = ()=> { timer = setInterval(()=> btnR?.click(), 1000); };
    const stopAuto  = ()=> { if(timer) clearInterval(timer); };
    startAuto();
    viewport?.addEventListener('mouseenter', stopAuto, {passive:true});
    viewport?.addEventListener('mouseleave', startAuto, {passive:true});
})();
