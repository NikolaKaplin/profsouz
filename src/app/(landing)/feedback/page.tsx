"use client";

import type React from "react";

import { useState } from "react";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));


    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-[#003f81]">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Свяжитесь с нами
        </h1>
        <p className="mb-8 text-center text-lg">
          У вас есть вопросы или предложения? Мы всегда рады помочь!
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+7 (977) 923-10-92</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:gsb@sk12.ru" className="hover:underline">
                  gsb@sk12.ru
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>
                  г. Москва, Хибинский пр-д, д. 10, 2 этаж учебного корпуса, 213
                  кабинет
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Форма обратной связи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium"
                  >
                    ФИО
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium"
                  >
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[100px] w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#003f81] text-white hover:bg-[#002a5a]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Мы ценим ваше мнение</h2>
          <p className="text-lg">
            Ваши отзывы и предложения помогают нам становиться лучше. Не
            стесняйтесь обращаться к нам по любым вопросам!
          </p>
        </div>
      </div>
    </div>
  );
}
