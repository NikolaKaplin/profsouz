# Профсоюз КСТ

В основу входит [T3 Stack](https://create.t3.gg/) проект инициализируется командой `create-t3-app`.

- [Next.js](https://nextjs.org)
- [PayloadCMS](https://payloadcms.com)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [Docker](https://www.docker.com)
- [Postgress](https://www.postgresql.org)

## Деплой

Используй комманды чтобы сгенерировать и опыбликовать схему Payload в бд
`payload migrate:create`
`payload migrate`

Разверни бд в docker контейнере
./start-database.sh

## Окончен 21.03.2025

Источник: cybercity

Отредактируйте файл конфигурации nginx:

nano /etc/nginx/nginx.conf
Добавьте строку в раздел http, serverили location:

client_max_body_size 100M;
разрешение загрузки файлов для nginx