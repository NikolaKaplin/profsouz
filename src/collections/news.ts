import { type CollectionConfig } from "payload";

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
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "Содержание",
      required: true,
    },
  ],
  timestamps: true,
  access: {
    admin({ req }) {
      return req.user?.username == "postEditor" || req.user?.role == "admin";
    },
    read: () => true,
  },
  upload: true,
};
