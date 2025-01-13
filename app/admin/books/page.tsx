import { Button } from "@/components/ui/button";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import React from "react";

const BooksPage = async () => {
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Author
              </th>
              <th className="border border-gray-200 px-4 py-2 text-left">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {latestBooks.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {book.createdAt
                    ? new Date(book.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BooksPage;
