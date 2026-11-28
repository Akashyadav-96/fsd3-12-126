import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  function Add1Click() {
    setCount(count + 1);
    console.log("Button clicked:", count);
  }
  function Sub1Click() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Click on the button</p>
      <h2>Button Clicked :{count}</h2>
      <button onClick={Add1Click}>Add 1</button>
      <button onClick={Sub1Click}>Sub 1</button>
    </div>
  );
};
export default MyButton;
