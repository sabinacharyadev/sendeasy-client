import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Stack } from "react-bootstrap";
//import SearchBar from "./SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("");
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    navigate("/", { state: { category } });
  };

  const getNavClass = (category) =>
    currentCategory === category ? "nav-link active text-light" : "nav-link";

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container className="d-flex flex-column align-items-start flex-sm-row align-items-sm-center justify-content-sm-between">
        <Navbar.Brand
          style={{
            width: "10rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleCategoryClick("popular")}
        >
          SEND EASY
        </Navbar.Brand>
        <Nav>
          {/* Popular */}
          <Navbar.Text>
            <div
              className={getNavClass("popular")}
              onClick={() => handleCategoryClick("popular")}
            >
              Popular
            </div>
          </Navbar.Text>
          {/* Festival */}
          <Navbar.Text>
            <div
              className={getNavClass("festival")}
              onClick={() => handleCategoryClick("festival")}
            >
              Festival
            </div>
          </Navbar.Text>
          {/* Announcement */}
          <Navbar.Text>
            <div
              className={getNavClass("announcement")}
              onClick={() => handleCategoryClick("announcement")}
            >
              Announcement
            </div>
          </Navbar.Text>
          {/* Search */}
          {/* <div>
      //     <SearchBar propPlaceholder={"Search by keyword or category"} />
      //   </div> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
