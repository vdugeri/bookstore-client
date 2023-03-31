import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import { BookList } from "./pages/BookList";
import { Navbar } from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100vw"
        height="80vh"
      >
        <RouterProvider router={router} />
      </Flex>
    </Flex>
  );
}

export default App;
