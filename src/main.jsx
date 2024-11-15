import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Main from "./components/Main.jsx";
import AllProducts from "./PAGES/AllProducts.jsx";
import { Provider } from "react-redux";
import store from "./REDUX/Store/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      // {
      //   path: "/login",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Login />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/signup",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <Signup />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/edit-post/:slug",
      //   element: (
      //     <AuthLayout authentication>
      //       <EditPost />
      //     </AuthLayout>
      //   ),
      // },
      // {
      //   path: "/post/:slug",
      //   Component: Post,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
