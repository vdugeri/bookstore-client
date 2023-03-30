import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { BookRequest, BookResponse } from "../types/BookRequest";
import { BookForm } from "./BookForm";
import { EDIT_BOOK, GET_BOOKS } from "./queries";

interface EditBookProps {
  book: BookResponse;
  isOpen: boolean;
  onClose: () => void;
}

export const EditBook: React.FC<EditBookProps> = ({
  book,
  isOpen,
  onClose,
}: EditBookProps) => {
  const [editBook, setEditBook] = useState<BookRequest>({
    id: book.id,
    name: book.name,
    description: book.description,
  });

  const [updateBook] = useMutation(EDIT_BOOK, {
    update(cache, { data: { editBook } }) {
      const existingBooks = cache.readQuery<{ books: BookResponse[] }>({
        query: GET_BOOKS,
      });
      if (existingBooks) {
        cache.writeQuery({
          query: GET_BOOKS,
          data: { books: updateBooks(existingBooks.books, editBook) },
        });
      }
    },
  });

  function updateBooks(
    books: BookResponse[],
    editedBook: BookResponse
  ): BookResponse[] {
    const filteredBooks = books.filter((book) => book.id !== editedBook.id);
    return [...filteredBooks, editedBook]
  }

  async function handleSubmit() {
    try {
      await updateBook({
        variables: { ...editBook },
      });
      onClose();
      setEditBook({});
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Book Name</FormLabel>
            <Input
              placeholder="Book name"
              name="name"
              onChange={(event) =>
                setEditBook({ ...editBook, name: event.target.value })
              }
              value={editBook.name}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Book Description</FormLabel>
            <Textarea
              placeholder="Book Description"
              name="description"
              onChange={(event) =>
                setEditBook({ ...editBook, description: event.target.value })
              }
              value={editBook.description}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
