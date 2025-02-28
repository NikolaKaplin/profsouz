"use client";

import { NewCard } from "~/components/shared/new-card";
import { useAwait } from "~/hooks/use-await";
import { getEvents, getLastNews } from "../actions";
import { EventCard } from "~/components/shared/event-card";

export default function Home() {
  const events = useAwait(getEvents) ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#003f81]">
          Мероприятия
        </h1>

        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} props={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
