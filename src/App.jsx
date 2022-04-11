import React, { useState } from "react";
const App = () => {
  let now = new Date().toLocaleTimeString();
  const [cTime, setcTime] = useState(now);

  const uTime = () => {
    now = new Date().toLocaleTimeString();
    setcTime(now);
  };

  setInterval(uTime, 1000);

  let newTime = new Date();
newTime = newTime.getHours()

let greet = " ";
if (newTime === 1 || newTime < 12) {
  greet = "good morning...!";
} else if (newTime === 12 || newTime < 16) {
  greet = "Good Afternoon...!";
} else if (newTime === 16 || newTime < 20) {
  greet = "Good Evening...!";
} else {
  greet = "Good Night...!";
}


  return (
    <>
      <h1>Hello World, {greet}</h1>
      <h1>{cTime}</h1>
    </>
  );
};
export default App;
