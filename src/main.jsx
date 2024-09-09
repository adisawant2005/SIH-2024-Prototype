import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  Login,
  Signup,
  AccountPage,
  FAQs,
  About,
  CustomerCare,
  Services,
  Team,
  Privacy,
  ContactUs,
  TermsAndConditions,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/accountpage",
        element: <AccountPage />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/customercare",
        element: <CustomerCare />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
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
