"use server";

import { getPayload } from "~/server/payload";

export async function getLastNews() {
  const payload = await getPayload();
  const news = await payload.find({
    collection: "news",
    sort: "-createdAt",
    pagination: false,
  });
  return news.docs;
}

export async function getNewsById(id: string) {
  const payload = await getPayload();
  const slug = await payload.findByID({
    collection: "news",
    id: id,
  });
  return slug;
}
