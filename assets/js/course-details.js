// ====== DATA (giữ nguyên kiểu cũ, thêm tùy chọn tracks để hỗ trợ nhiều lộ trình) ======
const COURSE_DETAILS = {
    /**** Khóa giao tiếp */

    "pronunciation": {
        title: "Khóa Phát Âm",
        level: "Cơ bản (Dành cho người mới bắt đầu)",
        sessions: 5,
        outcomes: [
            "Nắm được những quy tắc phát âm cơ bản trong tiếng Pháp và cải thiện rõ rệt so với trước khi tham gia",
            "Biết cách áp dụng ngữ điệu tự nhiên và nhấn trọng âm đúng trong câu nói, có thể phát âm một cách thoải mái",
            "Thực hành các câu giao tiếp cơ bản với phát âm rõ ràng, dù còn hạn chế về từ vựng nhưng có thể giao tiếp tự tin với người Pháp",
            "Tự nhận diện được các lỗi phát âm cá nhân và điều chỉnh theo hướng chuẩn hơn, hạn chế việc phát âm sai (điều sẽ ảnh hưởng tới các kĩ năng khác như Nghe - Viết)"
        ],
        progress: "5%"
    },
    "beginner": {
        title: "Khoá Sơ Cấp",
        level: "A0 – A1.1",
        sessions: 15,
        outcomes: [
            "Hiểu và áp dụng linh hoạt các quy tắc ngữ pháp quan trọng ở trình độ A1 và A2: chia động từ, thì cơ bản, và cấu trúc câu..., giúp xây dựng câu nói chính xác và tự nhiên.",
            "Thực hành giao tiếp thực tế với 9 chủ đề phổ biến: giới thiệu bản thân, gia đình, hỏi đường, hỏi giờ, nhà hàng, mua sắm, công việc, và du lịch,... nâng cao phản xạ nói trong các tình huống hàng ngày.",
            "Phát âm chuẩn như người bản xứ, nghe-nói lưu loát: Nhờ phương pháp giảng dạy tập trung vào phát âm và thực hành liên tục, học viên sẽ phát âm rõ ràng, tự tin, đồng thời cải thiện khả năng nghe và phản xạ nói nhanh nhạy.",
            "Nắm bắt ý chính từ các cuộc trò chuyện đơn giản, hiểu và phản hồi hiệu quả trong các ngữ cảnh quen thuộc, đáp ứng đầy đủ tiêu chuẩn A1-A2."
        ],
        progress: "15%",
    },
    "intermediate": {
        title: "Khoá Trung Cấp",
        level: "A2.2 – B1.1",
        sessions: 17,
        outcomes: [
            "Làm chủ các cấu trúc ngữ pháp từ trung cấp đến khá, bao gồm chia động từ phức tạp và các thì nâng cao",
            "Tự tin sử dụng tiếng Pháp nâng cao trong các chủ đề giao tiếp phức tạp thông qua luyện tập thực tế mỗi buổi học",
            "Nắm vững kỹ thuật trình bày quan điểm, suy nghĩ cá nhân qua các bài nói, được hướng dẫn chi tiết để diễn đạt mạch lạc và thuyết phục",
            "Thực hành ngôn ngữ với 9+ chủ đề thực tế: Giới thiệu bản thân và gia đình; Mua sắm, ăn uống và văn hóa ẩm thực Pháp; Công việc, học tập và kế hoạch tương lai; Du lịch - khám phá các thành phố và phong tục địa phương; Sức khỏe; thể thao và lối sống lành mạnh; Quan hệ xã hội, tình bạn và tình yêu; Môi trường và trách nhiệm cộng đồng; Công nghệ và truyền thông hiện đại; Nghệ thuật, âm nhạc và giải trí",
            "Nhận phản hồi chi tiết: mỗi bài viết được giáo viên chấm chữa kỹ lưỡng về từ vựng, ngữ pháp và nội dung; bài nói được sửa phát âm chi tiết",
            "Luyện tập phát âm chuẩn như người bản xứ thông qua bài tập đọc theo đoạn hội thoại",
            "Đủ khả năng tham gia thi thử các chứng chỉ DELF, TCF A2 và ôn luyện đầu vào trình độ A2, B1"
        ],
        progress: "50%",
    },
    "advanced": {
        title: "Khoá Nâng Cao",
        level: "B1.2 - B2.1",
        sessions: 17,
        outcomes: [
            "Thành thạo các cấu trúc ngữ pháp phức tạp như các thì nâng cao, câu điều kiện, và câu bị động, giúp xây dựng câu chính xác, tự nhiên trong giao tiếp và viết lách, đạt trình độ trung cấp chỉ sau 5 tháng học tập chăm chỉ",
            "Tự tin giao tiếp cơ bản chỉ sau 1 tháng, phản ứng linh hoạt trong các tình huống đời thường như hỏi đường, đặt lịch hẹn, hoặc thảo luận ngắn gọn",
            "Nắm vững phương pháp trình bày quan điểm rõ ràng, logic và thuyết phục, áp dụng hiệu quả trong các chủ đề học thuật (giáo dục, văn hóa) và đời sống (gia đình, công việc)",
            "Luyện tập thực hành Nói - Viết đa dạng với hơn 9 chủ đề thực tế",
            "Tập trung vào các chủ đề như du lịch (lên kế hoạch chuyến đi), công việc (phỏng vấn xin việc), giáo dục (thảo luận về trường học), môi trường (bảo vệ thiên nhiên), sức khỏe (chế độ ăn uống), truyền thông (mạng xã hội), văn hóa (lễ hội Pháp), mua sắm (so sánh giá cả), và quan hệ xã hội (gặp gỡ bạn bè)",
            "Giáo viên chấm chữa chi tiết về từ vựng, ngữ pháp, và nội dung, giúp cải thiện chất lượng bài viết từng bước",
            "Sửa phát âm cẩn thận, kết hợp bài tập đọc theo hội thoại từ giáo trình để phát âm chuẩn, ngữ điệu tự nhiên như người bản xứ",
            "Sau khóa học, học viên đủ năng lực thi thử trong kỳ thi DELF, TCF trình độ B1-B2, đồng thời được hướng dẫn chi tiết để ôn luyện cho các kỳ thi chính thức"
        ],
        progress: "75%",
    },
    "master": {
        title: "Khoá Làm Chủ",
        tracks: [
            {level: "B2.1 - B2.2", sessions: 20},
            {level: "B2.2 - C1.1", sessions: 20}
        ],
        outcomes: [
            "Linh hoạt trong ngôn ngữ và giao tiếp rất tự nhiên khi thảo luận về những chủ đề xã hội, văn hoá và chuyên môn chuyên sâu có tính tranh luận",
            "Hiểu và phân tích tốt được nội dung phức tạp của các bài luận, bài báo, thư từ chuyên nghiệp",
            "Viết được các bài luận, báo cáo hoặc thuyết trình với ngôn từ phong phú và ở trình độ cao cấp",
            "Củng cố các kỹ năng trước khi tham gia các kỳ thi DELF B2, DALF C1, TCF/TEF mục tiêu B2 hoặc C1",
            "Phát triển đồng đều 4 kỹ năng: " +
            "- Nghe: hiểu podcast, đoạn hội thoại về chủ đề thời sự, học thuật\n" +
            "- Nói: thảo luận nhóm hiệu quả\n" +
            "- Đọc: phân tích bài báo phức tạp\n" +
            "- Viết: bài luận bày tỏ quan điểm, thư từ chuyên nghiệp.\n" +
            "Với trọng tâm nâng cao giao tiếp thực tế, giúp tự tin sử dụng tiếng Pháp trong công việc và cuộc sống"
        ],
        progress: "100%",
    },

    /**** Khóa ôn thi */
    "tcf": {
        title: "Khoá ôn thi TCF TP/IRN/Canada",
        tracks: [
            {level: "A0 - A2", sessions: 55},
            {level: "A0 - B1", sessions: 75},
            {level: "A0 - B2", sessions: 95}
        ],
        outcomes: [
            "Nắm vững ngữ pháp và từ vựng tiếng Pháp ở trình độ từ A1 đến B2 để làm bài thi một cách chính xác",
            "Nắm chắc được cấu trúc đề thi TCF (TP/IRN/Canada)",
            "Thành thạo 4 kỹ năng:\n" +
            "- Đọc hiểu: tìm ý chính, trả lời câu hỏi\n" +
            "- Nghe hiểu: nắm thông tin chi tiết\n" +
            "- Viết: xây dựng bài viết mạch lạc, đúng cấu trúc và nắm được các dạng bài viết hay gặp khi đi thi\n" +
            "- Nói: phát biểu rõ ràng, logic, tự tin"
        ],
        progress: "70%",
    },
    "tef": {
        title: "Khóa ôn thi TEF (TEFAQ)",
        tracks: [
            {level: "A0 - A2", sessions: 55},
            {level: "A0 - B1", sessions: 75},
            {level: "A0 - B2", sessions: 95}
        ],
        outcomes: [
            "Nắm vững ngữ pháp và từ vựng tiếng Pháp ở trình độ từ A1 đến B2 để làm bài thi một cách chính xác",
            "Nắm chắc được cấu trúc đề thi TEF (TEFAQ)",
            "Thành thạo 4 kỹ năng:\n" +
            "- Đọc hiểu: tìm ý chính, trả lời câu hỏi\n" +
            "- Nghe hiểu: nắm thông tin chi tiết\n" +
            "- Viết: xây dựng bài viết mạch lạc, đúng cấu trúc và nắm được các dạng bài viết hay gặp khi đi thi\n" +
            "- Nói: phát biểu rõ ràng, logic, tự tin"
        ],
        progress: "70%",
    },
    "delf": {
        title: "Khoá ôn thi DELF",
        tracks: [
            {level: "A0 - A2", sessions: 55},
            {level: "A0 - B1", sessions: 75},
            {level: "A0 - B2", sessions: 95}
        ],
        outcomes: [
            "Nắm vững ngữ pháp và từ vựng tiếng Pháp ở trình độ từ A1 đến B2 để làm bài thi một cách chính xác",
            "Nắm chắc được cấu trúc đề thi DELF A1, A2, B1, B2",
            "Thành thạo 4 kỹ năng:\n" +
            "- Đọc hiểu: tìm ý chính, trả lời câu hỏi\n" +
            "- Nghe hiểu: nắm thông tin chi tiết\n" +
            "- Viết: xây dựng bài viết mạch lạc, đúng cấu trúc và nắm được các dạng bài viết hay gặp khi đi thi\n" +
            "- Nói: phát biểu rõ ràng, logic, tự tin"
        ],
        progress: "70%",
    },


};

