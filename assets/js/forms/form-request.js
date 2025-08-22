document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contact-form");
	const status = document.getElementById("form-status");
	let hideTimeout;

	form.addEventListener("submit", async function (e) {
		e.preventDefault();
		const data = new FormData(form);
		const action = form.action;

		// Xóa timeout cũ nếu có
		clearTimeout(hideTimeout);

		status.style.display = "block";
		status.className = "sending";
		status.textContent = "⏳ Đang gửi...";

		try {
			const response = await fetch(action, {
				method: "POST",
				body: data,
				headers: {'Accept': 'application/json'}
			});

			if (response.ok) {
				status.className = "success";
				status.textContent = "Cảm ơn bạn đã liên hệ! Thông tin đã được gửi thành công, chúng tôi sẽ phản hồi sớm nhất có thể. 💌";
				form.reset();
			} else {
				status.className = "error";
				status.textContent = "❌ Có lỗi xảy ra. Bạn vui lòng thử lại.";
			}
		} catch (error) {
			status.className = "error";
			status.textContent = "⚠️ Không thể gửi. Bạn vui lòng kiểm tra lại kết nối mạng.";
		}

		// Tự ẩn sau 6 giây
		hideTimeout = setTimeout(() => {
			status.style.display = "none";
		}, 5000);
	});
});

// thoi gian gui form
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contact-form");
	form.addEventListener("submit", function () {
		const now = new Date();
		// ví dụ: "13/08/2025 08:01 (GMT+07:00)"
		const tzOffsetMin = now.getTimezoneOffset();
		const sign = tzOffsetMin <= 0 ? "+" : "-";
		const absMin = Math.abs(tzOffsetMin);
		const hh = String(Math.floor(absMin / 60)).padStart(2, "0");
		const mm = String(absMin % 60).padStart(2, "0");
		const tz = `GMT${sign}${hh}:${mm}`;

		const s = now.toLocaleDateString(undefined, { day:"2-digit", month:"2-digit", year:"numeric" })
			+ " - " + now.toLocaleTimeString(undefined, { hour:"2-digit", minute:"2-digit" })
			+ ` (${tz})`;
		document.getElementById("_date").value = s;
	});
});