<?php
include_once("_header.php");
?>


<div id="loader">
  <div class="item">
    <span class="number">35</span>
    <p class="symbol">Br</p>
    <p class="name">Bromine</p>
    <span class="mass">79.904</span>
  </div>
  <div class="item">
    <span class="number">56</span>
    <p class="symbol">Ba</p>
    <p class="name">Barium</p>
    <span class="mass">137.327</span>
  </div>
</div>


<section class="main">
  <div class="width-wrap">

    <div class="search-wrap">
      <input type="text" placeholder="화학식 또는 반응식을 입력하세요">
      <div class="popular">
        <p>Popular</p>
        <div>
          <ul class="popularList"></ul>
        </div>
      </div>
      <button type="button" class="helpBtn">
        <img src="/img/icon/icon-help.svg" alt="사용법 보기">
      </button>
    </div>

    <div class="selected-zone">
      <div class="selected-item">
        <div>
          <span class="number">1</span>
          <p class="symbol">H</p>
          <p class="name">Hydrogen</p>
          <span class="mass">1.008</span>
        </div>
        <div>
          <p>Alkaline Earth Metal</p>
          <p>Atomic weight<span>12.011</span></p>
          <p>Melting point<span>3550 °C</span></p>
          <p>Boiling point<span>4000 °C</span></p>
          <p>Density<span>2.7 g/cm3</span></p>
        </div>
      </div>
      <div class="switch-tools">
        <div>
          <button type="button" class="js-colors active">
            <img src="/img/icon/icon-palette.png" alt="Colors" width="32" height="32">
            Colors
          </button>
          <button type="button" class="js-photos">
            <img src="/img/icon/icon-ruby.png" alt="Photos" width="32" height="32">
            Photos
          </button>
        </div>
        <button type="button" class="js-heatmaps">
          <img src="/img/icon/icon-heatmaps.png" alt="Heatmaps" width="32" height="32">
          Heatmaps
        </button>
      </div>
    </div>

    <ul class="periodic-table"></ul>

  </div>
</section>


