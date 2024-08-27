/* eslint-disable */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Main from "./pages/Main";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";

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
        path: "/login",
        element: <Login />
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
    <div className="min-h-screen bg-white dark:bg-dark-black">
      <div className="w-full h-full">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
