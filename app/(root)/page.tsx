import { auth } from "@/auth";
import BookList from "@/components/BookList";
import Bookoverview from "@/components/Bookoverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";

const Home = async () => {
  const session = await auth();
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
  return (
    <>
      <Bookoverview {...latestBooks[0]} userId={session?.user?.id as string} />
      <BookList
        title="Latest Books"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
