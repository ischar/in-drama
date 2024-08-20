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
    <div className="w-screen h-screen bg-white dark:bg-dark-black items-center justify-center flex">
      <div className="w-[1280px] h-screen m-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
