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
    read: () => true,
  },
};
