import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { ConfirmationProvider } from "./contexts/ConfirmationContext";
import { DocumentContextProvider } from "./contexts/DocumentContext";
import { UserProvider } from "./contexts/UserContext";

import Home from "./pages/Home";
import Login from "./pages/login";
import ResetPassword from "./pages/ResetPassword";
import Start from "./pages/Start";
import TermsAndConditions from "./pages/TermsAndConditions";
import EditProfile from "./pages/EditProfile";
import InformationProvider from "./contexts/InformationContext";
import SignUp from "./pages/signup";

const GuardRoute = ({ Page }: { Page: JSX.Element }) => {
  const loggedIn = !!localStorage.getItem("token");
  return loggedIn ? Page : <Navigate to="/" />;
};

const logout = () => localStorage.removeItem("token");

export const routes = [
  { path: "/", element: <Start /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/reset-password", element: <ResetPassword /> },
  {
    path: "/home",
    element: <GuardRoute Page={<Home logoutHandler={logout} />} />,
  },
  { path: "/edit-profile", element: <GuardRoute Page={<EditProfile />} /> },
  { path: "*", element: <Start /> },
];

function App({router}: {router?: any}) {
  return (
    <UserProvider>
      <InformationProvider>
        <DocumentContextProvider>
          <ConfirmationProvider>
            <RouterProvider router={router ?? createBrowserRouter(routes)} />
          </ConfirmationProvider>
        </DocumentContextProvider>
      </InformationProvider>
    </UserProvider>
  );
}

export default App;
