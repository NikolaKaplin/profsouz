import { getS3Images } from "~/lib/s3Actions";

export default async function S3ImagesPage() {
  const images = await getS3Images();

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-[#003f81]">
        Галерея
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.key}
            className="overflow-hidden rounded-lg bg-white shadow-md"
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.key}
              width={300}
              height={200}
              className="h-48 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
