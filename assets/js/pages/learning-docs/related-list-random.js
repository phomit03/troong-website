(function () {
    // Danh sách bài viết (đã nhớ)
    const ARTICLES = [
        { file: "12-chu-de-tu-vung-di-thi-tcf-tef-delf-part1", title: "12 chủ đề từ vựng (P1) – TCF/TEF/DELF", img: "../../assets/images/nguonhoc/12-chu-de-tu-vung-di-thi-tcf-tef-delf-part1/1.jpg" },
        { file: "12-chu-de-tu-vung-di-thi-tcf-tef-delf-part2", title: "12 chủ đề từ vựng (P2) – TCF/TEF/DELF", img: "../../assets/images/nguonhoc/12-chu-de-tu-vung-di-thi-tcf-tef-delf-part2/1.jpg" },
        { file: "12-chu-de-tu-vung-di-thi-tcf-tef-delf-part3", title: "12 chủ đề từ vựng (P3) – TCF/TEF/DELF", img: "../../assets/images/nguonhoc/12-chu-de-tu-vung-di-thi-tcf-tef-delf-part3/1.jpg" },
        { file: "4-kenh-luyen-tieng-phap", title: "4 kênh luyện đọc tiếng Pháp cực xịn 🌻", img: "../../assets/images/nguonhoc/4-kenh-luyen-tieng-phap/2.jpg" },
        { file: "5-kenh-instagram-giup-ban-len-trinh-nghe-tieng-phap", title: "5 kênh Instagram giúp lên trình nghe tiếng Pháp", img: "../../assets/images/nguonhoc/5-kenh-instagram-giup-ban-len-trinh-nghe-tieng-phap/1.jpg" },
        { file: "5-kenh-youtubes-hoc-tieng-phap", title: "5 kênh YouTube học tiếng Pháp", img: "../../assets/images/nguonhoc/5-kenh-hoc-tieng.jpg" },
        { file: "5-kenh-youtubes-ho-tro-on-thi-tcf-tef-va-a2-c2", title: "5 kênh YouTube ôn TCF–TEF (A2→C2)", img: "../../assets/images/nguonhoc/5-kenh-youtubes-ho-tro-on-thi-TCF-TEF-va-A2-C2/1.jpg" },
        { file: "cau-truc-de-thi-tcf-tp-chi-tiet", title: "Cấu trúc chi tiết đề thi TCF TP", img: "../../assets/images/nguonhoc/cau-truc-de-thi-tcf-tp/1.jpg" },
        { file: "cung-troong-nang-cap-cach-su-dung-gioi-tu-pour", title: "Nâng cấp cách dùng giới từ “pour”", img: "../../assets/images/nguonhoc/cung-troong-nang-cap-cach-su-dung-tu-pour/1.jpg" },
        { file: "dap-tan-noi-so-voi-cac-trang-luyen-nghe-tieng-phap", title: "Đập tan nỗi sợ nghe tiếng Pháp A1–C2", img: "../../assets/images/nguonhoc/noi-so-luyen-nghe.jpg" },
        { file: "nen-thi-tcf-canada-hay-tef", title: "Nên thi TCF Canada hay TEF?", img: "../../assets/images/nguonhoc/nen-thi-tcf-canada-hay-tef/1.jpg" },
        { file: "phan-biet-thu-tay-va-thu-dien-tu-trong-tcf", title: "Phân biệt thư tay & thư điện tử trong TCF", img: "../../assets/images/nguonhoc/phan-biet-thu-tay-va-thu-dien-tu-trong-tcf/1.jpg" }
    ];

    const current = location.pathname.split("/").pop() || "index.html";
    const pool = ARTICLES.filter(a => a.file !== current);

    // shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picks = pool.slice(0, 3);
    const ul = document.getElementById("related-list");
    const fallback = "https://via.placeholder.com/100x70";

    picks.forEach(p => {
        const li = document.createElement("li");
        li.className = "related-item";
        li.innerHTML = `
      <a href="${encodeURI(p.file)}" class="d-flex align-items-start text-decoration-none">
        <img src="${p.img || fallback}" class="thumb me-3" alt="thumb"
             onerror="this.onerror=null;this.src='${fallback}'">
        <div class="info">
          <h6 class="title mb-1">${p.title}</h6>
          <p class="excerpt mb-0 small text-muted">Đang tải mô tả…</p>
        </div>
      </a>`;
        ul.appendChild(li);

        // nạp mô tả ngắn từ bài đích
        const excerptEl = li.querySelector(".excerpt");
        loadExcerpt(p.file, excerptEl);
    });

    async function loadExcerpt(file, targetEl) {
        try {
            const res = await fetch(encodeURI(file), { cache: "no-store" });
            const html = await res.text();
            const doc = new DOMParser().parseFromString(html, "text/html");

            // 1) ưu tiên meta description
            let text = (doc.querySelector('meta[name="description"]') || {}).content || "";

            // 2) fallback: lấy đoạn <p> đầu trong article
            if (!text) {
                const p = doc.querySelector(".news .detail-news p, article.detail-news p, article.news-detail p, article p, .post-content p");
                if (p) text = p.textContent.trim();
            }
            if (!text) { targetEl.remove(); return; }

            text = text.replace(/\s+/g, " ");
            const limit = 140;
            if (text.length > limit) {
                const cut = text.lastIndexOf(" ", limit);
                text = text.slice(0, cut > 80 ? cut : limit) + "…";
            }
            targetEl.textContent = text;
        } catch (e) {
            targetEl.remove(); // lỗi thì ẩn phần mô tả
        }
    }
})();