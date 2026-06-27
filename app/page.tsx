"use client";

import { useState } from "react";

type Memo = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memos, setMemos] = useState<Memo[]>([]);

  const addMemo = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newMemo: Memo = {
      id: Date.now(),
      title,
      content,
    };

    setMemos([newMemo, ...memos]);
    setTitle("");
    setContent("");
  };

  const deleteMemo = (id: number) => {
    const filteredMemos = memos.filter((memo) => memo.id !== id);
    setMemos(filteredMemos);
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <section className="rounded-2xl bg-white p-6 shadow">
          <h1 className="mb-2 text-3xl font-bold">나의 메모 앱</h1>
          <p className="mb-6 text-gray-600">
            Cursor와 Next.js로 만든 첫 번째 메모 앱입니다.
          </p>

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

            <button
              onClick={addMemo}
              className="w-full rounded-xl bg-black px-5 py-3 font-semibold text-white"
            >
              메모 저장하기
            </button>
          </div>
        </section>

        <section className="mt-6 space-y-4">
          {memos.length === 0 ? (
            <p className="rounded-2xl bg-white p-6 text-center text-gray-500 shadow">
              아직 저장된 메모가 없습니다.
            </p>
          ) : (
            memos.map((memo) => (
              <div key={memo.id} className="rounded-2xl bg-white p-6 shadow">
                <h2 className="mb-2 text-xl font-bold">{memo.title}</h2>
                <p className="mb-4 whitespace-pre-wrap text-gray-700">
                  {memo.content}
                </p>
                <button
                  onClick={() => deleteMemo(memo.id)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}