"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ImageIcon,
  Clock,
  Ticket,
  MapPin,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  CreditCard,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { format } from "date-fns";
import { getTicketsInEvent, ticketing } from "~/app/(landing)/actions";
import { Event } from "payload-types";

interface Props {
  props: Event;
  hidden: boolean;
  userId?: number;
}

export const EventCard = ({ props, hidden, userId }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSelectingTickets, setIsSelectingTickets] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);
  const [availableTickets, setAvailableTickets] = useState(props.tickets);
  const [myTickets, setMyTickets] = useState<number | string>();
  useEffect(() => {
    (async () => {
      if (hidden) {
        setMyTickets(0);
      } else {
        const tickets = await getTicketsInEvent(userId!, props.id);
        setMyTickets(tickets);
      }
    })();
  }, [userId]);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReserve = async () => {
    try {
      const result = await ticketing(
        userId!,
        props.id,
        props.tickets,
        ticketCount,
        props.endDate,
      );
      if (result) {
        setAvailableTickets(props.tickets - result);
        setIsSelectingTickets(false);
        setTicketCount(1);
        setMyTickets(result);
      } else {
        // Handle error case
      }
    } catch (error) {
      // Handle error
    }
  };

  const incrementTicket = () => {
    if (ticketCount < availableTickets) {
      setTicketCount(ticketCount + 1);
    }
  };

  const decrementTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  if (myTickets == undefined) return null;

  return (
    <Card className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        {props.url ? (
          <img
            src={props.url || "/placeholder.svg"}
            alt="Фото отсутствует"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <CardTitle className="text-lg font-bold text-white">
            {props.title}
          </CardTitle>
        </div>
      </div>
      <CardHeader className="space-y-4 pb-2 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center text-2xl font-bold text-emerald-600">
            <CreditCard className="mr-2 h-6 w-6 flex-shrink-0" />
            <span>
              {Number(props.price) > 0 ? `${props.price} ₽` : "Бесплатно"}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Ticket className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>Доступно билетов: {availableTickets}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>
              Окончание: {format(new Date(props.endDate), "dd MMM yyyy")}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1">{props.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Ticket className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-2">
              Место получения: {props.receiving || "Не указано"}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div
            className={`rich-text-container transition-all duration-300 ${
              isExpanded
                ? "max-h-[500px] overflow-y-auto"
                : "max-h-[100px] overflow-hidden"
            }`}
          >
            <RichText data={props.content} />
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={toggleExpand}
          className="flex items-center text-sm font-medium text-[#003f81] hover:text-blue-600"
        >
          {isExpanded ? (
            <>
              Свернуть <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Развернуть <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
        {hidden ? null : (
          <>
            {!isSelectingTickets ? (
              <>
                {myTickets != "none" ? (
                  <div className="rounded-xl bg-[#003f81] p-2 text-white">
                    Заказано билетов: {myTickets}
                  </div>
                ) : (
                  <>
                    <Button
                      className="bg-[#003f81] text-white hover:bg-blue-700"
                      onClick={() => setIsSelectingTickets(true)}
                      disabled={availableTickets === 0}
                    >
                      {availableTickets > 0
                        ? "Записаться"
                        : "Билеты закончились"}
                    </Button>
                  </>
                )}
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decrementTicket}
                  disabled={ticketCount === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{ticketCount}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={incrementTicket}
                  disabled={ticketCount === availableTickets}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="bg-[#003f81] text-white hover:bg-blue-700"
                  onClick={handleReserve}
                >
                  Подтвердить
                </Button>
              </div>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};
