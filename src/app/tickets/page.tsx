
//*This component displays a specific TICKET ID

//*Create a type called params
//*Note ticket-id doesn't work in javascript so we need the []
// type TicketPageProps = {
//     params: {
//         ["ticket-id"]: string; 
//     }
// };

//*Best practice
 type TicketPageProps = {
     params: {
         ["ticketId"]: string; 
     }
    }

//*({params}) - the paren means access params. The {params} destructure 
//*params after accessing it
const TicketPage = ({params}: TicketPageProps) =>
 {
    //return <h2 className= "text-lg"> Ticket Page{params["ticket-id"]}</h2>
    //*Best practice
    return <h2 className= "text-lg"> Ticket Page{params.ticketId}</h2>

 }

export default TicketPage;

//*Route = http://localhost:3000/tickets/5