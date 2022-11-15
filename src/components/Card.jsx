const Card = ({ children }) => {
  return (
    <div
      style={{
        borderStyle: "solid",
        padding: "15px",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "20px",
        height: "220px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
