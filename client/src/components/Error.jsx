import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Headnavs from "./Headnavs";

const Error = () => {
    const err = useRouteError();
    
  return (
    <>
    <Header />
    <Headnavs />
      <div className="container text-center bg-white rounded mt-5 p-5">
        <h1>Error Code:- {err.status} !</h1>
        <h2>Something went wrong !</h2>
        <h3>{err.data}</h3>
      </div>
    </>
  );
};

export default Error;
