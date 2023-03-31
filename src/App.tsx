import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessTokenSilently();
      localStorage.setItem("token", token);
    };

    if (isAuthenticated) {
      fetchToken().catch((error) => console.log(error));
    }
  }, [user?.email]);

  return (
    <Flex direction="column">
      <Navbar />
      <Flex alignItems="center" justifyContent="center" width="100vw">
        <RouterProvider router={router} />
      </Flex>
    </Flex>
  );
}

export default App;
