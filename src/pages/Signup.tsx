import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export const Signup: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="50%"
      width="100%"
      direction="column"
    >
      <Heading size="md">Sign Up</Heading>
      <FormControl width="40%" mt="40px">
        <FormLabel>Email</FormLabel>
        <Input type="text" name="email" placeholder="email" />
      </FormControl>
      <FormControl mt={4} width="40%">
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" placeholder="password" />
      </FormControl>
      <FormControl mt={4} width="40%">
        <Flex alignItems="center">
          <Button alignSelf="flex-end" colorScheme="blue">
            Sign Up
          </Button>
          <Text ml={2}>
            Already have an account?
            <Link href="/" colorScheme="blue" color="blue">
              {" "}
              Sign In
            </Link>
          </Text>
        </Flex>
      </FormControl>
    </Flex>
  );
};
