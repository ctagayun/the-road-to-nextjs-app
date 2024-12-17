
//*This component displays a specific ticketId
import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";


//*Create a type called params
type TicketPageProps = {
    params: Promise < {
        ["ticketId"]: string; 
    }>
   };

//*({params}) - the paren means access params. The {params} code destructure's 
//*params after accessing it
const TicketPage = async ({params}: TicketPageProps) =>
{
   const { ticketId } = await params;
   const ticket = initialTickets.find((ticket => ticket.id === ticketId));

   if (!ticket) {
      return (
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant="outline">
              <Link href={ticketsPath()}>Go to Tickets</Link>
            </Button>
          }
        />
      );
    }

   return (
    <div>
      <p className="txt-lg"> {ticket.title}</p>
      <p className="txt-lg"> {ticket.content}</p>
      </div>
   )

}

export default TicketPage;  