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
      $(".element-modal").data("number", number);
      console.log(colorTypes[type]);
      $(".element-modal .width-wrap").css("background", colorTypes[type]);
      $(".element-modal .width-wrap .intro .number").text(currentItem.number);
      $(".element-modal .width-wrap .intro h2").text(currentItem.symbol);
      $(".element-modal .width-wrap .intro h3").text(currentItem.name);
      $(".element-modal .width-wrap .intro .mass").text(currentItem.mass);
    }
  } else if ($(this).hasClass("downBtn")) {
    targetModal = ".download-modal";

    $(".download-modal-bg").addClass("on");
    $("body").css("overflow", "hidden");
  } else {
    targetModal = ".help-modal";
  }

  if ($(window).width() > 650) {
    $(targetModal).css({
      transition: "all 0.5s ease",
      top: "auto",
      transform: "translate(0,0)",
    });
  } else {
    $(targetModal).css({
      transition: "all 0.5s ease",
    });
  }
});

// 모달 닫기
$(".help-modal .close, .element-modal .close, .download-modal .close").on(
  "click",
  function () {
    const targetModal = $(this).parents(".width-wrap").parent();

    if (targetModal.hasClass("download-modal")) {
      $(".download-modal-bg").removeClass("on");
      $("body").css("overflow", "auto");
    }

    if ($(window).width() > 650) {
      $(targetModal).css({
        top: "100%",
      });
    } else {
      $(targetModal).css({
        top: "100%",
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

// download 옵션 클릭시 지연 로딩
$("a.option").on({
  mouseenter: function () {
    $(this).addClass("on");
  },
  mouseleave: function () {
    $(this).removeClass("on");
  },
  click: function (e) {
    e.preventDefault();

    const downloadUrl = $(this).attr("href");
    const fileName = $(this).attr("download");
    $(this).addClass("loading");
    $(this).find(".loading").addClass("spinner");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      $(this).removeClass("loading");
      $(this).find(".loading").removeClass("spinner");
    }, 2000);
  },
});

// $(".element-modal").on("mousedown", function (e) {
//   const $currentModal = $(this);

//   let shiftX = e.clientX - $currentModal[0].getBoundingClientRect().left;
//   let shiftY =
//     e.clientY -
//     $currentModal[0].getBoundingClientRect().top +
//     $(".element-modal .modal-header").innerHeight() * 2.5;

//   console.log("clientY : " + e.clientY);
//   console.log(
//     "getBoundingClientRect : " + $currentModal[0].getBoundingClientRect().top
//   );
//   console.log(
//     "innerHeight : " + $(".element-modal .modal-header").innerHeight() * 2.5
//   );
//   console.log("screenY : " + e.screenY);

//   function moveAt(pageX, screenY) {
//     $currentModal.css({
//       transition: "none",
//       left: pageX - shiftX + "px",
//       top: screenY - shiftY + "px",
//     });
//   }
//   moveAt(e.pageX, e.screenY);

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.screenY);
//   }

//   $(document).on("mousemove", onMouseMove);

//   $currentModal.on("mouseup", function () {
//     $(document).off("mousemove", onMouseMove);
//     $currentModal.off("mouseup");
//   });
// });

// $(".element-modal").on("mousedown", function (e) {
//   $(".element-modal").data("moveX", e.screenX);
//   $(".element-modal").data("moveY", e.screenY);

//   function moveAt(pageX, screenY) {
//     $(".element-modal").css({
//       transform: `translate(${e.clientX - startX}px, ${e.clientY - startY}px)`,
//     });
//   }

//   const startX = $(".element-modal").data("startX");
//   const startY = $(".element-modal").data("startY");

//   $(document).on("mousemove", function (e) {
//     $(".element-modal").css({
//       transform: `translate(${e.clientX - startX}px, ${e.clientY - startY}px)`,
//     });
//   });

//   $currentModal.on("mouseup", function () {
//     $(document).off("mousemove", onMouseMove);
//     $currentModal.off("mouseup");
//   });
// });

//////////////////////////////////
// $(".element-modal").on("mousedown", function (e) {
//   $(".element-modal").data("startX", e.screenX);
//   $(".element-modal").data("startY", e.screenY);

//   const startX = $(".element-modal").data("startX");
//   const startY = $(".element-modal").data("startY");

//   function moveAt() {
//     $(".element-modal").css({
//       transition: "none",
//       transform: `translate(${e.screenX - Number(startX)}px, ${
//         e.screenY - Number(startY)
//       }px)`,
//     });

//     console.log(
//       "1. " +
//         (e.screenX - Number(startX)) +
//         " : " +
//         (e.screenY - Number(startY))
//     );
//   }
//   moveAt();

//   function onMouseMove(e) {
//     $(".element-modal").css({
//       transition: "none",
//       transform: `translate(${e.screenX - Number(startX)}px, ${
//         e.screenY - Number(startY)
//       }px)`,
//     });

//     console.log(
//       "2. " +
//         (e.screenX - Number(startX)) +
//         " : " +
//         (e.screenY - Number(startY))
//     );
//   }
//   $(document).on("mousemove", onMouseMove);

//   // $(document).on("mousemove", function (e) {
//   //   $(".element-modal").css({
//   //     transform: `translate(${e.screenX - startX}px, ${e.screenY - startY}px)`,
//   //   });
//   // });

//   $(".element-modal").on("mouseup", function () {
//     $(document).off("mousemove", onMouseMove);
//     $(".element-modal").off("mouseup");
//   });
// });
//////////////////////////////////

$(".element-modal").on("mousedown", function (e) {
  // 마우스 다운 시 시작 좌표 설정
  const startX = e.screenX;
  const startY = e.screenY;

  // 요소의 현재 위치 저장
  const element = $(this);
  const currentTransform = element.css("transform");

  // 기존 위치 값 계산 (matrix 값을 파싱)
  let [offsetX, offsetY] = [0, 0];
  if (currentTransform && currentTransform !== "none") {
    const matrix = currentTransform
      .replace("matrix(", "")
      .replace(")", "")
      .split(", ");
    offsetX = parseFloat(matrix[4]); // x축 변환 값
    offsetY = parseFloat(matrix[5]); // y축 변환 값
  }

  // 마우스 이동 이벤트
  function onMouseMove(e) {
    const deltaX = e.screenX - startX;
    const deltaY = e.screenY - startY;

    element.css({
      transition: "none",
      transform: `translate(${offsetX + deltaX}px, ${offsetY + deltaY}px)`,
    });
  }

  // 문서에 마우스 이동 이벤트 연결
  $(document).on("mousemove", onMouseMove);

  // 마우스 업 이벤트 처리
  $(document).on("mouseup", function () {
    $(document).off("mousemove", onMouseMove); // 이동 이벤트 해제
    $(document).off("mouseup"); // 업 이벤트 해제
  });
});

// $(".element-modal").on({
//   mousedown: function (e) {
//     $(".element-modal").attr("data-startX", e.clientX);
//     $(".element-modal").attr("data-startY", e.clientY);
//   },
//   mousemove: function (e) {
//     $(".element-modal").attr("data-moveX", e.screenX);
//     $(".element-modal").attr("data-moveY", e.screenY);

//     const startX = $(".element-modal").data("startX");
//     const startY = $(".element-modal").data("startY");

//     $(".element-modal").css({
//       transform: `translate(${e.clientX - startX}px, ${e.clientY - startY}px)`,
//     });
//   },
//   mouseup: function (e) {
//     $(".element-modal").attr("data-endX", e.screenX);
//     $(".element-modal").attr("data-endY", e.screenY);
//   },
// });
