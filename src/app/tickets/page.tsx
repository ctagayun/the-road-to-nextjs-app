import Link from "next/link";

//import { initialTickets } from "../../data";
import { initialTickets } from "@/data"; //*absolute imports
import { ticketPath } from "@/paths" //*This is a path constants - see paths.ts

const TicketsPage = () => {
  return (
    <div>
      {/* 
         //*map generates a new array to variable called "ticket"
         //*Within the map() method, we have access to each object and properties of "ticket"
         //*since we are listing records in a div, the div must have a key like when
         //*we are listing stuff in a UL
     */}
      {initialTickets.map((ticket) => (
        //*  For each ticket we want to return a <div> displaying title and a link
        //*  Concatenating variables into a string using $
        //*  var fullName = `${firstName} ${lastName}`
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          {/* <Link href={`/tickets/${ticket.id}`} className="text-sm underline"> */}
          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TicketsPage;