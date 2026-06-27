<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>0~36개월 육아템 심리테스트</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #fff8ee;
      color: #2d2d2d;
    }

    .page {
      max-width: 1040px;
      margin: 0 auto;
      padding: 28px 16px 70px;
    }

    .hero {
      background: linear-gradient(135deg, #ffe2b8, #fff2db);
      border-radius: 30px;
      padding: 38px 22px;
      text-align: center;
      box-shadow: 0 14px 34px rgba(196, 132, 44, 0.16);
    }

    .badge {
      display: inline-block;
      background: #ffffff;
      color: #e07900;
      font-size: 14px;
      font-weight: 900;
      padding: 8px 15px;
      border-radius: 999px;
      margin-bottom: 14px;
    }

    h1 {
      margin: 0;
      font-size: 34px;
      line-height: 1.25;
      word-break: keep-all;
    }

    .hero p {
      margin: 14px 0 0;
      color: #6b5943;
      font-size: 17px;
      line-height: 1.6;
      word-break: keep-all;
    }

    .box {
      margin-top: 26px;
      background: #ffffff;
      border-radius: 28px;
      padding: 24px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }

    .step {
      margin-bottom: 30px;
    }

    .step:last-child {
      margin-bottom: 0;
    }

    .step-title {
      margin: 0 0 14px;
      font-size: 20px;
      font-weight: 900;
    }

    .step-desc {
      margin: -6px 0 15px;
      color: #756a5d;
      line-height: 1.5;
      font-size: 14px;
    }

    .options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 12px;
    }

    .option-btn {
      min-height: 66px;
      border: 2px solid #f0deca;
      background: #fffaf4;
      border-radius: 18px;
      padding: 14px 12px;
      font-size: 16px;
      font-weight: 900;
      cursor: pointer;
      transition: 0.18s;
      word-break: keep-all;
    }

    .option-btn:hover {
      transform: translateY(-2px);
      border-color: #ffb15a;
    }

    .option-btn.active {
      background: #ff9824;
      color: #ffffff;
      border-color: #ff9824;
      box-shadow: 0 9px 20px rgba(255, 152, 36, 0.34);
    }

    .helper {
      display: none;
      margin-top: 18px;
      background: #fff3df;
      color: #76501e;
      border-radius: 18px;
      padding: 16px;
      text-align: center;
      font-weight: 800;
      line-height: 1.5;
    }

    .helper.show {
      display: block;
    }

    .result {
      display: none;
      margin-top: 28px;
      background: #ffffff;
      border-radius: 28px;
      padding: 26px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    }

    .result.show {
      display: block;
    }

    .result-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 18px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }

    .result h2 {
      margin: 0;
      font-size: 26px;
      line-height: 1.35;
      word-break: keep-all;
    }

    .result-summary {
      margin: 9px 0 0;
      color: #6b6258;
      line-height: 1.6;
      word-break: keep-all;
    }

    .reset-btn {
      border: none;
      background: #f1f1f1;
      color: #333333;
      border-radius: 999px;
      padding: 11px 16px;
      font-weight: 900;
      cursor: pointer;
    }

    .type-card {
      margin: 18px 0;
      background: #fff6e9;
      border: 1px solid #ffe0b8;
      border-radius: 22px;
      padding: 18px;
    }

    .type-card strong {
      display: block;
      font-size: 20px;
      margin-bottom: 8px;
    }

    .type-card p {
      margin: 0;
      color: #6e552f;
      line-height: 1.6;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 16px;
      margin-top: 18px;
    }

    .product-card {
      border: 1px solid #f0e1cf;
      background: #fffdf9;
      border-radius: 22px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      min-height: 260px;
    }

    .tag {
      width: fit-content;
      display: inline-block;
      background: #fff0d8;
      color: #b86600;
      border-radius: 999px;
      padding: 6px 10px;
      font-size: 13px;
      font-weight: 900;
      margin-bottom: 12px;
    }

    .product-card h3 {
      margin: 0;
      font-size: 20px;
      line-height: 1.35;
      word-break: keep-all;
    }

    .product-card p {
      flex: 1;
      color: #625a51;
      margin: 10px 0 16px;
      font-size: 15px;
      line-height: 1.55;
      word-break: keep-all;
    }

    .meta {
      color: #9a866d;
      font-size: 13px;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .coupang-btn {
      display: block;
      text-decoration: none;
      text-align: center;
      background: #111111;
      color: #ffffff;
      border-radius: 14px;
      padding: 13px 12px;
      font-weight: 900;
      transition: 0.18s;
      border: none;
      font-size: 15px;
      cursor: pointer;
    }

    .coupang-btn:hover {
      background: #ff6f00;
      transform: translateY(-2px);
    }

    .coupang-btn.disabled {
      background: #d1d1d1;
      color: #666666;
      cursor: not-allowed;
    }

    .coupang-btn.disabled:hover {
      background: #d1d1d1;
      transform: none;
    }

    .notice {
      margin-top: 22px;
      background: #fff4e5;
      color: #6b4d25;
      border-radius: 18px;
      padding: 16px;
      font-size: 14px;
      line-height: 1.6;
    }

    .admin-box {
      margin-top: 24px;
      background: #f7f7f7;
      border-radius: 22px;
      padding: 18px;
      color: #555555;
      font-size: 14px;
      line-height: 1.55;
    }

    .admin-box h3 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #333333;
    }

    .admin-box code {
      background: #ffffff;
      padding: 2px 5px;
      border-radius: 6px;
      color: #c76300;
    }

    @media (max-width: 640px) {
      .page {
        padding: 20px 13px 60px;
      }

      .hero {
        padding: 30px 18px;
      }

      h1 {
        font-size: 27px;
      }

      .box,
      .result {
        padding: 20px;
      }

      .options {
        grid-template-columns: repeat(2, 1fr);
      }

      .option-btn {
        min-height: 62px;
        font-size: 15px;
      }
    }
  </style>
