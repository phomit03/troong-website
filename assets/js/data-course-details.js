document.addEventListener('DOMContentLoaded', function () {
    // Dữ liệu khóa học
    const courses = {
        'pronunciation': {
            title: 'Khoá phát âm',
            table: [
                ['Khoá phát âm', 'Cơ bản', '5 buổi']
            ],
            outcomes: [
                'Nắm được cách phát âm các âm cơ bản trong tiếng Pháp',
                'Cải thiện ngữ điệu và nhấn trọng âm',
                'Thực hành giao tiếp cơ bản với phát âm rõ ràng'
            ]
        },
        'beginner': {
            title: 'Khoá sơ cấp',
            table: [
                ['A0 - A1.1', 'Nhập môn', '15 buổi'],
                ['A1.2 - A2.1', 'Cơ bản', '15 buổi']
            ],
            outcomes: [
                'Giao tiếp cơ bản trong 9 chủ đề thông dụng',
                'Giới thiệu bản thân và gia đình',
                'Hiểu và sử dụng các cấu trúc câu đơn giản'
            ]
        },
        'intermediate': {
            title: 'Khoá trung cấp',
            table: [
                ['nodata']
            ],
            outcomes: [
                'nodata'
            ]
        },
        'advanced': {
            title: 'Khoá nâng cao',
            table: [
                ['nodata']
            ],
            outcomes: [
                'nodata'
            ]
        },
        'master': {
            title: 'Khoá làm chủ',
            table: [
                ['nodata']
            ],
            outcomes: [
                'nodata'
            ]
        },
        // Thêm dữ liệu cho các khóa khác...
        'tcf': {
            title: 'Khoá ôn thi TCF',
            table: [
                ['A0 - A2', 'Cơ bản', '55 buổi'],
                ['A0 - B1', 'Trung cấp', '75 buổi'],
                ['A0 - B2', 'Nâng cao', '95 buổi']
            ],
            outcomes: [
                'Làm quen với cấu trúc đề thi TCF',
                'Nắm vững các kỹ năng làm bài',
                'Thực hành các dạng bài thi thực tế'
            ]
        }
        // Thêm các khóa học khác...
    };

    // Xử lý click nút khóa học
    document.querySelectorAll('.btn-course, .course-info').forEach(btn => {
        btn.addEventListener('click', function () {
            const courseId = this.dataset.course;
            const course = courses[courseId];

            if (!course) return;

            // Cập nhật modal title
            document.getElementById('courseModalTitle').textContent = course.title;

            // Điền bảng thông tin
            const tableBody = document.getElementById('courseTableBody');
            tableBody.innerHTML = '';
            course.table.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });

            // Điền kết quả đạt được
            const outcomesList = document.getElementById('courseOutcomes');
            outcomesList.innerHTML = '';
            course.outcomes.forEach(outcome => {
                const li = document.createElement('li');
                li.className = 'mb-2';
                li.innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${outcome}`;
                outcomesList.appendChild(li);
            });

            // Hiển thị modal
            const modal = new bootstrap.Modal(document.getElementById('courseModal'));
            modal.show();
        });
    });
});
