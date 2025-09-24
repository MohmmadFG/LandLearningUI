import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../features/login/page/LoginPage";
import ProtectedRoute from "./protectorPath";
import RegisterPage from "@/features/Register/page/RegisterPage";
import EmailConfirmationPage from "@/features/Confirm/pages/ConfirmEmailPage";
import ResetPasswordPage from "@/features/login/page/ResetPasswordPage";
export const RouterPath = createBrowserRouter([
  {
    path: "/",

    element: (
      <ProtectedRoute isAuth={true}>
        <App />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/email/confirm", element: <EmailConfirmationPage /> },
  { path: "/password/reset", element: <ResetPasswordPage /> },
]);
