import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
//*copy this from shadcn button documentation
//import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button";

const Header = () => {

  return (
   
     <nav  className="
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
        ">
        <div>
            {/* 
            //*asChild means only the child should render which doesn't change anything
            //*in the UI visually
            //*remove the  className="txt-lg font-bold" because shadcn will style it for us
            */}
            {/* <Button asChild variant="outline">
            <Link href={homePath()} >Home</Link>
            </Button> */}
            <Link
            href={homePath()}
            //*Change varian to ghost
            className={buttonVariants({ variant: "ghost" })}
        >
            {/* //*Icon */}
            <LucideKanban />
            <h1 className="text-lg font-semibold">TicketBounty</h1>
        </Link>
        </div>
        <div>
            {/* <Button asChild variant="outline">
            <Link href={ticketsPath()}>Tickets</Link>
            </Button> */}
            <Link
            href={ticketsPath()}
            //*change variant from outline to default
            className={buttonVariants({ variant: "default" })}
        >
            Tickets
        </Link>
       </div>
    </nav>
  );
};

export {Header};
