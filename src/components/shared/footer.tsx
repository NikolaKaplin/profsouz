"use client";

import { Files } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 w-full lg:mb-0 lg:w-1/2">
            <div className="h-[300px] w-full lg:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.3537875177085!2d37.67745461264303!3d55.85652797301067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536a4818eeb13%3A0x1d40a3f60d9f603b!2z0JrQvtC70LvQtdC00LYg0YHQvtCy0YDQtdC80LXQvdC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuQ!5e0!3m2!1sru!2sru!4v1740609936410!5m2!1sru!2sru"
                width="100%"
                height="100%"
                loading="eager"
                className="rounded-[5%] border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Первичная профсоюзная организация
              <br /> Колледжа Современных Технологий
            </h3>
            <p className="mb-4 text-sm sm:text-base">
              <span className="mb-2 block">
                Адрес: г. Москва, Хибинский пр-д, д. 10, 2 этаж учебного
                корпуса, 213 кабинет
              </span>
              <span className="mb-2 block">
                Председатель - Глушенкова Светлана Борисовна
              </span>
              <span className="mb-2 block">
                Телефон:{" "}
                <a className="hover:underline" href="tel:+7977923-10-92">
                  +7 (977) 923-10-92
                </a>
              </span>
              <span className="block">
                Email:{" "}
                <a
                  className="hover:underline"
                  href="mailto:gsb@sk12.ru?subject=Тема&body=Сообщение"
                >
                  gsb@sk12.ru
                </a>
              </span>
            </p>
            <div className="mb-6">
              <h4 className="mb-2 text-lg font-semibold text-gray-800">
                Мы в социальных сетях:
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-blue-500"
                  aria-label="Telegram"
                >
                  <svg
                    className="h-8 w-8 sm:h-6 sm:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                  aria-label="VK"
                >
                  <svg
                    className="h-8 w-8 sm:h-6 sm:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.597v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.491-.491h1.744c.458 0 .66.203.849.677.932 2.168 2.489 4.064 3.132 4.064.238 0 .339-.118.339-.77V9.157c-.068-1.355-.78-1.473-.78-1.965 0-.254.203-.491.542-.491h2.742c.373 0 .508.203.508.643v3.473c0 .372.107.508.254.508.237 0 .44-.136.88-.576 1.322-1.49 2.267-3.778 2.267-3.778.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                  aria-label="Одноклассники"
                >
                  <svg
                    className="h-8 w-8 sm:h-6 sm:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.505 17.44c1.275-.29 2.464-.844 3.456-1.605a2.33 2.33 0 0 0-2.984-3.595 4.792 4.792 0 0 1-5.953 0 2.33 2.33 0 0 0-2.984 3.595c.992.761 2.181 1.315 3.456 1.605l-3.31 3.31a2.33 2.33 0 1 0 3.294 3.294L12 21.565l2.52 2.52a2.33 2.33 0 1 0 3.294-3.295l-3.31-3.31zM12 12.388c3.42-.004 6.19-2.774 6.195-6.193C18.195 2.78 15.415.005 12 0 8.579.005 5.805 2.78 5.805 6.197c.004 3.42 2.775 6.19 6.195 6.192zm0-8.193c1.104 0 2.021.895 2.021 2 0 1.104-.917 2-2.021 2-1.103 0-2-.896-2-2 0-1.105.897-2 2-2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition-colors hover:text-red-600"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-8 w-8 sm:h-6 sm:w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
            <Link className="flex hover:underline" href="/about#documents">
              <Files />
              Документы
            </Link>
            <p className="text-sm">© 2025 Профсоюз-КСТ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
