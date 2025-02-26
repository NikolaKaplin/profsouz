"use server";

import { getPayload as getPayloadMethod } from "payload";
import config from "@payload-config";

export async function getPayload() {
  const payload = await getPayloadMethod({ config });
  return payload;
}
