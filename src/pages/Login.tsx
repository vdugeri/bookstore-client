import { useAuth0 } from "@auth0/auth0-react";
import { Button, Flex, Link } from "@chakra-ui/react";

export const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="50%"
      width="100%"
      direction="column"
    >
      {!isAuthenticated && (
        <Flex alignItems="center">
          <Button
            alignSelf="flex-end"
            colorScheme="blue"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </Button>
        </Flex>
      )}

      {isAuthenticated && <Link href="/books">Books</Link>}
    </Flex>
  );
};
