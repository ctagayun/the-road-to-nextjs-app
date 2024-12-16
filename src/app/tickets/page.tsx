import { LucideCheckCircle, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";

//import { initialTickets } from "../../data";
import { initialTickets } from "@/data"; //*absolute imports
import { ticketPath } from "@/paths" //*This is a path constants - see paths.ts
import clsx from "clsx";

import  {
      Card,
      CardHeader,
      CardFooter,
      CardTitle,
      CardDescription,
      CardContent }
  from  "@/components/ui/card";

  import { Separator } from "@/components/ui/separator"

//*Constant Assertions
const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  DONE: <LucideCheckCircle />,
  IN_PROGRESS: <LucidePencil />,
};


const TicketsPage = () => {
  return (
    //*add animate-fade-in-from-top that we created in tailwind.config.ts
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>
      
       <Separator/>
        {/* 
         //*map generates a new array to variable called "ticket"
         //*Within the map() method, we have access to each object and properties of "ticket"
         //*since we are listing records in a div, the div must have a key like when
         //*we are listing stuff in a UL

        //*add animate-fade-from-top (prefix with "animate") that we created in tailwind.config.ts
        //*this will cause the ticket items in TicketPage to fade in and out

       */}

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
          //*  For each ticket we want to return a <Card> displaying title and a link
          //*   className="w-full max-w-[420px] is for responsiveness when weresize the page
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
               <CardTitle className="flex gap-x-2">
                 <span> {TICKET_ICONS[ticket.status]} </span>
                 <span className="truncate">{ticket.title}</span>
               </CardTitle>
            </CardHeader>

            <CardContent>
            <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>

            {/* //* ticketPath is absolute path to replace: <Link href={`/tickets/${ticket.id}`} className="text-sm underline"> */}
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default TicketsPage;