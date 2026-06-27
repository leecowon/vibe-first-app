"use client";

import { useEffect, useState } from "react";

type Memo = {
  id: number;
  title: string;
  content: string;
  category: string;
  isImportant: boolean;
  createdAt: string;
};

const categories = ["공부", "업무", "아이디어", "개인"];

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("공부");
  const [isImportant, setIsImportant] = useState(false);
  const [memos, setMemos] = useState<Memo[]>([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMemos = localStorage.getItem("memos");

    if (savedMemos) {
      setMemos(JSON.parse(savedMemos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("공부");
    setIsImportant(false);
    setEditingId(null);
  };

  const showMessage = (text: string) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const saveMemo = () => {
    if (title.trim() === "" || content.trim() === "") {
      showMessage("제목과 내용을 모두 입력해주세요.");
      return;
    }

    if (editingId) {
      const updatedMemos = memos.map((memo) =>
        memo.id === editingId
          ? {
              ...memo,
              title,
              content,
              category,
              isImportant,
            }
          : memo
      );

      setMemos(updatedMemos);
      resetForm();
      showMessage("메모가 수정되었습니다.");
      return;
    }

    const newMemo: Memo = {
      id: Date.now(),
      title,
      content,
      category,
      isImportant,
      createdAt: new Date().toLocaleString("ko-KR"),
    };

    setMemos([newMemo, ...memos]);
    resetForm();
    showMessage("메모가 저장되었습니다.");
  };

  const editMemo = (memo: Memo) => {
    setTitle(memo.title);
    setContent(memo.content);
    setCategory(memo.category);
    setIsImportant(memo.isImportant);
    setEditingId(memo.id);
    showMessage("수정할 메모를 불러왔습니다.");
  };

  const deleteMemo = (id: number) => {
    const filteredMemos = memos.filter((memo) => memo.id !== id);
    setMemos(filteredMemos);
    showMessage("메모가 삭제되었습니다.");
  };

  const filteredMemos = memos.filter((memo) => {
    const keyword = search.toLowerCase();

    return (
      memo.title.toLowerCase().includes(keyword) ||
      memo.content.toLowerCase().includes(keyword)
    );
  });

  const importantCount = memos.filter((memo) => memo.isImportant).length;

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <section className="mb-6 rounded-2xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold">나의 메모 관리 앱</h1>
          <p className="mt-2 text-gray-600">
            Cursor, Next.js, Tailwind CSS로 만든 실사용 메모 앱입니다.
          </p>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">전체 메모</p>
            <p className="mt-2 text-3xl font-bold">{memos.length}개</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">중요 메모</p>
            <p className="mt-2 text-3xl font-bold">{importantCount}개</p>
          </div>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-6 shadow">
          <div className="space-y-4">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="메모 제목을 입력하세요"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />

            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="메모 내용을 입력하세요"
              className="h-32 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-3">
                <input
                  type="checkbox"
                  checked={isImportant}
                  onChange={(event) => setIsImportant(event.target.checked)}
                />
                <span>중요 메모로 표시</span>
              </label>
            </div>

            <button
              onClick={saveMemo}
              className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white"
            >
              {editingId ? "수정 완료" : "메모 저장하기"}
            </button>

            {editingId && (
              <button
                onClick={resetForm}
                className="w-full rounded-xl border border-gray-300 px-5 py-3 font-semibold"
              >
                수정 취소
              </button>
            )}

            {message && (
              <p className="rounded-xl bg-gray-100 px-4 py-3 text-center text-sm text-gray-700">
                {message}
              </p>
            )}
          </div>
        </section>

        <section className="mb-6 rounded-2xl bg-white p-6 shadow">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="제목 또는 내용으로 검색하세요"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />
        </section>

        <section className="space-y-4">
          {filteredMemos.length === 0 ? (
            <div className="rounded-2xl bg-white p-8 text-center text-gray-500 shadow">
              아직 표시할 메모가 없습니다.
            </div>
          ) : (
            filteredMemos.map((memo) => (
              <article
                key={memo.id}
                className={`rounded-2xl bg-white p-6 shadow ${
                  memo.isImportant ? "border-2 border-yellow-400" : ""
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    {memo.category}
                  </span>

                  {memo.isImportant && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      중요
                    </span>
                  )}

                  <span className="text-sm text-gray-400">
                    {memo.createdAt}
                  </span>
                </div>

                <h2 className="mb-2 text-xl font-bold">{memo.title}</h2>
                <p className="mb-5 whitespace-pre-wrap text-gray-700">
                  {memo.content}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => editMemo(memo)}
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
                  >
                    수정
                  </button>

                  <button
                    onClick={() => deleteMemo(memo.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white"
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}