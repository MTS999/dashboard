import React, { useEffect } from "react";
import Welcome from "../components/Dashboard/Welcome";
import UserData from "../components/Dashboard/UserData";

const Dashboard = () => {
  const start = performance.now();

  useEffect(() => {
    console.log(performance.now() - start);
  }, []);
  return (
    <>
      <Welcome />
      <UserData />
    </>
  );
};

export default Dashboard;
