import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, ImageIcon } from "lucide-react";
import Link from "next/link";
import { type News } from "payload-types";
import { format } from "date-fns";
import { RichText } from "@payloadcms/richtext-lexical/react";

interface Props {
  props: News;
}

export const NewCard = ({ props }: Props) => {
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
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="mr-2 h-4 w-4" />
          {format(new Date(props.createdAt), "dd MMM yyyy")}
        </div>
      </CardHeader>
      <CardContent>
        <RichText className="line-clamp-5" data={props.content} />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Link
          href={`/news/${props.id}`}
          className="text-[#003f81] transition-colors hover:text-blue-600"
        >
          Читать далее
        </Link>
      </CardFooter>
    </Card>
  );
};
