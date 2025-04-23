import { type CollectionConfig } from "payload";

export const Statistics: CollectionConfig = {
  slug: "statistics",
  labels: {
    singular: "статистика",
    plural: "статистика",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Подразделение",
      required: true,
    },
    {
      name: "allUsers",
      type: "number",
      label: "Количество человек по штату",
      required: true,
    },
    {
      name: "users",
      type: "number",
      label: "Количество человек",
      required: true,
    },
  ],
  timestamps: true,
  access: {
    admin: ({ req }) => req.user?.role === "admin",
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
    read: ({ req }) =>
      req.user?.role === "admin" || req.user?.role === "editor",
  },
  upload: false,
};
