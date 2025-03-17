import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