<div class="info">
  <div class="width-wrap">
    <section class="element-type">
      <h2>원소 유형</h2>
      <ul>
        <li data-type="Alkali Metal"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%95%8C%EC%B9%BC%EB%A6%AC_%EA%B8%88%EC%86%8D" target="_blank">알칼리 금속</a></li>
        <li data-type="Poor Metal"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9D%B4%ED%9B%84_%EA%B8%88%EC%86%8D" target="_blank">전이후 금속</a></li>
        <li data-type="Noble Gas"><span></span><a href="https://ko.wikipedia.org/wiki/%EB%B9%84%ED%99%9C%EC%84%B1_%EA%B8%B0%EC%B2%B4" target="_blank">비활성 기체</a></li>
        <li data-type="Alkaline Earth Metal"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%95%8C%EC%B9%BC%EB%A6%AC_%ED%86%A0%EA%B8%88%EC%86%8D" target="_blank">알칼리 토금속</a></li>
        <li data-type="Nonmetal"><span></span><a href="https://ko.wikipedia.org/wiki/%EB%B9%84%EA%B8%88%EC%86%8D" target="_blank">비금속</a></li>
        <li data-type="Lanthanide"><span></span><a href="https://ko.wikipedia.org/wiki/%EB%9E%80%ED%83%80%EB%84%98%EC%A1%B1" target="_blank">란타넘족 원소</a></li>
        <li data-type="Metalloid"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%A4%80%EA%B8%88%EC%86%8D" target="_blank">준금속</a></li>
        <li data-type="Chalcogen"><span></span><a href="https://ko.wikipedia.org/wiki/16%EC%A1%B1_%EC%9B%90%EC%86%8C" target="_blank">칼코젠</a></li>
        <li data-type="Actinide"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%95%85%ED%8B%B0%EB%8A%84%EC%A1%B1" target="_blank">악티늄족 원소</a></li>
        <li data-type="Transition Metal"><span></span><a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9D%B4_%EA%B8%88%EC%86%8D" target="_blank">전이 금속</a></li>
        <li data-type="Halogen"><span></span><a href="https://ko.wikipedia.org/wiki/%ED%95%A0%EB%A1%9C%EC%A0%A0" target="_blank">할로젠</a></li>
      </ul>
    </section>
    <section class="mobile-app">
      <h2>모바일 앱</h2>
      <p>Talbica 3: Periodic Table은 iOS와 Android를 지원하며,<br /> 모바일 브라우저에서도 접근할 수 있습니다.</p>
      <a href="https://apps.apple.com/us/app/talbica-3-periodic-table/id1488116634" target="_blank">
        <img src="/img/icon/appstore.png" alt="appstore" width="178" height="52">
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.andrewmarcus.talbica" target="_blank">
        <img src="/img/icon/googleplay.png" alt="googleplay" width="178" height="52">
      </a>
    </section>
    <section class="element-glossary">
      <h2>원소 용어</h2>
      <ul>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9B%90%EC%9E%90_%EB%B2%88%ED%98%B8" target="_blank">원자 번호</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%ED%80%B4%EB%A6%AC_%EC%98%A8%EB%8F%84" target="_blank">퀴리 온도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9C%B5%ED%95%B4%EC%97%B4" target="_blank">융해열</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Neutron_cross_section" target="_blank">중성자 단면</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Spectral_line" target="_blank">스펙트럼 선</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9B%90%EC%9E%90_%EB%B0%98%EC%A7%80%EB%A6%84" target="_blank">원자 반지름</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%B0%80%EB%8F%84" target="_blank">밀도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EA%B8%B0%ED%99%94%EC%97%B4" target="_blank">기화열</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A4%91%EC%84%B1%EC%9E%90_%ED%8F%AC%ED%9A%8D" target="_blank">중성자 포획</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%ED%95%AD%EA%B8%B0%ED%98%B8" target="_blank">항기호</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%83%81%EB%8C%80_%EC%9B%90%EC%9E%90_%EC%A7%88%EB%9F%89" target="_blank">상대 원자 질량</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9E%90_%EC%B9%9C%ED%99%94%EB%8F%84" target="_blank">전자 친화도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%98%A8%ED%99%94_%EC%97%90%EB%84%88%EC%A7%80" target="_blank">이온화 에너지</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%82%B0%ED%99%94%EC%88%98" target="_blank">산화수</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%97%B4%EC%A0%84%EB%8F%84%EC%9C%A8" target="_blank">열전도율</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EA%B5%AC%EC%97%AD_(%EC%A3%BC%EA%B8%B0%EC%9C%A8%ED%91%9C)" target="_blank">구역 (주기율표)</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EA%B8%B0_%EC%9D%8C%EC%84%B1%EB%8F%84" target="_blank">전기 음성도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%8F%99%EC%9C%84_%EC%9B%90%EC%86%8C" target="_blank">동위 원소</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A3%BC%EA%B8%B0_(%EC%A3%BC%EA%B8%B0%EC%9C%A8%ED%91%9C)" target="_blank">주기 (주기율표)</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%97%B4%ED%8C%BD%EC%B0%BD" target="_blank">열팽창</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%81%93%EB%8A%94%EC%A0%90" target="_blank">끓는점</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9E%90_%EB%B0%B0%EC%97%B4" target="_blank">전자 배열</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A7%88%EB%9F%89%EC%88%98" target="_blank">질량수</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%ED%91%B8%EC%95%84%EC%86%A1_%EB%B9%84" target="_blank">푸아송 비</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9B%90%EC%9E%90%EA%B0%80" target="_blank">원자가</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity" target="_blank">전기 저항률 및 전도도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%A1%B1_(%EC%A3%BC%EA%B8%B0%EC%9C%A8%ED%91%9C)" target="_blank">족 (주기율표)</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%85%B9%EB%8A%94%EC%A0%90" target="_blank">녹는점</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Electrical_resistivity_and_conductivity" target="_blank">전기 저항률 및 전도도</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%B0%98%EB%8D%B0%EB%A5%B4%EB%B0%9C%EC%8A%A4_%EB%B0%98%EC%A7%80%EB%A6%84" target="_blank">반데르발스 반지름</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EA%B3%B5%EC%9C%A0_%EB%B0%98%EC%A7%80%EB%A6%84" target="_blank">공유 반지름</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%B0%98%EA%B0%90%EA%B8%B0" target="_blank">반감기</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%ED%83%84%EC%84%B1%EB%A5%A0" target="_blank">탄성률</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EC%9D%8C%EC%86%8D" target="_blank">음속</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EA%B2%B0%EC%A0%95_%EA%B5%AC%EC%A1%B0" target="_blank">결정 구조</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EA%B5%B3%EA%B8%B0" target="_blank">굳기</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%AA%B0%EB%B6%80%ED%94%BC" target="_blank">몰부피</a></li>
        <li><a href="https://ko.wikipedia.org/wiki/%EB%B9%84%EC%97%B4%EC%9A%A9%EB%9F%89" target="_blank">비열용량</a></li>
      </ul>
    </section>
  </div>
