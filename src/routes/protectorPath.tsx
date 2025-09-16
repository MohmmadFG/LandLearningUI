import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export default function ProtectedRoute({
  isAuth,
  children,
}: {
  isAuth: boolean;
  children: ReactNode;
}) {
  if (isAuth) return <>{children}</>;
  return <Navigate to={"/login"} replace />;
}
