"use client";

import { NewCard } from "~/components/shared/new-card";
import { useAwait } from "~/hooks/use-await";
import { getLastNews, getStatistics } from "./actions";
import landing from "./landing.module.css";
import type React from "react";
import { StatisticsSection } from "~/components/shared/statistics-section";
import TestimonialCarousel from "~/components/shared/testimonial-carousel";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { steps } from "./constants";

export default function MainScreen() {
  const news = useAwait(getLastNews)?.slice(0, 4) ?? [];
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <section id="mainscreen">
        <div
          className={`${landing.container} container relative mx-auto w-full px-4 py-12`}
        >
          <div>
            <div
              className={`${landing.bubble} top-[50%] lg:top-[10%]`}
              style={{ "--duration": "1.1s" } as React.CSSProperties}
            >
              <h1 className="text-4xl font-semibold text-primary">
                <b>Профсоюз</b> - это...
              </h1>
            </div>
            <AbsoluteBubble
              duration={1200}
              className="left-[10%] top-[40%] hidden lg:left-[18%] lg:top-[24%] lg:block"
            >
              каждый из нас
            </AbsoluteBubble>
            <AbsoluteBubble
              duration={1300}
              className="left-[50%] top-[55%] hidden translate-x-[-50%] lg:left-[50%] lg:top-[50%] lg:block"
            >
              и все мы
            </AbsoluteBubble>
            <AbsoluteBubble
              duration={1250}
              className="right-[5%] top-[22%] hidden lg:right-[22%] lg:block"
            >
              вместе
            </AbsoluteBubble>
          </div>
        </div>
        <div className="container">
          <div>
            <h2 className="text-center text-2xl font-semibold">А также твои</h2>
            <div className="grid grid-cols-2 gap-4 overflow-x-auto pb-4 md:flex-wrap">
              <AdvantageCard>Коллективный договор</AdvantageCard>
              <AdvantageCard>Опора и защита</AdvantageCard>
              <AdvantageCard>Комфортные условия труда</AdvantageCard>
              <AdvantageCard>Уверенность в завтрашнем дне</AdvantageCard>
            </div>
          </div>
        </div>
      </section>
      <section id="about-union" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left column */}
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-medium text-orange-600">
                Что это такое?
              </h3>
              <h2 className="mb-4 border-b border-orange-600 pb-2 text-3xl font-semibold text-primary">
                Профсоюз - это
              </h2>
              <p className="mb-4 text-gray-700">
                профессиональный союз для представительства и защиты
                социально-трудовых прав и интересов работников сферы
                образования, студентов и неработающих пенсионеров.
              </p>
              <p className="mb-4 text-gray-700">
                С этой целью мы стремимся оставаться крупнейшей общественной
                организацией, сообществом социально ответственных граждан,
                разделяющих общие принципы, ценности и приоритеты, а также
                проявляющих активность в практической реализации общих задач.
              </p>
              <p className="text-gray-700">
                Мы выступаем за всеобщее качественное образование, достойный,
                безопасный профессиональный труд и благополучную жизнь.
              </p>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <div className="rounded-lg bg-blue-50 p-4 md:p-6">
                <h3 className="mb-4 text-center text-xl font-medium text-orange-600 md:mb-6 md:text-2xl">
                  Наши главные задачи
                </h3>

                <div className="flex flex-col gap-6">
                  <div className="flex justify-center">
                    <div className="font-medium text-primary">
                      Защита трудовых прав работника
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2">
                        <div className="rounded-full bg-white p-3 shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm text-primary">
                        Обеспечение соблюдения трудового законодательства в
                        части безопасности, охраны и оплаты труда
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2">
                        <div className="rounded-full bg-white p-3 shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm text-primary">
                        Помощь в быстром разрешении трудовых споров
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2">
                        <div className="rounded-full bg-white p-3 shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm text-primary">
                        Возможность повлиять на решения работодателя по поводу
                        увеличения заработной платы и улучшения условий труда
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Карусель */}
      <StatisticsSection />
      {/* Информация */}
      <TestimonialCarousel />
      {/*Новости */}
      {news ? (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-primary">
                Последние новости
              </h2>
              <Link
                href="/news"
                className="text-sm text-primary hover:underline"
              >
                Все новости
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {news.map((item) => (
                <NewCard key={item.id} props={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/** Приглос */}
      <section className="bg-[#F8FAFC] py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-2xl font-semibold text-[#003f81] md:mb-12 md:text-3xl">
            Вы еще не в профсоюзе?
          </h2>

          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left side - Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="text-3xl font-bold text-blue-500">
                    {step.number}
                  </div>
                  <div className="text-gray-700">{step.text}</div>
                </div>
              ))}
            </div>

            {/* Right side - Document samples */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mt-4 text-center">
                <p className="text-gray-600">Образцы документов</p>
                <a
                  href="https://storage.yandexcloud.net/profsouz/documents/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE-%D0%B2%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B2-%D0%BF%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Заявление-о-вступлении-в-профсоюз
                </a>
                <br />
                <a
                  href="https://storage.yandexcloud.net/profsouz/documents/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE-%D0%B2%D1%8B%D1%85%D0%BE%D0%B4%D0%B5-%D0%B8%D0%B7-%D0%BF%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7%D0%B0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Заявление-о-выходе-из-профсоюза
                </a>
                <br />
                <Link href="/about#documents">
                  <Button
                    variant="outline"
                    className="border-[#003f81] text-[#003f81] hover:bg-[#003f81] hover:text-white"
                  >
                    Скачать документы
                  </Button>
                </Link>
              </div>
            </div>
          </div>
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
      style={{ "--duration": `${duration}ms` } as React.CSSProperties}
    >
      <h3 className="text-xl font-semibold text-primary">{children}</h3>
    </div>
  );
}

function AdvantageCard({ children }: { children: string }) {
  return (
    <div
      className={`md:flex-shrink-1 relative min-w-[150px] flex-shrink-0 rounded-2xl bg-blue-50 p-2 text-[#003f81] shadow-lg transition-transform duration-300 md:min-w-0`}
    >
      <h3 className="font-medium">{children}</h3>
    </div>
  );
}
