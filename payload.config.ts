import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig, IconConfig } from "payload";
import { env } from "~/env";
import path from "path";
import { s3Storage } from "@payloadcms/storage-s3";
import { fileURLToPath } from "url";
import { metadata } from "./src/app/metadata";
import { News } from "~/collections/news";
import { ru } from "@payloadcms/translations/languages/ru";
import { Events } from "~/collections/events";
import { Tickets } from "~/collections/tickets";
import { Users } from "~/collections/users";
import { Avatars } from "~/collections/avatars";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: "— Профсоюз КСТ",
      description: "Админ-панель веб-сайта Профсоюза КСТ",
      keywords: "Профсоюз, КСТ, Колледж Современных Технологий",
      icons: metadata.icons as IconConfig[],
      openGraph: {},
    },
    importMap: {
      baseDir: path.resolve(dirname, "src/components"),
    },
    components: {
      providers: ["/shared/AdminAccessProvider#AdminAccessProvider"],
      graphics: {
        Logo: {
          path: "/shared/logo",
          clientProps: { width: 200, height: 200 },
        },
        Icon: "/shared/logo",
      },
    },
  },
  collections: [Users, News, Events, Tickets, Avatars],

  plugins: [
    s3Storage({
      collections: {
        news: true,
        events: true,
        avatars: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
        endpoint: "https://storage.yandexcloud.net",
      },
    }),
  ],
  secret: env.AUTH_SECRET,
  editor: lexicalEditor(),
  localization: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  sharp,
  i18n: {
    fallbackLanguage: "ru",
    supportedLanguages: { ru },
  },
});
