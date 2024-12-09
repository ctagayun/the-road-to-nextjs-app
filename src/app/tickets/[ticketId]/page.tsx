//*Create a type called params
type TicketPageProps = {
    params: {
        ticketId: string;
    }
};

const TicketPage = ({params}: TicketPageProps) =>
 {
    return <h2 className= "text-lg"> Ticket Page{params.ticketId}</h2>
 }

export default TicketPage;