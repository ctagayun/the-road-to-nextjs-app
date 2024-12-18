
import { initialTickets } from "@/data"; //*absolute imports

  //*Reusable heading component
import { Heading } from "@/components/heading";
import { Ticketitem } from "@/features/ticket/components/ticket-item";

const TicketsPage = () => {
  return (
    //*add animate-fade-in-from-top that we created in tailwind.config.ts
    <div className="flex-1 flex flex-col gap-y-8">
        {/* //*Heading is a reusable component. We can reuse this in Homepage.tsx */}
        < Heading title="Tickets" description="All your tickets in one page"/>

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
          //*   className="w-full max-w-[420px] is for responsiveness when weresize 
          //*the page.
          //* The rendering of tickets is done in a TicketItem component
          <Ticketitem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};


export default TicketsPage;