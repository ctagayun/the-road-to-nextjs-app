import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>

      {/* Add a link that goes from homepage to ticketpage */}
      <Link href="/tickets" className="underline">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;