</div>


<!-- help-modal -->
<div class="modal-wrap">
  <div class="help-modal">
    <div class="width-wrap small">
      <div class="modal-header">
        <img src="/img/icon/icon-close.svg" alt="close" class="close">
      </div>

      <h2>스마트 필드 사용</h2>

      <section>
        <h3>스마트 입력</h3>
        <p>Talbica는 스마트 입력 기능을 제공합니다. 각 요소를 대문자로 입력하기 위해 "Shift"를 누를 필요가 없습니다. "naoh"만 입력하면 Talbica가 "NaOH"로 인식합니다.</p>
        <img src="/img/modal/help-1.png" alt="help-1">
        <p>만약 어떤 이유로 Cobalt(Co)를 다른 물질과 반응시켜야 하는데, Talbica가 고집스럽게 Carbon monoxide(CO)를 입력하면, "CO"를 입력한 후 "Backspace"를 누르고 "O"를 다시 입력하면 됩니다. 이렇게 하면 입력 모드가 전환됩니다.</p>
        <img src="/img/modal/help-2.png" alt="help-2">
      </section>
      <section>
        <h3>복합 정보</h3>
        <p>검색 필드에 화합물 화학식을 입력하세요. 오른쪽에 "Show info" 버튼이 나타납니다.</p>
        <img src="/img/modal/help-3.png" alt="help-3">
        <p>화합물에 대해 자세히 알아보려면 "Show info"를 클릭하거나 "Enter"을 누르면 정보 카드가 열립니다.</p>
        <img src="/img/modal/help-4.png" alt="help-4">
        <p>"Enter"를 다시 눌러 정보 카드를 숨기고 화학 반응 목록으로 전환합니다."Escape"를 누르거나 "Hide info"를 클릭하여 카드만 숨깁니다.</p>
      </section>
      <section>
        <h3>반응 참조</h3>
        <p>검색 필드에 화합물 화학식을 입력합니다.반응 목록이 드롭다운되고 두 부분으로나뉩니다.왼쪽은 반응물(화합물)이고 오른쪽은 생성물입니다.각 반응에서 화합물은 파란색으로 강조 표시됩니다.</p>
        <img src="/img/modal/help-5.png" alt="help-5">
        <p>반응을 클릭하여 열거나 키보드 화살표를 사용하여 목록을 탐색하고 "Enter"를 눌러 엽니다.그러면 반응의 균형 방정식이 열리고 정보 카드가 열립니다.각 반응에는 반응 유형, 반응물 및 생성물의 텍스트 이름, 온도 및 압력과 같은 조건을 포함한 짧은 설명이 있습니다. 반응하는 화합물의 속성은 동일한 카드에서 볼 수 있습니다.</p>
        <img src="/img/modal/help-6.png" alt="help-6">
      </section>
      <section>
        <h3>반응 해결</h3>
        <p>화학 반응의 왼쪽 부분을 입력하세요. Talbica의 데이터베이스에는 6000개의 반응이 있습니다. 반응이 데이터베이스에 있는 경우 오른쪽에 "Solve" 버튼이 표시됩니다.</p>
        <img src="/img/modal/help-7.png" alt="help-7">
        <p>클릭하여 반응의 올바른 부분을 가져옵니다.</p>
        <img src="/img/modal/help-8.png" alt="help-8">
      </section>
      <section>
        <h3>균형 방정식</h3>
        <p>Talbica는 약 6000개의 반응을 알고 있습니다. 반응이 데이터베이스에 없으면 정보가 표시되지 않습니다. 하지만 방정식의 균형을 맞출 수 있습니다.</p>
        <p>검색 필드에 알 수 없는 반응을 입력합니다. 오른쪽에 "Balance" 버튼이 나타납니다. 클릭하거나 "Enter"를 누릅니다.</p>
        <img src="/img/modal/help-9.png" alt="help-9">
        <p>이렇게 하면 수학적 방법을 사용하여 방정식의 균형을 맞출 수 있습니다.</p>
        <img src="/img/modal/help-10.png" alt="help-10">
      </section>
      <section>
        <h3>이름으로 검색</h3>
        <p>검색 필드에 화합물 이름을 입력합니다. 화합물이 발견되면 Talbica는 그 이름과 화학식을 표시합니다.</p>
        <img src="/img/modal/help-11.png" alt="help-11">
        <p>탭을 눌러 화합물 이름을 화학식으로 대체하고 작업을 계속하세요.</p>
        <img src="/img/modal/help-12.png" alt="help-12">
      </section>
    </div>
  </div>
