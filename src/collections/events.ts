import { type CollectionConfig } from "payload";

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
    read: () => true,
  },
};
