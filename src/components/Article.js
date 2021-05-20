import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Article = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  return (
    <>
      <h1>Article title</h1>
      {isLoggedIn && <button>Edit</button>}
    </>
  );
};

export default Article;
