import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";

const HOC = ({ children, headerTitle = "Nongsa" }) => {
  // another logic

  return (
    <>
      <Helmet>
        <title>{headerTitle}</title>
      </Helmet>
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </>
  );
};

export default HOC;
