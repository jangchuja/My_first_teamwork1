document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;
    const threshold = 30; // 최소 스크롤 변화값

    // 페이지를 로드할 때 헤더를 보이게 설정
    header.classList.add("show");

    window.addEventListener("scroll", function () {
        const scrollDiff = Math.abs(window.scrollY - lastScrollY);

        if (scrollDiff > threshold) {
            if (window.scrollY > lastScrollY && window.scrollY > 0) {
                // 스크롤 다운
                header.classList.remove("show");
            } else if (window.scrollY < lastScrollY) {
                // 스크롤 업
                header.classList.add("show");
            }

            // 마지막 스크롤 위치 업데이트
            lastScrollY = window.scrollY;
        }
    });
});

$(document).ready(function(){
    $('.sticky-list').on('click', function(event) {
        event.preventDefault(); // 기본 링크 동작 방지
        var target = $(this).attr('href'); // 클릭한 링크의 href 속성 값
        $('html, body').animate({
            scrollTop: $(target).offset().top - 280 // 해당 ID로 스크롤, 150px 위로 조정
        }, 500); // 500ms 동안 애니메이션
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownContent = document.querySelector(".dropdown-content");

    // 버튼 클릭 시 드롭다운 토글
    dropdownButton.addEventListener("click", (event) => {
        event.stopPropagation(); // 이벤트 버블링 방지
        dropdownContent.style.display =
            dropdownContent.style.display === "block" ? "none" : "block";
    });

    // 화면 다른 곳을 클릭하면 드롭다운 닫기
    document.addEventListener("click", () => {
        dropdownContent.style.display = "none";
    });
});

