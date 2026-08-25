import { Calendar1, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventCardProps {
  slug: string;
  media: {
    image: string;
  };
  title: string;
  location: string;
  date: string;
}

export default function EventCard({
  slug,
  media,
  title,
  location,
  date,
}: EventCardProps) {
  return (
    <Link href={`/events/${slug}`}>
      <Card className="pt-0 hover:scale-105 transition-transform">
        <div className="relative aspect-video">
          <Image
            fill
            alt={title}
            src={media.image}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="flex justify-between text-xs">
            <section className="flex items-center gap-0.5">
              <MapPin size={14} />
              <p>{location}</p>
            </section>
            <section className="flex items-center gap-0.5">
              <Calendar1 size={14} />
              <p>{date}</p>
            </section>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
