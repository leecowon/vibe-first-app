"use client";

import { useState } from "react";

type FormData = {
  husbandIncome: string;
  wifeIncome: string;
  extraIncome: string;
  housingCost: string;
  utilityCost: string;
  phoneCost: string;
  insuranceCost: string;
  educationCost: string;
  foodCost: string;
  transportCost: string;
  cardLivingCost: string;
  loanPayment: string;
  otherFixedCost: string;
  monthlySavingGoal: string;
  emergencyFundGoal: string;
  currentEmergencyFund: string;
};

type Result = {
  totalIncome: number;
  totalFixedCost: number;
  totalLivingCost: number;
  totalLoanPayment: number;
  totalExpense: number;
  monthlyBalance: number;
  savingRate: number;
  loanBurdenRate: number;
  livingCostRate: number;
  canReachSavingGoal: boolean;
  emergencyFundMonthsText: string;
  diagnosis: string;
  warnings: string[];
  statusColor: "green" | "yellow" | "red";
};

const initialForm: FormData = {
  husbandIncome: "",
  wifeIncome: "",
  extraIncome: "",
  housingCost: "",
  utilityCost: "",
  phoneCost: "",
  insuranceCost: "",
  educationCost: "",
  foodCost: "",
  transportCost: "",
  cardLivingCost: "",
  loanPayment: "",
  otherFixedCost: "",
  monthlySavingGoal: "",
  emergencyFundGoal: "",
  currentEmergencyFund: "",
};

