(function () {
	const header = document.querySelector(".header-area");
	const headerHeight = header ? header.offsetHeight : 0;
	const navItems = Array.from(document.querySelectorAll(".nav.nav-fx li.scroll-to-section"));

	if (!navItems.length) return;

	// Helper: set active cho li
	function setActiveLi(li) {
		navItems.forEach(item => item.classList.remove("active"));
		if (li) li.classList.add("active");
	}

	// Lắng nghe scroll
	window.addEventListener("scroll", () => {
		const scrollPos = window.scrollY + headerHeight + 20; // offset thêm 20px
		let currentLi = null;

		navItems.forEach(li => {
			const a = li.querySelector("a[href^='#']");
			if (!a) return;
			const id = a.getAttribute("href");
			if (!id || id.length < 2) return; // bỏ qua #
			const sec = document.querySelector(id);
			if (!sec) return;

			const top = sec.offsetTop;
			const bottom = top + sec.offsetHeight;

			if (scrollPos >= top && scrollPos < bottom) {
				currentLi = li;
			}
		});

		setActiveLi(currentLi);
	});

	// Khi click vào link menu thì active luôn (tránh delay)
	navItems.forEach(li => {
		const a = li.querySelector("a[href^='#']");
		if (!a) return;
		a.addEventListener("click", () => setActiveLi(li));
	});
})();
