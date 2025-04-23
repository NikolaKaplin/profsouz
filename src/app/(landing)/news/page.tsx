"use client";

import { useState, useMemo } from "react";
import { NewCard } from "~/components/shared/new-card";
import { useAwait } from "~/hooks/use-await";
import { getLastNews } from "../actions";
import { Button } from "~/components/ui/button";
import { News } from "payload-types";
export default function Home() {
  const [tab, setTab] = useState<string>("all");
  const news = useAwait(getLastNews) ?? [];

  const filteredNews = useMemo(() => {
    if (tab === "all") return news;
    //@ts-ignore
    return news.filter((item: News) => item.stat?.title === tab);
  }, [news, tab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#003f81]">
          Новости профсоюза КСТ
        </h1>

        <div className="mb-6 justify-center">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={tab === "all" ? "default" : "outline"}
              onClick={() => setTab("all")}
            >
              Все
            </Button>
            <Button
              variant={tab === "УК1" ? "default" : "outline"}
              onClick={() => setTab("УК1")}
            >
              УК1
            </Button>
            <Button
              variant={tab === "УК2" ? "default" : "outline"}
              onClick={() => setTab("УК2")}
            >
              УК2
            </Button>
            <Button
              variant={tab === "УК3" ? "default" : "outline"}
              onClick={() => setTab("УК3")}
            >
              УК3
            </Button>
            <Button
              variant={tab === "УК4" ? "default" : "outline"}
              onClick={() => setTab("УК4")}
            >
              УК4
            </Button>
          </div>
        </div>

        <div className="px-0 py-6 sm:px-0">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((newItem) => (
                <NewCard key={newItem.id} props={newItem} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-500">Новости не найдены</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
