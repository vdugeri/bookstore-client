import { Box, Flex, Text } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  return (
    <Box p={4} borderBottom="1px solid #ccc">
      <Flex alignItems="center">
        <Text alignSelf="flex-end" cursor="pointer">
          BookMan
        </Text>
      </Flex>
    </Box>
  );
};
