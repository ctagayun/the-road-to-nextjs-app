import Link from "next/link";

//import { initialTickets } from "../../data";
import { initialTickets } from "@/data"; //*absolute imports
import { ticketPath } from "@/paths" //*This is a path constants - see paths.ts
import clsx from "clsx";

//*Constant Assertions
const TICKET_ICONS = {
  OPEN: "O",
  IN_PROGRESS: ">",
  DONE: "X",
}

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

        {/* 
         //*map generates a new array to variable called "ticket"
         //*Within the map() method, we have access to each object and properties of "ticket"
         //*since we are listing records in a div, the div must have a key like when
         //*we are listing stuff in a UL
       */}
      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          //*  For each ticket we want to return a <div> displaying title and a link
          //*  Concatenating variables into a string using $
          //*  var fullName = `${firstName} ${lastName}`
          <div
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
          >
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
             {/* //*Applying conditional styling using clsx */}
            {/* //*<p className="text-sm text-slate-500 truncate">{ticket.content}</p> */}
            <p
              className={clsx("text-sm text-slate-500 truncate", {
                //*conditional styling apply strikethrough if status === DONE
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            {/* //* Using absolute path to replace: <Link href={`/tickets/${ticket.id}`} className="text-sm underline"> */}

            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TicketsPage;