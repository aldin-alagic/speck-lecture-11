import React, { useContext } from 'react';
import Articles from './components/Articles';

function App() {
  const {isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <button onClick={handleAuth}>{isLoggedIn ? "Logout" : "Login"}</button>
      <Articles />
    </>
  );
}

export default App;
