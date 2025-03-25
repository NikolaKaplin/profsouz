"use server";

import { getPayload } from "~/server/payload";
import nodemailer from "nodemailer";
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

export async function getLastUser() {
  const payload = await getPayload();
  const lastUser = await payload.find({
    collection: "users",
  });
  return lastUser.docs.length;
}

export async function getStatistics() {
  const payload = await getPayload();
  const statistics = await payload.find({
    collection: "statistics",
    sort: "desc",
  });
  return statistics.docs;
}

export async function sendFeedBack(email: string, data: string) {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });
  const message = await transport.sendMail({
    from: "noreply@24kvf.ru",
    to: email,
    subject: "Урааааа",
    text: "Ураааа я " + data,
    html: `
    <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обратная связь</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
    </style>
</head>
<body>
<h3>Обратная связь, Профсоюз КСТ</h3>
    <div class="container">
    <p>${email}</p>
        <p>${data}</p>
        
        <div class="footer">
            <p>&copy; 2025 Профсоюз кст</p>
            <p><a href="https://prof-kst-souz.ru/">prof-kst-souz.ru</a></p>
        </div>
    </div>
</body>
</html>`,
  });
  return message;
}
