"use client";

import { useState } from "react";

type Age = "m0_3" | "m4_6" | "m7_12" | "m13_18" | "m19_24" | "m25_36";
type Concern =
  | "sleep"
  | "feeding"
  | "health"
  | "outing"
  | "safety"
  | "play"
  | "potty"
  | "school"
  | "storage";

type ParentType = "minimal" | "comfort" | "safety" | "school";

type Product = {
  id: string;
  ageGroups: Age[];
  concerns: Concern[];
  parentTypes: ParentType[];
  productName: string;
  tag: string;
  reason: string;
  buttonText: string;
  reviewMemo: string;
  partnerLink: string;
};

const ageLabels: Record<Age, string> = {
  m0_3: "0~3개월",
  m4_6: "4~6개월",
  m7_12: "7~12개월",
  m13_18: "13~18개월",
  m19_24: "19~24개월",
  m25_36: "25~36개월",
};

const concernLabels: Record<Concern, string> = {
  sleep: "잠·수면",
  feeding: "수유·이유식",
  health: "위생·건강",
  outing: "외출",
  safety: "안전",
  play: "놀이·발달",
  potty: "배변훈련",
  school: "어린이집 준비",
  storage: "정리·생활습관",
};

const parentTypes: Record<ParentType, { name: string; desc: string }> = {
  minimal: {
    name: "실속형 부모",
    desc: "꼭 필요한 것부터 차근차근 준비하는 타입이에요. 월령과 상황에 맞는 필수템 위주로 고르는 게 좋아요.",
  },
  comfort: {
    name: "육아효율형 부모",
    desc: "육아 시간을 줄이고 몸의 부담을 덜어주는 제품이 잘 맞아요. 반복되는 육아를 편하게 만드는 아이템을 우선 추천해요.",
  },
  safety: {
    name: "안전우선형 부모",
    desc: "아이가 움직이기 시작하면 집 안 곳곳이 위험해질 수 있어요. 낙상, 충돌, 끼임, 위생을 줄이는 제품부터 챙기는 게 좋아요.",
  },
  school: {
    name: "등원준비형 부모",
    desc: "어린이집이나 외부 활동을 앞두고 준비물이 걱정되는 타입이에요. 낮잠, 식사, 분실 방지, 외출 준비물을 중심으로 추천해요.",
  },
};

