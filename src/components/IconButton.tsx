import "bootstrap-icons/font/bootstrap-icons.css";

interface props {
  onClick: () => void;
}

const IconButton = ({ onClick }: props) => {
  return (
    <button onClick={() => onClick()} className="btn btn-danger">
      <i className="bi bi-trash"></i>
    </button>
  );
};

export default IconButton;
