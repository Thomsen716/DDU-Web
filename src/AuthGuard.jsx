import { Navigate } from "react-router";
import { useAuth } from "./Auth";

function AuthGuard({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/logind" replace />;

  return <>{children}</>;
}

export default AuthGuard;
