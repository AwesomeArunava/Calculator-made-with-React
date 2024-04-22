import Container from "./component/Container";
import Display from "./component/Display";
import ButtonContainer from "./component/ButtonContainer";
import { useState } from "react";

const App = () => {
  let argu = "";
  let [v, setV] = useState("");
  const value = (inputValue) => {
    if (inputValue == "=") {
      if (eval(v) == "0") {
        setV("");
      } else {
        setV(eval(v));
      }
    } else if (inputValue == "C") {
      setV("");
    } else {
      argu = v + inputValue;
      setV(argu);
    }
  };
  // console.log(value());
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className="text-center d-flex justify-content-center">
        <h1 className="text-center">Calculator</h1>
        <Display cValue={v}></Display>
        <ButtonContainer captureValue={value} />
      </Container>
    </div>
  );
};

export default App;
