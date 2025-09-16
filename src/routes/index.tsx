import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContinerLogin from "../features/login/components/ContinerLogin";
import ProtectedRoute from "./protectorPath";

export const RouterPath = createBrowserRouter([
  {
    path: "/",

    element: (
      <ProtectedRoute isAuth={true}>
        <App />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <ContinerLogin /> },
]);
