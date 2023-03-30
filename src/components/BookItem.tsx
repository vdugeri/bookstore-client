import { useMutation } from "@apollo/client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BookRequest, BookResponse } from "../types/BookRequest";
import { DELETE_BOOK, GET_BOOKS } from "./queries";

interface BookItemProps {
  book: BookResponse;
}

export const BookItem: React.FC<BookItemProps> = ({ book }: BookItemProps) => {
  const [deleteBook] = useMutation(DELETE_BOOK, {
    update(cache, { data: { removeBook } }) {
      const existingBooks = cache.readQuery<{ books: BookResponse[] }>({
        query: GET_BOOKS,
      });
      console.log(existingBooks, removeBook);
      if (existingBooks) {
        cache.writeQuery({
          query: GET_BOOKS,
          data: {
            books: existingBooks.books.filter(
              (book) => book.id !== removeBook.id
            ),
          },
        });
      }
    },
  });

  function handleDelete(id: number) {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook({
        variables: {
          id,
        },
      });
    }
  }

  return (
    <Card p={4} marginTop={5}>
      <CardHeader flexWrap="wrap">
        <Heading size="xl">{book.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text pt={1}>{book.description}</Text>
      </CardBody>
      <CardFooter>
        <SimpleGrid columns={2} spacing={2}>
          <Button colorScheme="blue">Edit</Button>
          <Button onClick={() => handleDelete(book.id)}>Delete</Button>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};
