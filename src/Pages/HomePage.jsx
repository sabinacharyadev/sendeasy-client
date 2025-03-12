import DisplayCard from "../Components/EmailDisplayCard";
import NavBar from "../Components/NavBar";
import templates from "../Data/templates";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="heroSection">
        <div>
          <h1>
            Join the 169k+ email marketers already <br /> using Really Good
            Emails
          </h1>
        </div>
        <div className="redText">
          <h4>
            We’ve got over 15,000+ emails waiting
            <br /> to be collected and <br />
            shared with your client or team.
          </h4>
        </div>
        <div>Explore more</div>
      </div>
      <div className="cardContainer">
        {templates.map((template) => (
          <DisplayCard key={templates.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
