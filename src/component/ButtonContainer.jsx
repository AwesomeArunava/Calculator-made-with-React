let allButtonValue = [
  "C",
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "-",
  "7",
  "8",
  "9",
  "*",
  "/",
  "0",
  "=",
];
const ButtonContainer = ({ captureValue }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap m-4">
      {allButtonValue.map((item) => (
        <button
          key={item}
          className="w-25"
          style={{ width: "50px", height: "50px" }}
          onClick={() => captureValue(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
