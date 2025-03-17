import { Container, Stack } from "react-bootstrap";
const PageNotFoundPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "81vh",
      }}
    >
      <Stack className="justify-content-center align-items-center">
        <div style={{ fontSize: "5rem" }} className="d-flex flex-row fw-bolder">
          <p>4</p>
          <p>😭</p>
          <p>4</p>
        </div>
        <h4 className="fw-bolder">Oops! Page Not Be Found</h4>
        <p className="text-secondary">
          Sorry but the page you are looking for does not exist, have been
          removed, name changed or is temporarily unavailable
        </p>
      </Stack>
    </Container>
  );
};

export default PageNotFoundPage;
