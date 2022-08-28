import React, { useEffect, useLayoutEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const { data } = useUser();

  const logindata = JSON.parse(localStorage.getItem("loginData") || "");
  console.log(logindata);

  // function isLocalStorageAvailable() {
  //   var test = "loginData";
  //   try {
  //     localStorage.setItem(test, test);
  //     localStorage.removeItem(test);
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // }

//   useEffect(() => {
// if (isLocalStorageAvailable()) {
//   alert("local storage go");
// } else {
//    alert("local storage not defined");
// }
//   });

  const close = () => {
   localStorage.clear();
   navigate("/");
  }

  return (
    <>
      <div className="container">
        <h4> Contenido del context:</h4>
        <p> {logindata.email}</p>
        <p> {logindata.password}</p>
      </div>

      <div>
        <button onClick={close}>cerrar</button>
      </div>
    </>
  );
};

export default Home;
