import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "пользователь",
    plural: "пользователи",
  },
  auth: {
    loginWithUsername: true,
    maxLoginAttempts: 100,
  },
  admin: {
    useAsTitle: "fullName",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      label: "Имя и Фамилия",
      required: true,
    },
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
    {
      name: "avatar",
      type: "upload",
      relationTo: "avatars",
      label: "Аватар пользователя",
      required: false,
    },
  ],
  access: {
    read: () => true,
    admin: ({ req }) => {
      if (!req.user) return false;
      return req.user.role === "admin";
    },
  },
  upload: false,
};
