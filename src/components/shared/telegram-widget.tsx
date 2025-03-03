"use client";

import { useEffect } from "react";

interface TelegramWidgetProps {
  channelName: string;
  width?: number;
  height?: number;
  showPhotos?: boolean;
}

export default function TelegramWidget({
  channelName,
  width = 300,
  height = 500,
  showPhotos = true,
}: TelegramWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-semibold text-[#003f81]">
          Наш Telegram канал
        </h2>

        <div className="flex justify-center">
          <div
            className="telegram-widget"
            dangerouslySetInnerHTML={{
              __html: `
                <script async src="https://telegram.org/js/telegram-widget.js?22" 
                  data-telegram-post="${channelName}"
                  data-width="${width}"
                  data-height="${height}"
                  ${showPhotos ? 'data-photos="true"' : ""}
                  data-userpic="false">
                </script>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
