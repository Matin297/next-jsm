import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";
import EventCard from "./_components/event-card";

export default function Home() {
  return (
    <section className="space-y-10">
      <header className="flex flex-col items-center text-center">
        <h1 className="mb-0">Event Hub For Devs</h1>
        <p className="mt-0 max-sm:hidden">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Button className="font-mono mt-4" size="lg" variant="outline">
          Explore Events
          <ChevronRight />
        </Button>
      </header>
      <section>
        <h3>Featured Events</h3>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map(({ id, ...event }) => (
            <li key={id}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
