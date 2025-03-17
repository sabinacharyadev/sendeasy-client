import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import SearchBar from "./SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("");
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    navigate("/", { state: { category } });
  };

  const getNavClass = (category) =>
    currentCategory === category ? "nav-link active" : "nav-link";

  return (
    <div className="nav-container d-flex align-content-center justify-items-between">
      <div
        onClick={() => handleCategoryClick("popular")}
        className="logo"
        style={{ width: "10rem", fontSize: "1.1rem", cursor: "pointer" }}
      >
        <p className="m-3">
          <b>SEND EASY</b>
        </p>
        {/* <Image
          src={sendEasyImage}
          style={{
            maxHeight: "5rem",
            maxWidth: "15rem",
            marginLeft: "-2rem",
            marginTop: "-1rem",
          }}
          alt="Send Easy"
        /> */}
      </div>

      {/* Popular */}
      <div
        className={getNavClass("popular")}
        onClick={() => handleCategoryClick("popular")}
      >
        Popular
      </div>

      {/* Festival */}
      <div
        className={getNavClass("festival")}
        onClick={() => handleCategoryClick("festival")}
      >
        Festival
      </div>

      {/* Announcement */}
      <div
        className={getNavClass("announcement")}
        onClick={() => handleCategoryClick("announcement")}
      >
        Announcement
      </div>

      {/* Search */}
      {/* <div>
        <SearchBar propPlaceholder={"Search by keyword or category"} />
      </div> */}
    </div>
  );
};

export default NavBar;
