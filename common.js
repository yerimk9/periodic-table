// 인기 리스트 나열
popularData.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = item;
  $(".popularList").append(listItem);
});

// 주기율표 원소 나열

periodicTable.forEach((el, idx) => {
  const listItem = `
  <li class="element-item" 
      data-type="${el.type}" 
      data-number="${el.number}" 
      style="
        background-color: ${colorTypes[el.type]};
          animation-delay: ${Math.random() * 2 + 2}s;
      ">
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
      top: "0%",
    });
    $(targetModal).closest(".modal-wrap").css("top", "10%");
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

// modal 이동 구현
$(".element-modal, .help-modal").on("mousedown", function (e) {
  if ($(window).width() >= 650) {
    const startX = e.screenX;
    const startY = e.screenY;

    const element = $(this);
    const currentTransform = element.css("transform");

    let [offsetX, offsetY] = [0, 0];
    if (currentTransform && currentTransform !== "none") {
      const matrix = currentTransform
        .replace("matrix(", "")
        .replace(")", "")
        .split(", ");
      offsetX = parseFloat(matrix[4]);
      offsetY = parseFloat(matrix[5]);
    }

    function onMouseMove(e) {
      const deltaX = e.screenX - startX;
      const deltaY = e.screenY - startY;

      element.css({
        transition: "none",
        transform: `translate(${offsetX + deltaX}px, ${offsetY + deltaY}px)`,
      });
    }

    $(document).on("mousemove", onMouseMove);

    $(document).on("mouseup", function () {
      $(document).off("mousemove", onMouseMove);
      $(document).off("mouseup");
    });
  }
});

// modal이 화면 밖으로 탈출 시 잡아오기
$(".element-modal, .help-modal").on("mouseup", function (e) {
  const screenWidth = $(window).width();
  const screenHeight = $(window).height();

  const top = $(this)[0].getBoundingClientRect().top;
  const left = $(this)[0].getBoundingClientRect().left;
  const bottom = $(this)[0].getBoundingClientRect().bottom;
  const right = $(this)[0].getBoundingClientRect().right;
  const width = $(this)[0].getBoundingClientRect().width;
  const height = $(this)[0].getBoundingClientRect().height;
  console.log(
    `top: ${top}, left: ${left}, bottom: ${bottom}, right: ${right}, width: ${width}, height: ${height}`
  );

  if (
    top < -100 ||
    left < -100 ||
    bottom > screenHeight + 100 ||
    right > screenWidth + 100
  ) {
    $(this).css({
      transition: "transform 0.3s ease",
      transform: "translate(0, 0)",
    });
  } else {
    $(this).css({
      transition: "none",
    });
  }
});

window.onload = function () {
  $("#loader").css("display", "flex");
  $("#loader .item:nth-of-type(1)").css({
    top: "-40%",
  });
  $("#loader .item:nth-of-type(2)").css({
    top: "40%",
  });
  $("body").css("overflow", "hidden");
  setTimeout(function () {
    $("#loader").css("display", "none");
    $("body").css("overflow", "auto");
  }, 2000);
};
