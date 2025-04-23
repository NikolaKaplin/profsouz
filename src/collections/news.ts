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
    {
      name: "stat",
      type: "relationship",
      label: "Корпус",
      relationTo: "statistics",
      required: false,
    },
  ],
  timestamps: true,
  access: {
    admin: ({ req }) =>
      req.user?.role === "admin" || req.user?.role === "editor",
    read: () => true,
  },
  upload: true,
};
