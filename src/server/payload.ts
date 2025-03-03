"use server";

import { getPayload as getPayloadMethod } from "payload";
import config from "@payload-config";
import { headers as nextHeaders } from "next/headers";

export async function getPayload() {
  const payload = await getPayloadMethod({ config });
  return payload;
}

export async function getCurrentSession() {
  const payload = await getPayload();
  const headers = await nextHeaders();
  const session = await payload.auth({ headers });
  return session;
}

export async function getMe() {
  return (await getCurrentSession()).user;
}
