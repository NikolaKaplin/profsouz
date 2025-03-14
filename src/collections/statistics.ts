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
      label: "Страница",
      required: true,
    },
    {
      name: "allUsers",
      type: "number",
      label: "Все члены профсоюза",
      required: true,
    },
  ],
  timestamps: true,
  access: {
    read: () => true,
  },
  upload: false,
};
