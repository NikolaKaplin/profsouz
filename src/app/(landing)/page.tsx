"use client";

import landing from "./landing.module.css";

export default function MainScreen() {
  return (
    <section id="mainscreen">
      <div className={`${landing.container} container w-full relative mx-auto px-4 py-12`}>
        <div className="bubbles-container mb-16">
          <div className={`${landing.bubble} mb-8`} style={{"--duration": "1.1s"} as any} >
            <h1 className="text-primary text-4xl font-semibold">
              <b>Профсоюз</b> - это...
            </h1>
          </div>
          <AbsoluteBubble duration={1200} className="left-[15%] top-[40%]">каждый из нас</AbsoluteBubble>
          <AbsoluteBubble duration={1300} className="left-[50%] top-[50%]">каждый из нас</AbsoluteBubble>
          <AbsoluteBubble duration={1250} className="right-[15%] top-[40%]">каждый из нас</AbsoluteBubble>
        </div>
      </div>
      <div className="container">
      <div>
          <h2 className="mb-8 text-center text-2xl font-semibold">
            А также твои
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            <AdvantageCard>Коллективный договор</AdvantageCard>
            <AdvantageCard>Опора и защита</AdvantageCard>
            <AdvantageCard>Комфортные условия труда</AdvantageCard>
            <AdvantageCard>Уверенность в завтрашнем дне</AdvantageCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function AbsoluteBubble({children, duration, className}: {children: string; duration: number; className?: string}) {
  return (
    <div className={`${landing.bubble} shadow-lg ${className}`} style={{"--duration": `${duration}ms`} as any} >
      <h3 className="text-primary text-xl font-semibold">
        {children}
      </h3>
    </div>
  )
}

function AdvantageCard({children}: {children: string}) {
  return (
    <div className={`${landing.arrowBlock} relative rounded-lg bg-primary text-primary-foreground p-6 transition-transform duration-300 shadow-lg`}>
      <h4 className="text-lg font-medium">
        {children}
      </h4>
    </div>
  )
}