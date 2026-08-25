import { CalendarDays, CalendarPlus, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function GeneralHeader() {
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center px-8 py-4 backdrop-blur-sm border-b">
      <section className="flex items-center gap-2">
        <Image src="/icons/logo.png" alt="dev events" width={24} height={24} />
        <p className="font-bold max-sm:hidden">DevEvent</p>
      </section>

      <nav>
        <Link className={buttonVariants({ variant: "link" })} href="/">
          <HomeIcon />
          Home
        </Link>
        <Link className={buttonVariants({ variant: "link" })} href="/">
          <CalendarDays />
          Events
        </Link>
        <Link className={buttonVariants({ variant: "link" })} href="/">
          <CalendarPlus />
          Create Event
        </Link>
      </nav>
    </header>
  );
}
