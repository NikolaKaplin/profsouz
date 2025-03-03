"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { documentsInfo, profsouzHistory } from "../constants";
import Link from "next/link";

export type DocumentsInfo = {
  name: string;
  content: string[];
  link: string[];
};

export default function AboutPage() {
  const [openHistoryItem, setOpenHistoryItem] = useState<string | null>(null);
  const [openDocumentItem, setOpenDocumentItem] = useState<string | null>(null);

  const handleHistoryAccordionChange = (value: string) => {
    setOpenHistoryItem(value === openHistoryItem ? null : value);
  };

  const handleDocumentAccordionChange = (value: string) => {
    setOpenDocumentItem(value === openDocumentItem ? null : value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-[#003f81]">
      {/* Google Maps iframe */}
      <div className="mx-auto mb-12 max-w-4xl px-4">
        <div className="aspect-w-16 h-[50vh] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.3537875177085!2d37.67745461264303!3d55.85652797301067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536a4818eeb13%3A0x1d40a3f60d9f603b!2z0JrQvtC70LvQtdC00LYg0YHQvtCy0YDQtdC80LXQvdC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuQ!5e0!3m2!1sru!2sru!4v1740609936410!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Card */}
      <div className="mx-auto mb-12 max-w-2xl px-4">
        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Наши контакты
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <PhoneIcon className="mr-2 h-5 w-5" />
              <span>+7 (977) 923-10-92</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="mr-2 h-5 w-5" />
              <a href="mailto:gsb@sk12.ru" className="hover:underline">
                gsb@sk12.ru
              </a>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-5 w-5" />
              <span>
                г. Москва, Хибинский пр-д, д. 10, 2 этаж учебного корпуса, 213
                кабинет
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* History Section */}
      <div id="documents" className="mx-auto mb-12 max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">История</h2>
        <Accordion
          type="single"
          collapsible
          value={openHistoryItem!}
          onValueChange={handleHistoryAccordionChange}
          className="rounded-lg bg-white shadow-md"
        >
          {profsouzHistory.map((item, index) => (
            <AccordionItem
              value={`history-${index + 1}`}
              key={index}
              className="border-b border-[#003f81]/20 last:border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-[#003f81]/5">
                {item.name}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 leading-relaxed">
                <div className="prose prose-sm max-w-none">{item.content}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Document Section */}
      <div className="mx-auto mb-12 max-w-4xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Документы</h2>
        <Accordion
          type="single"
          collapsible
          value={openDocumentItem!}
          onValueChange={handleDocumentAccordionChange}
          className="rounded-lg bg-white shadow-md"
        >
          {documentsInfo.map((item: DocumentsInfo, index) => (
            <AccordionItem
              value={`document-${index + 1}`}
              key={index}
              className="border-b border-[#003f81]/20 last:border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-[#003f81]/5">
                {item.name}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 leading-relaxed">
                <ul className="list-inside list-disc space-y-2">
                  {item.content.map((content, contentIndex) => (
                    <li key={contentIndex}>
                      <Link
                        href={item.link[contentIndex]!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {content}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
