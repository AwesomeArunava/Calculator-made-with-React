import style from "./Container.module.css";
const Container = (props) => {
  return (
    <div
      className="d-flex justify-content-center border border-primary row"
      style={{ width: "300px", height: "auto" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
