
import Link from "next/link";
import { ticketPath } from "@/paths" //*This is a path constants - see paths.ts
import  {
      Card,
      CardHeader,
      CardFooter,
      CardTitle,
      CardContent }
  from  "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import { LucideSquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
    ticket: Ticket, //*Ticket is a type. See import above
}
  
const Ticketitem = ({ticket}: TicketItemProps) => {
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)} >
                {/* //*Icon */}
                <LucideSquareArrowOutUpRight className="h-2 w-4" />
             </Link>
        </Button>
    );

    //* go to TicketPages and cut and paste "Card"
    //*  For each ticket we want to return a <Card> displaying title and a link
    //*   className="w-full max-w-[420px] is for responsiveness when weresize the page
    return (

        //*We are going to move the Link "view". First let's put a <div> wrapper around card
        //* className="w-full max-w-[420px] flex gap-x-1" will move the link to the right of a ticket 
       <div className="w-full max-w-[420px] flex gap-x-1">
          <Card className="w-full">
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
               
              </Card>
               
               {/* //* Move the link outside the card. Next we want 
                  //*an icon so remove className="text-sm underline"
                  //* wrap the link and icon in a button  */}

               {/* //* put this in {detailButton} 
              <Button variant="outline" size="icon" asChild>
                <Link href={ticketPath(ticket.id)} >
                    <LucideSquareArrowOutUpRight className="h-2 w-4" />
                </Link>
              </Button> */}

              <div className="flex flex-col gap-y-1"> 
                {detailButton}
              </div>

            </div>
        )
};

export {Ticketitem}