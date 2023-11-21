import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuth } from './AuthConext';
function ProtectedRoute({ children }) {
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;