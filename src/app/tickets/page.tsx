
"use client";
  //*Reusable heading component
import { Heading } from "@/components/heading";
import { Ticketitem } from "@/features/ticket/components/ticket-item";
import { useEffect, useState } from "react";
import { Ticket } from "@/features/types";
import { getTickets } from "@/features/queries/get-tickets";

const TicketsPage = () => {

  //*this useEffect runs only once because dependency array "[] is empty 
  //*do the data fetching here
  useEffect(() => {
     const fetchTickets = async () => {
        const result = await getTickets();

        setTickets(result); //*in the end this stores value into state variable "tickets"
     }
     fetchTickets();
   }, []);

  //* fetch data. to fetch data you need create a useState hook.
  //* import Ticket from types
  //*https://www.robinwieruch.de/react-usestate-hook/
  //*note: useState returns an array

  const [tickets, setTickets] = useState<Ticket[]>([]);

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
        {tickets.map((ticket) => (
          //*  For each ticket we want to return a <Card> displaying title and a link
          //*   className="w-full max-w-[420px] is for responsiveness when weresize 
          //*the page.
          //* The rendering of tickets is done in a TicketItem component
          //* add ticket as prop so that isDetail can be accesed in TicketPage
          //* Now go to TicketItem and use isDetail for conditional rendering
          <Ticketitem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};


export default TicketsPage;

//useState
 //By using useState, we are telling React that we want to have a 
 //stateful value which changes over time. And whenever this stateful value 
 //changes, the affected components (here: TicketItem component) 
 //will re-render to use it (here: to display the recent value).

  //concatenating variables into a string
 //var fullName = `${firstName} ${lastName}`
 //console.log(fullName);