import { createBrowserRouter } from "react-router-dom";
import fetchFilms from "../services/fetchFilms";

import Layout from "../pages/Layout";
import Films from "../pages/Films";
import Film from "../pages/Film";
import fetchFilm from "../services/fetchFilm";

const router = createBrowserRouter([
  {
    path: "/",
    loader: fetchFilms,
    element: <Layout />,
    id: "films",
    children: [
      {
        path: "films",
        element: <Films />,
      },
			{
				path: "films/:id",
				loader: fetchFilm,
				element: <Film />,
			},
    ],
  },
]);

export default router;
