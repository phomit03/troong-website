document.addEventListener('DOMContentLoaded', function () {
	const rocket = document.querySelector('.course-rocket');
	const buttons = document.querySelectorAll('.btn-course');
	const courseModal = document.getElementById('courseModal');
	let currentCourse = null;
	let modalInstance = null;
	let isModalTransitioning = false; // Thêm biến cờ trạng thái

	const courseLevels = {
		'pronunciation': '20%',
		'beginner': '40%',
		'intermediate': '60%',
		'advanced': '80%',
		'master': '100%',

		'tcf': '33.3%',
		'tef': '66.6%',
		'delf': '99.9%'
	};

	function flyRocket(courseType) {
		if (isModalTransitioning) return;

		const height = courseLevels[courseType] || '50%';
		rocket.style.transition = 'transform 0.5s ease-out';
		rocket.style.zIndex = '1000';
		rocket.style.transform = `translateX(-50%) translateY(calc(-1 * ${height}))`;
		rocket.classList.add('rocket-flying');
		rocket.setAttribute('data-fire', 'on');
	}

	function resetRocket() {
		rocket.style.transition = 'transform 0.5s ease-in';
		rocket.style.transform = 'translateX(-50%)';
		rocket.removeAttribute('data-fire');

		setTimeout(() => {
			if (!currentCourse && !isModalTransitioning) {
				rocket.classList.remove('rocket-flying');
				rocket.style.zIndex = '10';
				rocket.style.transition = '';
			}
		}, 500);
	}

	function cleanupModal() {
		const backdrops = document.querySelectorAll('.modal-backdrop');
		backdrops.forEach(backdrop => backdrop.remove());
		document.body.classList.remove('modal-open');
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	}

	buttons.forEach(button => {
		button.addEventListener('mouseenter', () => {
			if (!currentCourse && !isModalTransitioning) {
				flyRocket(button.dataset.course);
			}
		});

		button.addEventListener('mouseleave', () => {
			if (!currentCourse && !isModalTransitioning) {
				resetRocket();
			}
		});

		button.addEventListener('click', function () {
			if (isModalTransitioning) return;

			const clickedCourse = button.dataset.course;
			isModalTransitioning = true;

			// Đóng modal hiện tại nếu có
			if (modalInstance) {
				modalInstance.hide();

				// Giữ rocket ở vị trí cũ trong khi chuyển đổi
				setTimeout(() => {
					cleanupModal();
					currentCourse = clickedCourse;
					flyRocket(currentCourse);
					openModal();
				}, 100);
			} else {
				currentCourse = clickedCourse;
				flyRocket(currentCourse);
				openModal();
			}
		});
	});

	function openModal() {
		modalInstance = new bootstrap.Modal(courseModal);

		const handleModalClose = () => {
			setTimeout(() => {
				resetRocket();
				currentCourse = null;
				cleanupModal();
				courseModal.removeEventListener('hidden.bs.modal', handleModalClose);
				isModalTransitioning = false;
			}, 300);
		};

		courseModal.addEventListener('hidden.bs.modal', handleModalClose);

		modalInstance.show();
		isModalTransitioning = false;
	}
});