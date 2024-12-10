
//*This component edits a specific ticketId

//*Create a type called params
type TicketPageProps = {
    params: {
        ["ticketId"]: string; 
    }
   }

//*({params}) - the paren means access params. The {params} destructure's 
//*params after accessing it
const TicketEditPage = ({params}: TicketPageProps) =>
{
   return <h2 className= "text-lg"> Edit Ticket Page{params.ticketId}</h2>

}

export default TicketEditPage;
//*Route = http://localhost:3000/tickets/5/edit