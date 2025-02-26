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
