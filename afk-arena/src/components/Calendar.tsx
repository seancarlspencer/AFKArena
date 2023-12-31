import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStartDay, updateMonth, updateYear, updateDays } from '../actions/actions';
import Day from './Day';
import { start } from 'repl';

let dayMap = new Array(35).fill(0);
let monthTable = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Calendar = () => {
  const {startDayIndex, month, year, days} = useSelector((state: any) =>
        ({startDayIndex: state.calendar.startDayIndex,
        month: state.calendar.month,
        year: state.calendar.year,
        days: state.calendar.days}));

  const [printing, setPrinting] = useState(false);
  
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

    // componentDidMount equivalent
    useEffect(() => {
      console.log('Component mounted');
      // Additional logic on component mount
      let time = document.querySelector(`input[type="month"]`) as HTMLInputElement;
      time.valueAsDate = new Date();
      updateTime();
  
      // componentWillUnmount equivalent
      return () => {
        console.log('Component unmounted');
        // Cleanup logic before component unmount
      };
    }, []); // Empty dependency array to ensure the effect runs only once on mount
  
    // componentDidUpdate equivalent
    useEffect(() => {
      console.log('Component updated');
      // Additional logic on component update
    }, [days,printing]); // Run the effect only when 'count' changes

  const enablePrintingMode = () => {
    setPrinting(true);
  }

  const updateTime = () => {
    let time = document.querySelector(`input[type="month"]`) as HTMLInputElement;
    if(time){
      let dates = time.value.split("-");
      handleUpdateMonth(parseInt(dates[1]));
      handleUpdateYear(parseInt(dates[0]));
      const startDate = new Date(parseInt(dates[0]), parseInt(dates[1]) - 1, 1);
      console.log(startDate.toString());
      let startDateParsed = startDate.toString().split(" ")[0];
      let startDateParsedValue=0;
      switch(startDateParsed){
        case 'Sun':
          handleUpdateStartDay(0);
          break;
        case 'Mon':
          handleUpdateStartDay(1);
          startDateParsedValue=1;
          break;
        case 'Tue':
          handleUpdateStartDay(2);
          startDateParsedValue=2;
          break;
        case 'Wed':
          handleUpdateStartDay(3);
          startDateParsedValue=3;
          break;
        case 'Thu':
          handleUpdateStartDay(4);
          startDateParsedValue=4;
          break;
        case 'Fri':
          handleUpdateStartDay(5);
          startDateParsedValue=5;
          break;
        case 'Sat':
          handleUpdateStartDay(6);
          startDateParsedValue=6;
          break;
        default:
          break;
      }
      let daysParsed=0;
      switch (parseInt(dates[1])) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
          handleUpdateDays(31);
          daysParsed=31;
          break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
          handleUpdateDays(30);
          daysParsed=30;
          break;
        case 2: // February
          // Check for leap year (divisible by 4 but not divisible by 100 unless also divisible by 400)
          if ((parseInt(dates[0]) % 4 === 0 && parseInt(dates[0]) % 100 !== 0) || parseInt(dates[0]) % 400 === 0) {
            handleUpdateDays(29);
            daysParsed=29;
          } else {
            handleUpdateDays(28);
            daysParsed=28;
          }
          break;
        default:
          throw new Error('Invalid month');
    }
    console.log(daysParsed+startDateParsedValue);
    if(daysParsed+startDateParsedValue > 35){
      dayMap = new Array(42).fill(0);
    }
    else{
      dayMap = new Array(35).fill(0);
    }
  }
  };

  return (
    <div>
      <div className={`printing ${printing ? "hide-print" : ""}`}>
      <p>startDayIndex: {startDayIndex}</p>
      <p>month: {month}</p>
      <p>year: {year}</p>
      <p>days: {days}</p>

      <input type="month"></input>
      <button onClick={updateTime}>Confirm Date</button>
      <button onClick={enablePrintingMode}>Go To Print Page</button>
      </div>
      <div className="calendar-display-container">
        <div className="calendar-title">{monthTable[month-1]} {year}</div>
        <div className="calendar-description">Work Schedule</div>
        <div className="days-of-the-week">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div className="calendar-display">
          {dayMap.map((x,index)=>{
            if(index<startDayIndex || index>(days+startDayIndex-1)){
              return <Day
                empty={true}
                dayNumber={index}
                days={days}
                month={month}
                year={year}
              />
            }
            return <Day
            empty={false}
            dayNumber={index - startDayIndex + 1}
                days={days}
                month={month}
                year={year}
            />
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
