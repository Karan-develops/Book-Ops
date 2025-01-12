import BookList from "@/components/BookList";
import Bookoverview from "@/components/Bookoverview";
import { sampleBooks } from "@/constants";

const Home = async () => {
  return (
    <>
      <Bookoverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
