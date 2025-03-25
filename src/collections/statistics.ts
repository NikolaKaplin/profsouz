import { type CollectionConfig } from "payload";

export const Statistics: CollectionConfig = {
  slug: "statistics",
  labels: {
    singular: "статистика",
    plural: "статистика",
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
    read: () => true,
  },
  upload: false,
};
