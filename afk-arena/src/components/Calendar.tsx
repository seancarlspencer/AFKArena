import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStartDay, updateMonth, updateYear, updateDays } from '../actions/actions';
import Day from './Day';

const dayMap = new Array(35).fill(0);

const Calendar = () => {
  const {startDayIndex, month, year, days} = useSelector((state: any) =>
        ({startDayIndex: state.calendar.startDayIndex,
        month: state.calendar.month,
        year: state.calendar.year,
        days: state.calendar.days}));
  const dispatch = useDispatch();

  const handleUpdateStartDay = (num: Number) => {
    dispatch(updateStartDay(num));
  };

  const handleUpdateMonth = (num: Number) => {
    dispatch(updateMonth(num));
  };

  const handleUpdateYear = (num: Number) => {
    dispatch(updateYear(num));
  };

  const handleUpdateDays = (num: Number) => {
    dispatch(updateDays(num));
  };

  const updateTime = () => {
    let time = document.querySelector(`input[type="month"]`) as HTMLInputElement;
    if(time){
      let dates = time.value.split("-");
      handleUpdateStartDay(0);
      handleUpdateMonth(parseInt(dates[1]));
      handleUpdateYear(parseInt(dates[0]));
      handleUpdateDays(30);
    }
  };

  return (
    <div>
      <p>startDayIndex: {startDayIndex}</p>
      <p>month: {month}</p>
      <p>year: {year}</p>
      <p>days: {days}</p>

      <input type="month"></input>
      <button onClick={updateTime}>Confirm Date</button>
      <div className="calendar-display">
        {dayMap.map((x)=>{
          console.log("Hello");
          return <Day/>
        })}
      </div>
    </div>
  );
};

export default Calendar;
