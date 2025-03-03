"use server";

import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.S3_REGION!,
  endpoint: "https://storage.yandexcloud.net",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

export async function getS3Images() {
  const command = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET,
    // Опционально: укажите префикс, если изображения находятся в определенной папке
    // Prefix: 'images/',
  });

  try {
    const response = await s3Client.send(command);
    const images =
      response.Contents?.filter((item) =>
        item.Key?.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/),
      ).map((item) => ({
        key: item.Key,
        url: `https://${process.env.S3_BUCKET}.storage.yandexcloud.net/${item.Key}`,
      })) || [];

    return images;
  } catch (error) {
    console.error("Error fetching S3 images:", error);
    return [];
  }
}
