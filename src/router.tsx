import { Login } from "./pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { BookList } from "./pages/BookList";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/books",
    element: <BookList />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
