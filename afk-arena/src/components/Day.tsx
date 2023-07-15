import React, { useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { useSelector, useDispatch, connect  } from 'react-redux';

interface DayProps{
  empty: boolean,
  dayNumber: Number
  days:Number
  month:Number
  year:Number
}

const Day: React.FC<DayProps> = ({empty,dayNumber,days,month,year}) => {
  const [toggled, setToggled] = useState(false);

  const handletoggle = () => {
    setToggled((prevToggled) => !prevToggled)
    console.log("Handling...");
  };

  useEffect(() => {
    // Additional logic on component update
    if(toggled){
      setToggled(false);
    }
  }, [days,month,year]); // Run the effect only when 'count' changes

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
