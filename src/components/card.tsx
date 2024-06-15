import { useState } from "react";
import "../App.css"; // Import your CSS file for Card styling

interface Props {
  children: string;
  onComplete: () => void;
}

const Card = ({ children, onComplete }: Props) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed); // Toggle completed state
    onComplete(); // Callback to parent component
  };

  const cardStyle = {
    width: "60rem",
    display: "flex",
    margin: "10px",
    opacity: completed ? 0.5 : 1,
    transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
    transform: completed ? "translateY(50px)" : "translateY(0)",
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <center>
      <div className="card" style={cardStyle}>
        <div className="card-body" style={{ display: "flex" }}>
          <h5 style={{ paddingRight: "10px" }}>{children}</h5>
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            style={{ alignSelf: "right" }}
            onChange={handleComplete}
          />
        </div>
      </div>
    </center>
  );
};

export default Card;