export default function Home() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [result, setResult] = useState<Result | null>(null);
  const [message, setMessage] = useState("");

  const toNumber = (value: string) => {
    return Number(value.replaceAll(",", "")) || 0;
  };

  const formatWon = (value: number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(value)) + "원";
  };

  const formatPercent = (value: number) => {
    if (!isFinite(value)) return "0%";
    return value.toFixed(1) + "%";
  };

  const updateField = (key: keyof FormData, value: string) => {
    const onlyNumber = value.replace(/[^0-9]/g, "");

    setForm({
      ...form,
      [key]: onlyNumber,
    });
  };

  const getInputValue = (key: keyof FormData) => {
    const value = form[key];
    if (!value) return "";
    return new Intl.NumberFormat("ko-KR").format(Number(value));
  };

  const calculate = () => {
    const husbandIncome = toNumber(form.husbandIncome);
    const wifeIncome = toNumber(form.wifeIncome);
    const extraIncome = toNumber(form.extraIncome);

    const housingCost = toNumber(form.housingCost);
    const utilityCost = toNumber(form.utilityCost);
    const phoneCost = toNumber(form.phoneCost);
    const insuranceCost = toNumber(form.insuranceCost);
    const educationCost = toNumber(form.educationCost);
    const foodCost = toNumber(form.foodCost);
    const transportCost = toNumber(form.transportCost);
    const cardLivingCost = toNumber(form.cardLivingCost);
    const loanPayment = toNumber(form.loanPayment);
    const otherFixedCost = toNumber(form.otherFixedCost);

    const monthlySavingGoal = toNumber(form.monthlySavingGoal);
    const emergencyFundGoal = toNumber(form.emergencyFundGoal);
    const currentEmergencyFund = toNumber(form.currentEmergencyFund);

    const totalIncome = husbandIncome + wifeIncome + extraIncome;

    if (totalIncome <= 0) {
      setMessage("부부 합산 월수입을 입력해주세요.");
      setResult(null);
      return;
    }

    // 고정지출: 매달 거의 고정적으로 나가는 비용
    const totalFixedCost =
      housingCost +
      utilityCost +
      phoneCost +
      insuranceCost +
      educationCost +
      otherFixedCost;

    // 생활비: 매달 변동 가능성이 큰 비용
    const totalLivingCost = foodCost + transportCost + cardLivingCost;

    const totalLoanPayment = loanPayment;
    const totalExpense = totalFixedCost + totalLivingCost + totalLoanPayment;
    const monthlyBalance = totalIncome - totalExpense;

    const savingRate = (monthlyBalance / totalIncome) * 100;
    const loanBurdenRate = (totalLoanPayment / totalIncome) * 100;
    const livingCostRate = (totalLivingCost / totalIncome) * 100;

    const canReachSavingGoal = monthlyBalance >= monthlySavingGoal;

    const neededEmergencyFund = emergencyFundGoal - currentEmergencyFund;

    let emergencyFundMonthsText = "";

    if (neededEmergencyFund <= 0) {
      emergencyFundMonthsText = "이미 비상금 목표를 달성했습니다.";
    } else if (monthlyBalance <= 0) {
      emergencyFundMonthsText = "현재 구조로는 달성 어려움";
    } else {
      const months = Math.ceil(neededEmergencyFund / monthlyBalance);
      emergencyFundMonthsText = `약 ${months}개월`;
    }

    let diagnosis = "";
    let statusColor: "green" | "yellow" | "red" = "green";

    if (savingRate >= 20) {
      diagnosis = "좋은 저축 구조입니다.";
      statusColor = "green";
    } else if (savingRate >= 10) {
      diagnosis = "저축은 가능하지만 지출 점검이 필요합니다.";
      statusColor = "yellow";
    } else if (savingRate >= 0) {
      diagnosis = "저축 여력이 낮습니다. 생활비나 고정지출 조정이 필요합니다.";
      statusColor = "yellow";
    } else {
      diagnosis = "현재 구조는 적자입니다. 지출 재조정이 필요합니다.";
      statusColor = "red";
    }

    const warnings: string[] = [];

    if (loanBurdenRate >= 30) {
      warnings.push("대출 상환 부담이 높은 편입니다.");
    }

    if (livingCostRate >= 35) {
      warnings.push("생활비 비중이 높습니다.");
    }

    setResult({
      totalIncome,
      totalFixedCost,
      totalLivingCost,
      totalLoanPayment,
      totalExpense,
      monthlyBalance,
      savingRate,
      loanBurdenRate,
      livingCostRate,
      canReachSavingGoal,
      emergencyFundMonthsText,
      diagnosis,
      warnings,
      statusColor,
    });

    setMessage("");
  };

  const fillExample = () => {
    setForm({
      husbandIncome: "5000000",
      wifeIncome: "2700000",
      extraIncome: "0",
      housingCost: "1000000",
      utilityCost: "300000",
      phoneCost: "150000",
      insuranceCost: "300000",
      educationCost: "400000",
      foodCost: "1000000",
      transportCost: "300000",
      cardLivingCost: "1500000",
      loanPayment: "1800000",
      otherFixedCost: "200000",
      monthlySavingGoal: "1000000",
      emergencyFundGoal: "10000000",
      currentEmergencyFund: "3000000",
    });
    setMessage("예시 값이 입력되었습니다. 계산하기를 눌러보세요.");
  };

  const resetAll = () => {
    setForm(initialForm);
    setResult(null);
    setMessage("");
  };

  const copyResult = async () => {
    if (!result) return;

    const text = `
[부부가 부자되는 법 계산 결과]

부부 합산 월수입: ${formatWon(result.totalIncome)}
총 지출: ${formatWon(result.totalExpense)}
월 잔액: ${formatWon(result.monthlyBalance)}
저축률: ${formatPercent(result.savingRate)}
대출상환 부담률: ${formatPercent(result.loanBurdenRate)}
생활비 부담률: ${formatPercent(result.livingCostRate)}
비상금 목표 달성 예상 기간: ${result.emergencyFundMonthsText}

진단:
${result.diagnosis}

${
  result.warnings.length > 0
    ? "주의:\n" + result.warnings.map((item) => `- ${item}`).join("\n")
    : "주의 항목 없음"
}
    `.trim();

    await navigator.clipboard.writeText(text);
    setMessage("계산 결과가 복사되었습니다.");
  };

  const inputItems: {
    key: keyof FormData;
    label: string;
    group: "수입" | "고정지출" | "생활비/대출" | "목표";
  }[] = [
    { key: "husbandIncome", label: "남편 월수입", group: "수입" },
    { key: "wifeIncome", label: "아내 월수입", group: "수입" },
    { key: "extraIncome", label: "기타 수입", group: "수입" },

    { key: "housingCost", label: "주거비", group: "고정지출" },
    { key: "utilityCost", label: "관리비/공과금", group: "고정지출" },
    { key: "phoneCost", label: "통신비", group: "고정지출" },
    { key: "insuranceCost", label: "보험료", group: "고정지출" },
    { key: "educationCost", label: "교육비", group: "고정지출" },
    { key: "otherFixedCost", label: "기타 고정지출", group: "고정지출" },

    { key: "foodCost", label: "식비", group: "생활비/대출" },
    { key: "transportCost", label: "교통비", group: "생활비/대출" },
    { key: "cardLivingCost", label: "카드값/생활비", group: "생활비/대출" },
    { key: "loanPayment", label: "대출 상환액", group: "생활비/대출" },

    { key: "monthlySavingGoal", label: "월 저축 목표", group: "목표" },
    { key: "emergencyFundGoal", label: "비상금 목표", group: "목표" },
    { key: "currentEmergencyFund", label: "현재 비상금", group: "목표" },
  ];

  const groups: ("수입" | "고정지출" | "생활비/대출" | "목표")[] = [
    "수입",
    "고정지출",
    "생활비/대출",
    "목표",
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <p className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold">
            부부 통합 가계부 시뮬레이터
          </p>
          <h1 className="text-3xl font-black tracking-tight md:text-5xl">
            부부가 부자되는 법
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 md:text-lg">
            우리 집 돈이 어디로 새는지, 한 달에 얼마를 모을 수 있는지
            계산해보세요.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl bg-white p-5 shadow-sm md:p-6">
            <div className="mb-5 flex flex-wrap gap-2">
              <button
                onClick={fillExample}
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-bold hover:bg-gray-100"
              >
                예시 입력값 채우기
              </button>
              <button
                onClick={resetAll}
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-bold hover:bg-gray-100"
              >
                전체 초기화
              </button>
            </div>

            {groups.map((group) => (
              <div key={group} className="mb-7">
                <h2 className="mb-3 text-lg font-black">{group}</h2>

                <div className="grid gap-3 md:grid-cols-2">
                  {inputItems
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <label key={item.key} className="block">
                        <span className="mb-1 block text-sm font-semibold text-gray-700">
                          {item.label}
                        </span>
                        <div className="relative">
                          <input
                            value={getInputValue(item.key)}
                            onChange={(event) =>
                              updateField(item.key, event.target.value)
                            }
                            placeholder="0"
                            inputMode="numeric"
                            className="w-full rounded-2xl border border-gray-300 px-4 py-3 pr-10 outline-none focus:border-black"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                            원
                          </span>
                        </div>
                      </label>
                    ))}
                </div>
              </div>
            ))}

            {message && (
              <p className="mb-4 rounded-2xl bg-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-700">
                {message}
              </p>
            )}

            <button
              onClick={calculate}
              className="w-full rounded-2xl bg-black px-5 py-4 text-lg font-black text-white hover:bg-gray-800"
            >
              계산하기
            </button>
          </section>

          <section className="space-y-4">
            {!result ? (
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                <p className="text-lg font-bold">아직 계산 결과가 없습니다.</p>
                <p className="mt-2 text-gray-500">
                  수입과 지출을 입력한 뒤 계산하기를 눌러주세요.
                </p>
              </div>
            ) : (
              <>
                <div
                  className={`rounded-3xl p-6 shadow-sm ${
                    result.statusColor === "green"
                      ? "bg-green-50"
                      : result.statusColor === "yellow"
                      ? "bg-yellow-50"
                      : "bg-red-50"
                  }`}
                >
                  <p className="text-sm font-bold text-gray-600">한 줄 진단</p>
                  <h2 className="mt-2 text-2xl font-black">
                    {result.diagnosis}
                  </h2>

                  {result.warnings.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm font-semibold">
                      {result.warnings.map((warning) => (
                        <li key={warning}>⚠️ {warning}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <ResultCard
                    title="부부 합산 월수입"
                    value={formatWon(result.totalIncome)}
                  />
                  <ResultCard
                    title="총 지출"
                    value={formatWon(result.totalExpense)}
                  />
                  <ResultCard
                    title="총 고정지출"
                    value={formatWon(result.totalFixedCost)}
                  />
                  <ResultCard
                    title="총 생활비"
                    value={formatWon(result.totalLivingCost)}
                  />
                  <ResultCard
                    title="총 대출상환"
                    value={formatWon(result.totalLoanPayment)}
                  />
                  <ResultCard
                    title="월 잔액"
                    value={formatWon(result.monthlyBalance)}
                    highlight={result.monthlyBalance >= 0 ? "good" : "bad"}
                  />
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-black">목표 달성 체크</h3>

                  <div className="space-y-3">
                    <InfoLine
                      label="목표 저축 가능 여부"
                      value={
                        result.canReachSavingGoal
                          ? "달성 가능합니다."
                          : "현재 구조로는 부족합니다."
                      }
                      good={result.canReachSavingGoal}
                    />
                    <InfoLine
                      label="부부 저축률"
                      value={formatPercent(result.savingRate)}
                      good={result.savingRate >= 20}
                    />
                    <InfoLine
                      label="대출상환 부담률"
                      value={formatPercent(result.loanBurdenRate)}
                      good={result.loanBurdenRate < 30}
                    />
                    <InfoLine
                      label="생활비 위험도"
                      value={formatPercent(result.livingCostRate)}
                      good={result.livingCostRate < 35}
                    />
                    <InfoLine
                      label="비상금 목표까지"
                      value={result.emergencyFundMonthsText}
                      good={!result.emergencyFundMonthsText.includes("어려움")}
                    />
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black">요약</h3>
                  <p className="mt-3 leading-7 text-gray-700">
                    이번 달 예상 잔액은{" "}
                    <strong>{formatWon(result.monthlyBalance)}</strong>입니다.
                    월 저축 목표는{" "}
                    <strong>
                      {result.canReachSavingGoal
                        ? "달성 가능합니다."
                        : "현재 구조로는 부족합니다."}
                    </strong>
                    현재 저축률은{" "}
                    <strong>{formatPercent(result.savingRate)}</strong>입니다.
                    대출상환 부담률은{" "}
                    <strong>{formatPercent(result.loanBurdenRate)}</strong>
                    입니다. 비상금 목표까지는{" "}
                    <strong>{result.emergencyFundMonthsText}</strong>이
                    필요합니다.
                  </p>

                  <button
                    onClick={copyResult}
                    className="mt-5 w-full rounded-2xl border border-gray-300 px-5 py-3 font-black hover:bg-gray-100"
                  >
                    결과 복사하기
                  </button>
                </div>

                <p className="rounded-3xl bg-white p-5 text-sm leading-6 text-gray-500 shadow-sm">
                  이 계산기는 가정의 월 현금흐름을 단순 계산하는 참고용
                  도구입니다. 실제 재무 판단은 개인의 대출 조건, 자산 상황,
                  가족 구성, 비상 상황에 따라 달라질 수 있습니다.
                </p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function ResultCard({
  title,
  value,
  highlight,
}: {
  title: string;
  value: string;
  highlight?: "good" | "bad";
}) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-gray-500">{title}</p>
      <p
        className={`mt-2 text-2xl font-black ${
          highlight === "good"
            ? "text-green-600"
            : highlight === "bad"
            ? "text-red-600"
            : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function InfoLine({
  label,
  value,
  good,
}: {
  label: string;
  value: string;
  good: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 px-4 py-3">
      <span className="text-sm font-bold text-gray-600">{label}</span>
      <span
        className={`text-right font-black ${
          good ? "text-green-600" : "text-red-600"
        }`}
      >
        {value}
      </span>
    </div>
  );
}