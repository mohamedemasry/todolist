interface props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}
const button = ({ children, onClick, color = "primary" }: props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => onClick()}
        style={{ margin: "5px" }}
      >
        {children}
      </button>
    </>
  );
};

export default button;
