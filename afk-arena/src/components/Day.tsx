import React, { useState } from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch, connect  } from 'react-redux';

interface DayProps{
  empty: boolean,
  dayNumber: Number
}

const Day: React.FC<DayProps> = ({empty,dayNumber}) => {
  const [toggled, setToggled] = useState(false);

  const handletoggle = () => {
    setToggled((prevToggled) => !prevToggled)
    console.log("Handling...");
  };

  return (empty ?
    <div className={`day-display`}>
    </div>
    :
    <div className={`day-display${toggled? " toggled":""}`} onClick={handletoggle}>
      <div className="day-number">{dayNumber.toString()}</div>
    </div> 
  );
};

export default Day;