</div>

<!-- element-modal -->
<div class="modal-wrap">
  <div class="element-modal">
    <div class="width-wrap small">

      <div class="modal-header">
        <div class="mode-switch">
          <button type="button" class="info-mode active">정보</button>
          <button type="button" class="photo-mode">사진</button>
        </div>
        <img src="/img/icon/icon-close.svg" alt="close" class="close">
      </div>


      <section class="intro">
        <p class="number">1</p>
        <h2>H</h2>
        <h3>Hydrogen</h3>
        <p class="mass">1.008</p>
        <div class="desc-box">
          <p class="desc">Hydrogen is the chemical element with the symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass. Non–remnant stars are mainly composed of hydrogen in the plasma state. The most common isotope of hydrogen, termed protium (name rarely used, symbol 1H), has one proton and no neutrons.
          </p>
        </div>
        <button type="button" class="moreBtn">더보기</button>
      </section>
      <section style="height: 1000px">

      </section>

    </div>

  </div>
</div>

<!-- download-modal -->
<div class="download-modal-bg">
  <div class="download-modal">
    <div class="width-wrap mid">

      <div class="modal-header">
        <img src="/img/icon/icon-close.svg" alt="close" class="close">
      </div>

      <section>
        <h2>다운로드 및 인쇄</h2>
        <p>인쇄할 용지 크기를 선택하세요. Talbica는 주기율표의 .png 파일을 생성합니다. 오래된 모니터에서는 제대로 작동하지 않을 수 있습니다.
        </p>

        <div class="download-options">
          <a class="option" download="Talbica-A4.png" href="/img/download/Talbica-A4.png">
            <div class="size">A4</div>
            <div class="dimension">297×210 mm</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-A3.png" href="/img/download/Talbica-A3.png">
            <div class="size">A3</div>
            <div class="dimension">420×297 mm</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-A2.png" href="/img/download/Talbica-A2.png">
            <div class="size">A2</div>
            <div class="dimension">594×420 mm</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-A1.png" href="/img/download/Talbica-A1.png">
            <div class="size">A1</div>
            <div class="dimension">841×594 mm</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-A0.png" href="/img/download/Talbica-A0.png">
            <div class="size">A0</div>
            <div class="dimension">1189×841 mm</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-Letter.png" href="/img/download/Talbica-Letter.png">
            <div class="size">Letter</div>
            <div class="dimension">11×8 in</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-Legal.png" href="/img/download//Talbica-Legal.png">
            <div class="size">Legal</div>
            <div class="dimension">14×8 in</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
          <a class="option" download="Talbica-Tabloid.png" href="/img/download/Talbica-Tabloid.png">
            <div class="size">Tabloid</div>
            <div class="dimension">17×11 in</div>
            <div class="loading"></div>
            <div class="img"></div>
          </a>
        </div>
      </section>

    </div>
  </div>
</div>


<?php
include_once("_footer.php");
?>