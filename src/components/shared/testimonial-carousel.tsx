"use client";

import Image from "next/image";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алексей Геннадьевич Нефёдов",
    position: "Председатель совета молодых педагогов",
    image:
      "https://storage.yandexcloud.net/profsouz/humans/nefedof-e1708931020112.png",
    quote: `"Залог успешного развития – как системы образования, так и Профсоюза – воспитание перспективной, креативной и профессионально грамотной молодёжи. Совет молодых педагогов первичной профсоюзной организации ГБПОУ КСТ - общественное объединение молодых педагогических работников не достигших возраста 35 лет, членов Профсоюза работников народного образования и науки РФ, созданное в целях поддержки молодых специалистов в образовании, решения их социально-экономических проблем, защиты прав и интересов. Основные цели Совета молодых педагогов ППО ГБПОУ КСТ это – реализация молодёжной профсоюзной политики; создание условий для активного вовлечения молодых педагогов в Профсоюз и их участия в деятельности ППО ГБПОУ КСТ ТО УГСО и МГО Профсоюза работников народного образования и науки РФ; обобщение и распространение среди молодых педагогов передового педагогического опыта; подготовка предложений по усилению защиты социально-трудовых прав и профессиональных интересов молодых педагогов, а также популяризация профессии педагога. Без сомнения, эффективное развитие отрасли образования и её профессионального союза невозможно без организации работы с молодыми педагогами, ведь они – главный источник инициатив, новых идей и преобразований.\
"`,
  },
  {
    id: 2,
    name: "Глушенкова Оксана Борисовна",
    position: "Председатель первичной профсоюзной организации",
    image: "https://storage.yandexcloud.net/profsouz/humans/Glushenkova.jpg",
    quote:
      "Я рада приветствовать Вас на страничке первичной профсоюзной организации работников ГБПОУ КСТ ТО УГСО МГО Общероссийского профсоюза образования. Авторитет первичной профсоюзной организации, ее способность эффективно представлять и защищать интересы работников перед работодателем, да и само право на представительство зависит от количества и активности членов профсоюза в учреждении. Поэтому важнейшей задачей нашей профсоюзной организации является вовлечение работников в профсоюз и активную профсоюзную деятельность. Аргументация в этом случае понятна и проста: ведь только там, где есть Профсоюз, есть эффективный коллективный договор. Профсоюз может гарантировать работнику бесплатную юридическую помощь и защиту его социально-трудовых прав, представлять интересы работников, достойно вести диалог с социальными партнерами на различных уровнях.",
  },
  // Add more testimonials as needed
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold text-[#003f81]">
          В этом тебе поможет наш профсоюзный актив
        </h2>

        <Card className="border-none bg-transparent shadow-none">
          <Carousel
            setApi={setApi}
            className="mx-auto w-full max-w-5xl"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="flex flex-col items-center gap-8 p-6 md:flex-row">
                    <div className="w-full md:w-1/3">
                      <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[#003f81]">
                          {testimonial.name}
                        </h3>
                        <p className="italic text-gray-600">
                          {testimonial.position}
                        </p>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {testimonial.quote}
                        </p>
                        <p className="text-right text-gray-500">
                          - {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden border-none bg-white shadow-md hover:bg-gray-100 md:flex" />
            <CarouselNext className="-right-12 hidden border-none bg-white shadow-md hover:bg-gray-100 md:flex" />
          </Carousel>

          {/* Custom dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-[#003f81]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
