import React, { useState } from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch, connect  } from 'react-redux';

const Day = () => {
  const [toggled, setToggled] = useState(true);

  const handletoggle = () => {
    setToggled((prevToggled) => !prevToggled)
    console.log("Handling...");
  };

  return (
    <div onClick={handletoggle}>
      <p>Click Me</p>
      <p>Current Value: {toggled ? "True" : "False"} </p>
    </div>
  );
};

export default Day;