const babyProducts: Product[] = [
  {
    id: "swaddle",
    ageGroups: ["m0_3"],
    concerns: ["sleep"],
    parentTypes: ["comfort", "minimal"],
    productName: "신생아 속싸개",
    tag: "수면",
    reason: "아기가 놀라 깨는 일이 잦은 시기에 수면 환경을 안정적으로 잡아주는 대표 아이템이에요.",
    buttonText: "속싸개 인기상품 보기",
    reviewMemo: "리뷰 많은 순, 별점 4.5 이상 상품으로 링크 연결 추천",
    partnerLink: "https://link.coupang.com/a/eVNRnmf6KO",
  },
  {
    id: "waterproof_pad",
    ageGroups: ["m0_3", "m4_6", "m7_12"],
    concerns: ["sleep", "health"],
    parentTypes: ["minimal", "comfort"],
    productName: "아기 방수패드",
    tag: "수면·위생",
    reason: "기저귀 샘, 토, 침으로부터 침구를 보호해주는 기본 육아템이에요.",
    buttonText: "방수패드 보기",
    reviewMemo: "세탁 편한 제품, 리뷰 많은 제품 우선",
    partnerLink: "https://link.coupang.com/a/eVNTgHVLKC",
  },
  {
    id: "bottle_sterilizer",
    ageGroups: ["m0_3", "m4_6"],
    concerns: ["feeding", "health"],
    parentTypes: ["comfort", "safety"],
    productName: "젖병소독기",
    tag: "수유·위생",
    reason: "젖병, 쪽쪽이, 작은 수유용품을 위생적으로 관리할 때 편해요.",
    buttonText: "젖병소독기 비교하기",
    reviewMemo: "리뷰 수 많고 건조 기능 있는 제품 추천",
    partnerLink: "https://link.coupang.com/a/eVNU3oGkyi",
  },
  {
    id: "formula_pot",
    ageGroups: ["m0_3", "m4_6"],
    concerns: ["feeding"],
    parentTypes: ["comfort"],
    productName: "분유포트",
    tag: "수유",
    reason: "새벽 수유 때 분유 온도를 맞추는 시간을 줄여주는 편의템이에요.",
    buttonText: "분유포트 보기",
    reviewMemo: "온도 유지 기능, 세척 편의성 확인",
    partnerLink: "https://link.coupang.com/a/eVNWDtkJWu",
  },
  {
    id: "thermometer",
    ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18", "m19_24", "m25_36"],
    concerns: ["health"],
    parentTypes: ["safety", "minimal"],
    productName: "비접촉 아기 체온계",
    tag: "건강관리",
    reason: "아이 발열이 걱정될 때 집에서 빠르게 확인할 수 있는 기본 건강관리템이에요.",
    buttonText: "체온계 인기상품 보기",
    reviewMemo: "리뷰 수 많고 측정 안정성 후기 좋은 제품 추천",
    partnerLink: "https://link.coupang.com/a/eVNXVjNddc",
  },
  {
    id: "nasal_aspirator",
    ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18", "m19_24", "m25_36"],
    concerns: ["health"],
    parentTypes: ["comfort", "safety"],
    productName: "아기 콧물흡입기",
    tag: "건강관리",
    reason: "감기나 코막힘으로 힘들어할 때 부모들이 많이 찾는 육아템이에요.",
    buttonText: "콧물흡입기 보기",
    reviewMemo: "세척 편의성, 흡입력 후기 확인",
    partnerLink: "https://link.coupang.com/a/eVNZPyvxFQ",
  },
  {
    id: "baby_carrier",
    ageGroups: ["m0_3", "m4_6", "m7_12"],
    concerns: ["outing"],
    parentTypes: ["comfort"],
    productName: "신생아 아기띠",
    tag: "외출",
    reason: "병원 방문이나 짧은 외출 때 손이 자유로워져서 부모 부담을 줄여줘요.",
    buttonText: "아기띠 인기상품 보기",
    reviewMemo: "신생아 사용 가능 여부와 허리 지지 후기 확인",
    partnerLink: "https://link.coupang.com/a/eVN2lX7yhw",
  },
  {
    id: "diaper_bag",
    ageGroups: ["m0_3", "m4_6", "m7_12", "m13_18"],
    concerns: ["outing", "storage"],
    parentTypes: ["minimal", "comfort"],
    productName: "기저귀 가방",
    tag: "외출·정리",
    reason: "기저귀, 물티슈, 여벌옷, 젖병을 한 번에 챙기기 좋아요.",
    buttonText: "기저귀 가방 보기",
    reviewMemo: "수납칸 많고 가벼운 제품 추천",
    partnerLink: "https://link.coupang.com/a/eVN3xKW3TE",
  },
  {
    id: "baby_spoon",
    ageGroups: ["m4_6", "m7_12"],
    concerns: ["feeding"],
    parentTypes: ["minimal"],
    productName: "이유식 스푼",
    tag: "이유식",
    reason: "이유식을 시작할 때 아이 입 크기에 맞는 부드러운 스푼이 필요해요.",
    buttonText: "이유식 스푼 보기",
    reviewMemo: "실리콘 소재, 열탕 가능 여부 확인",
    partnerLink: "",
  },
  {
    id: "play_mat",
    ageGroups: ["m4_6", "m7_12"],
    concerns: ["play"],
    parentTypes: ["comfort"],
    productName: "아기 놀이매트",
    tag: "놀이·발달",
    reason: "뒤집기, 배밀이, 앉기 연습을 하는 시기에 바닥 공간을 안전하게 만들어줘요.",
    buttonText: "아기 놀이매트 보기",
    reviewMemo: "두께, 미끄럼 방지, 소음 완화 후기 확인",
    partnerLink: "",
  },
  {
    id: "corner_guard",
    ageGroups: ["m4_6", "m7_12", "m13_18", "m19_24"],
    concerns: ["safety"],
    parentTypes: ["safety"],
    productName: "모서리 보호대",
    tag: "안전",
    reason: "아이 키 높이에 있는 테이블과 서랍장 모서리를 보호하는 기본 안전템이에요.",
    buttonText: "모서리 보호대 보기",
    reviewMemo: "접착력 후기 좋은 제품 추천",
    partnerLink: "",
  },
  {
    id: "suction_plate",
    ageGroups: ["m7_12", "m13_18", "m19_24"],
    concerns: ["feeding"],
    parentTypes: ["minimal", "comfort"],
    productName: "아기 흡착식판",
    tag: "이유식·유아식",
    reason: "식판을 엎거나 밀어내는 시기에 식사 스트레스를 줄여줘요.",
    buttonText: "흡착식판 비교하기",
    reviewMemo: "흡착력 후기, 세척 편의성 확인",
    partnerLink: "",
  },
  {
    id: "straw_cup",
    ageGroups: ["m7_12", "m13_18", "m19_24"],
    concerns: ["feeding"],
    parentTypes: ["minimal"],
    productName: "아기 빨대컵",
    tag: "식사 독립",
    reason: "컵 사용 전 단계로 물 마시는 습관을 만들기 좋아요.",
    buttonText: "빨대컵 인기상품 보기",
    reviewMemo: "누수 적은 제품, 세척 쉬운 제품 추천",
    partnerLink: "",
  },
  {
    id: "safety_gate",
    ageGroups: ["m7_12", "m13_18", "m19_24"],
    concerns: ["safety"],
    parentTypes: ["safety"],
    productName: "유아 안전문",
    tag: "안전",
    reason: "기어다니고 잡고 서는 시기에 주방, 계단, 현관 접근을 막는 데 좋아요.",
    buttonText: "안전문 보기",
    reviewMemo: "설치 폭, 고정력 후기 확인",
    partnerLink: "",
  },
  {
    id: "high_chair",
    ageGroups: ["m13_18", "m19_24"],
    concerns: ["feeding"],
    parentTypes: ["comfort", "minimal"],
    productName: "유아 식탁의자",
    tag: "식사습관",
    reason: "정해진 자리에서 먹는 습관을 만드는 데 도움이 되는 대표 육아템이에요.",
    buttonText: "식탁의자 보기",
    reviewMemo: "안전벨트, 세척 편의성, 접이식 여부 확인",
    partnerLink: "",
  },
  {
    id: "walker_toy",
    ageGroups: ["m13_18"],
    concerns: ["play"],
    parentTypes: ["comfort"],
    productName: "걸음마 보조 장난감",
    tag: "놀이·발달",
    reason: "걷기 시작하는 시기에 놀이처럼 움직임을 유도할 수 있어요.",
    buttonText: "걸음마 장난감 보기",
    reviewMemo: "전도 위험 후기, 월령 적합성 확인",
    partnerLink: "",
  },
  {
    id: "drawer_lock",
    ageGroups: ["m13_18", "m19_24", "m25_36"],
    concerns: ["safety"],
    parentTypes: ["safety"],
    productName: "서랍 잠금장치",
    tag: "안전",
    reason: "서랍을 열고 닫는 시기에 손 끼임과 위험물 접근을 줄여줘요.",
    buttonText: "서랍 잠금장치 보기",
    reviewMemo: "접착력, 아이가 쉽게 떼지 못한다는 후기 확인",
    partnerLink: "",
  },
  {
    id: "stroller",
    ageGroups: ["m13_18", "m19_24", "m25_36"],
    concerns: ["outing"],
    parentTypes: ["comfort"],
    productName: "휴대용 유모차",
    tag: "외출",
    reason: "외출이 늘어나는 시기에 가볍게 접고 이동하기 편한 제품이 유용해요.",
    buttonText: "휴대용 유모차 보기",
    reviewMemo: "무게, 접이식, 주행감 후기 확인",
    partnerLink: "",
  },
  {
    id: "baby_potty",
    ageGroups: ["m19_24", "m25_36"],
    concerns: ["potty"],
    parentTypes: ["minimal", "comfort"],
    productName: "아기 변기",
    tag: "배변훈련",
    reason: "배변훈련을 시작할 때 아이가 변기에 친숙해지도록 도와줘요.",
    buttonText: "아기 변기 보기",
    reviewMemo: "안정감, 세척 편의성 후기 확인",
    partnerLink: "",
  },
  {
    id: "step_stool",
    ageGroups: ["m19_24", "m25_36"],
    concerns: ["potty", "storage"],
    parentTypes: ["minimal", "safety"],
    productName: "유아 발디딤대",
    tag: "자립습관",
    reason: "손 씻기, 양치, 변기 사용을 스스로 해보는 데 필요해요.",
    buttonText: "발디딤대 보기",
    reviewMemo: "미끄럼 방지 후기 확인",
    partnerLink: "",
  },
  {
    id: "toy_box",
    ageGroups: ["m19_24", "m25_36"],
    concerns: ["storage"],
    parentTypes: ["minimal", "comfort"],
    productName: "장난감 정리함",
    tag: "정리습관",
    reason: "놀이 후 제자리에 넣는 습관을 만들기 좋은 시기예요.",
    buttonText: "장난감 정리함 보기",
    reviewMemo: "아이가 직접 넣고 빼기 쉬운 높이 추천",
    partnerLink: "",
  },
  {
    id: "blocks",
    ageGroups: ["m19_24", "m25_36"],
    concerns: ["play"],
    parentTypes: ["minimal"],
    productName: "유아 블록",
    tag: "놀이·발달",
    reason: "손 조작, 집중력, 상상력을 키우는 기본 놀이템이에요.",
    buttonText: "유아 블록 보기",
    reviewMemo: "삼킴 위험 없는 큰 블록 위주 추천",
    partnerLink: "",
  },
  {
    id: "nap_bedding",
    ageGroups: ["m25_36"],
    concerns: ["school", "sleep"],
    parentTypes: ["school", "comfort"],
    productName: "어린이집 낮잠이불",
    tag: "어린이집",
    reason: "어린이집 낮잠 시간이 있는 아이에게 필요한 대표 준비물이에요.",
    buttonText: "낮잠이불 인기상품 보기",
    reviewMemo: "세탁 편의성, 두께, 휴대가방 포함 여부 확인",
    partnerLink: "",
  },
  {
    id: "name_sticker",
    ageGroups: ["m25_36"],
    concerns: ["school", "storage"],
    parentTypes: ["school", "minimal"],
    productName: "네임스티커",
    tag: "분실방지",
    reason: "물통, 수저, 옷, 가방 분실 방지에 유용해요.",
    buttonText: "네임스티커 보기",
    reviewMemo: "방수 네임스티커 후기 확인",
    partnerLink: "",
  },
  {
    id: "water_bottle",
    ageGroups: ["m25_36"],
    concerns: ["school", "feeding"],
    parentTypes: ["school", "minimal"],
    productName: "어린이집 물통",
    tag: "등원준비",
    reason: "가볍고 아이가 열고 닫기 쉬운 물통을 준비하면 좋아요.",
    buttonText: "어린이집 물통 보기",
    reviewMemo: "누수 방지, 세척 편의성 후기 확인",
    partnerLink: "",
  },
];

