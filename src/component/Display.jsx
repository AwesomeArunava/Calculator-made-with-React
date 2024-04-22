const Display = ({ cValue }) => {
  // let [inputValue, setInputValue] = useState("");
  // setInputValue(cValue);
  // console.log(inputValue);
  return (
    <div className="d-flex justify-content-center mt-2">
      <input type="text" className="" value={cValue} readOnly placeholder="0" />
    </div>
  );
};

export default Display;
