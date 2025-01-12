import BookList from "@/components/BookList";
import Bookoverview from "@/components/Bookoverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {

  const result = await db.select().from(users)
  console.log(JSON.stringify(result,null,2));
  

  return (<>
    <Bookoverview {...sampleBooks[0]} />
    <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28" />
  </>
)};

export default Home;
