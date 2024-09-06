/* eslint-disable */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Main from "./pages/Main";
import SearchResult from "./pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/location/:dramaName",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-full bg-white dark:bg-dark-black">
      <div className="w-full h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
