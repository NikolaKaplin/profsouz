"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BenefitItem } from "~/app/(landing)/types";
import { benefitItems } from "~/app/(landing)/constants";
import { useAwait } from "~/hooks/use-await";
import { getLastUser, getStatistics } from "~/app/(landing)/actions";

export function StatisticsSection() {
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitItem>(
    benefitItems[0]!,
  );
  const users = useAwait(getLastUser);
  const statistics = useAwait(getStatistics)!;

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold text-primary">
          С нами уже
        </h2>

        <div className="mb-8 flex flex-col items-center justify-center md:flex-row">
          <div className="mr-4 text-6xl font-bold text-orange-600">
            {statistics &&
              ~~(
                (statistics.reduce((sum, stat) => {
                  return sum + stat.users;
                }, 0) /
                  statistics.reduce((sum, stat) => {
                    return sum + stat.allUsers;
                  }, 0)) *
                100
              )}
            %
          </div>
          <div className="text-xl text-primary">
            работников нашей организации
          </div>
        </div>

        <div className="mx-auto mb-12 w-full max-w-2xl">
          <div className="h-4 w-[60%] rounded-full bg-orange-600"></div>
        </div>

        <div className="mb-4 text-center text-xl text-primary">
          А это{" "}
          <span className="font-semibold text-orange-600">
            {statistics &&
              statistics.reduce((sum, stat) => {
                return sum + stat.users;
              }, 0)}{" "}
            человек
          </span>
          , которым наш профсоюз предоставляет
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-md sm:grid-cols-4">
          {statistics
            ? statistics.map((stat) => (
                <>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 p-4 transition-all hover:shadow-md">
                    <div
                      style={{
                        fontSize: `${stat.title.length > 10 ? 20 : 40}px`,
                      }}
                      className="mt-2 text-xl font-bold text-primary"
                    >
                      {stat.title}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 p-4 transition-all hover:shadow-md">
                    <div className="text-lg font-medium text-primary">
                      Всего в штате
                    </div>
                    <div className="mt-2 text-3xl font-bold text-primary">
                      {stat.allUsers}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 p-4 transition-all hover:shadow-md">
                    <div className="text-lg font-medium text-primary">
                      С нами
                    </div>
                    <div className="mt-2 text-3xl font-bold text-orange-600">
                      {stat.users}
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-blue-50 p-4 transition-all hover:shadow-md">
                    <div
                      className="absolute bottom-0 left-0 right-0 h-full bg-green-600 bg-opacity-50 transition-transform duration-300"
                      style={{
                        transform: `translateY(${100 - Math.floor((stat.users / stat.allUsers) * 100)}%)`,
                      }}
                    />
                    <div className="relative z-10">
                      <div className="text-lg font-medium text-primary">
                        Охват
                      </div>
                      <div className="mt-2 text-3xl font-bold text-green-800">
                        {Math.floor((stat.users / stat.allUsers) * 100)}%
                      </div>
                    </div>
                  </div>
                </>
              ))
            : null}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-1/3">
            {benefitItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedBenefit(item)}
                className={`mb-4 flex w-full items-center rounded-full p-3 transition-all duration-300 ${
                  selectedBenefit.id === item.id
                    ? "bg-white font-medium text-primary shadow-md"
                    : "bg-transparent text-primary/80 hover:bg-white/50"
                }`}
              >
                <span className="mr-6 w-12 text-right text-3xl font-light text-blue-500">
                  {item.number}
                </span>
                <span className="text-lg">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full overflow-hidden rounded-lg bg-white p-8 shadow-md lg:w-2/3">
            <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBenefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-6 text-2xl font-semibold text-primary">
                  {selectedBenefit.title}
                </h3>
                <p className="text-gray-700">{selectedBenefit.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
