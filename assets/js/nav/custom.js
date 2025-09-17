(function ($) {
    "use strict";

    // =======================
    // Header Type = Fixed
    // =======================
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        var box = $(".header-text").height();
        var header = $("header").height();
        if (scroll >= box - header) $("header").addClass("background-header");
        else $("header").removeClass("background-header");
    });

    // =======================
    // Owl Carousel (giữ nguyên)
    // =======================
    $(".loop").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        margin: 0,
        responsive: {
            1200: { items: 5 },
            992: { items: 3 },
            760: { items: 2 }
        }
    });

    // =======================
    // Menu Dropdown Toggle
    // =======================
    if ($(".menu-trigger").length) {
        $(".menu-trigger").on("click", function () {
            $(this).toggleClass("active");
            $(".header-area .nav").slideToggle(200);
        });
    }

    // =======================
    // Accordion (giữ nguyên)
    // =======================
    $(document).on("click", ".naccs .menu div", function () {
        var numberIndex = $(this).index();
        if (!$(this).is("active")) {
            $(".naccs .menu div").removeClass("active");
            $(".naccs ul li").removeClass("active");
            $(this).addClass("active");
            $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
            var listItemHeight = $(".naccs ul").find("li:eq(" + numberIndex + ")").innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
        }
    });

    // =======================
    // Page loading animation
    // =======================
    $(window).on("load", function () {
        $("#js-preloader").addClass("loaded");
    });

    // =======================
    // Helpers cho NAV/ANCHOR
    // =======================
    var headerStickyH = $(".header-sticky").outerHeight() || 0;

    function normPath(p) {
        if (!p) return "/";
        p = p.split("#")[0].split("?")[0];
        p = p.replace(/index\.html$/i, "/").replace(/\.html$/i, "");
        // map URL cũ -> URL đẹp
        if (/^\/pages\/about-us$/i.test(p)) p = "/about-us";
        if (/^\/pages\/learning-docs$/i.test(p)) p = "/learning-docs";
        if (/^\/pages\/study-abroad$/i.test(p)) p = "/study-abroad";
        if (/^\/learning-docs\/[A-Za-z0-9\-_]+$/i.test(p)) p = "/learning-docs";
        if (/^\/pages\/learning-docs-details\/[A-Za-z0-9\-_]+$/i.test(p)) p = "/learning-docs";
        if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
        return p || "/";
    }

    function setActiveLi(li) {
        document.querySelectorAll(".nav.nav-fx li.scroll-to-section")
            .forEach(function (x) { x.classList.remove("active"); });
        if (li) li.classList.add("active");
    }

    // =======================
    // ACTIVE theo PATH (trang con)
    // =======================
    (function applyActiveByPath() {
        var currentPath = normPath(location.pathname);
        var navLis = Array.from(document.querySelectorAll(".nav.nav-fx li.scroll-to-section"));
        if (!navLis.length) return;

        // build items: phân loại route vs anchor
        var items = navLis.map(function (li) {
            var a = li.querySelector("a");
            if (!a) return null;
            var href = a.getAttribute("href") || "";
            var url;
            try { url = new URL(href, location.href); } catch (_) { return null; }
            var path = normPath(url.pathname);
            var isHome = path === "/";
            var isAnchor = isHome && url.hash && url.hash.length > 1;
            return { li: li, a: a, href: href, url: url, path: path, isAnchor: isAnchor, hash: url.hash };
        }).filter(Boolean);

        if (currentPath !== "/") {
            var best = null;
            items.forEach(function (it) {
                if (it.isAnchor || !it.path) return;
                if (currentPath === it.path || currentPath.indexOf(it.path + "/") === 0) {
                    if (!best || it.path.length > best.path.length) best = it;
                }
            });
            setActiveLi(best && best.li);
        }

        // =======================
        // ACTIVE theo ANCHOR (trang chủ) + Smooth scroll + Cập nhật URL hash
        // =======================
        if (currentPath === "/") {
            var SCROLL_TWEAK = 6;     // giảm bù trừ trên cùng khi scroll (0–10)
            var LEAD_SWITCH = 140;    // giữ "Trang Chủ" active cho tới khi còn cách #about ~140px

            // Gom các item anchor trên trang chủ thành danh sách section
            var sections = items
                .filter(function (it) { return it.isAnchor; })
                .map(function (it) {
                    var sec = document.querySelector(it.hash);
                    return sec ? Object.assign({}, it, { sec: sec }) : null;
                })
                .filter(Boolean);

            // Tìm li "Trang Chủ" (href='/')
            var homeItem = items.find(function (it) { return it.path === "/" && !it.isAnchor; });
            var homeLi = homeItem ? homeItem.li : null;

            // (Tuỳ bạn) id của phần "Về Chúng Tôi"
            var aboutEl = document.querySelector("#about"); // đổi nếu id bạn khác

            // Click anchor: xử lý cả "#id" và "/#id"
            $('.scroll-to-section a[href*="#"]:not([href="#"])')
                .off("click.anchorFix")
                .on("click.anchorFix", function (e) {
                    var raw = $(this).attr("href") || "";
                    var url; try { url = new URL(raw, location.href); } catch (_) { return; }
                    if (url.origin !== location.origin) return;

                    var targetPath = normPath(url.pathname);
                    var hash = url.hash; // ví dụ "#courses-box"

                    // đóng menu mobile nếu đang mở
                    var closeMobile = function () {
                        if ($(window).width() < 991) {
                            $(".menu-trigger").removeClass("active");
                            $(".header-area .nav").slideUp(200);
                        }
                    };

                    // Về trang chủ + có hash
                    if (targetPath === "/" && hash && hash.length > 1) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        closeMobile();

                        // đang ở trang con -> điều hướng để phần tử tồn tại
                        if (normPath(location.pathname) !== "/") {
                            window.location.href = "/" + hash;
                            return;
                        }

                        var $el = $(hash);
                        if ($el.length) {
                            var top = Math.max(0, $el.offset().top - (headerStickyH + SCROLL_TWEAK));
                            $("html,body").stop().animate({ scrollTop: top }, 600, "swing", function () {
                                history.replaceState(null, "", hash);
                            });
                            var liToActive = sections.find(function (it) { return it.hash === hash; });
                            setActiveLi(liToActive && liToActive.li);
                        }
                    }
                    // Anchor thuần "#id" khi đang ở trang chủ
                    else if (raw.charAt(0) === "#" && raw.length > 1) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        closeMobile();

                        var $el2 = $(raw);
                        if ($el2.length) {
                            var top2 = Math.max(0, $el2.offset().top - (headerStickyH + SCROLL_TWEAK));
                            $("html,body").stop().animate({ scrollTop: top2 }, 600, "swing", function () {
                                history.replaceState(null, "", raw);
                            });
                            var liToActive2 = sections.find(function (it) { return it.hash === raw; });
                            setActiveLi(liToActive2 && liToActive2.li);
                        }
                    }
                });

            // Cập nhật active theo vị trí scroll
            var onHomeScroll = function () {
                var y = window.scrollY + headerStickyH + 20;
                var cur = null;

                // 1) Gần đỉnh trang -> luôn active Trang Chủ
                if (window.scrollY <= 5) {
                    setActiveLi(homeLi);
                    return;
                }

                // 2) Nếu có #about: giữ Home active tới khi còn cách #about ~LEAD_SWITCH
                if (aboutEl) {
                    var aboutTop = Math.max(0, aboutEl.offsetTop - (headerStickyH + SCROLL_TWEAK));
                    if (window.scrollY < (aboutTop - LEAD_SWITCH)) {
                        setActiveLi(homeLi);
                        return;
                    }
                }

                // 3) Còn lại: active theo section đang hiển thị
                for (var i = 0; i < sections.length; i++) {
                    var it = sections[i];
                    var t = it.sec.offsetTop, b = t + it.sec.offsetHeight;
                    if (y >= t && y < b) { cur = it; break; }
                }
                setActiveLi(cur && cur.li);
            };

            window.addEventListener("scroll", onHomeScroll, { passive: true });
            onHomeScroll(); // khởi tạo
        }
    })();

})(window.jQuery);
