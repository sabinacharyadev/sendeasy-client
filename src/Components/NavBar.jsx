import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import sendEasyImage from "../assets/sendeasy1.png";

const NavBar = ({ currentCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/", { state: { category } });
  };

  const getNavClass = (category) =>
    currentCategory === category ? "nav-link active" : "nav-link";

  return (
    <div className="nav-container">
      <div className="logo">
        {/* <img src={sendEasyImage} alt="Send Easy" /> */}
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
      <div>
        <SearchBar propPlaceholder={"Search by keyword or category"} />
      </div>
    </div>
  );
};

export default NavBar;
