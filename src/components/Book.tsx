import {Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text} from "@chakra-ui/react";
import {BookService} from "../api/BookService";

const bookService = new BookService();

export interface IBook {
  id: number;
  name: string;
  description: string;
}
interface IBookProps {
  book: IBook;
}

export const Book: React.FC<IBookProps>  = ({book}: IBookProps) =>  {
  async function handleDelete(id: number) {
    await bookService.deleteBook(id);
  }
  return (
    <Card p={4} marginTop={5} >
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
}