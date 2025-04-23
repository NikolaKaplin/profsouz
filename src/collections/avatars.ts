import type { CollectionConfig } from "payload";

export const Avatars: CollectionConfig = {
  slug: "avatars",
  labels: {
    singular: "медиафайл",
    plural: "медиафайлы",
  },
  upload: {
    mimeTypes: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "О картинке",
    },
  ],
  access: {
    admin: ({ req }) => req.user?.role === "admin",
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
    read: ({ req }) => req.user?.role === "admin",
  },
};
