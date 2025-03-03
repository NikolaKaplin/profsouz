"use client";

import { useAwait } from "~/hooks/use-await";
import { getEvents, getLastNews } from "../actions";
import { EventCard } from "~/components/shared/event-card";
import { useEffect, useState } from "react";
import { User } from "payload-types";
import { getCurrentSession, getMe } from "~/server/payload";

export default function Home() {
  const events = useAwait(getEvents) ?? [];
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      const getUser = await getMe();
      console.log(getUser);
      setUser(getUser!);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#003f81]">
          Мероприятия
        </h1>
        {user ? (
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard
                  userId={user.id ? user.id : -1}
                  hidden={false}
                  key={event.id}
                  props={event}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard
                  userId={-1}
                  hidden={true}
                  key={event.id}
                  props={event}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
