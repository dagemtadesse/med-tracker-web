import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfirmationProvider } from "./contexts/ConfirmationContext";
import EditProfile from "./pages/EditProfile";

import Home from "./pages/Home";
import Login from "./pages/login";
import ResetPassword from "./pages/ResetPassword";
import Start from "./pages/Start";
import TermsAndConditions from "./pages/TermsAndConditions";

export const routes = [
  { path: "/", element: <Start /> },
  { path: "/home", element: <Home /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/login", element: <Login /> },
  { path: "/edit-profile", element: <EditProfile /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
];

function App() {
  return (
    <ConfirmationProvider>
      <RouterProvider router={createBrowserRouter(routes)} />Í
    </ConfirmationProvider>
  );
}

export default App;
