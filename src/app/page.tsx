import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>

      {/* Add a link that goes from homepage to ticketpage */}
      {/* Using path constants href={ticketsPath() see paths.ts */}

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;