export default function Page() {
  const [age, setAge] = useState<Age | null>(null);
  const [concern, setConcern] = useState<Concern | null>(null);
  const [type, setType] = useState<ParentType | null>(null);

  const isReady = age && concern && type;

  const products = isReady
    ? removeDuplicates([
        ...babyProducts.filter(
          (p) =>
            p.ageGroups.includes(age) &&
            p.concerns.includes(concern) &&
            p.parentTypes.includes(type)
        ),
        ...babyProducts.filter(
          (p) => p.ageGroups.includes(age) && p.concerns.includes(concern)
        ),
        ...babyProducts.filter(
          (p) => p.ageGroups.includes(age) && p.parentTypes.includes(type)
        ),
        ...babyProducts.filter((p) => p.ageGroups.includes(age)),
      ]).slice(0, 6)
    : [];

  const reset = () => {
    setAge(null);
    setConcern(null);
    setType(null);
  };

  return (
    <main className="min-h-screen bg-[#fff8ee] px-4 py-7 text-[#2d2d2d]">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[30px] bg-gradient-to-br from-[#ffe2b8] to-[#fff2db] px-5 py-10 text-center shadow-lg">
          <div className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-black text-[#e07900]">
            0~36개월 육아용품 심리테스트
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-4xl">
            우리 아기, 지금 뭐 준비해야 할까?
          </h1>
          <p className="mt-4 leading-relaxed text-[#6b5943]">
            아이 월령과 지금 힘든 상황을 고르면
            <br />
            지금 필요한 육아템을 맞춤으로 추천해드려요.
          </p>
        </section>

        <section className="mt-7 rounded-[28px] bg-white p-6 shadow-lg">
          <QuestionBlock
            title="1. 아이 월령을 선택해주세요"
            desc="개월 수에 따라 필요한 육아용품이 크게 달라져요."
          >
            {(Object.keys(ageLabels) as Age[]).map((key) => (
              <OptionButton
                key={key}
                active={age === key}
                onClick={() => setAge(key)}
              >
                {ageLabels[key]}
              </OptionButton>
            ))}
          </QuestionBlock>

          <QuestionBlock
            title="2. 요즘 가장 힘든 순간은?"
            desc="부모가 실제로 고민하는 상황에 맞춰 추천해요."
          >
            {(Object.keys(concernLabels) as Concern[]).map((key) => (
              <OptionButton
                key={key}
                active={concern === key}
                onClick={() => setConcern(key)}
              >
                {concernLabels[key]}
              </OptionButton>
            ))}
          </QuestionBlock>

          <QuestionBlock
            title="3. 부모님 성향은 어디에 가까우세요?"
            desc="같은 육아템도 부모 성향에 따라 추천 우선순위가 달라져요."
          >
            {(Object.keys(parentTypes) as ParentType[]).map((key) => (
              <OptionButton
                key={key}
                active={type === key}
                onClick={() => setType(key)}
              >
                {parentTypes[key].name}
              </OptionButton>
            ))}
          </QuestionBlock>

          {!isReady && (age || concern || type) && (
            <div className="mt-5 rounded-2xl bg-[#fff3df] p-4 text-center font-bold text-[#76501e]">
              월령, 고민, 부모 성향을 모두 선택하면 추천 결과가 나와요.
            </div>
          )}
        </section>

        {isReady && (
          <section className="mt-7 rounded-[28px] bg-white p-6 shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black">
                  {ageLabels[age]} 아기에게 지금 필요한 육아템
                </h2>
                <p className="mt-2 leading-relaxed text-[#6b6258]">
                  선택한 고민은 &apos;{concernLabels[concern]}&apos;이고,
                  부모님 성향은 &apos;{parentTypes[type].name}&apos;이에요.
                  지금 상황에 맞는 추천템을 우선순위로 골라봤어요.
                </p>
              </div>
              <button
                onClick={reset}
                className="rounded-full bg-[#f1f1f1] px-4 py-3 font-black"
              >
                다시 선택
              </button>
            </div>

            <div className="my-5 rounded-[22px] border border-[#ffe0b8] bg-[#fff6e9] p-5">
              <strong className="block text-xl">{parentTypes[type].name}</strong>
              <p className="mt-2 leading-relaxed text-[#6e552f]">
                {parentTypes[type].desc}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="flex min-h-[260px] flex-col rounded-[22px] border border-[#f0e1cf] bg-[#fffdf9] p-5"
                >
                  <span className="mb-3 w-fit rounded-full bg-[#fff0d8] px-3 py-1.5 text-sm font-black text-[#b86600]">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-black">{product.productName}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#625a51]">
                    {product.reason}
                  </p>
                  <div className="mb-3 text-xs leading-relaxed text-[#9a866d]">
                    {product.reviewMemo}
                  </div>

                  {product.partnerLink ? (
                    <a
                      href={product.partnerLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="rounded-2xl bg-black px-4 py-3 text-center font-black text-white"
                    >
                      {product.buttonText}
                    </a>
                  ) : (
                    <button
                      disabled
                      className="cursor-not-allowed rounded-2xl bg-[#d1d1d1] px-4 py-3 font-black text-[#666]"
                    >
                      쿠팡파트너스 링크 준비중
                    </button>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#fff4e5] p-4 text-sm leading-relaxed text-[#6b4d25]">
            이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.

              <br />
              제품 선택 전 사용 가능 월령, KC 인증, 보호자 사용 지침,
              실제 후기와 배송 정보를 꼭 확인해주세요.
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function QuestionBlock({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <h2 className="mb-2 text-xl font-black">{title}</h2>
      <p className="mb-4 text-sm text-[#756a5d]">{desc}</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">{children}</div>
    </div>
  );
}

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`min-h-[66px] rounded-[18px] border-2 px-3 py-4 font-black transition ${
        active
          ? "border-[#ff9824] bg-[#ff9824] text-white shadow-lg"
          : "border-[#f0deca] bg-[#fffaf4] text-black hover:border-[#ffb15a]"
      }`}
    >
      {children}
    </button>
  );
}

function removeDuplicates(products: Product[]) {
  const seen = new Set<string>();

  return products.filter((product) => {
    if (seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}