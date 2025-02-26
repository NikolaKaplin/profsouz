"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useAwait } from "~/hooks/use-await";
import { getLastNews } from "../actions";
import { NewCard } from "~/components/shared/new-card";

export default function Home() {
  const news = useAwait(getLastNews) ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#003f81]">
          Новости профсоюза КСТ
        </h1>

        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((neww) => (
              <NewCard key={neww.id} props={neww} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
