import  { useState } from 'react';

function Calculator() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(0);

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    if (name === 'a') {
      setA(Number(value));
    } else if (name === 'b') {
      setB(Number(value));
    }
  };

  const handleOperationChange = (event:any) => {
    setOperation(event.target.value);
  };

  const calculateResult = () => {
    let calculatedResult = 0;
    if (operation === 'add') {
      calculatedResult = a + b;
    } else if (operation === 'subtract') {
      calculatedResult = a - b;
    } else if (operation === 'multiply') {
      calculatedResult = a * b;
    } else if (operation === 'divide') {
      calculatedResult = a / b;
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <label>
        Number a:
        <input type="number" name="a" value={a} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Number b:
        <input type="number" name="b" value={b} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Operation:
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Cộng</option>
          <option value="subtract">Trừ</option>
          <option value="multiply">Nhân</option>
          <option value="divide">Chia</option>
        </select>
      </label>
      <br />
      <button onClick={calculateResult}>Calculate</button>
      <br />
      <label>
        Result: {result}
      </label>
    </div>
  );
}

export default Calculator;