function openCourseModal(courseId) {
    const c = COURSE_DETAILS[courseId];
    if (!c) return;

    // -- Helpers
    const $ = (sel, root) => (root || document).querySelector(sel);
    const safeText = (el, text) => {
        if (el) el.textContent = text ?? "";
    };
    const safeHTML = (el, html) => {
        if (el) el.innerHTML = html || "";
    };
    const escapeHTML = (s) => String(s)
        .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const tracks = Array.isArray(c.tracks) && c.tracks.length
        ? c.tracks
        : (c.level || c.sessions) ? [{level: c.level ?? "—", sessions: c.sessions ?? "—"}] : [];

    // ===== Header
    safeText(document.getElementById("cm-title"), c.title || "");

    // Nếu KHÔNG có cụm multi-tracks trong HTML, đổ tóm tắt vào phần cũ
    if (!document.getElementById("ci-tracks")) {
        const first = tracks[0] || {};
        safeText(document.getElementById("cm-level"), `Trình độ: ${first.level ?? "—"}`);
        safeText(document.getElementById("cm-sessions"), `${first.sessions ?? "—"} buổi`);
    }

    // ===== Aside brief (giữ nguyên)
    const first = tracks[0] || {};
    safeText(document.getElementById("cm-level-brief"), first.level ?? c.level ?? "—");
    safeText(document.getElementById("cm-sessions-brief"), `${first.sessions ?? c.sessions ?? "—"} buổi`);

    // ===== Outcomes (đầu ra chung cho cả khoá)
    const list = document.getElementById("cm-outcomes");
    if (list) {
        safeHTML(list, "");
        (c.outcomes || []).forEach(t => {
            const li = document.createElement("li");
            li.textContent = t;
            list.appendChild(li);
        });
    }

    // ===== Multi-tracks (nếu HTML đã thêm)
    const badge = document.getElementById("ci-track-count");
    const wrap = document.getElementById("ci-tracks");

    if (badge) safeText(badge, tracks.length || 0);

    if (wrap) {
        if (!tracks.length) {
            safeHTML(wrap, '<div class="col-12 text-muted small px-2">Chưa có lộ trình</div>');
        } else {
            const html = tracks.map(t => {
                const lvl = escapeHTML(t.level ?? "—");
                const ses = t.sessions == null || t.sessions === "—" ? "—" : `${escapeHTML(String(t.sessions))} buổi`;
                const note = t.note ? `<div class="mt-2 small text-muted">${escapeHTML(String(t.note))}</div>` : "";
                return `
          <div class="col-12 ci-tracks-col">
            <div class="ci-track-card">
              <div class="ci-prop">
                <span class="ci-prop__label">Trình độ</span>
                <span class="ci-prop__value">${lvl}</span>
              </div>
              <div class="ci-prop">
                <span class="ci-prop__label">Lộ trình</span>
                <span class="ci-prop__value">${ses}</span>
              </div>
              ${note}
            </div>
          </div>
        `;
            }).join("");
            safeHTML(wrap, html);
        }
    }

    // ===== Progress bar (nếu có trong data)
    const fillEl = document.querySelector("#courseInfoModal .cmv2-progress .fill");
    if (fillEl) {
        const percent = c.progress || "0%"; // thêm field progress trong COURSE_DETAILS
        fillEl.style.setProperty("--p", percent);
    }

    // ===== Show modal (Bootstrap 5)
    const modalEl = document.getElementById('courseInfoModal');
    if (!modalEl) return;
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

// ====== LISTENERS (giữ nguyên hành vi click data-course) ======
document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-course]");
    if (!target) return;
    const id = target.getAttribute("data-course");
    openCourseModal(id);
});

// ====== LISTENERS BUTTON CONTACT ======
document.addEventListener("DOMContentLoaded", function () {
    const ctaBtn = document.querySelector(".cmv2-cta");
    if (ctaBtn) {
        ctaBtn.addEventListener("click", function (e) {
            e.preventDefault();
            // Đóng modal (nếu đang mở)
            const modalEl = document.getElementById("courseInfoModal");
            if (modalEl) {
                const bsModal = bootstrap.Modal.getInstance(modalEl)
                    || new bootstrap.Modal(modalEl);
                bsModal.hide();
            }
            // Sau khi modal đóng, cuộn xuống contact
            setTimeout(() => {
                document.getElementById("contact").scrollIntoView({
                    behavior: "smooth"
                });
            }, 300); // delay để modal đóng xong
        });
    }
});

