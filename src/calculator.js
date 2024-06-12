// src/Calculator.js
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [inputs, setInputs] = useState(['']);
  const [result, setResult] = useState(null);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const addInputField = () => {
    setInputs([...inputs, '']);
  };

  const calculateResult = () => {
    const expression = inputs.join('');
    try {
      const evalResult = evaluate(expression);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };
  const reset = () =>{
    setInputs([''])
    setResult(null)
  };

  return (
    <div>
      <h1>BODMAS</h1>
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder="Enter expression part"
        />
      ))}
      <button onClick={addInputField}>Add Input Field</button>
      <button onClick={calculateResult}>Calculate</button>
      <button onClick={reset}>Reset</button>
      <div>
        {result !== null && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
};

export default Calculator;
