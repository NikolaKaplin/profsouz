import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "пользователь",
    plural: "пользователи",
  },
  auth: {
    maxLoginAttempts: 100,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Администратор", value: "admin" },
        { label: "Пользователь", value: "user" },
      ],
      required: true,
      defaultValue: "user",
    },
  ],
  access: {
    read: () => true,
  },
  upload: true,
};
