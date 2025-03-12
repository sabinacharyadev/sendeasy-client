import SearchBar from "./SearchBar";
import sendEasyImage from "../assets/sendeasy1.png";
import { Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Image
          style={{
            height: "8rem",
            width: "15rem",
            marginTop: "-2rem",
            marginLeft: "-2rem",
          }}
          src={sendEasyImage}
        />
      </div>

      <div>Popular</div>
      <div>Festival</div>
      <div>Announcement</div>

      <div>
        <SearchBar propPlaceholder={"Search by keyword or category"} />
      </div>
    </div>
  );
};

export default NavBar;
