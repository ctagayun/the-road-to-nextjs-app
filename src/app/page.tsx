import Link from "next/link";

   const HomePage = () => {
      
        return(
             <div>
              <h2 className="text-6xl"> Home Page. </h2>
              <Link href="/tickets" className="underline">
                Go to Tickets
               </Link>
           </div>
          )
    
 };

  export default HomePage;