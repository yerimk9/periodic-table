// 인기 리스트 나열
popularData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = item;
  $(".popularList").append(listItem);
});

// 주기율표 원소 나열
periodicTable.forEach((el, idx) => {
  const listItem = `
  <li class="element-item" data-type="${el.type}" style="background-color: ${
    colorTypes[el.type]
  }">
    <span class="number">${el.number}</span>
    <p class="symbol">${el.symbol}</p>
    <p class="name">${el.name}</p>
    <p class="mass">${el.mass}</p>
  </li>
  `;

  $(".periodic-table").append(listItem);
});

// 원소 유형에 따른 배경 색상 적용
const element = $(".element-type ul  li");
element.each((_, el) => {
  const $el = $(el);
  const dataType = $el.data("type");

  if (colorTypes[dataType]) {
    const span = $el.find("span");
    span.css("background-color", colorTypes[dataType]);
  }
});

// 다크모드 토글
$(".toggleBtn").on("click", function () {
  const toggleBtnImg = $(".toggleBtn img");
  const currentSrc = toggleBtnImg.attr("src");
  const helpBtnImg = $(".helpBtn img");
  console.log(helpBtnImg);

  $(".toggleBtn").css("transform", "scale(0)");

  setTimeout(function () {
    if (currentSrc === "/img/icon/icon-sun.svg") {
      toggleBtnImg.attr("src", "/img/icon/icon-moon.svg");
      toggleBtnImg.attr("alt", "다크 모드");
    } else {
      toggleBtnImg.attr("src", "/img/icon/icon-sun.svg");
      toggleBtnImg.attr("alt", "라이트 모드");
    }

    $("html").toggleClass("dark-mode");
    $(".toggleBtn").css("transform", "scale(1)");
  }, 300);
});

// 사용자 환경 테마에 따른 초기 테마
const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
if (prefersDarkScheme) {
  $("html").toggleClass("dark-mode");
}
