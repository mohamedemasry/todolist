import "../App.css"; // Import your CSS file for Card styling
import IconButton from "./IconButton";

interface Props {
  children: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

const Card = ({ children, completed, onComplete, onDelete }: Props) => {
  const handleComplete = () => {
    onComplete(); // Callback to parent component
  };

  const handleDelete = () => {
    onDelete(); // Callback to parent component for delete
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
            checked={completed}
            id="flexCheckDefault"
            style={{ alignSelf: "right" }}
            onChange={handleComplete}
          />
          <div className="delete-button">
            <IconButton onClick={handleDelete} />
          </div>
        </div>
      </div>
    </center>
  );
};

export default Card;
