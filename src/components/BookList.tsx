import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { BookForm } from "./BookForm";
import { BookRequest, BookResponse } from "../types/BookRequest";
import { BookItem } from "./BookItem";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOOK, GET_BOOKS } from "./queries";

export const BookList: React.FC = () => {
  const { data, loading, error } = useQuery<{ books: BookResponse[] }>(
    GET_BOOKS
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bookList = data?.books.map((book) => (
    <BookItem key={book.id} book={book} />
  ));

  if (loading) {
    return (
      <Center width="100vw" height="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Flex direction="column">
      <Spacer />
      <Button
        alignSelf="end"
        onClick={() => setIsOpen(true)}
        colorScheme="blue"
      >
        Add Book
      </Button>
      <SimpleGrid columns={3} spacing={5}>
        {bookList}
      </SimpleGrid>
      <BookForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Flex>
  );
};
