import Link from "next/link";
import { Logo } from "../shared/logo";

export default function Footer() {
  return (
    <footer className="border-primary/20 bg-primary/5 border-t py-6 md:py-0">
      <div className="container mx-auto max-w-350 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-8">
        <div className="flex items-center gap-2">
          <Logo className="size-6" />

          <p className="capitalize text-muted-foreground text-center text-sm leading-loose md:text-left">
            {/* JavaScript API to get the current year from date object */}©{" "}
            {new Date().getFullYear()} CineScope LLC. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
