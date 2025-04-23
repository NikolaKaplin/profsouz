import { CollectionConfig } from "payload";

export const Tickets: CollectionConfig = {
  slug: "tickets",
  labels: {
    singular: "билет",
    plural: "билеты",
  },
  fields: [
    {
      name: "user",
      label: "Пользователь",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "event",
      label: "Мероприятие",
      type: "relationship",
      relationTo: "events",
      required: true,
    },
    {
      name: "endDate",
      label: "Дата окончания регистрации",
      type: "date",
      required: true,
    },
    {
      name: "amount",
      label: "Количество",
      type: "number",
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
};
