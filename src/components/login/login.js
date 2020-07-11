import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="login-button">
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>LOG IN</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>LOG OUT</button>}
    </div>
  );
};

export default LoginButton;