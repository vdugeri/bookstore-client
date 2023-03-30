import React, {useState} from "react";
import { Button, Flex, SimpleGrid, Spacer} from "@chakra-ui/react";
import {Book, IBook} from "./Book";
import {BookForm} from "./BookForm";


export const BookList: React.FC = () => {
  const books: IBook[] = [
    {
      id: 1,
      name: 'Things Fall Apart',
      "description": "An African Tale"
    },
    {
      id: 2,
      name: 'The Arrow of God',
      "description": "An African Tale"
    },
    {
      id: 3,
      name: 'Weep Not Child',
      "description": "An African Tale"
    },
    {
      id: 4,
      name: 'An African Night\'s Entertainment',
      "description": "An African Tale"
    }
  ]

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bookList = books.map(book => (
    <Book key={book.id} book={book}/>
  ));

  return (
    <Flex direction="column">
      <Spacer/>
      <Button alignSelf="end" onClick={() => setIsOpen(true)} colorScheme="blue">Add Book</Button>
      <SimpleGrid columns={3} spacing={5}>
        {bookList}
      </SimpleGrid>
      <BookForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Flex>


  )
}