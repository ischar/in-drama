/* eslint-disable */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { KEY } from "./utils/config";
import { Provider } from 'react-redux';
import RootLayout from "./pages/Root";
import Main from "./pages/Main";
import SearchResult from "./pages/SearchResult";
import store from "./store/index";

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
        <Provider store={store}>
          <GoogleOAuthProvider clientId={KEY.GOOGLE}>
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
        </Provider>
      </div>
    </div>
  );
}

export default App;
