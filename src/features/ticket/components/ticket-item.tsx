
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

type TicketItemProps = {
    ticket: Ticket, //*Ticket is a type. See import above
}
  
const Ticketitem = ({ticket}: TicketItemProps) => {
    //* go to TicketPages and cut and paste "Card"
    //*  For each ticket we want to return a <Card> displaying title and a link
    //*   className="w-full max-w-[420px] is for responsiveness when weresize the page
    return (
        <Card className="w-full max-w-[420px]">
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
        )
};

export {Ticketitem}