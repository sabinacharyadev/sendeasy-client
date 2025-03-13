import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DisplayCard from "../Components/EmailDisplayCard";
import NavBar from "../Components/NavBar";
import templates from "../Data/templates";
import Footer from "../Components/Footer";

const HomePage = ({ setSelectedTemplate }) => {
  const location = useLocation();
  const [categoryFilter, setCategoryFilter] = useState("popular");
  const [visibleCount, setVisibleCount] = useState(6);

  // If you are using location.state for navigation
  useEffect(() => {
    if (location.state && location.state.category) {
      setCategoryFilter(location.state.category);
    }
  }, [location.state]);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // Filter templates by category if a filter is active
  const filteredTemplates = categoryFilter
    ? templates.filter((template) => template.category === categoryFilter)
    : templates;

  return (
    <div className="homeContainer">
      <NavBar currentCategory={categoryFilter} />

      <div className="heroSection">
        <div>
          <h1>
            {categoryFilter === "festival" &&
              "Celebrate the Festivals with Stunning Email Templates 🎉"}
            {categoryFilter === "announcement" &&
              "Make Announcements That Grab Attention 🚀"}
            {!categoryFilter ||
              (categoryFilter === "popular" &&
                "Welcome to SendEasy! We make sending emails simple, fast, and stress-free")}
          </h1>
        </div>

        <div className="redText">
          <h4>
            {categoryFilter === "festival" &&
              "Explore seasonal templates to share joy, offers, and festive vibes!"}
            {categoryFilter === "announcement" &&
              "Launch products, share updates, and make impactful announcements!"}
            {!categoryFilter ||
              (categoryFilter === "popular" &&
                "We’ve got over 15,000+ emails waiting to be collected and shared with your client or team.")}
          </h4>
        </div>
        <div>Explore More</div>

        {/* <div>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#0077b6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Explore more
          </button>
        </div> */}
      </div>

      <div className="cardContainer">
        {filteredTemplates.slice(0, visibleCount).map((template) => (
          <DisplayCard
            key={template.id}
            template={template}
            setSelectedTemplate={setSelectedTemplate}
          />
        ))}
      </div>

      {visibleCount < filteredTemplates.length && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button
            onClick={handleShowMore}
            style={{
              padding: "12px 24px",
              backgroundColor: "#0077b6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Show More
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
