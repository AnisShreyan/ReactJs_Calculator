import { useState } from "react";
import "./App.css";

function App() {
  const [reslt, setReslt] = useState("");

  // function NumTrigger(x) {
  //   setNum(num + x);
  // }

  // function Cancel() {
  //   setNum("");
  // }

  const [num_1, setNum_1] = useState("");
  const [num_2, setNum_2] = useState("");

  const [operation, setOperation] = useState(undefined);

  const NumTrigger = (x) => {
    if (operation === undefined) {
      setNum_1(num_1 + x);
    } else if (operation !== undefined) {
      setNum_2(num_2 + x);
    }
  };

  const OpsTrigger = (x) => {
    if (num_1 !== "") {
      setOperation(x);
    }
  };

  const PointTrigger = () => {
    if (operation === undefined) {
      if (num_1 !== "") {
        if (num_1.includes(".") === false) {
          NumTrigger(".");
        }
      }
    } else if (operation !== undefined) {
      if (num_2 !== "") {
        if (num_2.includes(".") === false) {
          NumTrigger(".");
        }
      }
    }
  };

  const Calculate = () => {
    const num1 = parseFloat(num_1);
    const num2 = parseFloat(num_2);

    switch (operation) {
      case `+`:
        setReslt((num1 + num2).toFixed(2));
        break;
      case `-`:
        setReslt((num1 - num2).toFixed(2));
        break;
      case `÷`:
        setReslt((num1 / num2).toFixed(2));
        break;
      case `x`:
        setReslt((num1 * num2).toFixed(2));
        break;
      case `%`:
        setReslt(((num1 * num2) / 100).toFixed(4));
        break;

      default:
        break;
    }
  };

  const Clear = () => {
    setNum_1("");
    setNum_2("");
    setReslt("");
    setOperation(undefined);
  };
  return (
    <div className="App">
      <div className="cal-promt">
        <span className="reslt-output output">{reslt}</span>
        <span className="cal-output output">
          {num_1}
          {operation}
          {num_2}
        </span>
      </div>
      <div className="input">
        <button className="input-btn clear-btn" onClick={Clear}>
          C
        </button>
        {/* <button className="input-btn">+/-</button> */}
        <button className="input-btn" onClick={() => OpsTrigger(`%`)}>
          %
        </button>
        <button className="input-btn" onClick={() => OpsTrigger(`÷`)}>
          {`÷`}
        </button>
        <button className="input-btn" onClick={() => NumTrigger("7")}>
          7
        </button>
        <button className="input-btn" onClick={() => NumTrigger("8")}>
          8
        </button>
        <button className="input-btn" onClick={() => NumTrigger("9")}>
          9
        </button>
        <button className="input-btn" onClick={() => OpsTrigger(`x`)}>
          x
        </button>
        <button className="input-btn" onClick={() => NumTrigger("4")}>
          4
        </button>
        <button className="input-btn" onClick={() => NumTrigger("5")}>
          5
        </button>
        <button className="input-btn" onClick={() => NumTrigger("5")}>
          6
        </button>
        <button className="input-btn" onClick={() => OpsTrigger(`-`)}>
          -
        </button>
        <button className="input-btn" onClick={() => NumTrigger("1")}>
          1
        </button>
        <button className="input-btn" onClick={() => NumTrigger("2")}>
          2
        </button>
        <button className="input-btn" onClick={() => NumTrigger("3")}>
          3
        </button>
        <button className="input-btn" onClick={() => OpsTrigger(`+`)}>
          +
        </button>
        <button className="input-btn" onClick={() => NumTrigger("0")}>
          0
        </button>
        <button className="input-btn" onClick={() => PointTrigger()}>
          .
        </button>
        <button className="input-btn calcualte-btn" onClick={Calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
