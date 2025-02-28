"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import { getNewsById } from "../../actions";
import { useEffect, useState } from "react";
import { format } from "date-fns/format";
import { notFound, useParams } from "next/navigation";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { type News } from "payload-types";

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  if (!slug) notFound();
  const [post, setPost] = useState<News>();

  useEffect(() => {
    getNewsById(slug).then(setPost).catch(notFound);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {post.url && (
        <div className="relative h-[50vh] w-full">
          <img
            src={post.url || "/placeholder.svg"}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-4xl p-6 text-white">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center text-sm">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{format(new Date(post.createdAt), "dd MMM yyyy")}</span>
              <ClockIcon className="ml-4 mr-2 h-4 w-4" />
              <span>{`${Math.ceil(post.content.root.children.length / 100)} мин чтения`}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {!post.url && (
          <header className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{format(new Date(post.createdAt), "dd MMM yyyy")}</span>
              <ClockIcon className="ml-4 mr-2 h-4 w-4" />
              <span>{`${Math.ceil(post.content.root.children.length / 100)} мин чтения`}</span>
            </div>
          </header>
        )}

        <div className="prose prose-lg max-w-none">
          <RichText data={post.content} />
        </div>
      </div>
    </article>
  );
}
