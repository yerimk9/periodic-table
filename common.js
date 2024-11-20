// 인기 리스트 나열
popularData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = item;
  $(".popularList").append(listItem);
});

// 주기율표 원소 나열
periodicTable.forEach((el, idx) => {
  const listItem = `
  <li class="element-item" data-type="${el.type}" data-number="${
    el.number
  }" style="background-color: ${colorTypes[el.type]}">
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
// 더보기 버튼
$(".moreBtn").on("click", function () {
  $(".desc-box").toggleClass("expanded");
  $(this).text($(this).text() === "더보기" ? "닫기" : "더보기");
});

// 모달 열기
$(".helpBtn, .periodic-table .element-item, .downBtn").on("click", function () {
  let targetModal;

  if ($(this).hasClass("element-item")) {
    targetModal = ".element-modal";

    const type = $(this).data("type");
    const number = $(this).data("number");
    const currentItem = periodicTable.find((el) => el.number == number);
    if (currentItem) {
      $(".element-modal .width-wrap").css("background", colorTypes[type]);
      $(".element-modal .width-wrap .intro .number").text(currentItem.number);
      $(".element-modal .width-wrap .intro h2").text(currentItem.symbol);
      $(".element-modal .width-wrap .intro h3").text(currentItem.name);
      $(".element-modal .width-wrap .intro .mass").text(currentItem.mass);
    }
  } else if ($(this).hasClass("downBtn")) {
    targetModal = ".download-modal";
  } else {
    targetModal = ".help-modal";
  }

  if ($(window).width() > 650) {
    $(targetModal).css({
      transition: "transform 0.5s ease",
      transform: "translate(-50%, -50%)",
    });
  } else {
    $(targetModal).css({
      transition: "transform 0.5s ease",
      transform: "initial",
    });
  }
});

// 모달 닫기
$(".help-modal .close, .element-modal .close, .download-modal .close").on(
  "click",
  function () {
    const targetModal = $(this).parents(".width-wrap").parent();

    if ($(window).width() > 650) {
      $(targetModal).css({
        transition: "transform 0.1s ease",
        transform: "translate(-50%, 100%)",
      });
    } else {
      $(targetModal).css({
        transition: "transform 0.1s ease",
        transform: "translate(0%, 100%)",
      });
    }
  }
);

// element-item 호버 시 selected-item 변경
$(".periodic-table .element-item").on("mouseenter", function () {
  const number = $(this).data("number");
  const currentItem = periodicTable.find((el) => el.number == number);

  if (currentItem) {
    $(".selected-zone .selected-item div:nth-child(1) .number").text(
      currentItem.number
    );
    $(".selected-zone .selected-item div:nth-child(1) .symbol").text(
      currentItem.symbol
    );
    $(".selected-zone .selected-item div:nth-child(1) .name").text(
      currentItem.name
    );
    $(".selected-zone .selected-item div:nth-child(1) .mass").text(
      currentItem.mass
    );
    $(".selected-zone .selected-item div:nth-child(1)").css(
      "background",
      colorTypes[currentItem.type]
    );
  }
});
