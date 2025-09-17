document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".news-item");
    let loadMoreBtn = document.getElementById("loadMore");
    let itemsPerPage = 6; // số box hiển thị ban đầu
    let currentItems = itemsPerPage;

    // Ẩn các box ngoài itemsPerPage
    items.forEach((item, index) => {
        if (index >= itemsPerPage) {
            item.style.display = "none";
        }
    });

    loadMoreBtn.addEventListener("click", function () {
        let nextItems = currentItems + itemsPerPage;
        for (let i = currentItems; i < nextItems && i < items.length; i++) {
            items[i].style.display = "block";
        }
        currentItems += itemsPerPage;

        // Ẩn nút nếu không còn tin để load
        if (currentItems >= items.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});