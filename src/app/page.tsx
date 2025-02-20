"use client";

import { useEffect } from "react";

export default function MainScreen() {
  // Add animation class when component mounts
  useEffect(() => {
    const animateItems = document.querySelectorAll("._animateItems");
    animateItems.forEach((item) => {
      item.classList.add("_active");
    });
  }, []);

  return (
    <section id="mainscreen">
      <div className="container mx-auto px-4 py-12">
        <div className="bubbles-container relative mb-16">
          <div className="bubble bubble1 _animateItems mb-8">
            <h1 className="text-primary text-4xl font-bold">
              Профсоюз - это...
            </h1>
          </div>
          <div className="bubble bubble2 _animateItems">
            <h3 className="text-primary animate-bounce text-xl font-medium">
              каждый из нас
            </h3>
          </div>
          <div className="bubble bubble3 _animateItems">
            <h3 className="text-primary text-xl font-medium">и все мы</h3>
          </div>
          <div className="bubble bubble4 _animateItems">
            <h3 className="text-primary text-xl font-medium">вместе</h3>
          </div>
        </div>

        <div className="mainscreen-lenta">
          <h2 className="mb-8 text-center text-2xl font-semibold">
            А также твои
          </h2>
          <div className="main-lenta-content grid gap-8 md:grid-cols-2">
            <div className="lenta-col1 space-y-6">
              <div className="block-arrow _animateItems relative rounded-lg bg-white p-6 shadow-lg">
                <h4 className="text-lg font-medium">Коллективный договор</h4>
              </div>
              <div className="block-arrow _animateItems relative rounded-lg bg-white p-6 shadow-lg">
                <h4 className="text-lg font-medium">Опора и защита</h4>
              </div>
            </div>
            <div className="lenta-col2 space-y-6">
              <div className="block-arrow _animateItems relative rounded-lg bg-white p-6 shadow-lg">
                <h4 className="text-lg font-medium">
                  Комфортные условия труда
                </h4>
              </div>
              <div className="block-arrow _animateItems relative rounded-lg bg-white p-6 shadow-lg">
                <h4 className="text-lg font-medium">
                  Уверенность в завтрашнем дне
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
