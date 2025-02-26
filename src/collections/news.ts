import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "новость",
    plural: "новости",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Заголовок",
    },
    {
      name: "content",
      type: "richText",
      label: "Содержание",
    },
  ],
  timestamps: true,
  access: {
    read: () => true,
  },
};
