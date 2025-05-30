import { type CollectionConfig } from "payload";
import { text } from "stream/consumers";

export const Events: CollectionConfig = {
  slug: "events",
  labels: {
    singular: "мероприятие",
    plural: "мероприятия",
  },
  admin: {
    listSearchableFields: ["title"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Заголовок",
      required: true,
      index: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Содержание",
      required: true,
    },
    {
      name: "receiving",
      type: "text",
      label: "Где получить",
      required: true,
    },
    {
      name: "location",
      type: "text",
      label: "Место проведения",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
      label: "Дата окончания регистрации",
      required: true,
    },
    {
      name: "price",
      type: "text",
      label: "Цена билета",
      required: true,
    },
    {
      name: "tickets",
      type: "number",
      label: "Количество билетов",
      required: true,
    },
  ],
  timestamps: true,
  access: {
    admin: ({ req }) => req.user?.role === "admin",
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
    read: ({ req }) => req.user?.role === "admin",
  },
  upload: true,
};
