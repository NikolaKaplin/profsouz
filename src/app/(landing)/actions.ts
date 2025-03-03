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
export async function getEvents() {
  const payload = await getPayload();
  const events = await payload.find({
    collection: "events",
  });
  return events.docs;
}

export async function ticketing(
  userId: number,
  eventId: number,
  amount: number,
  ticketsCount: number,
) {
  const payload = await getPayload();
  const reductionOfTickets = await payload.update({
    collection: "events",
    id: eventId,
    data: {
      tickets: amount - ticketsCount,
    },
  });

  const res = await payload.create({
    collection: "tickets",
    data: {
      user: userId,
      event: eventId,
      amount: ticketsCount,
    },
  });
  return res.amount;
}

export async function getTicketsInEvent(userId: number, eventId: number) {
  const payload = await getPayload();
  const tickets = await payload.find({
    collection: "tickets",
    user: userId,
  });
  const result = tickets.docs.find((ticket) => {
    const event = ticket.event;
    return typeof event !== "number" && event.id === eventId;
  });
  if (result?.amount == undefined) return 0;
  return result?.amount;
}
