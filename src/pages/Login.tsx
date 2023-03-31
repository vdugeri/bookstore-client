import {
  Button,
  Container,
  defineStyle,
  defineStyleConfig,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export const Login: React.FC = () => {
  function handleSubmit() {}

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="50%"
      width="100%"
      direction="column"
    >
      <Heading size="md">Log In</Heading>
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
            Sign In
          </Button>
          <Text ml={2}>
            Don't have an account?
            <Link href="/signup" colorScheme="blue" color="blue">
              {" "}
              Sign Up
            </Link>
          </Text>
        </Flex>
      </FormControl>
    </Flex>
  );
};
