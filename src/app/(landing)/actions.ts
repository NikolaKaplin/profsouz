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
  endDate: string,
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
      endDate: endDate,
    },
  });
  return res.amount;
}

export async function getTickets() {
  const payload = await getPayload();
  const tickets = await payload.find({
    collection: "tickets",
  });
  return tickets.docs;
}

export async function getTicketsInEvent(userId: number, eventId: number) {
  const tickets = await getTickets();

  const sortByUser = tickets.filter((item) => {
    const user = item.user;
    return typeof user != "number" && user.id == userId;
  });
  const sortByEvent = sortByUser.find((item) => {
    const event = item.event;
    return typeof event != "number" && event.id == eventId;
  });
  if (sortByEvent?.amount) {
    return sortByEvent?.amount;
  } else {
    return "none";
  }
}
