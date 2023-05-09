import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/error/ErrorPage";
import Characters from "../components/characters/Characters";
import Comics from "../components/comics/Comics";
import ComicsLink from "../components/comics/comicsLink/ComicsLink";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "charactersBlock",
        element: <Characters />,
      },
      {
        path: "comicsBlock/*",
        element: <Comics />,
      },
      {
        path: "comicsBlock/comicsLink",
        element: <ComicsLink />,
      },
    ],
  },
]);
