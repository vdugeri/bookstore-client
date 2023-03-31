import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  const { logout, user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Box p="4" borderBottom="1px solid #ccc">
      <Flex alignItems="center" justifyContent="space-between">
        <Text alignSelf="flex-end" cursor="pointer">
          <Link href="/">BookMan</Link>
        </Text>
        {isAuthenticated && (
          <Flex alignItems="center">
            <Link href="/books" mr={4}>
              Books
            </Link>
            <Popover isLazy>
              <PopoverTrigger>
                <Avatar name={user?.name} src={user?.picture} />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  <Box width="100%">
                    <Link href="/books">Books</Link>
                  </Box>
                  <Box width="100%" mt={2}>
                    <Text>
                      <Link href="#" onClick={() => logout()}>
                        Sign Out
                      </Link>
                    </Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        )}
        {!isAuthenticated && (
          <Button
            alignSelf="flex-end"
            colorScheme="blue"
            onClick={() => loginWithRedirect()}
          >
            Sign In
          </Button>
        )}
      </Flex>
    </Box>
  );
};
