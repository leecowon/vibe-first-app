"use client";

import { useMemo, useState } from "react";

type Answer = "yes" | "no" | "na";

type Category =
  | "욕실 안전"
  | "야간 이동"
  | "약 관리"
  | "혈압/건강 관리"
  | "주방/생활 안전";

type Question = {
  id: number;
  category: Category;
  text: string;
  dangerAnswer: "yes" | "no";
};

type CategoryInfo = {
  description: string;
  items: string[];
  link: string;
};

const questions: Question[] = [
  {
    id: 1,
    category: "욕실 안전",
    text: "욕실 바닥에 미끄럼방지 매트가 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 2,
    category: "욕실 안전",
    text: "욕실이나 변기 주변에 잡을 수 있는 손잡이가 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 3,
    category: "욕실 안전",
    text: "샤워 후 욕실 바닥에 물기가 오래 남지 않나요?",
    dangerAnswer: "no",
  },
  {
    id: 4,
    category: "야간 이동",
    text: "침대 옆이나 복도에 야간 조명이 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 5,
    category: "야간 이동",
    text: "화장실까지 가는 길에 문턱이나 걸려 넘어질 물건이 없나요?",
    dangerAnswer: "no",
  },
  {
    id: 6,
    category: "야간 이동",
    text: "밤에 화장실을 자주 가는 편인가요?",
    dangerAnswer: "yes",
  },
  {
    id: 7,
    category: "약 관리",
    text: "복용 중인 약을 요일별로 정리하고 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 8,
    category: "약 관리",
    text: "약을 중복해서 먹거나 깜빡한 적이 있나요?",
    dangerAnswer: "yes",
  },
  {
    id: 9,
    category: "약 관리",
    text: "약 봉투나 약통에 복용 시간이 잘 표시되어 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 10,
    category: "혈압/건강 관리",
    text: "집에 혈압계나 체온계 같은 기본 건강 측정 도구가 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 11,
    category: "혈압/건강 관리",
    text: "혈압이나 혈당을 기록하는 습관이 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 12,
    category: "혈압/건강 관리",
    text: "어지럼, 두근거림, 숨참 같은 증상을 그냥 넘기는 편인가요?",
    dangerAnswer: "yes",
  },
  {
    id: 13,
    category: "주방/생활 안전",
    text: "가스레인지나 인덕션 사용 후 끄는 습관을 확인하고 있나요?",
    dangerAnswer: "no",
  },
  {
    id: 14,
    category: "주방/생활 안전",
    text: "주방 바닥이나 거실에 전선, 박스, 물건이 널려 있지 않나요?",
    dangerAnswer: "no",
  },
  {
    id: 15,
    category: "주방/생활 안전",
    text: "자주 쓰는 물건이 너무 높은 곳에 있지 않나요?",
    dangerAnswer: "no",
  },
];

const categoryInfo: Record<Category, CategoryInfo> = {
  "욕실 안전": {
    description:
      "욕실 미끄럼과 손잡이 부재는 낙상 위험을 높일 수 있습니다.",
    items: ["미끄럼방지 매트", "욕실 손잡이", "논슬립 실내화", "욕실 발판"],
    link: "https://link.coupang.com/a/placeholder",
  },
  "야간 이동": {
    description:
      "밤에 화장실을 자주 가거나 조명이 부족하면 넘어질 위험이 커질 수 있습니다.",
    items: ["센서등", "침대 옆 무드등", "복도 조명", "문턱 경사대"],
    link: "https://link.coupang.com/a/placeholder",
  },
  "약 관리": {
    description:
      "약 복용을 깜빡하거나 중복 복용하는 경우 정리 도구가 필요할 수 있습니다.",
    items: ["요일별 약통", "알람 약통", "약 정리함", "복약 체크리스트"],
    link: "https://link.coupang.com/a/placeholder",
  },
  "혈압/건강 관리": {
    description:
      "기본 건강 측정과 기록 습관이 부족하면 이상 신호를 놓칠 수 있습니다.",
    items: ["가정용 혈압계", "체온계", "혈당 기록 노트", "건강 기록장"],
    link: "https://link.coupang.com/a/placeholder",
  },
  "주방/생활 안전": {
    description:
      "전선, 문턱, 가스 사용, 높은 수납 위치는 생활 중 사고 위험을 높일 수 있습니다.",
    items: ["가스 자동차단기", "주방 타이머", "전선 정리함", "수납 박스"],
    link: "https://link.coupang.com/a/placeholder",
  },
};

