"use client";

import { useAwait } from "~/hooks/use-await";
import landing from "./landing.module.css";
import { getLastNews } from "./actions";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default function MainScreen() {
  const news = useAwait(getLastNews) ?? [];

  return (
    <div className="flex flex-col gap-16">
      <section id="mainscreen">
        <div
          className={`${landing.container} container relative mx-auto w-full px-4 py-12`}
        >
          <div>
            <div
              className={`${landing.bubble} mb-8`}
              style={{ "--duration": "1.1s" } as any}
            >
              <h1 className="text-4xl font-semibold text-primary">
                <b>Профсоюз</b> - это...
              </h1>
            </div>
            <AbsoluteBubble
              duration={1200}
              className="top-[40%] lg:left-[18%] lg:top-[24%]"
            >
              каждый из нас
            </AbsoluteBubble>
            <AbsoluteBubble
              duration={1300}
              className="left-[50%] top-[55%] lg:left-[50%] lg:top-[50%]"
            >
              и все мы
            </AbsoluteBubble>
            <AbsoluteBubble duration={1250} className="right-[22%] top-[22%]">
              вместе
            </AbsoluteBubble>
          </div>
        </div>
        <div className="container">
          <div>
            <h2 className="text-center text-2xl font-semibold">А также твои</h2>
            <div className="flex gap-4">
              <AdvantageCard>Коллективный договор</AdvantageCard>
              <AdvantageCard>Опора и защита</AdvantageCard>
              <AdvantageCard>Комфортные условия труда</AdvantageCard>
              <AdvantageCard>Уверенность в завтрашнем дне</AdvantageCard>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="pb-8 text-center text-2xl font-semibold">
          Последние новости
        </h1>
        <div className="flex grid-cols-[repeat(auto-fill,_32%)] flex-col gap-4 md:grid md:[&_>div]:max-w-[470px]">
          {news.map((n) => (
            <div
              key={n.id}
              className="overflow-hidden rounded-lg p-4 text-sm ring-2"
            >
              <h2 className="text-xl font-semibold">{n.title}</h2>
              <span className="text-gray-500">
                {new Date(n.createdAt).toLocaleDateString()}
              </span>
              {n.content ? (
                <RichText data={n.content} />
              ) : (
                <p>Нет содержания</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AbsoluteBubble({
  children,
  duration,
  className,
}: {
  children: string;
  duration: number;
  className?: string;
}) {
  return (
    <div
      className={`${landing.bubble} shadow-lg ${className}`}
      style={{ "--duration": `${duration}ms` } as any}
    >
      <h3 className="text-xl font-semibold text-primary">{children}</h3>
    </div>
  );
}

function AdvantageCard({ children }: { children: string }) {
  return (
    <div
      className={`${landing.arrowBlock} relative rounded-2xl bg-blue-50 p-6 text-[#003f81] shadow-lg transition-transform duration-300`}
    >
      <h4 className="font-medium">{children}</h4>
    </div>
  );
}
