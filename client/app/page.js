"use client";
import LoginLogout from "./components/LoginLogout";
import Container from "./components/Container";

const page = () => {
  return (
    <div className="main">
      <LoginLogout />
      <Container />
    </div>
  );
};
export default page;