const categories: Category[] = [
  "욕실 안전",
  "야간 이동",
  "약 관리",
  "혈압/건강 관리",
  "주방/생활 안전",
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResult, setShowResult] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const result = useMemo(() => {
    const categoryScores: Record<Category, number> = {
      "욕실 안전": 0,
      "야간 이동": 0,
      "약 관리": 0,
      "혈압/건강 관리": 0,
      "주방/생활 안전": 0,
    };

    let totalRiskScore = 0;

    questions.forEach((question) => {
      const answer = answers[question.id];

      if (!answer || answer === "na") {
        return;
      }

      let score = 0;

      // 위험 답변과 일치하면 2점, 반대 답변은 0점으로 계산합니다.
      if (answer === question.dangerAnswer) {
        score = 2;
      }

      totalRiskScore += score;
      categoryScores[question.category] += score;
    });

    const safetyScore = Math.max(0, 100 - totalRiskScore * 4);

    let level = "";
    let levelColor: "green" | "yellow" | "red" = "green";

    if (totalRiskScore <= 5) {
      level = "안전한 편";
      levelColor = "green";
    } else if (totalRiskScore <= 12) {
      level = "주의 필요";
      levelColor = "yellow";
    } else {
      level = "위험 요소 많음";
      levelColor = "red";
    }

    const topRisks = categories
      .map((category) => ({
        category,
        score: categoryScores[category],
        ...categoryInfo[category],
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return {
      totalRiskScore,
      safetyScore,
      level,
      levelColor,
      categoryScores,
      topRisks,
    };
  }, [answers]);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

  const handleAnswer = (questionId: number, answer: Answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleShowResult = () => {
    if (!isComplete) {
      alert("15개 문항에 모두 답해주세요.");
      return;
    }

    setShowResult(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetTest = () => {
    setStarted(false);
    setShowResult(false);
    setAnswers({});
    setCopyMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyResult = async () => {
    const recommendedItems = result.topRisks
      .flatMap((risk) => risk.items)
      .slice(0, 8);

    const text = `
[부모님 집 안전 점검 결과]

부모님 집 안전 점수: ${result.safetyScore}점
위험 단계: ${result.level}
위험 점수: ${result.totalRiskScore}점

가장 먼저 점검할 곳 TOP 3:
${result.topRisks
  .map((risk, index) => `${index + 1}. ${risk.category}`)
  .join("\n")}

추천 준비물:
${recommendedItems.map((item) => `- ${item}`).join("\n")}

※ 이 결과는 생활 안전 점검용 참고 자료입니다. 의학적 진단이나 치료를 대신하지 않습니다.
    `.trim();

    await navigator.clipboard.writeText(text);
    setCopyMessage("결과가 복사되었습니다.");
  };

  if (!started) {
    return (
      <main className="min-h-screen bg-[#f5f5f2] px-4 py-8 text-gray-900">
        <div className="mx-auto flex min-h-[85vh] max-w-5xl items-center">
          <section className="w-full rounded-[2rem] bg-white p-6 shadow-sm md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  3분 생활 안전 체크
                </p>

                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  부모님 집,
                  <br />
                  정말 안전할까요?
                </h1>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  욕실, 야간 이동, 약 관리, 건강 측정, 주방 안전까지
                  15문항으로 부모님 집의 생활 위험 신호를 확인해보세요.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setStarted(true)}
                    className="rounded-2xl bg-black px-6 py-4 text-lg font-black text-white hover:bg-gray-800"
                  >
                    점검 시작하기
                  </button>

                  <button
                    onClick={() => {
                      setStarted(true);
                      const exampleAnswers: Record<number, Answer> = {};
                      questions.forEach((question) => {
                        exampleAnswers[question.id] =
                          question.dangerAnswer === "yes" ? "yes" : "no";
                      });
                      setAnswers(exampleAnswers);
                    }}
                    className="rounded-2xl border border-gray-300 px-6 py-4 text-lg font-black hover:bg-gray-50"
                  >
                    예시로 보기
                  </button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-emerald-100 to-yellow-100 p-6">
                <div className="rounded-[1.5rem] bg-white/80 p-6 shadow-sm">
                  <p className="text-sm font-bold text-gray-500">
                    점검 영역
                  </p>

                  <div className="mt-5 grid gap-3">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="rounded-2xl bg-white px-4 py-3 font-bold shadow-sm"
                      >
                        {category}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-sm leading-6 text-gray-500">
                    체크 결과에 따라 위험 TOP 3와 필요한 생활 안전템을
                    추천합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (showResult) {
    return (
      <main className="min-h-screen bg-[#f5f5f2] px-4 py-8 text-gray-900">
        <div className="mx-auto max-w-6xl">
          <section className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
            <p className="mb-3 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-bold">
              부모님 집 안전 점검 결과
            </p>

            <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div
                className={`rounded-[2rem] p-8 text-center ${
                  result.levelColor === "green"
                    ? "bg-emerald-50"
                    : result.levelColor === "yellow"
                    ? "bg-yellow-50"
                    : "bg-red-50"
                }`}
              >
                <p className="text-sm font-black text-gray-500">안전 점수</p>
                <p
                  className={`mt-3 text-7xl font-black ${
                    result.levelColor === "green"
                      ? "text-emerald-600"
                      : result.levelColor === "yellow"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {result.safetyScore}
                </p>
                <p className="mt-3 text-2xl font-black">{result.level}</p>
                <p className="mt-2 text-sm text-gray-500">
                  위험 점수 {result.totalRiskScore}점
                </p>
              </div>

              <div>
                <h1 className="text-3xl font-black md:text-5xl">
                  가장 먼저 점검할 곳은
                  <br />
                  <span className="text-emerald-700">
                    {result.topRisks[0]?.category}
                  </span>
                  입니다.
                </h1>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  아래 위험 TOP 3를 기준으로 부모님 집의 생활 안전 환경을
                  먼저 점검해보세요.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={copyResult}
                    className="rounded-2xl bg-black px-5 py-3 font-black text-white hover:bg-gray-800"
                  >
                    결과 복사하기
                  </button>

                  <button
                    onClick={resetTest}
                    className="rounded-2xl border border-gray-300 px-5 py-3 font-black hover:bg-white"
                  >
                    다시 점검하기
                  </button>
                </div>

                {copyMessage && (
                  <p className="mt-3 text-sm font-bold text-emerald-700">
                    {copyMessage}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="mb-6 grid gap-4 md:grid-cols-3">
            {result.topRisks.map((risk, index) => (
              <article
                key={risk.category}
                className="rounded-[2rem] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-gray-400">
                  TOP {index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-black">{risk.category}</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  {risk.description}
                </p>

                <div className="mt-5 rounded-2xl bg-gray-50 p-4">
                  <p className="mb-3 text-sm font-black text-gray-500">
                    추천 준비물
                  </p>

                  <ul className="space-y-2">
                    {risk.items.map((item) => (
                      <li key={item} className="font-bold">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={risk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-2xl bg-black px-5 py-3 text-center font-black text-white hover:bg-gray-800"
                >
                  추천템 보러가기
                </a>
              </article>
            ))}
          </section>

          <section className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">영역별 위험 점수</h2>

            <div className="mt-5 grid gap-3">
              {categories.map((category) => (
                <div key={category}>
                  <div className="mb-2 flex items-center justify-between text-sm font-bold">
                    <span>{category}</span>
                    <span>{result.categoryScores[category]}점</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{
                        width: `${Math.min(
                          100,
                          (result.categoryScores[category] / 6) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 text-sm leading-6 text-gray-500">
            <p className="rounded-3xl bg-white p-5 shadow-sm">
              이 점검표는 부모님 집의 생활 안전 환경을 확인하기 위한 참고용
              도구입니다. 의학적 진단이나 치료를 대신하지 않으며, 낙상
              위험이 높거나 건강 이상 증상이 있다면 전문가와 상담하세요.
            </p>

            <p className="rounded-3xl bg-white p-5 shadow-sm">
              이 페이지에는 쿠팡파트너스 링크가 포함될 수 있으며, 이를 통해
              일정액의 수수료를 제공받을 수 있습니다.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f2] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <section className="mb-6 rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                {answeredCount}/{questions.length}개 응답 완료
              </p>
              <h1 className="text-3xl font-black md:text-5xl">
                부모님 집 안전 점검표
              </h1>
              <p className="mt-3 text-gray-600">
                각 문항에 예, 아니오, 해당 없음 중 하나를 선택해주세요.
              </p>
            </div>

            <button
              onClick={handleShowResult}
              className="rounded-2xl bg-black px-6 py-4 font-black text-white hover:bg-gray-800"
            >
              결과 보기
            </button>
          </div>
        </section>

        <section className="space-y-6">
          {categories.map((category) => (
            <div key={category} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">{category}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {categoryInfo[category].description}
              </p>

              <div className="mt-5 space-y-4">
                {questions
                  .filter((question) => question.category === category)
                  .map((question) => (
                    <article
                      key={question.id}
                      className="rounded-2xl border border-gray-200 p-4"
                    >
                      <p className="font-bold leading-7">
                        {question.id}. {question.text}
                      </p>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <AnswerButton
                          label="예"
                          selected={answers[question.id] === "yes"}
                          onClick={() => handleAnswer(question.id, "yes")}
                        />
                        <AnswerButton
                          label="아니오"
                          selected={answers[question.id] === "no"}
                          onClick={() => handleAnswer(question.id, "no")}
                        />
                        <AnswerButton
                          label="해당 없음"
                          selected={answers[question.id] === "na"}
                          onClick={() => handleAnswer(question.id, "na")}
                        />
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </section>

        <div className="sticky bottom-4 mt-6 rounded-3xl bg-white/90 p-4 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold">
              {answeredCount}/{questions.length}개 응답 완료
            </p>
            <button
              onClick={handleShowResult}
              className="rounded-2xl bg-black px-6 py-4 font-black text-white hover:bg-gray-800"
            >
              결과 보기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function AnswerButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-3 py-3 text-sm font-black transition ${
        selected
          ? "border-black bg-black text-white"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}