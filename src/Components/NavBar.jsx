import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo"></div>
      <div>Popular</div>
      <div>Festival</div>
      <div>
        <SearchBar propPlaceholder={"Search by keyword or categoty"} />
      </div>
    </div>
  );
};

export default NavBar;
