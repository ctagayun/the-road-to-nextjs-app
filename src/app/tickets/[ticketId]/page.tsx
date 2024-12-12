
//*This component displays a specific ticketId
//import { initialTickets } from "../../../data";
import { initialTickets } from "@/data";  //*absolute imports


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

   if (!ticket)
   {
      return <div> Ticket Not Found </div>
   }

   return (
    <div>
      <h2 className="txt-lg"> {ticket.id}</h2>
      <p className="txt-lg"> {ticket.title}</p>
      <p className="txt-lg"> {ticket.content}</p>
      </div>
   )

}

export default TicketPage;  