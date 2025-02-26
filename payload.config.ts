import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig, IconConfig } from "payload";
import { env } from "~/env";
import path from "path";
import { fileURLToPath } from "url";
import { metadata } from "./src/app/metadata";
import { News } from "~/collections/news";
import { ru } from "@payloadcms/translations/languages/ru";

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
      graphics: {
        Logo: {
          path: "/shared/logo",
          clientProps: { width: 200, height: 200 },
        },
        Icon: "/shared/logo",
      },
    },
  },
  collections: [News],

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
