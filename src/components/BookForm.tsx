import { useMutation } from "@apollo/client";
import {
  Button,
  FormControl,
  FormLabel,
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
import { ADD_BOOK, GET_BOOKS } from "./queries";

interface BookFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookForm: React.FC<BookFormProps> = ({
  isOpen,
  onClose,
}: BookFormProps) => {
  const [book, setBook] = useState<BookRequest>({
    name: "",
    description: "",
  });

  const [addBook] = useMutation(ADD_BOOK, {
    update(cache, { data: { addBook } }) {
      const existingBooks = cache.readQuery<{ books: BookResponse[] }>({
        query: GET_BOOKS,
      });
      if (existingBooks) {
        cache.writeQuery({
          query: GET_BOOKS,
          data: { books: [...existingBooks.books, addBook] },
        });
      }
    },
  });

  async function handleSubmit() {
    try {
      await addBook({
        variables: { ...book },
      });
      onClose();
      setBook({});
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
                setBook({ ...book, name: event.target.value })
              }
              value={book.name}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Book Description</FormLabel>
            <Textarea
              placeholder="Book Description"
              name="description"
              onChange={(event) =>
                setBook({ ...book, description: event.target.value })
              }
              value={book.description}
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
