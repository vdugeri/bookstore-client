import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader,
  ModalOverlay,
  Textarea
} from "@chakra-ui/react";

interface IBookFormProps {
  isOpen: boolean;
  onClose: () => void
}
export const BookForm: React.FC<IBookFormProps> = ({isOpen, onClose}: IBookFormProps) => {
  // const {onClose } = useDisclosure();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Book Name</FormLabel>
            <Input placeholder='Book name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Book Description</FormLabel>
            <Textarea placeholder='Book Description' />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}