</head>

<body>
  <main class="page">
    <section class="hero">
      <div class="badge">0~36개월 육아용품 심리테스트</div>
      <h1>우리 아기, 지금 뭐 준비해야 할까?</h1>
      <p>
        아이 월령과 지금 힘든 상황을 고르면<br />
        지금 필요한 육아템을 맞춤으로 추천해드려요.
      </p>
    </section>

    <section class="box">
      <div class="step">
        <h2 class="step-title">1. 아이 월령을 선택해주세요</h2>
        <p class="step-desc">개월 수에 따라 필요한 육아용품이 크게 달라져요.</p>
        <div class="options" id="ageOptions">
          <button class="option-btn" data-age="m0_3">0~3개월</button>
          <button class="option-btn" data-age="m4_6">4~6개월</button>
          <button class="option-btn" data-age="m7_12">7~12개월</button>
          <button class="option-btn" data-age="m13_18">13~18개월</button>
          <button class="option-btn" data-age="m19_24">19~24개월</button>
          <button class="option-btn" data-age="m25_36">25~36개월</button>
        </div>
      </div>

      <div class="step">
        <h2 class="step-title">2. 요즘 가장 힘든 순간은?</h2>
        <p class="step-desc">부모가 실제로 고민하는 상황에 맞춰 추천해요.</p>
        <div class="options" id="concernOptions">
          <button class="option-btn" data-concern="sleep">잠·수면</button>
          <button class="option-btn" data-concern="feeding">수유·이유식</button>
          <button class="option-btn" data-concern="health">위생·건강</button>
          <button class="option-btn" data-concern="outing">외출</button>
          <button class="option-btn" data-concern="safety">안전</button>
          <button class="option-btn" data-concern="play">놀이·발달</button>
          <button class="option-btn" data-concern="potty">배변훈련</button>
          <button class="option-btn" data-concern="school">어린이집 준비</button>
          <button class="option-btn" data-concern="storage">정리·생활습관</button>
        </div>
      </div>

      <div class="step">
        <h2 class="step-title">3. 부모님 성향은 어디에 가까우세요?</h2>
        <p class="step-desc">같은 육아템도 부모 성향에 따라 추천 우선순위가 달라져요.</p>
        <div class="options" id="typeOptions">
          <button class="option-btn" data-type="minimal">최소한만 사고 싶어요</button>
          <button class="option-btn" data-type="comfort">육아가 편해지는 게 좋아요</button>
          <button class="option-btn" data-type="safety">안전이 제일 중요해요</button>
          <button class="option-btn" data-type="school">어린이집 준비가 걱정돼요</button>
        </div>
      </div>

      <div class="helper" id="helper">
        월령, 고민, 부모 성향을 모두 선택하면 추천 결과가 나와요.
      </div>
    </section>

    <section class="result" id="result">
      <div class="result-top">
        <div>
          <h2 id="resultTitle"></h2>
          <p class="result-summary" id="resultSummary"></p>
        </div>
        <button class="reset-btn" onclick="resetTest()">다시 선택</button>
      </div>

      <div class="type-card">
        <strong id="typeName"></strong>
        <p id="typeDesc"></p>
      </div>

      <div class="product-grid" id="productGrid"></div>

      <div class="notice">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.<br />
        제품 선택 전 사용 가능 월령, KC 인증, 보호자 사용 지침, 실제 후기와 배송 정보를 꼭 확인해주세요.
      </div>

      <div class="admin-box">
        <h3>관리자용 안내</h3>
        아래 추천 카드의 버튼은 <code>partnerLink</code> 값이 있을 때만 활성화됩니다.<br />
        원이 쿠팡파트너스에서 링크를 만든 뒤, 코드 안의 <code>partnerLink: ""</code> 부분에 붙여넣으면 됩니다.<br />
        일반 쿠팡 검색 링크로 이동하지 않도록 설계되어 있어요.
      </div>
    </section>
  </main>

  <script>
    const state = {
      age: null,
      concern: null,
      type: null
    };

    const ageLabels = {
      m0_3: "0~3개월",
      m4_6: "4~6개월",
      m7_12: "7~12개월",
      m13_18: "13~18개월",
      m19_24: "19~24개월",
      m25_36: "25~36개월"
    };

    const concernLabels = {
      sleep: "잠·수면",
      feeding: "수유·이유식",
      health: "위생·건강",
      outing: "외출",
      safety: "안전",
      play: "놀이·발달",
      potty: "배변훈련",
      school: "어린이집 준비",
      storage: "정리·생활습관"
    };

    const parentTypes = {
      minimal: {
        name: "실속형 부모",
        desc: "꼭 필요한 것부터 차근차근 준비하는 타입이에요. 지금 당장 많이 사기보다, 월령과 상황에 맞는 필수템 위주로 고르는 게 좋아요."
      },
      comfort: {
        name: "육아효율형 부모",
        desc: "육아 시간을 줄이고 몸의 부담을 덜어주는 제품이 잘 맞아요. 새벽 수유, 외출, 식사 준비처럼 반복되는 일을 편하게 만드는 아이템을 우선 추천해요."
      },
      safety: {
        name: "안전우선형 부모",
        desc: "아이가 움직이기 시작하면 집 안 곳곳이 위험해질 수 있어요. 예쁜 육아템보다 낙상, 충돌, 끼임, 위생을 줄이는 제품부터 챙기는 게 좋아요."
      },
      school: {
        name: "등원준비형 부모",
        desc: "어린이집이나 외부 활동을 앞두고 준비물이 걱정되는 타입이에요. 낮잠, 식사, 물건 분실 방지, 외출 준비물을 중심으로 추천해요."
      }
    };

    const productUpdateLog = [
      {
        date: "2026-06-28",
        memo: "0~36개월 육아템 심리테스트 MVP 상품 데이터 최초 구성",
        productCount: 54
      }
    ];

    /*
      사용 방법:
      1. 원이 쿠팡파트너스에서 상품 또는 검색어 링크를 만든다.
      2. 아래 partnerLink: "" 안에 붙여넣는다.
      3. 링크가 들어간 상품만 버튼이 활성화된다.

      예시:
      partnerLink: "https://link.coupang.com/a/원쿠파스링크"
    */

    const babyProducts = [
      {
        id: "m0_3_sleep_swaddle",
        ageGroups: ["m0_3"],
        concerns: ["sleep"],
        parentTypes: ["comfort", "minimal"],
        productName: "신생아 속싸개",
        tag: "수면",
        reason: "아기가 놀라 깨는 일이 잦은 시기에 수면 환경을 안정적으로 잡아주는 대표 아이템이에요.",
        buttonText: "속싸개 인기상품 보기",
        reviewMemo: "쿠팡에서 리뷰 많은 순, 별점 4.5 이상 상품으로 링크 연결 추천",
        partnerLink: ""
      },
      {
        id: "m0_3_sleep_waterproof_pad",
        ageGroups: ["m0_3", "m4_6", "m7_12"],
        concerns: ["sleep", "health"],
        parentTypes: ["minimal", "comfort"],
        productName: "아기 방수패드",
        tag: "수면·위생",
        reason: "기저귀 샘, 토, 침으로부터 침구를 보호해주는 기본 육아템이에요.",
        buttonText: "방수패드 보기",
        reviewMemo: "세탁 편한 제품, 리뷰 많은 제품 우선",
        partnerLink: ""
      },
      {
        id: "m0_3_sleep_baby_bed_guard",
        ageGroups: ["m0_3", "m4_6"],
        concerns: ["sleep", "safety"],
        parentTypes: ["safety"],
        productName: "아기 침대가드",
        tag: "수면안전",
        reason: "잠자리 주변에서 굴러떨어짐이나 틈 끼임이 걱정될 때 확인해볼 수 있어요.",
        buttonText: "침대가드 보기",
        reviewMemo: "침대 규격 호환 여부 확인 필요",
        partnerLink: ""
      },
      {
        id: "m0_3_sleep_night_light",
        ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18"],
        concerns: ["sleep"],
        parentTypes: ["comfort"],
        productName: "수유등",
        tag: "수면·수유",
        reason: "새벽 수유나 기저귀 갈이 때 방 전체를 밝히지 않아도 되어 편해요.",
        buttonText: "수유등 보기",
        reviewMemo: "밝기 조절, 무선 충전형 후기 확인",
        partnerLink: ""
      },
      {
        id: "m0_3_feeding_bottle_sterilizer",
        ageGroups: ["m0_3", "m4_6"],
        concerns: ["feeding", "health"],
        parentTypes: ["comfort", "safety"],
        productName: "젖병소독기",
        tag: "수유·위생",
        reason: "젖병, 쪽쪽이, 작은 수유용품을 위생적으로 관리할 때 편해요.",
        buttonText: "젖병소독기 비교하기",
        reviewMemo: "리뷰 수 많고 건조 기능 있는 제품 추천",
        partnerLink: ""
      },
      {
        id: "m0_3_feeding_formula_pot",
        ageGroups: ["m0_3", "m4_6"],
        concerns: ["feeding"],
        parentTypes: ["comfort"],
        productName: "분유포트",
        tag: "수유",
        reason: "새벽 수유 때 분유 온도를 맞추는 시간을 줄여주는 편의템이에요.",
        buttonText: "분유포트 보기",
        reviewMemo: "온도 유지 기능, 세척 편의성 확인",
        partnerLink: ""
      },
      {
        id: "m0_3_feeding_nursing_pillow",
        ageGroups: ["m0_3", "m4_6"],
        concerns: ["feeding"],
        parentTypes: ["comfort"],
        productName: "수유쿠션",
        tag: "수유",
        reason: "수유 자세를 잡기 힘든 초반에 팔과 허리 부담을 줄이는 데 도움될 수 있어요.",
        buttonText: "수유쿠션 보기",
        reviewMemo: "커버 분리 세탁 가능 여부 확인",
        partnerLink: ""
      },
      {
        id: "m0_3_health_thermometer",
        ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18", "m19_24", "m25_36"],
        concerns: ["health"],
        parentTypes: ["safety", "minimal"],
        productName: "비접촉 아기 체온계",
        tag: "건강관리",
        reason: "아이 발열이 걱정될 때 집에서 빠르게 확인할 수 있는 기본 건강관리템이에요.",
        buttonText: "체온계 인기상품 보기",
        reviewMemo: "리뷰 수 많고 측정 안정성 후기 좋은 제품 추천",
        partnerLink: ""
      },
      {
        id: "m0_3_health_nail_set",
        ageGroups: ["m0_3", "m4_6"],
        concerns: ["health"],
        parentTypes: ["minimal"],
        productName: "신생아 손톱가위 세트",
        tag: "위생",
        reason: "아기 손톱은 생각보다 빨리 자라서 얼굴 긁힘 방지용으로 필요해요.",
        buttonText: "손톱가위 세트 보기",
        reviewMemo: "신생아용 둥근날 제품 추천",
        partnerLink: ""
      },
      {
        id: "m0_3_health_nasal_aspirator",
        ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18", "m19_24", "m25_36"],
        concerns: ["health"],
        parentTypes: ["comfort", "safety"],
        productName: "아기 콧물흡입기",
        tag: "건강관리",
        reason: "감기나 코막힘으로 힘들어할 때 부모들이 많이 찾는 육아템이에요.",
        buttonText: "콧물흡입기 보기",
        reviewMemo: "세척 편의성, 흡입력 후기 확인",
        partnerLink: ""
      },
      {
        id: "m0_3_outing_baby_carrier",
        ageGroups: ["m0_3", "m4_6", "m7_12"],
        concerns: ["outing"],
        parentTypes: ["comfort"],
        productName: "신생아 아기띠",
        tag: "외출",
        reason: "병원 방문이나 짧은 외출 때 손이 자유로워져서 부모 부담을 줄여줘요.",
        buttonText: "아기띠 인기상품 보기",
        reviewMemo: "신생아 사용 가능 여부와 허리 지지 후기 확인",
        partnerLink: ""
      },
      {
        id: "m0_3_outing_diaper_bag",
        ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18"],
        concerns: ["outing", "storage"],
        parentTypes: ["minimal", "comfort"],
        productName: "기저귀 가방",
        tag: "외출·정리",
        reason: "기저귀, 물티슈, 여벌옷, 젖병을 한 번에 챙기기 좋아요.",
        buttonText: "기저귀 가방 보기",
        reviewMemo: "수납칸 많고 가벼운 제품 추천",
        partnerLink: ""
      },
      {
        id: "m4_6_feeding_baby_spoon",
        ageGroups: ["m4_6", "m7_12"],
        concerns: ["feeding"],
        parentTypes: ["minimal"],
        productName: "이유식 스푼",
        tag: "이유식",
        reason: "이유식을 시작할 때 아이 입 크기에 맞는 부드러운 스푼이 필요해요.",
        buttonText: "이유식 스푼 보기",
        reviewMemo: "실리콘 소재, 열탕 가능 여부 확인",
        partnerLink: ""
      },
      {
        id: "m4_6_feeding_baby_bowl",
        ageGroups: ["m4_6", "m7_12"],
        concerns: ["feeding"],
        parentTypes: ["minimal"],
        productName: "이유식 용기",
        tag: "이유식",
        reason: "소분 보관과 냉동 보관을 자주 하게 되는 시기에 유용해요.",
        buttonText: "이유식 용기 보기",
        reviewMemo: "전자레인지, 냉동 가능 여부 확인",
        partnerLink: ""
      },
      {
        id: "m4_6_play_tummy_time_mat",
        ageGroups: ["m4_6", "m7_12"],
        concerns: ["play"],
        parentTypes: ["comfort"],
        productName: "아기 놀이매트",
        tag: "놀이·발달",
        reason: "뒤집기, 배밀이, 앉기 연습을 하는 시기에 바닥 공간을 안전하게 만들어줘요.",
        buttonText: "아기 놀이매트 보기",
        reviewMemo: "두께, 미끄럼 방지, 소음 완화 후기 확인",
        partnerLink: ""
      },
      {
        id: "m4_6_safety_corner_guard",
        ageGroups: ["m4_6", "m7_12", "m13_18", "m19_24"],
        concerns: ["safety"],
        parentTypes: ["safety"],
        productName: "모서리 보호대",
        tag: "안전",
        reason: "아이 키 높이에 있는 테이블과 서랍장 모서리를 보호하는 기본 안전템이에요.",
        buttonText: "모서리 보호대 보기",
        reviewMemo: "접착력 후기 좋은 제품 추천",
        partnerLink: ""
      },
      {
        id: "m7_12_feeding_suction_plate",
        ageGroups: ["m7_12", "m13_18", "m19_24"],
        concerns: ["feeding"],
        parentTypes: ["minimal", "comfort"],
        productName: "아기 흡착식판",
        tag: "이유식·유아식",
        reason: "식판을 엎거나 밀어내는 시기에 식사 스트레스를 줄여줘요.",
        buttonText: "흡착식판 비교하기",
        reviewMemo: "흡착력 후기, 세척 편의성 확인",
        partnerLink: ""
      },
      {
        id: "m7_12_feeding_straw_cup",
        ageGroups: ["m7_12", "m13_18", "m19_24"],
        concerns: ["feeding"],
        parentTypes: ["minimal"],
        productName: "아기 빨대컵",
        tag: "식사 독립",
        reason: "컵 사용 전 단계로 물 마시는 습관을 만들기 좋아요.",
        buttonText: "빨대컵 인기상품 보기",
        reviewMemo: "누수 적은 제품, 세척 쉬운 제품 추천",
        partnerLink: ""
      },
      {
        id: "m7_12_safety_gate",
        ageGroups: ["m7_12", "m13_18", "m19_24"],
        concerns: ["safety"],
        parentTypes: ["safety"],
        productName: "유아 안전문",
        tag: "안전",
        reason: "기어다니고 잡고 서는 시기에 주방, 계단, 현관 접근을 막는 데 좋아요.",
        buttonText: "안전문 보기",
        reviewMemo: "설치 폭, 고정력 후기 확인",
        partnerLink: ""
      },
      {
        id: "m7_12_safety_outlet_cover",
        ageGroups: ["m7_12", "m13_18", "m19_24"],
        concerns: ["safety"],
        parentTypes: ["safety", "minimal"],
        productName: "콘센트 안전커버",
        tag: "안전",
        reason: "손으로 만지고 탐색하는 시기에는 콘센트 접근을 막아주는 게 좋아요.",
        buttonText: "콘센트 커버 보기",
        reviewMemo: "탈착이 쉽지 않은 제품 추천",
        partnerLink: ""
      },
      {
        id: "m7_12_play_activity_cube",
        ageGroups: ["m7_12", "m13_18"],
        concerns: ["play"],
        parentTypes: ["comfort"],
        productName: "아기 촉감놀이 장난감",
        tag: "놀이·발달",
        reason: "만지고 누르고 소리 듣는 놀이로 감각 발달을 자극하기 좋아요.",
        buttonText: "촉감놀이 장난감 보기",
        reviewMemo: "작은 부품 없는 월령 적합 제품 추천",
        partnerLink: ""
      },
      {
        id: "m13_18_feeding_high_chair",
        ageGroups: ["m13_18", "m19_24"],
        concerns: ["feeding"],
        parentTypes: ["comfort", "minimal"],
        productName: "유아 식탁의자",
        tag: "식사습관",
        reason: "정해진 자리에서 먹는 습관을 만드는 데 도움이 되는 대표 육아템이에요.",
        buttonText: "식탁의자 보기",
        reviewMemo: "안전벨트, 세척 편의성, 접이식 여부 확인",
        partnerLink: ""
      },
      {
        id: "m13_18_play_walker_toy",
        ageGroups: ["m13_18"],
        concerns: ["play"],
        parentTypes: ["comfort"],
        productName: "걸음마 보조 장난감",
        tag: "놀이·발달",
        reason: "걷기 시작하는 시기에 놀이처럼 움직임을 유도할 수 있어요.",
        buttonText: "걸음마 장난감 보기",
        reviewMemo: "전도 위험 후기, 월령 적합성 확인",
        partnerLink: ""
      },
      {
        id: "m13_18_safety_drawer_lock",
        ageGroups: ["m13_18", "m19_24", "m25_36"],
        concerns: ["safety"],
        parentTypes: ["safety"],
        productName: "서랍 잠금장치",
        tag: "안전",
        reason: "서랍을 열고 닫는 시기에 손 끼임과 위험물 접근을 줄여줘요.",
        buttonText: "서랍 잠금장치 보기",
        reviewMemo: "접착력, 아이가 쉽게 떼지 못한다는 후기 확인",
        partnerLink: ""
      },
      {
        id: "m13_18_outing_light_stroller",
        ageGroups: ["m13_18", "m19_24", "m25_36"],
        concerns: ["outing"],
        parentTypes: ["comfort"],
        productName: "휴대용 유모차",
        tag: "외출",
        reason: "외출이 늘어나는 시기에 가볍게 접고 이동하기 편한 제품이 유용해요.",
        buttonText: "휴대용 유모차 보기",
        reviewMemo: "무게, 접이식, 주행감 후기 확인",
        partnerLink: ""
      },
      {
        id: "m19_24_potty_baby_potty",
        ageGroups: ["m19_24", "m25_36"],
        concerns: ["potty"],
        parentTypes: ["minimal", "comfort"],
        productName: "아기 변기",
        tag: "배변훈련",
        reason: "배변훈련을 시작할 때 아이가 변기에 친숙해지도록 도와줘요.",
        buttonText: "아기 변기 보기",
        reviewMemo: "안정감, 세척 편의성 후기 확인",
        partnerLink: ""
      },
      {
        id: "m19_24_potty_step_stool",
        ageGroups: ["m19_24", "m25_36"],
        concerns: ["potty", "storage"],
        parentTypes: ["minimal", "safety"],
        productName: "유아 발디딤대",
        tag: "자립습관",
        reason: "손 씻기, 양치, 변기 사용을 스스로 해보는 데 필요해요.",
        buttonText: "발디딤대 보기",
        reviewMemo: "미끄럼 방지 후기 확인",
        partnerLink: ""
      },
      {
        id: "m19_24_storage_toy_box",
        ageGroups: ["m19_24", "m25_36"],
        concerns: ["storage"],
        parentTypes: ["minimal", "comfort"],
        productName: "장난감 정리함",
        tag: "정리습관",
        reason: "놀이 후 제자리에 넣는 습관을 만들기 좋은 시기예요.",
        buttonText: "장난감 정리함 보기",
        reviewMemo: "아이가 직접 넣고 빼기 쉬운 높이 추천",
        partnerLink: ""
      },
      {
        id: "m19_24_play_sound_book",
        ageGroups: ["m19_24", "m25_36"],
        concerns: ["play"],
        parentTypes: ["minimal", "comfort"],
        productName: "유아 사운드북",
        tag: "언어발달",
        reason: "말이 늘어나는 시기에 소리와 그림을 연결하기 좋아요.",
        buttonText: "사운드북 보기",
        reviewMemo: "리뷰 많은 인기 캐릭터 제품 추천",
        partnerLink: ""
      },
      {
        id: "m19_24_play_blocks",
        ageGroups: ["m19_24", "m25_36"],
        concerns: ["play"],
        parentTypes: ["minimal"],
        productName: "유아 블록",
        tag: "놀이·발달",
        reason: "손 조작, 집중력, 상상력을 키우는 기본 놀이템이에요.",
        buttonText: "유아 블록 보기",
        reviewMemo: "삼킴 위험 없는 큰 블록 위주 추천",
        partnerLink: ""
      },
      {
        id: "m25_36_school_nap_bedding",
        ageGroups: ["m25_36"],
        concerns: ["school", "sleep"],
        parentTypes: ["school", "comfort"],
        productName: "어린이집 낮잠이불",
        tag: "어린이집",
        reason: "어린이집 낮잠 시간이 있는 아이에게 필요한 대표 준비물이에요.",
        buttonText: "낮잠이불 인기상품 보기",
        reviewMemo: "세탁 편의성, 두께, 휴대가방 포함 여부 확인",
        partnerLink: ""
      },
      {
        id: "m25_36_school_name_sticker",
        ageGroups: ["m25_36"],
        concerns: ["school", "storage"],
        parentTypes: ["school", "minimal"],
        productName: "네임스티커",
        tag: "분실방지",
        reason: "물통, 수저, 옷, 가방 분실 방지에 유용해요.",
        buttonText: "네임스티커 보기",
        reviewMemo: "방수 네임스티커 후기 확인",
        partnerLink: ""
      },
      {
        id: "m25_36_school_water_bottle",
        ageGroups: ["m25_36"],
        concerns: ["school", "feeding"],
        parentTypes: ["school", "minimal"],
        productName: "어린이집 물통",
        tag: "등원준비",
        reason: "가볍고 아이가 열고 닫기 쉬운 물통을 준비하면 좋아요.",
        buttonText: "어린이집 물통 보기",
        reviewMemo: "누수 방지, 세척 편의성 후기 확인",
        partnerLink: ""
      },
      {
        id: "m25_36_school_cutlery",
        ageGroups: ["m25_36"],
        concerns: ["school", "feeding"],
        parentTypes: ["school"],
        productName: "어린이집 수저세트",
        tag: "등원준비",
        reason: "어린이집 식사 준비물로 자주 필요한 기본템이에요.",
        buttonText: "수저세트 보기",
        reviewMemo: "케이스 포함, 세척 쉬운 제품 추천",
        partnerLink: ""
      },
      {
        id: "m25_36_school_indoor_shoe_bag",
        ageGroups: ["m25_36"],
        concerns: ["school", "storage"],
        parentTypes: ["school"],
        productName: "실내화 주머니",
        tag: "어린이집",
        reason: "어린이집, 유치원 준비물로 활용하기 좋아요.",
        buttonText: "실내화 주머니 보기",
        reviewMemo: "가볍고 세탁 쉬운 제품 추천",
        partnerLink: ""
      },
      {
        id: "m25_36_storage_kids_shelf",
        ageGroups: ["m25_36"],
        concerns: ["storage"],
        parentTypes: ["comfort", "minimal"],
        productName: "아동 낮은 책장",
        tag: "정리습관",
        reason: "책과 장난감을 아이 눈높이에 맞춰 정리하기 좋아요.",
        buttonText: "아동 책장 보기",
        reviewMemo: "모서리 마감, 전도 방지 여부 확인",
        partnerLink: ""
      }
    ];

    function selectOption(groupId, key, value) {
      state[key] = value;

      const group = document.getElementById(groupId);
      const buttons = group.querySelectorAll(".option-btn");

      buttons.forEach((button) => {
        button.classList.remove("active");
      });

      const selectedButton = group.querySelector(`[data-${key}="${value}"]`);

      if (selectedButton) {
        selectedButton.classList.add("active");
      }

      renderResult();
    }

    document.querySelectorAll("[data-age]").forEach((button) => {
      button.addEventListener("click", () => {
        selectOption("ageOptions", "age", button.dataset.age);
      });
    });

    document.querySelectorAll("[data-concern]").forEach((button) => {
      button.addEventListener("click", () => {
        selectOption("concernOptions", "concern", button.dataset.concern);
      });
    });

    document.querySelectorAll("[data-type]").forEach((button) => {
      button.addEventListener("click", () => {
        selectOption("typeOptions", "type", button.dataset.type);
      });
    });

    function renderResult() {
      const helper = document.getElementById("helper");
      const result = document.getElementById("result");

      if (!state.age || !state.concern || !state.type) {
        result.classList.remove("show");

        if (state.age || state.concern || state.type) {
          helper.classList.add("show");
        }

        return;
      }

      helper.classList.remove("show");
      result.classList.add("show");

      const exactProducts = babyProducts.filter((product) => {
        return (
          product.ageGroups.includes(state.age) &&
          product.concerns.includes(state.concern) &&
          product.parentTypes.includes(state.type)
        );
      });

      const concernProducts = babyProducts.filter((product) => {
        return (
          product.ageGroups.includes(state.age) &&
          product.concerns.includes(state.concern)
        );
      });

      const typeProducts = babyProducts.filter((product) => {
        return (
          product.ageGroups.includes(state.age) &&
          product.parentTypes.includes(state.type)
        );
      });

      const ageProducts = babyProducts.filter((product) => {
        return product.ageGroups.includes(state.age);
      });

      let products = [
        ...exactProducts,
        ...concernProducts,
        ...typeProducts,
        ...ageProducts
      ];

      products = removeDuplicates(products).slice(0, 6);

      document.getElementById("resultTitle").textContent =
        `${ageLabels[state.age]} 아기에게 지금 필요한 육아템`;

      document.getElementById("resultSummary").textContent =
        `선택한 고민은 '${concernLabels[state.concern]}'이고, 부모님 성향은 '${parentTypes[state.type].name}'이에요. 지금 상황에 맞는 추천템을 우선순위로 골라봤어요.`;

      document.getElementById("typeName").textContent = parentTypes[state.type].name;
      document.getElementById("typeDesc").textContent = parentTypes[state.type].desc;

      renderProducts(products);

      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    function renderProducts(products) {
      const productGrid = document.getElementById("productGrid");
      productGrid.innerHTML = "";

      products.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";

        const buttonHtml = product.partnerLink
          ? `
            <a
              class="coupang-btn"
              href="${product.partnerLink}"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              ${product.buttonText}
            </a>
          `
          : `
            <button class="coupang-btn disabled" disabled>
              쿠팡파트너스 링크 준비중
            </button>
          `;

        card.innerHTML = `
          <span class="tag">${product.tag}</span>
          <h3>${product.productName}</h3>
          <p>${product.reason}</p>
          <div class="meta">${product.reviewMemo}</div>
          ${buttonHtml}
        `;

        productGrid.appendChild(card);
      });
    }

    function removeDuplicates(products) {
      const seen = new Set();

      return products.filter((product) => {
        if (seen.has(product.id)) {
          return false;
        }

        seen.add(product.id);
        return true;
      });
    }

    function resetTest() {
      state.age = null;
      state.concern = null;
      state.type = null;

      document.querySelectorAll(".option-btn").forEach((button) => {
        button.classList.remove("active");
      });

      document.getElementById("helper").classList.remove("show");
      document.getElementById("result").classList.remove("show");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    console.log("상품 데이터 업데이트 기록:", productUpdateLog);
  </script>
</body>
</html>