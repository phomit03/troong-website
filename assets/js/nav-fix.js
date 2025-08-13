document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".nav.nav-fx li");

	function syncActiveClass() {
		navLinks.forEach(li => {
			const a = li.querySelector("a");
			if (a && a.classList.contains("active")) {
				li.classList.add("active");
			} else {
				li.classList.remove("active");
			}
		});
	}

	// Sync ngay lúc tải trang
	syncActiveClass();

	// Khi scroll, có thể active sẽ thay đổi → tiếp tục sync
	window.addEventListener("scroll", syncActiveClass);

	// Khi click menu cũng cần sync lại
	document.querySelectorAll(".nav.nav-fx li a").forEach(a => {
		a.addEventListener("click", () => {
			// Delay nhỏ để chờ Bootstrap xử lý trước
			setTimeout(syncActiveClass, 100);
		});
	});
});